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
    if ((window as any).Essentia && (window as any).EssentiaWASM) {
      resolve();
      return;
    }

    // Charger d'abord le WASM
    const wasmScript = document.createElement('script');
    wasmScript.src = 'https://cdn.jsdelivr.net/npm/essentia.js@0.1.3/dist/essentia-wasm.web.js';
    
    wasmScript.onload = () => {
      // Puis charger le core
      const coreScript = document.createElement('script');
      coreScript.src = 'https://cdn.jsdelivr.net/npm/essentia.js@0.1.3/dist/essentia.js-core.js';
      
      coreScript.onload = () => {
        // Attendre que les deux soient disponibles
        const checkEssentia = setInterval(() => {
          if ((window as any).Essentia && (window as any).EssentiaWASM) {
            clearInterval(checkEssentia);
            resolve();
          }
        }, 100);
        
        // Timeout après 10 secondes
        setTimeout(() => {
          clearInterval(checkEssentia);
          reject(new Error('Timeout: Essentia.js non disponible'));
        }, 10000);
      };
      
      coreScript.onerror = () => reject(new Error('Impossible de charger essentia.js-core'));
      document.head.appendChild(coreScript);
    };
    
    wasmScript.onerror = () => reject(new Error('Impossible de charger essentia-wasm'));
    document.head.appendChild(wasmScript);
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
    // Charger les scripts
    await loadEssentiaScript();

    // Initialiser Essentia avec EssentiaWASM
    const Essentia = (window as any).Essentia;
    const EssentiaWASM = (window as any).EssentiaWASM;
    
    if (!Essentia || !EssentiaWASM) {
      throw new Error('Essentia.js non disponible');
    }

    essentiaInstance = new Essentia(EssentiaWASM);
    
    // Attendre que le WASM soit initialisé
    await essentiaInstance.module;
    
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
