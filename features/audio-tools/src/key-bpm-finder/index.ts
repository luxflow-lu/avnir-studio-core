/**
 * Key & BPM Finder Feature
 * Analyse BPM, tonalité et code Camelot de fichiers audio
 * 
 * Utilise Essentia.js pour une détection professionnelle :
 * - BPM : RhythmExtractor2013 avec fenêtrage + vote + correction demi/double
 * - Key : KeyExtractor avec multi-profils (EDMA + Shaath) + vote
 * - Resampling automatique à 44.1kHz mono (requis par Essentia)
 */

export * from './core';
export * from './types';
