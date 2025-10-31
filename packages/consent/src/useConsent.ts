/**
 * useConsent Hook
 * React hook for checking consent preferences
 */

"use client";

import { useState, useEffect } from "react";
import { ConsentPreferences, ConsentCategory } from "./types";
import { getConsent } from "./storage";

export function useConsent() {
  const [consent, setConsent] = useState<ConsentPreferences | null>(null);

  useEffect(() => {
    setConsent(getConsent());
  }, []);

  const hasConsent = (category: ConsentCategory): boolean => {
    if (!consent) return false;
    return consent[category] === true;
  };

  return {
    consent,
    hasConsent,
    hasAnalytics: hasConsent("analytics"),
    hasMarketing: hasConsent("marketing"),
    hasPreferences: hasConsent("preferences"),
  };
}
