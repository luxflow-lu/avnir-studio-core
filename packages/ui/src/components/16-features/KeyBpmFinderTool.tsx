import * as React from "react";
import { analyzeAudioFile, type AnalysisResult } from "@features/audio-tools";

import { cx } from "../../utils/cx";

export interface KeyBpmFinderToolProps {
  onAnalysisComplete?: (results: AnalysisResult) => void;
  onError?: (error: string) => void;
  className?: string;
}

export const KeyBpmFinderTool = React.forwardRef<HTMLDivElement, KeyBpmFinderToolProps>(
  ({ onAnalysisComplete, onError, className }, ref) => {
    const [file, setFile] = React.useState<File | null>(null);
    const [results, setResults] = React.useState<AnalysisResult | null>(null);
    const [isAnalyzing, setIsAnalyzing] = React.useState(false);
    const [progress, setProgress] = React.useState({ value: 0, stage: "" });
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleFileSelect = async (selectedFile: File) => {
      // Validation sécurité : types de fichiers autorisés
      const allowedTypes = ["audio/mpeg", "audio/wav", "audio/mp4", "audio/x-m4a"];
      if (!allowedTypes.includes(selectedFile.type)) {
        onError?.("Format non supporté. Utilisez .mp3, .wav ou .m4a");
        return;
      }

      // Validation sécurité : taille maximale (50MB)
      if (selectedFile.size > 50 * 1024 * 1024) {
        onError?.("Fichier trop volumineux. Maximum 50MB autorisé");
        return;
      }

      setFile(selectedFile);
      await analyzeAudio(selectedFile);
    };

    const analyzeAudio = async (audioFile: File) => {
      setIsAnalyzing(true);
      setProgress({ value: 0, stage: "Démarrage..." });

      try {
        const analysisResults = await analyzeAudioFile(
          audioFile,
          (progressValue, stage) => {
            setProgress({ value: progressValue, stage });
          }
        );

        setResults(analysisResults);
        onAnalysisComplete?.(analysisResults);
      } catch (err) {
        const errorMessage = "Impossible d'analyser le fichier audio";
        onError?.(errorMessage);
        console.error("Erreur d'analyse:", err);
      } finally {
        setIsAnalyzing(false);
      }
    };

    const resetAnalysis = () => {
      setFile(null);
      setResults(null);
      setProgress({ value: 0, stage: "" });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };

    const copyResults = async () => {
      if (!results) return;

      try {
        const text = `BPM: ${results.bpm}\nKey: ${results.key}\nCamelot: ${results.camelot}\nDurée: ${results.duration}`;
        await navigator.clipboard.writeText(text);
      } catch (err) {
        console.error("Erreur de copie:", err);
      }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile) {
        handleFileSelect(droppedFile);
      }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    };

    return (
      <div ref={ref} className={cx("key-bpm-finder-tool", className)}>
        {/* Upload zone */}
        {!file && !results && (
          <div
            className="key-bpm-finder-upload"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".mp3,.wav,.m4a,audio/*"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) {
                  handleFileSelect(selectedFile);
                }
              }}
              style={{ display: "none" }}
            />
            <div className="key-bpm-finder-upload-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <h3 className="key-bpm-finder-upload-title">
              Glissez votre fichier audio ici
            </h3>
            <p className="key-bpm-finder-upload-subtitle">
              ou cliquez pour sélectionner
            </p>
            <p className="key-bpm-finder-upload-formats">
              MP3, WAV, M4A • Max 50MB
            </p>
          </div>
        )}

        {/* Analyzing state */}
        {isAnalyzing && (
          <div className="key-bpm-finder-analyzing">
            <div className="key-bpm-finder-spinner" />
            <h3 className="key-bpm-finder-analyzing-title">Analyse en cours...</h3>
            <p className="key-bpm-finder-analyzing-subtitle">
              {file?.name}
            </p>
            <div className="key-bpm-finder-progress">
              <div
                className="key-bpm-finder-progress-bar"
                style={{ width: `${progress.value * 100}%` }}
              />
            </div>
            <p className="key-bpm-finder-analyzing-stage">{progress.stage}</p>
          </div>
        )}

        {/* Results */}
        {results && !isAnalyzing && (
          <div className="key-bpm-finder-results">
            <div className="key-bpm-finder-results-header">
              <h3 className="key-bpm-finder-results-title">Résultats d'analyse</h3>
              <p className="key-bpm-finder-results-file">{file?.name}</p>
            </div>

            <div className="key-bpm-finder-results-grid">
              <div className="key-bpm-finder-result-card">
                <div className="key-bpm-finder-result-label">BPM</div>
                <div className="key-bpm-finder-result-value">{results.bpm}</div>
              </div>

              <div className="key-bpm-finder-result-card">
                <div className="key-bpm-finder-result-label">Tonalité</div>
                <div className="key-bpm-finder-result-value">{results.key}</div>
              </div>

              <div className="key-bpm-finder-result-card">
                <div className="key-bpm-finder-result-label">Camelot</div>
                <div className="key-bpm-finder-result-value">{results.camelot}</div>
              </div>

              <div className="key-bpm-finder-result-card">
                <div className="key-bpm-finder-result-label">Durée</div>
                <div className="key-bpm-finder-result-value">{results.duration}</div>
              </div>
            </div>

            <div className="key-bpm-finder-results-actions">
              <button
                type="button"
                className="btn btn-outline"
                onClick={resetAnalysis}
              >
                Analyser un autre fichier
              </button>
              <button
                type="button"
                className="btn btn-solid"
                onClick={copyResults}
              >
                Copier les résultats
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
);

KeyBpmFinderTool.displayName = "KeyBpmFinderTool";
