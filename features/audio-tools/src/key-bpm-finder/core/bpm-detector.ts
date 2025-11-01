/**
 * BPM Detector
 * Détecte le tempo (BPM) d'un fichier audio
 * Utilise la librairie music-tempo pour une détection précise
 */

// @ts-ignore - music-tempo n'a pas de types officiels
import MusicTempo from 'music-tempo';

export interface BPMResult {
  bpm: number;
  confidence: number;
}

/**
 * Détecte le BPM d'un fichier audio
 * @param audioData - Données audio (mono)
 * @param sampleRate - Taux d'échantillonnage
 * @returns BPM détecté avec niveau de confiance
 */
export function detectBPM(audioData: Float32Array, sampleRate: number): BPMResult {
  try {
    // Utiliser music-tempo pour une détection précise
    const musicTempo = new MusicTempo(audioData);
    
    return {
      bpm: Math.round(musicTempo.tempo || 120),
      confidence: musicTempo.tempo ? 0.9 : 0.5, // Haute confiance si détecté
    };
  } catch (error) {
    console.error('Erreur détection BPM:', error);
    return {
      bpm: 120,
      confidence: 0,
    };
  }
}
