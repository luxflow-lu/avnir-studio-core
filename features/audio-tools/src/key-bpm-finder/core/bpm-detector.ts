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
    // Limiter à 30 secondes pour la performance
    const maxSamples = Math.min(audioData.length, sampleRate * 30);
    const limitedData = audioData.slice(0, maxSamples);
    
    // Utiliser music-tempo pour une détection précise
    const musicTempo = new MusicTempo(limitedData);
    
    // Music-tempo retourne parfois une string et détecte souvent le double du BPM
    let detectedBPM = typeof musicTempo.tempo === 'string' 
      ? parseFloat(musicTempo.tempo) 
      : musicTempo.tempo;
    
    if (!detectedBPM || isNaN(detectedBPM)) {
      return { bpm: 120, confidence: 0 };
    }
    
    // Normaliser le BPM dans une plage raisonnable (80-180)
    // Music-tempo détecte souvent le double ou la moitié
    while (detectedBPM > 180) {
      detectedBPM /= 2;
    }
    
    while (detectedBPM < 80) {
      detectedBPM *= 2;
    }
    
    console.log('BPM détecté:', {
      raw: musicTempo.tempo,
      normalized: detectedBPM,
      beats: musicTempo.beats?.length || 0
    });
    
    return {
      bpm: Math.round(detectedBPM),
      confidence: 0.9,
    };
  } catch (error) {
    console.error('Erreur détection BPM:', error);
    return {
      bpm: 120,
      confidence: 0,
    };
  }
}
