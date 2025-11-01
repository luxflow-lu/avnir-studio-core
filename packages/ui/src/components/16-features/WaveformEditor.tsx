import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface WaveformEditorProps {
  audioBuffer: Float32Array;
  sampleRate: number;
  duration: number;
  onTrimChange?: (startSec: number, endSec: number) => void;
  onTrim?: () => void;
  onCancel?: () => void;
  className?: string;
}

export const WaveformEditor = React.forwardRef<HTMLDivElement, WaveformEditorProps>(
  ({ audioBuffer, sampleRate, duration, onTrimChange, onTrim, onCancel, className }, ref) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const audioContextRef = React.useRef<AudioContext | null>(null);
    const sourceRef = React.useRef<AudioBufferSourceNode | null>(null);
    const [startSec, setStartSec] = React.useState(0);
    const [endSec, setEndSec] = React.useState(duration);
    const [isDraggingStart, setIsDraggingStart] = React.useState(false);
    const [isDraggingEnd, setIsDraggingEnd] = React.useState(false);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [zoom, setZoom] = React.useState(1);

    // Dessiner la waveform
    React.useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const width = canvas.width;
      const height = canvas.height;

      // Clear
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect(0, 0, width, height);

      // Calculer les samples par pixel avec zoom
      const samplesPerPixel = Math.floor(audioBuffer.length / (width * zoom));

      // Dessiner la waveform
      ctx.strokeStyle = "#00d9ff";
      ctx.lineWidth = 1;
      ctx.beginPath();

      for (let x = 0; x < width; x++) {
        const start = x * samplesPerPixel;
        const end = start + samplesPerPixel;
        let min = 1;
        let max = -1;

        for (let i = start; i < end && i < audioBuffer.length; i++) {
          const sample = audioBuffer[i] ?? 0;
          if (sample < min) min = sample;
          if (sample > max) max = sample;
        }

        const yMin = ((1 - min) / 2) * height;
        const yMax = ((1 - max) / 2) * height;

        if (x === 0) {
          ctx.moveTo(x, yMin);
        } else {
          ctx.lineTo(x, yMin);
        }
        ctx.lineTo(x, yMax);
      }

      ctx.stroke();

      // Dessiner les curseurs
      const startX = (startSec / duration) * width;
      const endX = (endSec / duration) * width;

      // Zone sélectionnée
      ctx.fillStyle = "rgba(0, 217, 255, 0.1)";
      ctx.fillRect(startX, 0, endX - startX, height);

      // Curseur début
      ctx.strokeStyle = "#00ff88";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(startX, 0);
      ctx.lineTo(startX, height);
      ctx.stroke();

      // Curseur fin
      ctx.strokeStyle = "#ff0088";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(endX, 0);
      ctx.lineTo(endX, height);
      ctx.stroke();
    }, [audioBuffer, duration, startSec, endSec, zoom]);

    // Gestion du drag
    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      
      const startX = (startSec / duration) * rect.width;
      const endX = (endSec / duration) * rect.width;

      // Zone de détection plus large (20px)
      if (Math.abs(x - startX) < 20) {
        setIsDraggingStart(true);
      } else if (Math.abs(x - endX) < 20) {
        setIsDraggingEnd(true);
      }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (!isDraggingStart && !isDraggingEnd) return;
      
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const newSec = Math.max(0, Math.min(duration, (x / rect.width) * duration));

      if (isDraggingStart) {
        const newStart = Math.min(newSec, endSec - 0.1);
        setStartSec(newStart);
        onTrimChange?.(newStart, endSec);
      } else if (isDraggingEnd) {
        const newEnd = Math.max(newSec, startSec + 0.1);
        setEndSec(newEnd);
        onTrimChange?.(startSec, newEnd);
      }
    };

    const handleMouseUp = () => {
      setIsDraggingStart(false);
      setIsDraggingEnd(false);
    };

    // Lecture audio
    const togglePlay = () => {
      if (isPlaying) {
        sourceRef.current?.stop();
        sourceRef.current = null;
        setIsPlaying(false);
      } else {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioContextClass();
        }
        
        const ctx = audioContextRef.current;
        const buffer = ctx.createBuffer(1, audioBuffer.length, sampleRate);
        const channelData = buffer.getChannelData(0);
        for (let i = 0; i < audioBuffer.length; i++) {
          channelData[i] = audioBuffer[i] ?? 0;
        }
        
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        
        const startSample = Math.floor(startSec * sampleRate);
        const duration = endSec - startSec;
        
        source.start(0, startSec, duration);
        source.onended = () => setIsPlaying(false);
        
        sourceRef.current = source;
        setIsPlaying(true);
      }
    };

    // Raccourcis clavier
    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        const step = e.shiftKey ? 1.0 : 0.1; // Shift = 1s, sinon 0.1s
        
        switch (e.key) {
          case "ArrowLeft":
            e.preventDefault();
            if (e.ctrlKey || e.metaKey) {
              // Déplacer curseur début
              const newStart = Math.max(0, startSec - step);
              setStartSec(newStart);
              onTrimChange?.(newStart, endSec);
            }
            break;
          case "ArrowRight":
            e.preventDefault();
            if (e.ctrlKey || e.metaKey) {
              // Déplacer curseur début
              const newStart = Math.min(endSec - 0.1, startSec + step);
              setStartSec(newStart);
              onTrimChange?.(newStart, endSec);
            }
            break;
          case "ArrowUp":
            e.preventDefault();
            // Déplacer curseur fin
            const newEnd = Math.min(duration, endSec + step);
            setEndSec(newEnd);
            onTrimChange?.(startSec, newEnd);
            break;
          case "ArrowDown":
            e.preventDefault();
            // Déplacer curseur fin
            const newEndDown = Math.max(startSec + 0.1, endSec - step);
            setEndSec(newEndDown);
            onTrimChange?.(startSec, newEndDown);
            break;
          case " ":
            e.preventDefault();
            togglePlay();
            break;
        }
      };
      
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [startSec, endSec, duration, onTrimChange, isPlaying]);

    // Cleanup audio on unmount
    React.useEffect(() => {
      return () => {
        sourceRef.current?.stop();
        audioContextRef.current?.close();
      };
    }, []);

    return (
      <div ref={ref} className={cx("waveform-editor", className)}>
        <div className="waveform-editor-header">
          <h3 className="waveform-editor-title">Éditeur manuel</h3>
          <p className="waveform-editor-subtitle">Déplacez les curseurs pour définir la zone à conserver</p>
        </div>
        <canvas
          ref={canvasRef}
          width={800}
          height={200}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ width: "100%", height: "200px", cursor: "crosshair" }}
        />
        <div className="waveform-editor-controls">
          <div className="waveform-editor-time">
            <span>Début: {startSec.toFixed(2)}s</span>
            <span>Fin: {endSec.toFixed(2)}s</span>
            <span>Durée: {(endSec - startSec).toFixed(2)}s</span>
          </div>
          <div className="waveform-editor-actions">
            <Button onClick={togglePlay} variant="solid" size="md">
              {isPlaying ? "⏸ Pause" : "▶ Écouter"}
            </Button>
            <div className="waveform-editor-zoom">
              <Button onClick={() => setZoom(Math.max(1, zoom - 0.5))} variant="outline" size="sm" className="waveform-editor-zoom-btn">−</Button>
              <span>Zoom: {zoom}x</span>
              <Button onClick={() => setZoom(Math.min(5, zoom + 0.5))} variant="outline" size="sm" className="waveform-editor-zoom-btn">+</Button>
            </div>
          </div>
          <div className="waveform-editor-help">
            <small>
              💡 <strong>Raccourcis:</strong> Espace = Play/Pause • Ctrl+← → = Début • ↑ ↓ = Fin • Shift = 1s
            </small>
          </div>
        </div>
        {onTrim && onCancel && (
          <>
            <div className="waveform-editor-separator" />
            <div className="waveform-editor-actions-bottom">
              <Button onClick={onTrim} variant="solid">
                Trim
              </Button>
              <Button onClick={onCancel} variant="outline">
                Annuler
              </Button>
            </div>
          </>
        )}
      </div>
    );
  }
);

WaveformEditor.displayName = "WaveformEditor";
