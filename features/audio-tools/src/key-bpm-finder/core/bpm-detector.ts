/**
 * BPM Detector
 * Détecte le tempo (BPM) d'un fichier audio
 * Utilise l'analyse de l'enveloppe d'amplitude et l'autocorrélation
 */

import { calculateAmplitudeEnvelope, lowPassFilter } from './audio-analyzer';

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
  // 1. Calculer l'enveloppe d'amplitude
  const windowSize = Math.floor(sampleRate * 0.01); // 10ms windows
  const envelope = calculateAmplitudeEnvelope(audioData, windowSize);
  
  // 2. Appliquer un filtre passe-bas pour lisser
  const filtered = lowPassFilter(envelope, 0.2);
  
  // 3. Détecter les pics (beats potentiels)
  const peaks = detectPeaks(filtered);
  
  // 4. Calculer les intervalles entre pics
  const intervals = calculateIntervals(peaks);
  
  // 5. Trouver l'intervalle le plus fréquent (tempo)
  const bpm = intervalsToBPM(intervals, sampleRate, windowSize);
  
  // 6. Calculer la confiance basée sur la régularité des intervalles
  const confidence = calculateConfidence(intervals);
  
  return {
    bpm: Math.round(bpm),
    confidence,
  };
}

/**
 * Détecte les pics dans l'enveloppe d'amplitude
 * @param data - Enveloppe d'amplitude
 * @returns Indices des pics
 */
function detectPeaks(data: Float32Array): number[] {
  const peaks: number[] = [];
  const threshold = calculateThreshold(data);
  const minDistance = 10; // Distance minimale entre pics
  
  for (let i = 1; i < data.length - 1; i++) {
    // Un pic est un maximum local au-dessus du seuil
    if (
      data[i] > threshold &&
      data[i] > data[i - 1] &&
      data[i] > data[i + 1]
    ) {
      // Vérifier la distance avec le dernier pic
      if (peaks.length === 0 || i - peaks[peaks.length - 1] >= minDistance) {
        peaks.push(i);
      }
    }
  }
  
  return peaks;
}

/**
 * Calcule un seuil dynamique pour la détection de pics
 * @param data - Données
 * @returns Seuil
 */
function calculateThreshold(data: Float32Array): number {
  let sum = 0;
  let max = 0;
  
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
    max = Math.max(max, data[i]);
  }
  
  const mean = sum / data.length;
  
  // Seuil = moyenne + 30% de la différence entre max et moyenne
  return mean + (max - mean) * 0.3;
}

/**
 * Calcule les intervalles entre pics consécutifs
 * @param peaks - Indices des pics
 * @returns Intervalles
 */
function calculateIntervals(peaks: number[]): number[] {
  const intervals: number[] = [];
  
  for (let i = 1; i < peaks.length; i++) {
    intervals.push(peaks[i] - peaks[i - 1]);
  }
  
  return intervals;
}

/**
 * Convertit les intervalles en BPM
 * @param intervals - Intervalles entre beats
 * @param sampleRate - Taux d'échantillonnage
 * @param windowSize - Taille de fenêtre utilisée
 * @returns BPM
 */
function intervalsToBPM(
  intervals: number[],
  sampleRate: number,
  windowSize: number
): number {
  if (intervals.length === 0) {
    return 120; // BPM par défaut si aucun beat détecté
  }
  
  // Grouper les intervalles similaires
  const histogram = createHistogram(intervals, 5);
  
  // Trouver l'intervalle le plus fréquent
  let maxCount = 0;
  let mostFrequentInterval = 0;
  
  for (const [interval, count] of histogram.entries()) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequentInterval = interval;
    }
  }
  
  // Convertir l'intervalle en BPM
  // intervalle (en samples de windowSize) → secondes → BPM
  const secondsPerBeat = (mostFrequentInterval * windowSize) / sampleRate;
  const bpm = 60 / secondsPerBeat;
  
  // Normaliser le BPM dans une plage raisonnable (60-180)
  let normalizedBPM = bpm;
  
  while (normalizedBPM < 60) {
    normalizedBPM *= 2;
  }
  
  while (normalizedBPM > 180) {
    normalizedBPM /= 2;
  }
  
  return normalizedBPM;
}

/**
 * Crée un histogramme des intervalles
 * @param intervals - Intervalles
 * @param bucketSize - Taille des buckets
 * @returns Histogramme
 */
function createHistogram(intervals: number[], bucketSize: number): Map<number, number> {
  const histogram = new Map<number, number>();
  
  for (const interval of intervals) {
    const bucket = Math.round(interval / bucketSize) * bucketSize;
    histogram.set(bucket, (histogram.get(bucket) || 0) + 1);
  }
  
  return histogram;
}

/**
 * Calcule la confiance basée sur la régularité des intervalles
 * @param intervals - Intervalles entre beats
 * @returns Confiance (0-1)
 */
function calculateConfidence(intervals: number[]): number {
  if (intervals.length < 2) {
    return 0;
  }
  
  // Calculer la variance des intervalles
  const mean = intervals.reduce((sum, val) => sum + val, 0) / intervals.length;
  const variance =
    intervals.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) /
    intervals.length;
  const stdDev = Math.sqrt(variance);
  
  // Coefficient de variation (CV)
  const cv = stdDev / mean;
  
  // Confiance inversement proportionnelle au CV
  // CV faible = intervalles réguliers = haute confiance
  const confidence = Math.max(0, Math.min(1, 1 - cv));
  
  return confidence;
}
