/**
 * BPM Analyzer
 * Analyse le tempo avec fenêtrage, vote et correction demi/double
 * Utilise Essentia RhythmExtractor2013 (méthode multifeature)
 */

import type { BPMResult, BPMConfig, ProcessedAudio, AudioWindow, BPMVote } from '../types';
import { loadEssentia, arrayToVector } from './essentia-loader';
import { extractAnalysisWindows } from './audio-processor';
import { validateAndCorrectTempo, roundBPM, isBPMValid } from './tempo-validator';

/**
 * Analyse le BPM d'un fichier audio
 * Méthode robuste : fenêtrage + vote + correction demi/double
 * @param audio - Audio traité (mono @44.1kHz)
 * @param config - Configuration optionnelle
 * @returns Résultat BPM avec confiance
 */
export async function analyzeBPM(
  audio: ProcessedAudio,
  config: BPMConfig = {}
): Promise<BPMResult> {
  const {
    minTempo = 60,
    maxTempo = 190,
    method = 'multifeature',
    windowCount = 3,
    windowDuration = 30,
  } = config;
  
  console.log('Analyse BPM démarrée:', {
    duration: audio.duration.toFixed(2),
    sampleRate: audio.sampleRate,
    minTempo,
    maxTempo,
    method,
  });
  
  try {
    // Charger Essentia
    const essentia = await loadEssentia();
    
    // Extraire les fenêtres d'analyse
    const windows = extractAnalysisWindows(
      audio.signal,
      audio.sampleRate,
      audio.duration,
      windowCount,
      windowDuration
    );
    
    // Analyser chaque fenêtre
    const windowResults: BPMResult[] = [];
    
    for (let i = 0; i < windows.length; i++) {
      const window = windows[i];
      console.log(`Analyse fenêtre ${i + 1}/${windows.length} (${window.start.toFixed(1)}s)...`);
      
      const result = await analyzeWindowBPM(
        essentia,
        window,
        audio.signal,
        audio.sampleRate,
        minTempo,
        maxTempo,
        method
      );
      
      windowResults.push(result);
    }
    
    // Voter pour le meilleur BPM
    const finalResult = voteBPM(windowResults);
    
    console.log('✅ Analyse BPM terminée:', {
      bpm: finalResult.bpm,
      confidence: finalResult.confidence.toFixed(3),
      windowResults: windowResults.map(r => r.bpm),
    });
    
    return finalResult;
  } catch (error) {
    console.error('❌ Erreur analyse BPM:', error);
    
    // Fallback : BPM par défaut avec confiance nulle
    return {
      bpm: 120,
      confidence: 0,
    };
  }
}

/**
 * Analyse le BPM d'une fenêtre audio avec BeatTrackerMultiFeature
 * @param essentia - Instance Essentia
 * @param window - Fenêtre audio à analyser
 * @param fullSignal - Signal audio complet
 * @param sampleRate - Taux d'échantillonnage
 * @param minTempo - BPM minimum
 * @param maxTempo - BPM maximum
 * @param method - Méthode d'extraction
 * @returns Résultat BPM pour cette fenêtre
 */
async function analyzeWindowBPM(
  essentia: any,
  window: AudioWindow,
  fullSignal: Float32Array,
  sampleRate: number,
  minTempo: number,
  maxTempo: number,
  method: 'multifeature' | 'degara'
): Promise<BPMResult> {
  console.log(`Analyse fenêtre BPM: ${window.data.length} samples (~${(window.data.length / sampleRate).toFixed(1)}s)`);
  
  // Convertir en Vector Essentia
  const vector = essentia.arrayToVector(window.data);
  
  // Utiliser BeatTrackerMultiFeature (optimisé pour 60s max)
  console.log('Appel BeatTrackerMultiFeature...');
  const result = essentia.BeatTrackerMultiFeature(vector, maxTempo, minTempo);
  console.log('✅ BeatTrackerMultiFeature terminé');
  
  // Extraire les ticks et confidence
  const ticksVector = result.ticks;
  const ticksArray = Array.from(essentia.vectorToArray(ticksVector)) as number[];
  const confidence = result.confidence || 0;
  console.log(`Ticks trouvés: ${ticksArray.length}, confidence: ${confidence.toFixed(2)}`);
  
  // Calculer le BPM à partir des intervalles entre ticks (médiane)
  let bpm = 120; // Défaut
  if (ticksArray.length >= 2) {
    const intervals = ticksArray.slice(1).map((t, i) => t - ticksArray[i]);
    intervals.sort((a, b) => a - b);
    const medianInterval = intervals[Math.floor(intervals.length / 2)];
    bpm = 60 / medianInterval;
    console.log(`BPM calculé: ${bpm.toFixed(1)} (médiane des intervalles)`);
  }
  
  const estimates: number[] = [];
  const bpmIntervals: number[][] = [];
  
  // Valider et corriger le tempo (demi/double)
  if (ticksArray.length > 0) {
    console.log(`Avant correction: BPM=${bpm.toFixed(1)}, minTempo=${minTempo}, maxTempo=${maxTempo}`);
    bpm = validateAndCorrectTempo(
      bpm,
      ticksArray,
      window.data,
      sampleRate,
      minTempo,
      maxTempo
    );
    console.log(`Après correction: BPM=${bpm.toFixed(1)}`);
  }
  
  // Arrondir le BPM
  bpm = roundBPM(bpm);
  
  return {
    bpm,
    confidence,
    ticks: ticksArray,
    estimates,
    bpmIntervals,
  };
}

/**
 * Vote pour le meilleur BPM parmi les résultats des fenêtres
 * Utilise une médiane pondérée par la confiance
 * @param results - Résultats des fenêtres
 * @returns BPM final avec confiance agrégée
 */
function voteBPM(results: BPMResult[]): BPMResult {
  if (results.length === 0) {
    return { bpm: 120, confidence: 0 };
  }
  
  if (results.length === 1) {
    return results[0];
  }
  
  // Filtrer les résultats invalides
  const validResults = results.filter(r => isBPMValid(r.bpm, r.confidence));
  
  if (validResults.length === 0) {
    console.warn('Aucun résultat BPM valide, utilisation du premier');
    return results[0];
  }
  
  // Grouper les BPM similaires (tolérance ±2 BPM)
  const votes = groupSimilarBPMs(validResults, 2);
  
  // Trier par nombre de votes (pondérés par confiance)
  votes.sort((a, b) => {
    const scoreA = a.votes * a.confidence;
    const scoreB = b.votes * b.confidence;
    return scoreB - scoreA;
  });
  
  const winner = votes[0];
  
  console.log('Vote BPM:', {
    candidates: votes.map(v => `${v.bpm} (${v.votes} votes, conf: ${v.confidence.toFixed(2)})`),
    winner: winner.bpm,
  });
  
  return {
    bpm: winner.bpm,
    confidence: winner.confidence,
  };
}

/**
 * Groupe les BPM similaires et compte les votes
 * @param results - Résultats BPM
 * @param tolerance - Tolérance en BPM
 * @returns Votes groupés
 */
function groupSimilarBPMs(results: BPMResult[], tolerance: number): BPMVote[] {
  const groups: Map<number, BPMVote> = new Map();
  
  for (const result of results) {
    // Chercher un groupe existant proche
    let foundGroup = false;
    
    for (const [groupBPM, vote] of groups.entries()) {
      if (Math.abs(result.bpm - groupBPM) <= tolerance) {
        // Ajouter au groupe existant
        vote.votes++;
        vote.confidence = Math.max(vote.confidence, result.confidence);
        // Moyenne pondérée du BPM
        vote.bpm = (vote.bpm * (vote.votes - 1) + result.bpm) / vote.votes;
        foundGroup = true;
        break;
      }
    }
    
    // Créer un nouveau groupe si nécessaire
    if (!foundGroup) {
      groups.set(result.bpm, {
        bpm: result.bpm,
        confidence: result.confidence,
        votes: 1,
      });
    }
  }
  
  return Array.from(groups.values());
}

/**
 * Analyse BPM rapide (une seule passe, sans fenêtrage)
 * Utile pour preview ou fichiers courts
 * @param audio - Audio traité
 * @param config - Configuration
 * @returns Résultat BPM
 */
export async function analyzeBPMFast(
  audio: ProcessedAudio,
  config: BPMConfig = {}
): Promise<BPMResult> {
  const {
    minTempo = 60,
    maxTempo = 190,
    method = 'multifeature',
  } = config;
  
  try {
    const essentia = await loadEssentia();
    
    // Analyser tout le signal (ou les 60 premières secondes)
    const maxSamples = Math.min(audio.signal.length, audio.sampleRate * 60);
    const signal = audio.signal.subarray(0, maxSamples);
    
    const vector = arrayToVector(essentia, signal);
    
    const result = essentia.RhythmExtractor2013(vector, {
      method,
      minTempo,
      maxTempo,
      sampleRate: audio.sampleRate,
    });
    
    let bpm = result.bpm;
    const ticks = result.ticks || [];
    
    // Correction demi/double si ticks disponibles
    if (ticks.length > 0) {
      bpm = validateAndCorrectTempo(
        bpm,
        ticks,
        signal,
        audio.sampleRate,
        minTempo,
        maxTempo
      );
    }
    
    return {
      bpm: roundBPM(bpm),
      confidence: result.confidence || 0,
      ticks,
      estimates: result.estimates,
      bpmIntervals: result.bpmIntervals,
    };
  } catch (error) {
    console.error('Erreur analyse BPM rapide:', error);
    return { bpm: 120, confidence: 0 };
  }
}
