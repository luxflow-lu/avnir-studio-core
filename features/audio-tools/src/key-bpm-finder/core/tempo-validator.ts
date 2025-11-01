/**
 * Tempo Validator
 * Détecte et corrige les erreurs de demi/double tempo
 * Valide le BPM avec l'enveloppe d'énergie
 */

import type { BPMResult } from '../types';
import { calculateEnergyEnvelope, detectEnergyPeaks } from './audio-processor';

/**
 * Valide et corrige le BPM détecté
 * Teste x0.5, x1, x2 et choisit le meilleur alignement
 * @param bpm - BPM détecté
 * @param ticks - Positions des beats (en secondes)
 * @param signal - Signal audio
 * @param sampleRate - Taux d'échantillonnage
 * @param minTempo - BPM minimum acceptable
 * @param maxTempo - BPM maximum acceptable
 * @returns BPM corrigé
 */
export function validateAndCorrectTempo(
  bpm: number,
  ticks: number[],
  signal: Float32Array,
  sampleRate: number,
  minTempo: number = 60,
  maxTempo: number = 190
): number {
  // Candidats : demi, normal, double
  const candidates = [
    bpm / 2,
    bpm,
    bpm * 2,
  ].filter(tempo => tempo >= minTempo && tempo <= maxTempo);
  
  if (candidates.length === 0) {
    console.warn(`BPM ${bpm} hors limites [${minTempo}, ${maxTempo}], utilisation directe`);
    return bpm;
  }
  
  if (candidates.length === 1) {
    return candidates[0];
  }
  
  // CORRECTION HEURISTIQUE : Privilégier la plage 90-180 BPM (musique moderne)
  // Si le BPM est dans cette plage, le garder tel quel
  if (bpm >= 90 && bpm <= 180) {
    console.log(`✅ BPM dans la plage optimale (90-180): ${bpm.toFixed(1)}`);
    return bpm;
  }
  
  // Si le BPM est < 90, privilégier le double
  if (bpm < 90 && candidates.includes(bpm * 2)) {
    console.log(`⚡ Correction demi-tempo: ${bpm.toFixed(1)} → ${(bpm * 2).toFixed(1)} (BPM trop bas)`);
    return bpm * 2;
  }
  
  // Si le BPM est > 180, privilégier la moitié
  if (bpm > 180 && candidates.includes(bpm / 2)) {
    console.log(`⚡ Correction double-tempo: ${bpm.toFixed(1)} → ${(bpm / 2).toFixed(1)} (BPM trop haut)`);
    return bpm / 2;
  }
  
  // Calculer l'enveloppe d'énergie pour les cas ambigus
  const envelope = calculateEnergyEnvelope(signal, 512);
  const peaks = detectEnergyPeaks(envelope, 0.6);
  
  // Scorer chaque candidat
  const scores = candidates.map(tempo => ({
    tempo,
    score: scoreTempoAlignment(tempo, ticks, peaks, envelope.length, sampleRate),
  }));
  
  // Trier par score décroissant
  scores.sort((a, b) => b.score - a.score);
  
  const best = scores[0];
  
  console.log('Validation tempo:', {
    original: bpm,
    candidates: scores.map(s => `${s.tempo.toFixed(1)} (${s.score.toFixed(3)})`),
    selected: best.tempo,
  });
  
  return best.tempo;
}

/**
 * Score l'alignement d'un tempo avec les crêtes d'énergie
 * Plus le score est élevé, meilleur est l'alignement
 * @param tempo - BPM à tester
 * @param ticks - Positions des beats (secondes)
 * @param peaks - Indices des crêtes d'énergie
 * @param envelopeLength - Longueur de l'enveloppe
 * @param sampleRate - Taux d'échantillonnage
 * @returns Score d'alignement (0-1)
 */
function scoreTempoAlignment(
  tempo: number,
  ticks: number[],
  peaks: number[],
  envelopeLength: number,
  sampleRate: number
): number {
  if (ticks.length === 0 || peaks.length === 0) {
    return 0;
  }
  
  const beatPeriod = 60 / tempo; // Période en secondes
  const hopSize = 256; // Hop size de l'enveloppe
  
  // Convertir les ticks en indices d'enveloppe
  const tickIndices = ticks.map(t => Math.floor((t * sampleRate) / hopSize));
  
  // Calculer l'erreur de phase moyenne
  let totalPhaseError = 0;
  let validTicks = 0;
  
  for (const tickIdx of tickIndices) {
    if (tickIdx >= 0 && tickIdx < envelopeLength) {
      // Trouver la crête la plus proche
      const nearestPeak = findNearestPeak(tickIdx, peaks);
      if (nearestPeak !== -1) {
        const distance = Math.abs(tickIdx - nearestPeak);
        totalPhaseError += distance;
        validTicks++;
      }
    }
  }
  
  if (validTicks === 0) {
    return 0;
  }
  
  // Score inversement proportionnel à l'erreur moyenne
  const meanPhaseError = totalPhaseError / validTicks;
  const maxError = (beatPeriod * sampleRate) / hopSize / 2; // Demi-période max
  
  return Math.max(0, 1 - meanPhaseError / maxError);
}

/**
 * Trouve la crête la plus proche d'un indice
 * @param index - Indice cible
 * @param peaks - Liste des crêtes
 * @returns Indice de la crête la plus proche, ou -1
 */
function findNearestPeak(index: number, peaks: number[]): number {
  if (peaks.length === 0) return -1;
  
  let nearest = peaks[0];
  let minDistance = Math.abs(index - nearest);
  
  for (const peak of peaks) {
    const distance = Math.abs(index - peak);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = peak;
    }
  }
  
  return nearest;
}

/**
 * Détermine les bornes de tempo selon le genre musical
 * @param genre - Genre musical (optionnel)
 * @returns [minTempo, maxTempo]
 */
export function getTempoRangeForGenre(genre?: string): [number, number] {
  if (!genre) {
    return [60, 190]; // Range par défaut
  }
  
  const ranges: Record<string, [number, number]> = {
    'hip-hop': [60, 110],
    'trap': [60, 110],
    'house': [110, 140],
    'techno': [120, 140],
    'trance': [125, 145],
    'dnb': [160, 190],
    'dubstep': [130, 150],
    'pop': [80, 140],
    'rock': [90, 140],
    'edm': [110, 150],
  };
  
  return ranges[genre.toLowerCase()] || [60, 190];
}

/**
 * Valide la cohérence d'un BPM
 * Vérifie que le BPM est dans une plage raisonnable
 * @param bpm - BPM à valider
 * @param confidence - Niveau de confiance
 * @returns true si le BPM semble valide
 */
export function isBPMValid(bpm: number, confidence: number): boolean {
  // BPM dans une plage musicale raisonnable
  if (bpm < 40 || bpm > 240) {
    return false;
  }
  
  // Confiance minimale
  if (confidence < 0.3) {
    return false;
  }
  
  return true;
}

/**
 * Arrondit le BPM au format 000.0 (une décimale max)
 * @param bpm - BPM brut
 * @returns BPM arrondi
 */
export function roundBPM(bpm: number): number {
  // Arrondir à une décimale
  const rounded = Math.round(bpm * 10) / 10;
  
  // Si c'est un entier (.0), retourner l'entier
  if (rounded === Math.floor(rounded)) {
    return Math.floor(rounded);
  }
  
  return rounded;
}
