/**
 * Audio Analyzer
 * Décode et analyse un fichier audio avec Web Audio API
 * 100% local, aucune donnée envoyée à un serveur
 */

export interface AudioData {
  audioBuffer: AudioBuffer;
  sampleRate: number;
  duration: number;
  channelData: Float32Array;
}

/**
 * Décode un fichier audio en AudioBuffer
 * @param file - Fichier audio (MP3, WAV, M4A)
 * @returns Données audio décodées
 */
export async function decodeAudioFile(file: File): Promise<AudioData> {
  // Créer un AudioContext
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  
  try {
    // Lire le fichier en ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    
    // Décoder l'audio
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    
    // Extraire les données du premier canal (mono)
    const channelData = audioBuffer.getChannelData(0);
    
    return {
      audioBuffer,
      sampleRate: audioBuffer.sampleRate,
      duration: audioBuffer.duration,
      channelData,
    };
  } finally {
    // Fermer le contexte audio pour libérer les ressources
    await audioContext.close();
  }
}

/**
 * Convertit un AudioBuffer en données mono
 * @param audioBuffer - Buffer audio
 * @returns Données mono (moyenne des canaux si stéréo)
 */
export function getMonoData(audioBuffer: AudioBuffer): Float32Array {
  const numberOfChannels = audioBuffer.numberOfChannels;
  
  if (numberOfChannels === 1) {
    return audioBuffer.getChannelData(0);
  }
  
  // Moyenne des canaux pour stéréo
  const length = audioBuffer.length;
  const monoData = new Float32Array(length);
  
  for (let channel = 0; channel < numberOfChannels; channel++) {
    const channelData = audioBuffer.getChannelData(channel);
    for (let i = 0; i < length; i++) {
      monoData[i] += channelData[i] / numberOfChannels;
    }
  }
  
  return monoData;
}

/**
 * Calcule l'enveloppe d'amplitude (pour détection de beats)
 * @param data - Données audio
 * @param windowSize - Taille de la fenêtre d'analyse
 * @returns Enveloppe d'amplitude
 */
export function calculateAmplitudeEnvelope(
  data: Float32Array,
  windowSize: number = 512
): Float32Array {
  const length = Math.floor(data.length / windowSize);
  const envelope = new Float32Array(length);
  
  for (let i = 0; i < length; i++) {
    let sum = 0;
    const start = i * windowSize;
    const end = start + windowSize;
    
    for (let j = start; j < end && j < data.length; j++) {
      sum += Math.abs(data[j]);
    }
    
    envelope[i] = sum / windowSize;
  }
  
  return envelope;
}

/**
 * Applique un filtre passe-bas simple
 * @param data - Données audio
 * @param cutoff - Fréquence de coupure (0-1)
 * @returns Données filtrées
 */
export function lowPassFilter(data: Float32Array, cutoff: number = 0.1): Float32Array {
  const filtered = new Float32Array(data.length);
  let previous = data[0];
  
  for (let i = 0; i < data.length; i++) {
    filtered[i] = previous + cutoff * (data[i] - previous);
    previous = filtered[i];
  }
  
  return filtered;
}

/**
 * Formate une durée en secondes vers MM:SS
 * @param seconds - Durée en secondes
 * @returns Durée formatée
 */
export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds);
  const secs = Math.floor((seconds - mins) * 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
