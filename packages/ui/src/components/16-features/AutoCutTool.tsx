import * as React from "react";

import {
  processAutoCutAudioFile,
  exportToWav,
  trimSilence,
  type AutoCutResult,
} from "@features/audio-tools";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";
import { WaveformEditor } from "./WaveformEditor";

export interface AutoCutToolProps {
  onTrimComplete?: (result: AutoCutResult) => void;
  onError?: (error: string) => void;
  className?: string;
}

export const AutoCutTool = React.forwardRef<HTMLDivElement, AutoCutToolProps>(
  ({ onTrimComplete, onError, className }, ref) => {
    const [file, setFile] = React.useState<File | null>(null);
    const [result, setResult] = React.useState<AutoCutResult | null>(null);
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [mode, setMode] = React.useState<"auto" | "manual">("manual");
    const [audioData, setAudioData] = React.useState<{ signal: Float32Array; sampleRate: number; duration: number } | null>(null);
    const [manualTrim, setManualTrim] = React.useState<{ start: number; end: number }>({ start: 0, end: 0 });
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleFileSelect = async (selectedFile: File) => {
      setFile(selectedFile);
      setResult(null);
      setIsProcessing(true);

      try {
        console.log("🎵 Traitement du fichier:", selectedFile.name);

        // 1) Décoder
        const audio = await processAutoCutAudioFile(selectedFile);
        console.log(`Audio décodé: ${audio.duration.toFixed(2)}s`);
        
        setAudioData(audio);
        setManualTrim({ start: 0, end: audio.duration });

        if (mode === "auto") {
          // 2) Trim auto (algo fenêtre stricte: niveau+plateau+stabilité)
          const trimResult = trimSilence(audio.signal, {
            sampleRate: audio.sampleRate,
            windowSec: 0.02,
            hopSec: 0.02,
            minAboveSec: 0.25,
            minBelowSec: 1.5,
            marginDb: 62,       // -85.7 + 62 = -23.7dB (proche du RMS à 130s)
            slopeLimit: 0.2,
            varWinSec: 1.0,
            varLimitDb: 1.2,
            prerollSec: 0.1,
            postrollSec: 0.25,
          });

          setResult(trimResult);
          onTrimComplete?.(trimResult);
          console.log("✅ Trim terminé:", trimResult);
        }
      } catch (error) {
        console.error("❌ Erreur trim:", error);
        onError?.((error as Error).message);
      } finally {
        setIsProcessing(false);
      }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile) handleFileSelect(selectedFile);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile) handleFileSelect(droppedFile);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    };

    const resetTool = () => {
      setFile(null);
      setResult(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleManualTrim = () => {
      if (!audioData) return;
      
      const startSample = Math.floor(manualTrim.start * audioData.sampleRate);
      const endSample = Math.floor(manualTrim.end * audioData.sampleRate);
      const trimmed = audioData.signal.slice(startSample, endSample);
      
      const trimResult: AutoCutResult = {
        trimmed,
        sampleRate: audioData.sampleRate,
        originalDuration: audioData.duration,
        trimmedDuration: trimmed.length / audioData.sampleRate,
        startSec: manualTrim.start,
        endSec: manualTrim.end,
        startSample,
        endSample,
        removedStart: manualTrim.start,
        removedEnd: audioData.duration - manualTrim.end,
      };
      
      setResult(trimResult);
      onTrimComplete?.(trimResult);
    };

    const downloadTrimmed = () => {
      if (!result || !file) return;
      const blob = exportToWav(result.trimmed, result.sampleRate);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name.replace(/\.[^/.]+$/, "") + "_trimmed.wav";
      a.click();
      URL.revokeObjectURL(url);
    };

    return (
      <div ref={ref} className={cx("auto-cut-tool", className)}>
        {/* Upload */}
        {!file && !result && (
          <div
            className="auto-cut-tool-upload"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".mp3,.wav,.m4a,.flac,.ogg,audio/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <div className="auto-cut-tool-upload-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <h3 className="auto-cut-tool-upload-title">Glissez votre fichier audio ici</h3>
            <p className="auto-cut-tool-upload-subtitle">ou cliquez pour sélectionner</p>
            <p className="auto-cut-tool-upload-formats">MP3, WAV, M4A, FLAC, OGG • Max 100MB</p>
          </div>
        )}

        {/* Processing */}
        {isProcessing && (
          <div className="auto-cut-tool-processing">
            <div className="auto-cut-tool-spinner" />
            <p className="auto-cut-tool-processing-text">Analyse en cours...</p>
          </div>
        )}

        {/* Waveform Editor (mode manuel) */}
        {audioData && !isProcessing && mode === "manual" && !result && (
          <WaveformEditor
            audioBuffer={audioData.signal}
            sampleRate={audioData.sampleRate}
            duration={audioData.duration}
            onTrimChange={(start, end) => setManualTrim({ start, end })}
            onTrim={handleManualTrim}
            onCancel={resetTool}
          />
        )}

        {/* Results */}
        {result && !isProcessing && (
          <div className="auto-cut-tool-results">
            <div className="auto-cut-tool-results-header">
              <h3 className="auto-cut-tool-results-title">Résultats du trim</h3>
              <p className="auto-cut-tool-results-file">{file?.name}</p>
            </div>

            <div className="auto-cut-tool-results-grid">
              <div className="auto-cut-tool-result-card">
                <div className="auto-cut-tool-result-label">Durée originale</div>
                <div className="auto-cut-tool-result-value">
                  {formatDuration(result.originalDuration)}
                </div>
              </div>

              <div className="auto-cut-tool-result-card">
                <div className="auto-cut-tool-result-label">Durée trimée</div>
                <div className="auto-cut-tool-result-value">
                  {formatDuration(result.trimmedDuration)}
                </div>
              </div>

              <div className="auto-cut-tool-result-card">
                <div className="auto-cut-tool-result-label">Début coupé</div>
                <div className="auto-cut-tool-result-value">
                  {result.removedStart.toFixed(2)}s
                </div>
              </div>

              <div className="auto-cut-tool-result-card">
                <div className="auto-cut-tool-result-label">Fin coupée</div>
                <div className="auto-cut-tool-result-value">
                  {result.removedEnd.toFixed(2)}s
                </div>
              </div>
            </div>

            <div className="auto-cut-tool-results-actions">
              <Button variant="solid" onClick={resetTool}>
                Analyser un autre fichier
              </Button>
              <Button variant="outline" onClick={downloadTrimmed}>
                Télécharger
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
);

AutoCutTool.displayName = "AutoCutTool";

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}
