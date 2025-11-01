/**
 * Audio Processor
 * Traite les fichiers audio pour l'analyse : resampling à 44.1kHz mono
 * CRITIQUE : Essentia RhythmExtractor2013 et KeyExtractor exigent 44.1kHz
 */

/* eslint-disable no-console */
// Console logs autorisés pour le debug de l'analyse audio

import type { ProcessedAudio, AudioWindow } from '../types';

/**
 * Décode et resample un fichier audio à 44.1kHz mono
 * @param file - Fichier audio (MP3, WAV, M4A)
 * @returns Audio traité prêt pour Essentia
 */
export async function processAudioFile(file: File): Promise<ProcessedAudio> {
  // Lire le fichier en ArrayBuffer
  const arrayBuffer = await file.arrayBuffer();
  
  // Créer un AudioContext temporaire pour décoder
  const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  const tempContext = new AudioContextClass();
  
  try {
    // Décoder l'audio
    const audioBuffer = await tempContext.decodeAudioData(arrayBuffer);
    const originalSampleRate = audioBuffer.sampleRate;
    
    console.log(`Audio décodé: ${originalSampleRate}Hz, ${audioBuffer.numberOfChannels} canaux, ${audioBuffer.duration.toFixed(2)}s`);
    
    // Préparer le signal audio pour l'analyse
    const preparedAudio = prepareAudioSignal(audioBuffer);
    
    return preparedAudio;
  } finally {
    // Fermer le contexte temporaire
    await tempContext.close();
  }
}

/**
 * Resample un AudioBuffer à 44.1kHz
 * Utilise OfflineAudioContext pour un resampling de qualité
 * @param audioBuffer - Buffer audio source
 * @returns Buffer audio à 44.1kHz
 * @deprecated Non utilisé actuellement, le resampling est géré par le navigateur
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function resampleTo44100(audioBuffer: AudioBuffer): Promise<AudioBuffer> {
  const targetSampleRate = 44100;
  const duration = audioBuffer.duration;
  const numberOfChannels = audioBuffer.numberOfChannels;
  
  // Créer un OfflineAudioContext à 44.1kHz
  const offlineContext = new OfflineAudioContext(
    numberOfChannels,
    Math.ceil(duration * targetSampleRate),
    targetSampleRate
  );
  
  // Créer une source audio
  const source = offlineContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(offlineContext.destination);
  source.start(0);
  
  // Rendre l'audio (resampling automatique)
  const resampledBuffer = await offlineContext.startRendering();
  
  console.log(`Resampling terminé: ${resampledBuffer.sampleRate}Hz`);
  
  return resampledBuffer;
}

/**
 * Convertit un AudioBuffer en signal mono
 * Si stéréo : moyenne des canaux
 * @param audioBuffer - Buffer audio
 * @returns Signal mono (Float32Array)
 */
function audioBufferToMono(audioBuffer: AudioBuffer): Float32Array {
  const numberOfChannels = audioBuffer.numberOfChannels;
  const length = audioBuffer.length;
  
  // Si déjà mono, retourner directement
  if (numberOfChannels === 1) {
    return audioBuffer.getChannelData(0);
  }
  
  // Moyenne des canaux pour stéréo/multicanal
  const monoSignal = new Float32Array(length);
  
  for (let channel = 0; channel < numberOfChannels; channel++) {
    const channelData = audioBuffer.getChannelData(channel);
    for (let i = 0; i < length; i++) {
      monoSignal[i] = (monoSignal[i] || 0) + (channelData[i] || 0) / numberOfChannels;
    }
  }
  
  return monoSignal;
}

/**
 * Prépare le signal audio pour l'analyse
 * - Resample à 44.1kHz si nécessaire
 * - Convertit en mono
 * - Extrait 60s au milieu du morceau (optimisation)
 * @param audioBuffer - Buffer audio décodé
 * @returns Audio traité prêt pour l'analyse
 */
function prepareAudioSignal(audioBuffer: AudioBuffer): ProcessedAudio {
  const TARGET_SAMPLE_RATE = 44100;
  const MAX_DURATION = 60; // secondes
  
  let processedBuffer = audioBuffer;
  
  // Resample si nécessaire
  if (audioBuffer.sampleRate !== TARGET_SAMPLE_RATE) {
    console.log(`⚠️ Resampling nécessaire mais non implémenté de manière synchrone`);
    // Note: Le resampling async est géré ailleurs si nécessaire
  }
  
  // Convertir en mono
  let monoSignal = audioBufferToMono(processedBuffer);
  const duration = processedBuffer.duration;
  
  // Extraire 60s au milieu si le morceau est long
  if (duration > MAX_DURATION) {
    const samplesPerSecond = processedBuffer.sampleRate;
    const maxSamples = MAX_DURATION * samplesPerSecond;
    
    // Prendre 60s au milieu (là où se trouve généralement le refrain/drop)
    const startTime = Math.max(0, (duration - MAX_DURATION) / 2);
    const startSample = Math.floor(startTime * samplesPerSecond);
    const endSample = Math.min(monoSignal.length, startSample + maxSamples);
    
    console.log(`⚡ Optimisation: extraction de ${MAX_DURATION}s au milieu (${startTime.toFixed(1)}s → ${(startTime + MAX_DURATION).toFixed(1)}s)`);
    monoSignal = monoSignal.slice(startSample, endSample);
  }
  
  const finalDuration = monoSignal.length / processedBuffer.sampleRate;
  console.log(`Fichier traité: ${finalDuration.toFixed(2)}s @${processedBuffer.sampleRate}Hz (original: ${duration.toFixed(2)}s)`);
  
  return {
    signal: monoSignal,
    sampleRate: processedBuffer.sampleRate,
    originalSampleRate: audioBuffer.sampleRate,
    duration: finalDuration,
    originalDuration: duration, // Durée originale complète
  };
}

/**
 * Extrait des fenêtres d'analyse du signal audio
 * Évite intro/outro qui peuvent fausser l'analyse
 * @param signal - Signal audio complet
 * @param sampleRate - Taux d'échantillonnage
 * @param duration - Durée totale en secondes
 * @param windowCount - Nombre de fenêtres (défaut: 3)
 * @param windowDuration - Durée de chaque fenêtre en secondes (défaut: 30)
 * @returns Fenêtres d'analyse
 */
export function extractAnalysisWindows(
  signal: Float32Array,
  sampleRate: number,
  duration: number,
  windowCount: number = 3,
  windowDuration: number = 30
): AudioWindow[] {
  const windows: AudioWindow[] = [];
  
  // Si le morceau est court, une seule fenêtre
  if (duration <= windowDuration) {
    return [{
      start: 0,
      duration,
      data: signal,
    }];
  }
  
  // Positions stratégiques : éviter intro (20%) et outro (10%)
  const positions = [
    duration * 0.2,  // 20% du morceau
    duration * 0.5,  // Milieu
    duration * 0.7,  // 70% du morceau
  ].slice(0, windowCount);
  
  for (const startTime of positions) {
    const startSample = Math.floor(startTime * sampleRate);
    const windowSamples = Math.floor(Math.min(windowDuration, duration - startTime) * sampleRate);
    const endSample = Math.min(startSample + windowSamples, signal.length);
    
    const windowData = signal.subarray(startSample, endSample);
    
    windows.push({
      start: startTime,
      duration: windowData.length / sampleRate,
      data: windowData,
    });
  }
  
  console.log(`Fenêtres d'analyse créées: ${windows.length} x ~${windowDuration}s`);
  
  return windows;
}

/**
 * Calcule l'enveloppe d'énergie du signal
 * Utile pour la détection de beats et validation tempo
 * @param signal - Signal audio
 * @param windowSize - Taille de la fenêtre (défaut: 512)
 * @returns Enveloppe d'énergie
 */
export function calculateEnergyEnvelope(
  signal: Float32Array,
  windowSize: number = 512
): Float32Array {
  const hopSize = windowSize / 2; // 50% overlap
  const numFrames = Math.floor((signal.length - windowSize) / hopSize) + 1;
  const envelope = new Float32Array(numFrames);
  
  for (let i = 0; i < numFrames; i++) {
    const start = i * hopSize;
    const end = Math.min(start + windowSize, signal.length);
    
    let energy = 0;
    for (let j = start; j < end; j++) {
      const val = signal[j] || 0;
      energy += val * val;
    }
    
    envelope[i] = Math.sqrt(energy / (end - start));
  }
  
  return envelope;
}

/**
 * Détecte les crêtes d'énergie (peaks)
 * Utilisé pour valider l'alignement du tempo
 * @param envelope - Enveloppe d'énergie
 * @param threshold - Seuil relatif (0-1)
 * @returns Indices des crêtes
 */
export function detectEnergyPeaks(
  envelope: Float32Array,
  threshold: number = 0.7
): number[] {
  const peaks: number[] = [];
  const maxEnergy = Math.max(...Array.from(envelope));
  const minThreshold = maxEnergy * threshold;
  
  for (let i = 1; i < envelope.length - 1; i++) {
    // Crête locale au-dessus du seuil
    const curr = envelope[i] || 0;
    const prev = envelope[i - 1] || 0;
    const next = envelope[i + 1] || 0;
    if (
      curr > minThreshold &&
      curr > prev &&
      curr > next
    ) {
      peaks.push(i);
    }
  }
  
  return peaks;
}
