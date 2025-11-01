/**
 * BPM Detector
 * Détecte le tempo (BPM) d'un fichier audio
 * Utilise Essentia.js via CDN pour une détection professionnelle
 */

export interface BPMResult {
  bpm: number;
  confidence: number;
}

let essentiaInstance: any = null;
let essentiaLoading: Promise<any> | null = null;

/**
 * Charge Essentia.js depuis le CDN
 */
async function loadEssentiaScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Essentia.js nécessite un environnement navigateur'));
      return;
    }

    // Vérifier si déjà chargé
    if ((window as any).Essentia) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/essentia.js@0.1.3/dist/essentia-wasm.web.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Impossible de charger Essentia.js'));
    document.head.appendChild(script);
  });
}

/**
 * Initialise Essentia.js (chargement du WASM)
 */
async function initEssentia(): Promise<any> {
  if (essentiaInstance) {
    return essentiaInstance;
  }

  if (essentiaLoading) {
    await essentiaLoading;
    return essentiaInstance;
  }

  essentiaLoading = (async () => {
    // Charger le script
    await loadEssentiaScript();

    // Initialiser Essentia
    const Essentia = (window as any).Essentia;
    if (!Essentia) {
      throw new Error('Essentia.js non disponible');
    }

    essentiaInstance = new Essentia();
    return essentiaInstance;
  })();

  return essentiaLoading;
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
