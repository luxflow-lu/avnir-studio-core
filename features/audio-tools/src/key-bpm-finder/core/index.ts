/**
 * Key & BPM Finder - Core
 * Services d'analyse audio avec Essentia.js
 */

// Exports des modules
export * from './audio-processor';
export * from './essentia-loader';
export * from './bpm-analyzer';
export * from './key-analyzer';
export * from './tempo-validator';
export * from './camelot-mapper';

// Imports pour la fonction principale
import { processAudioFile } from './audio-processor';
import { analyzeBPM } from './bpm-analyzer';
import { analyzeKey, formatKey } from './key-analyzer';
import { keyToCamelot } from './camelot-mapper';
import type { AnalysisResult, BPMConfig, KeyConfig } from '../types';

/**
 * Analyse complète d'un fichier audio
 * Détecte BPM, tonalité et code Camelot
 * @param file - Fichier audio (MP3, WAV, M4A)
 * @param onProgress - Callback de progression (optionnel)
 * @param config - Configuration optionnelle
 * @returns Résultats d'analyse complets
 */
export async function analyzeAudioFile(
  file: File,
  onProgress?: (progress: number, stage: string) => void,
  config?: {
    bpm?: BPMConfig;
    key?: KeyConfig;
  }
): Promise<AnalysisResult> {
  try {
    // 1. Traiter le fichier audio (décodage + resampling @44.1kHz mono)
    onProgress?.(0.1, 'Traitement du fichier audio...');
    const audio = await processAudioFile(file);
    
    console.log(`Fichier traité: ${audio.duration.toFixed(2)}s @${audio.sampleRate}Hz`);
    
    // 2. Analyser le BPM (fenêtrage + vote + correction)
    onProgress?.(0.3, 'Analyse du BPM...');
    const bpmResult = await analyzeBPM(audio, config?.bpm);
    
    // 3. Analyser la tonalité (multi-profils + vote)
    onProgress?.(0.6, 'Analyse de la tonalité...');
    const keyResult = await analyzeKey(audio, config?.key);
    
    // 4. Calculer le code Camelot
    onProgress?.(0.9, 'Calcul du code Camelot...');
    const keyFormatted = formatKey(keyResult.key, keyResult.scale);
    const camelot = keyToCamelot(keyFormatted);
    
    onProgress?.(1.0, 'Analyse terminée !');
    
    return {
      bpm: bpmResult,
      key: keyResult,
      camelot,
      duration: audio.originalDuration, // Durée complète du fichier original
    };
  } catch (error) {
    console.error('❌ Erreur analyse audio:', error);
    throw new Error(`Impossible d'analyser le fichier: ${(error as Error).message}`);
  }
}

/**
 * Formate une durée en secondes vers MM:SS
 * @param seconds - Durée en secondes
 * @returns Durée formatée
 */
export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
