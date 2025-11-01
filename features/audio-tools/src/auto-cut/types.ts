/**
 * Types pour l'outil AutoCut
 */

export interface ProcessedAudio {
  signal: Float32Array;
  sampleRate: number;
  duration: number;
  originalDuration: number;
}

export interface TrimResult {
  trimmed: Float32Array;
  startSec: number;
  endSec: number;
  startSample: number;
  endSample: number;
  removedStart: number;
  removedEnd: number;
}

export interface AutoCutResult {
  trimmed: Float32Array;
  sampleRate: number;
  originalDuration: number;
  trimmedDuration: number;
  startSec: number;
  endSec: number;
  removedStart: number;
  removedEnd: number;
}
