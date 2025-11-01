/**
 * Key Analyzer
 * Analyse la tonalité avec multi-profils et vote
 * Utilise Essentia KeyExtractor (HPCP + profils Krumhansl/Shaath/EDMA)
 */

import type { KeyResult, KeyConfig, ProcessedAudio, KeyVote } from '../types';
import { loadEssentia, arrayToVector } from './essentia-loader';

/**
 * Analyse la tonalité d'un fichier audio
 * Méthode robuste : multi-profils + vote
 * @param audio - Audio traité (mono @44.1kHz)
 * @param config - Configuration optionnelle
 * @returns Résultat tonalité avec confiance
 */
export async function analyzeKey(
  audio: ProcessedAudio,
  config: KeyConfig = {}
): Promise<KeyResult> {
  const {
    hpcpSize = 36,
    profiles = ['edma', 'shaath'],
    averageDetuningCorrection = true,
  } = config;
  
  console.log('Analyse tonalité démarrée:', {
    duration: audio.duration.toFixed(2),
    hpcpSize,
    profiles,
    averageDetuningCorrection,
  });
  
  try {
    // Charger Essentia
    const essentia = await loadEssentia();
    
    // Analyser avec chaque profil
    const profileResults: KeyResult[] = [];
    
    for (const profile of profiles) {
      console.log(`Analyse avec profil ${profile}...`);
      
      const result = await analyzeKeyWithProfile(
        essentia,
        audio.signal,
        profile,
        hpcpSize,
        averageDetuningCorrection
      );
      
      profileResults.push(result);
    }
    
    // Voter pour la meilleure tonalité
    const finalResult = voteKey(profileResults);
    
    console.log('✅ Analyse tonalité terminée:', {
      key: finalResult.key,
      scale: finalResult.scale,
      confidence: finalResult.confidence.toFixed(3),
      strength: finalResult.strength.toFixed(3),
      profileResults: profileResults.map(r => `${r.key} (${r.strength.toFixed(2)})`),
    });
    
    return finalResult;
  } catch (error) {
    console.error('❌ Erreur analyse tonalité:', error);
    
    // Fallback : tonalité par défaut
    return {
      key: 'C',
      scale: 'major',
      confidence: 0,
      strength: 0,
    };
  }
}

/**
 * Analyse la tonalité avec un profil spécifique
 * @param essentia - Instance Essentia
 * @param signal - Signal audio
 * @param profile - Profil à utiliser
 * @param hpcpSize - Taille du HPCP
 * @param averageDetuningCorrection - Correction du désaccordage
 * @returns Résultat tonalité
 */
async function analyzeKeyWithProfile(
  essentia: any,
  signal: Float32Array,
  profile: 'edma' | 'shaath' | 'krumhansl' | 'temperley',
  hpcpSize: number,
  averageDetuningCorrection: boolean
): Promise<KeyResult> {
  console.log(`Analyse Key (signal: ${signal.length} samples, ~${(signal.length / 44100).toFixed(1)}s)`);
  
  const sampleRate = 44100;
  const extractor = (essentia as any).extractor;
  
  if (!extractor) {
    throw new Error('EssentiaExtractor non disponible');
  }
  
  // Générer des frames pour l'analyse HPCP
  console.log('Génération des frames HPCP...');
  const frames = extractor.FrameGenerator(signal, 4096, 2048);
  const hpcps: Float32Array[] = [];
  
  // Extraire HPCP pour chaque frame
  for (let i = 0; i < frames.size(); i++) {
    const frame = frames.get(i);
    const frameArray = essentia.vectorToArray(frame);
    const hpcpVec = extractor.hpcpExtractor(frameArray, sampleRate, true);
    hpcps.push(essentia.vectorToArray(hpcpVec));
  }
  console.log(`${hpcps.length} frames HPCP extraits`);
  
  // Calculer la moyenne des HPCP
  const len = hpcps[0]?.length ?? 0;
  if (!len) {
    return { key: 'C', scale: 'major', confidence: 0, strength: 0, profile };
  }
  
  const mean = new Float32Array(len);
  for (const v of hpcps) {
    for (let i = 0; i < len; i++) mean[i] += v[i];
  }
  for (let i = 0; i < len; i++) mean[i] /= hpcps.length;
  
  // Appeler Key avec le HPCP moyen
  console.log('Appel Key...');
  const meanVec = essentia.arrayToVector(mean);
  const result = essentia.Key(meanVec, 4, hpcpSize, profile, 0.6, false, true, true);
  console.log('✅ Key terminé');
  
  // Parser la tonalité
  const { key, scale } = parseKeyString(result.key, result.scale);
  const strength = result.strength || 0;
  const confidence = Math.min(1, strength);
  
  console.log(`Tonalité détectée: ${key} ${scale} (strength: ${strength.toFixed(2)})`);
  
  return { key, scale, confidence, strength, profile };
}

/**
 * Parse la chaîne de tonalité retournée par Essentia
 * @param keyStr - Tonalité (ex: "A", "C#", "Bb")
 * @param scaleStr - Gamme (ex: "major", "minor")
 * @returns Tonalité et gamme normalisées
 */
function parseKeyString(
  keyStr: string,
  scaleStr: string
): { key: string; scale: 'major' | 'minor' } {
  // Normaliser la tonalité
  let key = keyStr.trim();
  
  // Convertir les bémols en dièses pour cohérence
  const flatToSharp: Record<string, string> = {
    'Db': 'C#',
    'Eb': 'D#',
    'Gb': 'F#',
    'Ab': 'G#',
    'Bb': 'A#',
  };
  
  if (flatToSharp[key]) {
    key = flatToSharp[key];
  }
  
  // Normaliser la gamme
  const scale = scaleStr.toLowerCase().includes('minor') ? 'minor' : 'major';
  
  return { key, scale };
}

/**
 * Vote pour la meilleure tonalité parmi les résultats des profils
 * Choisit celle avec la plus forte strength
 * @param results - Résultats des profils
 * @returns Tonalité finale
 */
function voteKey(results: KeyResult[]): KeyResult {
  if (results.length === 0) {
    return {
      key: 'C',
      scale: 'major',
      confidence: 0,
      strength: 0,
    };
  }
  
  if (results.length === 1) {
    return results[0];
  }
  
  // Grouper les tonalités identiques
  const votes = groupSimilarKeys(results);
  
  // Trier par strength (force du profil)
  votes.sort((a, b) => b.strength - a.strength);
  
  const winner = votes[0];
  
  console.log('Vote tonalité:', {
    candidates: votes.map(v => `${v.key}${v.scale === 'minor' ? 'm' : ''} (${v.votes} votes, strength: ${v.strength.toFixed(2)})`),
    winner: `${winner.key}${winner.scale === 'minor' ? 'm' : ''}`,
  });
  
  return {
    key: winner.key,
    scale: winner.scale,
    confidence: Math.min(1, winner.strength),
    strength: winner.strength,
  };
}

/**
 * Groupe les tonalités identiques et compte les votes
 * @param results - Résultats tonalité
 * @returns Votes groupés
 */
function groupSimilarKeys(results: KeyResult[]): KeyVote[] {
  const groups: Map<string, KeyVote> = new Map();
  
  for (const result of results) {
    const keyId = `${result.key}-${result.scale}`;
    
    if (groups.has(keyId)) {
      const vote = groups.get(keyId)!;
      vote.votes++;
      vote.strength = Math.max(vote.strength, result.strength);
    } else {
      groups.set(keyId, {
        key: result.key,
        scale: result.scale,
        strength: result.strength,
        votes: 1,
      });
    }
  }
  
  return Array.from(groups.values());
}

/**
 * Analyse tonalité rapide (un seul profil)
 * Utile pour preview
 * @param audio - Audio traité
 * @param config - Configuration
 * @returns Résultat tonalité
 */
export async function analyzeKeyFast(
  audio: ProcessedAudio,
  config: KeyConfig = {}
): Promise<KeyResult> {
  const {
    hpcpSize = 36,
    averageDetuningCorrection = true,
  } = config;
  
  try {
    const essentia = await loadEssentia();
    
    // Utiliser uniquement le profil EDMA (bon pour EDM/électro)
    const result = await analyzeKeyWithProfile(
      essentia,
      audio.signal,
      'edma',
      hpcpSize,
      averageDetuningCorrection
    );
    
    return result;
  } catch (error) {
    console.error('Erreur analyse tonalité rapide:', error);
    return {
      key: 'C',
      scale: 'major',
      confidence: 0,
      strength: 0,
    };
  }
}

/**
 * Convertit une tonalité en notation complète
 * @param key - Tonalité (ex: "C#")
 * @param scale - Gamme (major/minor)
 * @returns Notation complète (ex: "C# major", "Am")
 */
export function formatKey(key: string, scale: 'major' | 'minor'): string {
  if (scale === 'minor') {
    return `${key}m`;
  }
  return key;
}

/**
 * Obtient la tonalité relative
 * @param key - Tonalité
 * @param scale - Gamme
 * @returns Tonalité relative
 */
export function getRelativeKey(
  key: string,
  scale: 'major' | 'minor'
): { key: string; scale: 'major' | 'minor' } {
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const index = notes.indexOf(key);
  
  if (index === -1) {
    return { key, scale };
  }
  
  if (scale === 'major') {
    // Relative mineure : -3 demi-tons
    const relativeIndex = (index - 3 + 12) % 12;
    return {
      key: notes[relativeIndex],
      scale: 'minor',
    };
  } else {
    // Relative majeure : +3 demi-tons
    const relativeIndex = (index + 3) % 12;
    return {
      key: notes[relativeIndex],
      scale: 'major',
    };
  }
}
