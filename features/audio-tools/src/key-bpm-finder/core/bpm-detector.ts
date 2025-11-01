/**
 * BPM Detector
 * Détecte le tempo (BPM) d'un fichier audio
 * Utilise Essentia.js pour une détection professionnelle
 */

import { Essentia, EssentiaWASM } from 'essentia.js';

export interface BPMResult {
  bpm: number;
  confidence: number;
}

let essentiaInstance: Essentia | null = null;

/**
 * Initialise Essentia.js (chargement du WASM)
 */
async function initEssentia(): Promise<Essentia> {
  if (essentiaInstance) {
    return essentiaInstance;
  }
  
  const essentia = new Essentia(EssentiaWASM);
  await essentia.module;
  essentiaInstance = essentia;
  return essentia;
}

/**
 * Détecte le BPM d'un fichier audio
 * @param audioData - Données audio (mono)
 * @param sampleRate - Taux d'échantillonnage
 * @returns BPM détecté avec niveau de confiance
 */
export async function detectBPM(audioData: Float32Array, sampleRate: number): Promise<BPMResult> {
  try {
    const essentia = await initEssentia();
    
    // Utiliser RhythmExtractor2013 d'Essentia pour une détection précise
    const rhythm = essentia.RhythmExtractor2013(audioData, sampleRate);
    
    const bpm = rhythm.bpm;
    const confidence = rhythm.confidence || 0.9;
    
    console.log('Essentia BPM détecté:', {
      bpm,
      confidence,
      beats: rhythm.beats?.length || 0
    });
    
    return {
      bpm: Math.round(bpm),
      confidence,
    };
  } catch (error) {
    console.error('Erreur détection BPM avec Essentia:', error);
    return {
      bpm: 120,
      confidence: 0,
    };
  }
}
