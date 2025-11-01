/**
 * Type definitions for essentia.js
 * https://mtg.github.io/essentia.js/
 */

declare module 'essentia.js' {
  export class Essentia {
    constructor(wasmModule: any);
    
    version?: string;
    algorithmNames?: string[];
    module?: any;
    
    // Algorithmes disponibles dans l'API JS
    BeatTrackerMultiFeature(signal: any, maxTempo?: number, minTempo?: number): BeatTrackerResult;
    BeatTrackerDegara(signal: any, maxTempo?: number, minTempo?: number): { ticks: any };
    Key(hpcp: any, numHarmonics?: number, pcpSize?: number, profileType?: string, slope?: number, useMajMin?: boolean, usePolyphony?: boolean, useThreeChords?: boolean): KeyResult;
    
    arrayToVector(array: Float32Array): any;
    vectorToArray(vector: any): Float32Array;
    reset(): void;
  }
  
  // EssentiaWASM peut être un objet (build sync) ou une fonction (build async)
  export const EssentiaWASM: any;
  
  export interface BeatTrackerResult {
    ticks: any; // VectorFloat
    confidence: number;
  }
  
  export interface KeyResult {
    key: string;
    scale: string;
    strength: number;
    firstToSecondRelativeStrength?: number;
  }
  
  export class EssentiaExtractor {
    constructor(wasmModule: any);
    
    FrameGenerator(signal: Float32Array, frameSize?: number, hopSize?: number): any; // VectorVectorFloat
    hpcpExtractor(frame: Float32Array, sampleRate?: number, asVector?: boolean, config?: any): any;
    audioBufferToMonoSignal(audioBuffer: AudioBuffer): Float32Array;
  }
  
  export class EssentiaModel {
    constructor(wasmModule: any, modelURL: string, graphURL?: string);
  }
  
  export class EssentiaPlot {
    // Plotting utilities
  }
}
