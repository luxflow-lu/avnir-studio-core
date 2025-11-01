// silence-trimmer.ts — AutoCut "from scratch 2.1"
// Fin détectée par fenêtre stricte (rolling window) : niveau proche du bruit + plateau + stabilité.
// Zéro dépendance externe.

/* eslint-disable no-console */

export interface TrimOptions {
  sampleRate: number;
  windowSec?: number;    // fenêtre RMS (s)          — def 0.02
  hopSec?: number;       // pas (s)                  — def 0.02
  minAboveSec?: number;  // durée min "au-dessus"    — def 0.25
  minBelowSec?: number;  // durée min "quiet"        — def 1.25
  marginDb?: number;     // bruit + marginDb         — def 14
  slopeLimit?: number;   // |pente| <= slopeLimit    — def 0.25 dB/s
  varWinSec?: number;    // fenêtre variance (s)     — def 1.0
  varLimitDb?: number;   // std local max (dB)       — def 1.0
  prerollSec?: number;   // sécurité avant start     — def 0.10
  postrollSec?: number;  // sécurité après end       — def 0.25
}

export interface TrimResult {
  trimmed: Float32Array;
  sampleRate: number;
  originalDuration: number;
  trimmedDuration: number;
  startSec: number;
  endSec: number;
  startSample: number;
  endSample: number;
  removedStart: number;
  removedEnd: number;
}

const DB_MIN = -120;

function toDb(x: number) {
  return 20 * Math.log10(x + 1e-12);
}

function percentileDb(arr: Float32Array, p: number): number {
  const a = Array.from(arr).filter(Number.isFinite).sort((x, y) => x - y);
  if (!a.length) return DB_MIN;
  const k = Math.min(a.length - 1, Math.max(0, Math.round((p / 100) * (a.length - 1))));
  return a[k] || DB_MIN;
}

function rmsDb(signal: Float32Array, win: number, hop: number): Float32Array {
  const frames = Math.max(1, Math.floor((signal.length - win) / hop) + 1);
  const out = new Float32Array(frames);
  for (let i = 0, idx = 0; i < frames; i++, idx += hop) {
    let acc = 0;
    for (let j = 0; j < win; j++) {
      const x = signal[idx + j] || 0;
      acc += x * x;
    }
    out[i] = toDb(Math.sqrt(acc / win));
  }
  return out;
}

function movingMedianDb(src: Float32Array, wFrames: number): Float32Array {
  if (wFrames <= 1) return src;
  const out = new Float32Array(src.length);
  const buf: number[] = [];
  for (let i = 0; i < src.length; i++) {
    buf.push(src[i] || 0);
    if (buf.length > wFrames) buf.shift();
    const tmp = [...buf].sort((a, b) => a - b);
    out[i] = tmp[Math.floor(tmp.length / 2)] || 0;
  }
  return out;
}

function movingSlopeDbPerSec(med: Float32Array, framesLag: number, secPerFrame: number): Float32Array {
  const out = new Float32Array(med.length);
  for (let i = framesLag; i < med.length; i++) {
    out[i] = ((med[i] || 0) - (med[i - framesLag] || 0)) / (framesLag * secPerFrame);
  }
  return out; // i < framesLag => 0
}

function movingStdDb(med: Float32Array, wFrames: number): Float32Array {
  if (wFrames <= 1) return new Float32Array(med.length);
  const out = new Float32Array(med.length);
  let sum = 0, sum2 = 0;
  const q: number[] = [];
  for (let i = 0; i < med.length; i++) {
    const v = med[i] || 0;
    q.push(v); sum += v; sum2 += v * v;
    if (q.length > wFrames) {
      const old = q.shift()!; sum -= old; sum2 -= old * old;
    }
    const n = q.length;
    const mean = sum / n;
    const variance = Math.max(0, sum2 / n - mean * mean);
    out[i] = Math.sqrt(variance);
  }
  return out;
}

export function trimSilence(
  signal: Float32Array,
  {
    sampleRate,
    windowSec = 0.02,
    hopSec = 0.02,
    minAboveSec = 0.25,
    minBelowSec = 1.25,
    marginDb = 14,
    slopeLimit = 0.25,
    varWinSec = 1.0,
    varLimitDb = 1.0,
    prerollSec = 0.10,
    postrollSec = 0.25,
  }: TrimOptions
): TrimResult {
  const win = Math.max(1, Math.floor(windowSec * sampleRate));
  const hop = Math.max(1, Math.floor(hopSec * sampleRate));
  const secPerFrame = hop / sampleRate;
  const totalDur = signal.length / sampleRate;

  // 1) Enveloppe dB (RMS) + médian court (~100ms)
  const db = rmsDb(signal, win, hop);
  const med = movingMedianDb(db, Math.max(1, Math.round(0.10 / secPerFrame)));

  // 2) Niveaux bruit / programme
  const noise_db = percentileDb(med, 5);
  const prog_db  = percentileDb(med, 90);
  console.log(`📊 Analyse: noise=${noise_db.toFixed(1)}dB, prog=${prog_db.toFixed(1)}dB`);

  // 3) Pente lissée (~0.3s) & stabilité (~1s)
  const lagFrames = Math.max(1, Math.round(0.30 / secPerFrame));
  const slope = movingSlopeDbPerSec(med, lagFrames, secPerFrame);
  const varFrames = Math.max(1, Math.round(varWinSec / secPerFrame));
  const stdLocal = movingStdDb(med, varFrames);

  // ===== Début =====
  const thrStart = Math.max(prog_db - 24, noise_db + marginDb);
  const needAbove = Math.max(1, Math.round(minAboveSec / secPerFrame));
  let startFrame = 0;
  {
    let run = 0;
    for (let i = 0; i < med.length; i++) {
      if ((med[i] || DB_MIN) >= thrStart) {
        run++;
        if (run >= needAbove) { startFrame = Math.max(0, i - needAbove + 1); break; }
      } else run = 0;
    }
  }

  // ===== Fin — rolling window stricte =====
  const absThr = noise_db + marginDb;
  const needBelow = Math.max(1, Math.round(minBelowSec / secPerFrame));
  console.log(`🎯 Seuils: absThr=${absThr.toFixed(1)}dB, slope<=${slopeLimit}, std<=${varLimitDb}, needBelow=${needBelow}f`);

  // Masques
  const nearNoiseArr = new Uint8Array(med.length);
  const flatArr      = new Uint8Array(med.length);
  const stableArr    = new Uint8Array(med.length);
  for (let i = 0; i < med.length; i++) {
    nearNoiseArr[i] = (med[i] || 0) <= absThr ? 1 : 0;
    flatArr[i]      = Math.abs(slope[i] || 0) <= slopeLimit ? 1 : 0;
    stableArr[i]    = (stdLocal[i] || 0) <= varLimitDb ? 1 : 0;
  }

  // Quiet = nearNoise & flat & stable
  const quiet = new Uint8Array(med.length);
  for (let i = 0; i < med.length; i++) quiet[i] = ((nearNoiseArr[i] || 0) & (flatArr[i] || 0) & (stableArr[i] || 0));

  // Somme cumulative pour tester "fenêtre 100% quiet"
  const pref = new Uint32Array(med.length + 1);
  for (let i = 0; i < med.length; i++) pref[i + 1] = (pref[i] || 0) + (quiet[i] || 0);

  let plateauStart = -1;
  for (let j = 0; j + needBelow <= med.length; j++) {
    const cnt = (pref[j + needBelow] || 0) - (pref[j] || 0);
    if (cnt === needBelow) plateauStart = j; // on garde le dernier segment valide
  }

  // Fallbacks si rien
  if (plateauStart < 0) {
    // F1) relâcher "stable"
    for (let i = 0; i < med.length; i++) quiet[i] = ((nearNoiseArr[i] || 0) & (flatArr[i] || 0));
    pref.fill(0);
    for (let i = 0; i < med.length; i++) pref[i + 1] = (pref[i] || 0) + (quiet[i] || 0);
    for (let j = 0; j + needBelow <= med.length; j++) {
      const cnt = (pref[j + needBelow] || 0) - (pref[j] || 0);
      if (cnt === needBelow) plateauStart = j;
    }
    if (plateauStart >= 0) console.warn("[AutoCut:F1] Fin trouvée sans 'stable'");
  }
  if (plateauStart < 0) {
    // F2) nearNoise seul avec marge plus souple (min 12 dB)
    const absThrSoft = noise_db + Math.min(marginDb, 12);
    for (let i = 0; i < med.length; i++) quiet[i] = (med[i] || 0) <= absThrSoft ? 1 : 0;
    pref.fill(0);
    for (let i = 0; i < med.length; i++) pref[i + 1] = (pref[i] || 0) + (quiet[i] || 0);
    for (let j = 0; j + needBelow <= med.length; j++) {
      const cnt = (pref[j + needBelow] || 0) - (pref[j] || 0);
      if (cnt === needBelow) plateauStart = j;
    }
    if (plateauStart >= 0) console.warn("[AutoCut:F2] Fin trouvée nearNoise-only");
  }

  let endFrame = med.length - 1;
  if (plateauStart >= 0) {
    endFrame = Math.max(0, plateauStart - 1); // fin utile = juste avant l'entrée du tail
  } else {
    console.warn("[AutoCut] Aucun plateau détecté — pas de coupe fin.");
  }

  // ===== Timecodes & slice =====
  const startSec = Math.max(0, startFrame * secPerFrame - prerollSec);
  const endSec   = Math.min(totalDur, (endFrame * secPerFrame) + windowSec + postrollSec);

  const startSample = Math.floor(startSec * sampleRate);
  const endSample   = Math.floor(endSec * sampleRate);
  const trimmed = signal.subarray(startSample, Math.max(startSample + 1, endSample));

  const removedStart = startSec;
  const removedEnd   = totalDur - endSec;
  const trimmedDuration = trimmed.length / sampleRate;

  console.log(`✅ Trim: ${startSec.toFixed(2)}s → ${endSec.toFixed(2)}s`);
  console.log(`✂️ Supprimé: ${removedStart.toFixed(2)}s début, ${removedEnd.toFixed(2)}s fin`);

  return { 
    trimmed, 
    sampleRate,
    originalDuration: totalDur,
    trimmedDuration,
    startSec, 
    endSec, 
    startSample, 
    endSample, 
    removedStart, 
    removedEnd 
  };
}

// Enveloppe RMS (linéaire) — pour UI uniquement
export function calculateRMSEnvelope(signal: Float32Array, windowSec: number, sampleRate: number): Float32Array {
  const win = Math.max(1, Math.floor(windowSec * sampleRate));
  const rms: number[] = [];
  let acc = 0;
  for (let i = 0; i < signal.length; i++) {
    const x = signal[i] || 0;
    acc += x * x;
    if (i >= win) acc -= (signal[i - win] || 0) * (signal[i - win] || 0);
    if (i >= win - 1) rms.push(Math.sqrt(acc / win));
  }
  return new Float32Array(rms);
}
