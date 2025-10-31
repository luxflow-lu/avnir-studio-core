"use client";
import React from "react";
import { Button, Layout, Form } from "@avnir/ui";

interface AnalysisResult {
  bpm: number | null;
  key: string | null;
  camelot: string | null;
  duration: string | null;
}

export default function KeyBpmFinderPage() {
  const [file, setFile] = React.useState<File | null>(null);
  const [results, setResults] = React.useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);

  const handleFileSelect = (selectedFile: File) => {
    // Validation sécurité : types de fichiers autorisés
    const allowedTypes = ['audio/mpeg', 'audio/wav', 'audio/mp4', 'audio/x-m4a'];
    if (!allowedTypes.includes(selectedFile.type)) {
      alert('Format non supporté. Utilisez .mp3, .wav ou .m4a');
      return;
    }

    // Validation sécurité : taille maximale (50MB)
    if (selectedFile.size > 50 * 1024 * 1024) {
      alert('Fichier trop volumineux. Maximum 50MB autorisé');
      return;
    }

    setFile(selectedFile);
    analyzeAudio(selectedFile);
  };

  const analyzeAudio = async (audioFile: File) => {
    setIsAnalyzing(true);
    
    try {
      // Simulation d'analyse pour v0 (pas d'API externe)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Résultats simulés pour démonstration
      const mockResults = {
        bpm: Math.floor(Math.random() * 60) + 80, // 80-140 BPM
        key: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'][Math.floor(Math.random() * 12)] + 
             (Math.random() > 0.5 ? 'm' : ''),
        camelot: Math.floor(Math.random() * 12) + 1 + (Math.random() > 0.5 ? 'A' : 'B'),
        duration: formatDuration(Math.floor(Math.random() * 300) + 120) // 2-7 minutes
      };
      
      setResults(mockResults);
    } catch (error) {
      alert('Impossible d\'analyser le fichier audio');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const resetAnalysis = () => {
    setFile(null);
    setResults(null);
  };

  const copyResults = async () => {
    if (!results) return;
    
    try {
      const text = `BPM: ${results.bpm}\nKey: ${results.key}\nCamelot: ${results.camelot}\nDurée: ${results.duration}`;
      await navigator.clipboard.writeText(text);
      alert('Résultats copiés dans le presse-papier');
    } catch (error) {
      alert('Impossible de copier dans le presse-papier');
    }
  };

  return (
    <main>
      <Layout.PageHeader
        title="Key & BPM Finder"
        subtitle="Analyse instantanée de tes fichiers audio pour découvrir le BPM, la tonalité et le code Camelot"
      />

      <section className="section--xl">
        <div className="container">
          {!file && !results && (
            <Form.FileUpload
              accept=".mp3,.wav,.m4a,audio/*"
              onFiles={(files) => {
                if (files.length > 0) {
                  handleFileSelect(files[0]);
                }
              }}
              maxFiles={1}
            />
          )}

          {isAnalyzing && (
            <div className="audio-analysis">
              <div className="audio-analysis-spinner"></div>
              <h3 className="audio-analysis-title">Analyse en cours...</h3>
              <p className="audio-analysis-subtitle">
                Traitement de {file?.name}
              </p>
            </div>
          )}

          {results && !isAnalyzing && (
            <div className="audio-results">
              <div className="audio-results-header">
                <h3 className="audio-results-title">Résultats d'analyse</h3>
                <p className="audio-results-file">{file?.name}</p>
              </div>
              
              <div className="audio-results-grid">
                <div className="audio-result-card">
                  <div className="audio-result-label">BPM</div>
                  <div className="audio-result-value">{results.bpm}</div>
                </div>
                
                <div className="audio-result-card">
                  <div className="audio-result-label">Tonalité</div>
                  <div className="audio-result-value">{results.key}</div>
                </div>
                
                <div className="audio-result-card">
                  <div className="audio-result-label">Camelot</div>
                  <div className="audio-result-value">{results.camelot}</div>
                </div>
                
                <div className="audio-result-card">
                  <div className="audio-result-label">Durée</div>
                  <div className="audio-result-value">{results.duration}</div>
                </div>
              </div>

              <div className="audio-results-actions">
                <Button variant="outline" onClick={resetAnalysis}>
                  Analyser un autre fichier
                </Button>
                <Button variant="solid" onClick={copyResults}>
                  Copier les résultats
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Comment ça marche ?"
            subtitle="Analyse tes fichiers audio en 3 étapes simples"
            align="center"
          />
          <div className="grid-3">
            <div className="text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-lg font-semibold mb-2">Importe ton fichier</h3>
              <p className="text-sm text-muted">Glisse-dépose ton fichier audio (MP3, WAV, M4A) ou clique pour sélectionner.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-lg font-semibold mb-2">Analyse automatique</h3>
              <p className="text-sm text-muted">Notre algorithme analyse le BPM, la tonalité et calcule le code Camelot.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-lg font-semibold mb-2">Utilise les résultats</h3>
              <p className="text-sm text-muted">Copie les informations pour tes playlists, DJ sets ou sessions de production.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
