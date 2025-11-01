/**
 * Types pour l'analyse audio Key & BPM
 */

/**
 * Résultat d'analyse BPM
 */
export interface BPMResult {
  bpm: number;
  confidence: number;
  ticks?: number[];
  estimates?: number[];
  bpmIntervals?: number[][];
}

/**
 * Résultat d'analyse de tonalité
 */
export interface KeyResult {
  key: string;
  scale: 'major' | 'minor';
  confidence: number;
  strength: number;
  profile?: string;
}

/**
 * Résultat d'analyse complète
 */
export interface AnalysisResult {
  bpm: BPMResult;
  key: KeyResult;
  camelot: string;
  duration: number;
}

/**
 * Configuration pour l'analyse BPM
 */
export interface BPMConfig {
  minTempo?: number;
  maxTempo?: number;
  method?: 'multifeature' | 'degara';
  windowCount?: number;
  windowDuration?: number;
}

/**
 * Configuration pour l'analyse de tonalité
 */
export interface KeyConfig {
  hpcpSize?: number;
  profiles?: Array<'edma' | 'shaath' | 'krumhansl' | 'temperley'>;
  averageDetuningCorrection?: boolean;
}

/**
 * Fenêtre d'analyse audio
 */
export interface AudioWindow {
  start: number;
  duration: number;
  data: Float32Array;
}

/**
 * Données audio traitées (mono @44.1kHz)
 */
export interface ProcessedAudio {
  signal: Float32Array;
  sampleRate: number;
  duration: number; // Durée du signal analysé (peut être tronqué à 60s)
  originalSampleRate: number;
  originalDuration: number; // Durée complète du fichier original
}

/**
 * Instance Essentia
 */
export interface EssentiaInstance {
  RhythmExtractor2013: (signal: any, config: any) => any;
  KeyExtractor: (signal: any, config: any) => any;
  arrayToVector: (array: Float32Array) => any;
  vectorToArray: (vector: any) => Float32Array;
  version?: string;
  algorithmNames?: string[];
}

/**
 * Résultat de vote pour BPM
 */
export interface BPMVote {
  bpm: number;
  confidence: number;
  votes: number;
}

/**
 * Résultat de vote pour tonalité
 */
export interface KeyVote {
  key: string;
  scale: 'major' | 'minor';
  strength: number;
  votes: number;
}
