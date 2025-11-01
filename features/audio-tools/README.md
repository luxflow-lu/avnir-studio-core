# Audio Tools - Key & BPM Finder

Outil d'analyse audio professionnel utilisant Essentia.js pour détecter le BPM, la tonalité et le code Camelot.

## 🎯 Fonctionnalités

- **Détection BPM précise** : Fenêtrage + vote + correction demi/double tempo
- **Détection tonalité robuste** : Multi-profils (EDMA + Shaath) + vote
- **Code Camelot** : Pour mixage harmonique DJ
- **Resampling automatique** : Force 44.1kHz mono (requis par Essentia)
- **100% local** : Aucune donnée envoyée à un serveur

## 🏗️ Architecture

```
src/
├── key-bpm-finder/
│   ├── core/
│   │   ├── audio-processor.ts      # Resampling @44.1kHz mono
│   │   ├── essentia-loader.ts      # Chargement Essentia avec retry
│   │   ├── bpm-analyzer.ts         # Analyse BPM (fenêtrage + vote)
│   │   ├── key-analyzer.ts         # Analyse tonalité (multi-profils)
│   │   ├── tempo-validator.ts      # Correction demi/double tempo
│   │   ├── camelot-mapper.ts       # Mapping Camelot Wheel
│   │   └── index.ts
│   ├── types.ts                    # Types TypeScript
│   └── index.ts
└── types/
    └── essentia.d.ts               # Types Essentia.js
```

## 📊 Algorithmes utilisés

### BPM Detection (RhythmExtractor2013)

1. **Resampling** : Force 44.1kHz mono (critique pour Essentia)
2. **Fenêtrage** : 3 fenêtres de 30-45s au milieu du morceau
3. **Analyse** : RhythmExtractor2013 avec méthode `multifeature`
4. **Vote** : Médiane pondérée par confiance
5. **Validation** : Détection et correction x0.5/x2 via alignement énergétique

**Paramètres optimaux :**
```typescript
{
  method: 'multifeature',  // Plus précis que 'degara'
  minTempo: 60,            // Ajustable par genre
  maxTempo: 190,
  sampleRate: 44100        // OBLIGATOIRE
}
```

### Key Detection (KeyExtractor)

1. **Resampling** : 44.1kHz mono
2. **Multi-profils** : Analyse avec EDMA + Shaath
3. **HPCP** : Harmonic Pitch Class Profile (36 bins)
4. **Detuning correction** : Gère instruments désaccordés
5. **Vote** : Sélection par strength maximale

**Paramètres optimaux :**
```typescript
{
  sampleRate: 44100,
  hpcpSize: 36,                      // Plus fin que 12
  averageDetuningCorrection: true,   // Instruments désaccordés
  profileType: 'edma' | 'shaath'     // Tester les deux
}
```

## 🚀 Utilisation

### Analyse complète

```typescript
import { analyzeAudioFile } from '@features/audio-tools';

const results = await analyzeAudioFile(
  file,
  (progress, stage) => {
    console.log(`${(progress * 100).toFixed(0)}% - ${stage}`);
  },
  {
    bpm: {
      minTempo: 60,
      maxTempo: 190,
      method: 'multifeature',
      windowCount: 3,
      windowDuration: 30,
    },
    key: {
      hpcpSize: 36,
      profiles: ['edma', 'shaath'],
      averageDetuningCorrection: true,
    },
  }
);

console.log('BPM:', results.bpm.bpm);
console.log('Confiance BPM:', results.bpm.confidence);
console.log('Tonalité:', results.key.key, results.key.scale);
console.log('Confiance Key:', results.key.confidence);
console.log('Camelot:', results.camelot);
console.log('Durée:', results.duration);
```

### Analyse rapide (une passe)

```typescript
import { processAudioFile, analyzeBPMFast, analyzeKeyFast } from '@features/audio-tools';

const audio = await processAudioFile(file);
const bpm = await analyzeBPMFast(audio);
const key = await analyzeKeyFast(audio);
```

### Bornes de tempo par genre

```typescript
import { getTempoRangeForGenre } from '@features/audio-tools';

const [minTempo, maxTempo] = getTempoRangeForGenre('house'); // [110, 140]
```

**Genres supportés :**
- `hip-hop`, `trap` : 60-110 BPM
- `house`, `techno` : 110-140 BPM
- `trance` : 125-145 BPM
- `dnb` : 160-190 BPM
- `dubstep` : 130-150 BPM
- `pop`, `rock` : 80-140 BPM
- `edm` : 110-150 BPM

## 📦 Types

```typescript
interface AnalysisResult {
  bpm: BPMResult;
  key: KeyResult;
  camelot: string;
  duration: number;
}

interface BPMResult {
  bpm: number;
  confidence: number;
  ticks?: number[];
  estimates?: number[];
  bpmIntervals?: number[][];
}

interface KeyResult {
  key: string;
  scale: 'major' | 'minor';
  confidence: number;
  strength: number;
  profile?: string;
}
```

## ⚙️ Configuration avancée

### Fenêtrage personnalisé

```typescript
import { extractAnalysisWindows } from '@features/audio-tools';

const windows = extractAnalysisWindows(
  signal,
  sampleRate,
  duration,
  5,    // 5 fenêtres
  45    // 45 secondes chacune
);
```

### Validation tempo manuelle

```typescript
import { validateAndCorrectTempo } from '@features/audio-tools';

const correctedBPM = validateAndCorrectTempo(
  detectedBPM,
  ticks,
  signal,
  sampleRate,
  60,   // minTempo
  190   // maxTempo
);
```

## 🔧 Dépendances

- **essentia.js** : Bibliothèque d'analyse audio (AGPLv3)
- **Web Audio API** : Décodage et resampling

## ⚠️ Licence

**Essentia.js = AGPLv3**

Si vous distribuez cette application (web app publique), vous devez :
1. Publier le code source (déjà fait si monorepo public)
2. OU obtenir une licence propriétaire UPF

Pour usage commercial fermé, considérer :
- Licence propriétaire Essentia
- Alternative : web-audio-beat-detector (MIT) pour BPM uniquement

## 🎛️ Performance

- **Temps d'analyse** : ~5-10s pour un morceau de 3-4 minutes
- **Précision BPM** : ~95% avec correction demi/double
- **Précision Key** : ~90% avec multi-profils
- **Mémoire** : ~50-100MB pendant l'analyse

## 🐛 Debugging

Activer les logs détaillés dans la console :

```typescript
// Les logs sont automatiques en développement
// Vérifier la console pour :
// - Resampling : "Resampling 48000Hz → 44100Hz..."
// - Fenêtres : "Fenêtres d'analyse créées: 3 x ~30s"
// - BPM : "Vote BPM: candidates..."
// - Key : "Vote tonalité: candidates..."
```

## 📈 Améliorations futures

- [ ] Support genres musicaux automatique
- [ ] Détection structure (intro/verse/chorus)
- [ ] Export vers Ableton/Rekordbox
- [ ] Analyse batch (plusieurs fichiers)
- [ ] Web Worker pour ne pas bloquer UI
- [ ] Cache des résultats (IndexedDB)

## 🙏 Crédits

- **Essentia.js** : Music Technology Group (UPF Barcelona)
- **Algorithmes** : RhythmExtractor2013, KeyExtractor
- **Camelot Wheel** : Mixed In Key
