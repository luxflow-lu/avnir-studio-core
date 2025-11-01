/**
 * Camelot Wheel Mapper
 * Convertit une tonalité musicale en code Camelot
 * 
 * Le système Camelot est utilisé par les DJs pour le mixage harmonique.
 * Chaque tonalité a un code numérique (1-12) et une lettre (A pour mineur, B pour majeur).
 */

export interface CamelotMapping {
  key: string;
  camelot: string;
}

// Mapping complet tonalité → Camelot
const CAMELOT_WHEEL: Record<string, string> = {
  // Majeur (B)
  'C': '8B',
  'Db': '3B',
  'D': '10B',
  'Eb': '5B',
  'E': '12B',
  'F': '7B',
  'Gb': '2B',
  'G': '9B',
  'Ab': '4B',
  'A': '11B',
  'Bb': '6B',
  'B': '1B',
  
  // Mineur (A)
  'Cm': '5A',
  'C#m': '12A',
  'Dm': '7A',
  'D#m': '2A',
  'Em': '9A',
  'Fm': '4A',
  'F#m': '11A',
  'Gm': '6A',
  'G#m': '1A',
  'Am': '8A',
  'A#m': '3A',
  'Bm': '10A',
};

// Alias pour les dièses/bémols
const KEY_ALIASES: Record<string, string> = {
  'C#': 'Db',
  'D#': 'Eb',
  'F#': 'Gb',
  'G#': 'Ab',
  'A#': 'Bb',
  'Dbm': 'C#m',
  'Ebm': 'D#m',
  'Gbm': 'F#m',
  'Abm': 'G#m',
  'Bbm': 'A#m',
};

/**
 * Convertit une tonalité en code Camelot
 * @param key - Tonalité (ex: "Am", "C", "F#m")
 * @returns Code Camelot (ex: "8A", "8B", "11A")
 */
export function keyToCamelot(key: string): string {
  // Normaliser la clé
  const normalizedKey = key.trim();
  
  // Vérifier si c'est un alias
  const mappedKey = KEY_ALIASES[normalizedKey] || normalizedKey;
  
  // Chercher dans le mapping
  const camelot = CAMELOT_WHEEL[mappedKey];
  
  if (!camelot) {
    throw new Error(`Tonalité inconnue: ${key}`);
  }
  
  return camelot;
}

/**
 * Convertit un code Camelot en tonalité
 * @param camelot - Code Camelot (ex: "8A")
 * @returns Tonalité (ex: "Am")
 */
export function camelotToKey(camelot: string): string {
  const entry = Object.entries(CAMELOT_WHEEL).find(([_, code]) => code === camelot);
  
  if (!entry) {
    throw new Error(`Code Camelot inconnu: ${camelot}`);
  }
  
  return entry[0];
}

/**
 * Obtient les tonalités compatibles pour le mixage harmonique
 * @param camelot - Code Camelot de départ
 * @returns Liste des codes Camelot compatibles
 */
export function getCompatibleKeys(camelot: string): string[] {
  const match = camelot.match(/^(\d+)([AB])$/);
  if (!match) {
    throw new Error(`Code Camelot invalide: ${camelot}`);
  }
  
  const number = parseInt(match[1]);
  const letter = match[2];
  
  // Règles de mixage harmonique Camelot:
  // 1. Même numéro, lettre différente (relatif majeur/mineur)
  // 2. Numéro +1 ou -1, même lettre (quinte)
  // 3. Même numéro et lettre (identique)
  
  const compatible: string[] = [];
  
  // Même numéro, lettre opposée
  compatible.push(`${number}${letter === 'A' ? 'B' : 'A'}`);
  
  // Numéro +1 (avec wrap 12 → 1)
  const nextNumber = number === 12 ? 1 : number + 1;
  compatible.push(`${nextNumber}${letter}`);
  
  // Numéro -1 (avec wrap 1 → 12)
  const prevNumber = number === 1 ? 12 : number - 1;
  compatible.push(`${prevNumber}${letter}`);
  
  // Même code (identique)
  compatible.push(camelot);
  
  return compatible;
}
