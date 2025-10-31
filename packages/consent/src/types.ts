/**
 * Cookie Consent Types
 */

export type ConsentCategory = "necessary" | "analytics" | "marketing" | "preferences";

export interface ConsentPreferences {
  necessary: boolean; // Always true, can't be disabled
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export interface ConsentConfig {
  categories: {
    necessary: {
      label: string;
      description: string;
      required: true;
    };
    analytics: {
      label: string;
      description: string;
      required: false;
    };
    marketing: {
      label: string;
      description: string;
      required: false;
    };
    preferences: {
      label: string;
      description: string;
      required: false;
    };
  };
}
