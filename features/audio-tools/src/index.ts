// Audio tools package - ready for future components

export * from './key-bpm-finder';


// Barrel propre pour éviter les exports ambigus
export { processAutoCutAudioFile, exportToWav } from "./auto-cut/core/audio-processor";
export { trimSilence } from "./auto-cut/core/silence-trimmer";
export type { TrimResult as AutoCutResult } from "./auto-cut/core/silence-trimmer";
