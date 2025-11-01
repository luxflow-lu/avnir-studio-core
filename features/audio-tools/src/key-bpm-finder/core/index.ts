/**
 * Key & BPM Finder - Core
 * Services d'analyse audio
 */

export * from './audio-analyzer';
export * from './bpm-detector';
export * from './key-detector';
export * from './camelot-mapper';

import { decodeAudioFile, formatDuration, type AudioData } from './audio-analyzer';
import { detectBPM, type BPMResult } from './bpm-detector';
import { detectKey, type KeyResult } from './key-detector';
import { keyToCamelot } from './camelot-mapper';

export interface AnalysisResult {
  bpm: number;
  key: string;
  camelot: string;
  duration: string;
  confidence: {
    bpm: number;
    key: number;
  };
}

/**
 * Analyse complète d'un fichier audio
 * @param file - Fichier audio (MP3, WAV, M4A)
 * @param onProgress - Callback de progression (optionnel)
 * @returns Résultats d'analyse
 */
export async function analyzeAudioFile(
  file: File,
  onProgress?: (progress: number, stage: string) => void
): Promise<AnalysisResult> {
  try {
    // 1. Décoder le fichier audio
    onProgress?.(0.1, 'Décodage du fichier audio...');
    const audioData = await decodeAudioFile(file);
    
    // 2. Détecter le BPM
    onProgress?.(0.4, 'Détection du BPM...');
    const bpmResult = await detectBPM(audioData.channelData, audioData.sampleRate);
    
    // 3. Détecter la tonalité
    onProgress?.(0.7, 'Détection de la tonalité...');
    const keyResult = detectKey(audioData.channelData, audioData.sampleRate);
    
    // 4. Calculer le code Camelot
    onProgress?.(0.9, 'Calcul du code Camelot...');
    const camelot = keyToCamelot(keyResult.key);
    
    // 5. Formater la durée
    const duration = formatDuration(audioData.duration);
    
    onProgress?.(1.0, 'Analyse terminée !');
    
    return {
      bpm: bpmResult.bpm,
      key: keyResult.key,
      camelot,
      duration,
      confidence: {
        bpm: bpmResult.confidence,
        key: keyResult.confidence,
      },
    };
  } catch (error) {
    console.error('Erreur lors de l\'analyse audio:', error);
    throw new Error('Impossible d\'analyser le fichier audio');
  }
}
