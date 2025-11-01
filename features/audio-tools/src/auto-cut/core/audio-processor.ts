/**
 * Audio Processor pour AutoCut
 * - Décode le fichier audio
 * - Convertit en mono
 * - (Optionnel) Resample à 44.1 kHz pour des fenêtres stables
 * - Exporte en WAV PCM16
 */

/* eslint-disable no-console */

import type { ProcessedAudio } from "../types";

const TARGET_SR = 44100;

/**
 * API principale attendue par l'UI
 * (alias vers processAudioFile pour compat)
 */
export async function processAutoCutAudioFile(file: File): Promise<ProcessedAudio> {
  return processAudioFile(file);
}

/**
 * Décode un fichier audio, convertit en mono et resample à 44.1 kHz
 */
export async function processAudioFile(file: File): Promise<ProcessedAudio> {
  const arrayBuffer = await file.arrayBuffer();

  const AudioContextClass =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  const tempContext = new AudioContextClass();

  try {
    // 1) Decode
    const decoded = await tempContext.decodeAudioData(arrayBuffer);
    const origSR = decoded.sampleRate;
    const origDur = decoded.duration;
    console.log(`Audio décodé: ${origSR}Hz, ${decoded.numberOfChannels} canaux, ${origDur.toFixed(2)}s`);

    // 2) Mono (Float32Array copie)
    const mono = audioBufferToMonoCopy(decoded);

    // 3) Resample → 44.1 kHz mono (pour cohérence des fenêtres)
    const { signal, sampleRate } =
      origSR === TARGET_SR
        ? { signal: mono, sampleRate: origSR }
        : await resampleMonoFloat32(mono, origSR, TARGET_SR);

    console.log(`Fichier traité: ${ (signal.length / sampleRate).toFixed(2) }s @${sampleRate}Hz`);

    return {
      signal,
      sampleRate,
      duration: signal.length / sampleRate,
      originalDuration: origDur,
    };
  } finally {
    await tempContext.close();
  }
}

/**
 * Convertit un AudioBuffer en mono (moyenne des canaux) avec COPIE
 */
function audioBufferToMonoCopy(ab: AudioBuffer): Float32Array {
  const { numberOfChannels, length } = ab;

  if (numberOfChannels === 1) {
    // Copie pour détacher de l'AudioBuffer
    return new Float32Array(ab.getChannelData(0));
  }

  const out = new Float32Array(length);
  for (let ch = 0; ch < numberOfChannels; ch++) {
    const data = ab.getChannelData(ch);
    for (let i = 0; i < length; i++) {
      out[i] += data[i] / numberOfChannels;
    }
  }
  return out;
}

/**
 * Resample un Float32Array mono vers targetSR.
 * Tente un OfflineAudioContext pour une qualité max.
 * Fallback linéaire si indisponible.
 */
async function resampleMonoFloat32(
  mono: Float32Array,
  srcSR: number,
  targetSR: number
): Promise<{ signal: Float32Array; sampleRate: number }> {
  try {
    // Crée un AudioBuffer mono dans le SR source
    const ctx = new (window.OfflineAudioContext || (window as any).webkitOfflineAudioContext)(
      1, // 1 canal
      Math.ceil((mono.length / srcSR) * targetSR),
      targetSR
    ) as OfflineAudioContext;

    const bufferSrcCtx = new (window.OfflineAudioContext || (window as any).webkitOfflineAudioContext)(
      1,
      mono.length,
      srcSR
    ) as OfflineAudioContext;

    // Crée un buffer mono @ srcSR et copie les données
    const srcBuffer = bufferSrcCtx.createBuffer(1, mono.length, srcSR);
    // Copie manuelle pour éviter les conflits de types ArrayBufferLike
    const channelData = srcBuffer.getChannelData(0);
    for (let i = 0; i < mono.length; i++) {
      channelData[i] = mono[i];
    }

    // Utilise le ctx target pour faire le rendu au sample rate cible
    const node = ctx.createBufferSource();
    node.buffer = srcBuffer as unknown as AudioBuffer; // compatibles entre OfflineAudioContext
    node.connect(ctx.destination);
    node.start(0);
    const rendered = await ctx.startRendering();

    const renderedMono = new Float32Array(rendered.getChannelData(0)); // copie
    return { signal: renderedMono, sampleRate: targetSR };
  } catch (e) {
    console.warn("[resampleMonoFloat32] OfflineAudioContext indisponible, fallback linéaire.", e);
    // Fallback linéaire simple
    const ratio = targetSR / srcSR;
    const outLen = Math.round(mono.length * ratio);
    const out = new Float32Array(outLen);
    for (let i = 0; i < outLen; i++) {
      const pos = i / ratio;
      const i0 = Math.floor(pos);
      const i1 = Math.min(mono.length - 1, i0 + 1);
      const frac = pos - i0;
      out[i] = mono[i0] * (1 - frac) + mono[i1] * frac;
    }
    return { signal: out, sampleRate: targetSR };
  }
}

/**
 * Exporte un signal mono Float32 en WAV PCM 16 bits
 */
export function exportToWav(signal: Float32Array, sampleRate: number): Blob {
  const numChannels = 1;
  const bitsPerSample = 16;
  const bytesPerSample = bitsPerSample / 8;
  const blockAlign = numChannels * bytesPerSample;

  const dataSize = signal.length * blockAlign;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  // RIFF/WAVE header
  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true); // PCM fmt chunk size
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true); // byte rate
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);
  writeString(view, 36, "data");
  view.setUint32(40, dataSize, true);

  // Float32 [-1,1] -> Int16 little endian
  let offset = 44;
  for (let i = 0; i < signal.length; i++) {
    const s = Math.max(-1, Math.min(1, signal[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    offset += 2;
  }

  return new Blob([buffer], { type: "audio/wav" });
}

function writeString(view: DataView, offset: number, str: string) {
  for (let i = 0; i < str.length; i++) {
    view.setUint8(offset + i, str.charCodeAt(i));
  }
}
