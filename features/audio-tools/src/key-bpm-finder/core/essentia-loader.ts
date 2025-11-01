/**
 * Essentia Loader
 * Charge et initialise Essentia.js de manière robuste
 * Gestion des erreurs et retry automatique
 */

import type { EssentiaInstance } from '../types';

let essentiaInstance: EssentiaInstance | null = null;
let essentiaLoading: Promise<EssentiaInstance> | null = null;

/**
 * Charge et initialise Essentia.js
 * Singleton pattern avec retry automatique
 * @param maxRetries - Nombre maximum de tentatives (défaut: 3)
 * @returns Instance Essentia prête à l'emploi
 */
export async function loadEssentia(maxRetries: number = 3): Promise<EssentiaInstance> {
  // Si déjà chargé, retourner l'instance
  if (essentiaInstance) {
    return essentiaInstance;
  }
  
  // Si en cours de chargement, attendre
  if (essentiaLoading) {
    return essentiaLoading;
  }
  
  // Démarrer le chargement
  essentiaLoading = loadEssentiaWithRetry(maxRetries);
  
  try {
    essentiaInstance = await essentiaLoading;
    return essentiaInstance;
  } catch (error) {
    essentiaLoading = null;
    throw error;
  }
}

/**
 * Charge Essentia avec retry automatique
 * @param maxRetries - Nombre maximum de tentatives
 * @returns Instance Essentia
 */
async function loadEssentiaWithRetry(maxRetries: number): Promise<EssentiaInstance> {
  let lastError: Error | null = null;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Chargement Essentia.js (tentative ${attempt}/${maxRetries})...`);
      
      const instance = await initEssentia();
      
      console.log('✅ Essentia.js chargé avec succès', {
        version: instance.version,
        algorithms: instance.algorithmNames?.length || 0,
      });
      
      return instance;
    } catch (error) {
      lastError = error as Error;
      console.warn(`❌ Échec tentative ${attempt}:`, error);
      
      // Attendre avant de réessayer (sauf dernière tentative)
      if (attempt < maxRetries) {
        await sleep(1000 * attempt); // Backoff exponentiel
      }
    }
  }
  
  throw new Error(
    `Impossible de charger Essentia.js après ${maxRetries} tentatives: ${lastError?.message}`
  );
}

/**
 * Initialise Essentia.js (une tentative)
 * @returns Instance Essentia avec extractor
 */
async function initEssentia(): Promise<EssentiaInstance> {
  try {
    console.log('Chargement Essentia.js depuis NPM...');
    
    // IMPORTANT: Ne pas destructurer les exports (ça renvoie undefined)
    // Utiliser l'espace de noms complet
    // @ts-ignore - Import dynamique avec structure complexe
    const ES: any = await import('essentia.js');
    console.log('Module chargé:', Object.keys(ES));
    console.log('Type de EssentiaWASM:', typeof ES.EssentiaWASM);
    console.log('EssentiaWASM:', ES.EssentiaWASM);
    
    // Le module NPM a une structure imbriquée : ES.EssentiaWASM.EssentiaWASM
    let wasmModule = ES.EssentiaWASM;
    
    // Si c'est un objet avec une propriété EssentiaWASM, descendre d'un niveau
    if (wasmModule && typeof wasmModule === 'object' && 'EssentiaWASM' in wasmModule) {
      console.log('Structure imbriquée détectée, extraction de EssentiaWASM.EssentiaWASM');
      wasmModule = wasmModule.EssentiaWASM;
      console.log('WASM extrait:', wasmModule);
    }
    
    // Si c'est une fonction, l'appeler
    if (typeof wasmModule === 'function') {
      console.log('EssentiaWASM est une fonction, appel pour initialiser...');
      wasmModule = await wasmModule();
      console.log('WASM initialisé:', wasmModule);
    }
    
    console.log('Création instance Essentia...');
    const essentia = new ES.Essentia(wasmModule) as any;
    console.log('✅ Instance Essentia créée');
    
    console.log('Création EssentiaExtractor...');
    const extractor = new ES.EssentiaExtractor(wasmModule) as any;
    console.log('✅ EssentiaExtractor créé');
    
    console.log('✅ Essentia initialisé avec succès');
    console.log('Version:', essentia.version);
    console.log('Algorithmes disponibles:', essentia.algorithmNames?.length || 0);
    
    // Test rapide pour vérifier que les méthodes existent
    console.log('BeatTrackerMultiFeature disponible:', typeof essentia.BeatTrackerMultiFeature);
    console.log('Key disponible:', typeof essentia.Key);
    
    // Stocker l'extractor dans l'instance pour y accéder plus tard
    (essentia as any).extractor = extractor;
    
    return essentia as EssentiaInstance;
  } catch (error) {
    console.error('Détails erreur Essentia:', error);
    throw new Error(`Erreur initialisation Essentia: ${(error as Error).message}`);
  }
}

/**
 * Valide que l'instance Essentia a les algorithmes requis
 * @param essentia - Instance Essentia
 */
function validateEssentiaInstance(essentia: any): void {
  // Vérifier les algorithmes disponibles dans l'API JS
  const requiredAlgorithms = ['BeatTrackerMultiFeature', 'Key'];
  const missing = requiredAlgorithms.filter(algo => {
    try {
      return !essentia.algorithmNames?.includes(algo);
    } catch {
      return true;
    }
  });
  
  if (missing.length > 0) {
    console.warn('Algorithmes manquants:', missing);
    // Ne pas throw pour l'instant, juste logger
  }
}

/**
 * Convertit un Float32Array en Vector Essentia
 * @param essentia - Instance Essentia
 * @param array - Tableau de données
 * @returns Vector Essentia
 */
export function arrayToVector(essentia: EssentiaInstance, array: Float32Array): any {
  return essentia.arrayToVector(array);
}

/**
 * Convertit un Vector Essentia en Float32Array
 * @param essentia - Instance Essentia
 * @param vector - Vector Essentia
 * @returns Float32Array
 */
export function vectorToArray(essentia: EssentiaInstance, vector: any): Float32Array {
  if (essentia.vectorToArray) {
    return essentia.vectorToArray(vector);
  }
  // Fallback si vectorToArray n'existe pas
  return new Float32Array(vector);
}

/**
 * Réinitialise l'instance Essentia
 * Utile pour forcer un rechargement
 */
export function resetEssentia(): void {
  essentiaInstance = null;
  essentiaLoading = null;
  console.log('Instance Essentia réinitialisée');
}

/**
 * Vérifie si Essentia est chargé
 * @returns true si Essentia est prêt
 */
export function isEssentiaLoaded(): boolean {
  return essentiaInstance !== null;
}

/**
 * Obtient la version d'Essentia chargée
 * @returns Version ou null si non chargé
 */
export function getEssentiaVersion(): string | null {
  return essentiaInstance?.version || null;
}

/**
 * Utilitaire : sleep
 * @param ms - Millisecondes
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
