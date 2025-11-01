/**
 * Key Detector
 * Détecte la tonalité musicale d'un fichier audio
 * Utilise l'analyse du profil chromatique (chroma features)
 */

export interface KeyResult {
  key: string;
  confidence: number;
}

// Noms des notes
const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Profils de tonalité (Krumhansl-Schmuckler key-finding algorithm)
// Valeurs normalisées pour chaque degré de la gamme
const MAJOR_PROFILE = [6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88];
const MINOR_PROFILE = [6.33, 2.68, 3.52, 5.38, 2.60, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17];

/**
 * Détecte la tonalité d'un fichier audio
 * @param audioData - Données audio (mono)
 * @param sampleRate - Taux d'échantillonnage
 * @returns Tonalité détectée avec niveau de confiance
 */
export function detectKey(audioData: Float32Array, sampleRate: number): KeyResult {
  // 1. Calculer le profil chromatique
  const chromaProfile = calculateChromaProfile(audioData, sampleRate);
  
  // 2. Comparer avec les profils majeur/mineur pour chaque tonalité
  const scores = calculateKeyScores(chromaProfile);
  
  // 3. Trouver la tonalité avec le meilleur score
  const bestMatch = findBestMatch(scores);
  
  return bestMatch;
}

/**
 * Calcule le profil chromatique (distribution des 12 notes)
 * @param audioData - Données audio
 * @param sampleRate - Taux d'échantillonnage
 * @returns Profil chromatique (12 valeurs)
 */
function calculateChromaProfile(audioData: Float32Array, sampleRate: number): number[] {
  const chroma = new Array(12).fill(0);
  const fftSize = 2048; // Réduit de 4096 à 2048
  const hopSize = fftSize * 4; // Augmenté pour moins de fenêtres
  
  // Limiter l'analyse aux premières 30 secondes max
  const maxSamples = Math.min(audioData.length, sampleRate * 30);
  
  // Fréquences de référence pour les 12 notes (A4 = 440Hz)
  const A4 = 440;
  const noteFrequencies = NOTE_NAMES.map((_, i) => {
    // Fréquence de la note i (en partant de C4)
    const semitonesFromA4 = i - 9; // C est 9 demi-tons en dessous de A
    return A4 * Math.pow(2, semitonesFromA4 / 12);
  });
  
  // Analyser par fenêtres (beaucoup moins de fenêtres)
  for (let i = 0; i < maxSamples - fftSize; i += hopSize) {
    const window = audioData.slice(i, i + fftSize);
    const spectrum = simpleFFT(window);
    
    // Mapper le spectre aux 12 notes chromatiques
    for (let note = 0; note < 12; note++) {
      const freq = noteFrequencies[note];
      const binIndex = Math.round((freq * fftSize) / sampleRate);
      
      if (binIndex < spectrum.length) {
        chroma[note] += spectrum[binIndex];
      }
    }
  }
  
  // Normaliser
  const sum = chroma.reduce((a, b) => a + b, 0);
  return chroma.map(v => (sum > 0 ? v / sum : 0));
}

/**
 * FFT simplifié (pour analyse spectrale basique)
 * @param data - Données temporelles
 * @returns Magnitude du spectre
 */
function simpleFFT(data: Float32Array): number[] {
  const N = Math.min(data.length, 1024); // Limiter à 1024 samples max
  const spectrum = new Array(N / 2).fill(0);
  
  // DFT simplifiée avec sous-échantillonnage
  const step = Math.max(1, Math.floor(data.length / N));
  
  for (let k = 0; k < N / 2; k += 2) { // Sauter 1 sur 2 pour aller plus vite
    let real = 0;
    let imag = 0;
    
    for (let n = 0; n < N; n += step) {
      const angle = (2 * Math.PI * k * n) / N;
      real += data[n * step] * Math.cos(angle);
      imag -= data[n * step] * Math.sin(angle);
    }
    
    spectrum[k] = Math.sqrt(real * real + imag * imag);
  }
  
  return spectrum;
}

/**
 * Calcule les scores de corrélation pour toutes les tonalités
 * @param chromaProfile - Profil chromatique
 * @returns Scores pour chaque tonalité
 */
function calculateKeyScores(chromaProfile: number[]): Array<{ key: string; score: number }> {
  const scores: Array<{ key: string; score: number }> = [];
  
  // Tester chaque tonalité majeure
  for (let root = 0; root < 12; root++) {
    const rotatedProfile = rotateArray(MAJOR_PROFILE, root);
    const score = correlate(chromaProfile, rotatedProfile);
    scores.push({
      key: NOTE_NAMES[root],
      score,
    });
  }
  
  // Tester chaque tonalité mineure
  for (let root = 0; root < 12; root++) {
    const rotatedProfile = rotateArray(MINOR_PROFILE, root);
    const score = correlate(chromaProfile, rotatedProfile);
    scores.push({
      key: NOTE_NAMES[root] + 'm',
      score,
    });
  }
  
  return scores;
}

/**
 * Calcule la corrélation entre deux profils
 * @param profile1 - Premier profil
 * @param profile2 - Deuxième profil
 * @returns Score de corrélation
 */
function correlate(profile1: number[], profile2: number[]): number {
  let sum = 0;
  
  for (let i = 0; i < profile1.length; i++) {
    sum += profile1[i] * profile2[i];
  }
  
  return sum;
}

/**
 * Rotation circulaire d'un tableau
 * @param array - Tableau à rotation
 * @param steps - Nombre de pas
 * @returns Tableau tourné
 */
function rotateArray(array: number[], steps: number): number[] {
  const rotated = [...array];
  const n = array.length;
  const actualSteps = ((steps % n) + n) % n;
  
  return [...rotated.slice(actualSteps), ...rotated.slice(0, actualSteps)];
}

/**
 * Trouve la tonalité avec le meilleur score
 * @param scores - Scores de toutes les tonalités
 * @returns Meilleure tonalité avec confiance
 */
function findBestMatch(scores: Array<{ key: string; score: number }>): KeyResult {
  // Trier par score décroissant
  scores.sort((a, b) => b.score - a.score);
  
  const best = scores[0];
  const secondBest = scores[1];
  
  // Confiance basée sur la différence entre le meilleur et le second
  const confidence = Math.min(1, (best.score - secondBest.score) / best.score);
  
  return {
    key: best.key,
    confidence,
  };
}
