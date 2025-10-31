/**
 * Cookie Consent Storage
 * Manages consent preferences in localStorage
 */

import { ConsentPreferences } from "./types";

const STORAGE_KEY = "avnir_cookie_consent";

/**
 * Get consent preferences from storage
 */
export function getConsent(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    return JSON.parse(stored);
  } catch (error) {
    console.error("Error reading consent preferences:", error);
    return null;
  }
}

/**
 * Save consent preferences to storage
 */
export function saveConsent(preferences: ConsentPreferences): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.error("Error saving consent preferences:", error);
  }
}

/**
 * Clear consent preferences from storage
 */
export function clearConsent(): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing consent preferences:", error);
  }
}

/**
 * Check if user has given consent
 */
export function hasConsent(): boolean {
  return getConsent() !== null;
}
