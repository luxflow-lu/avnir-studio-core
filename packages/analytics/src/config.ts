/**
 * Analytics Configuration
 * Centralized analytics config for all AVNIR sites
 */

export interface AnalyticsConfig {
  gaId?: string; // Google Analytics 4 Measurement ID
  plausibleDomain?: string; // Plausible domain (privacy-first alternative)
  enabled: boolean;
  debug?: boolean;
}

export const analyticsConfig: Record<string, AnalyticsConfig> = {
  muzidev: {
    gaId: process.env.NEXT_PUBLIC_GA_ID_MUZIDEV,
    enabled: process.env.NODE_ENV === "production",
    debug: process.env.NODE_ENV === "development",
  },
  muzisystem: {
    gaId: process.env.NEXT_PUBLIC_GA_ID_MUZISYSTEM,
    enabled: process.env.NODE_ENV === "production",
    debug: process.env.NODE_ENV === "development",
  },
  muzipics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID_MUZIPICS,
    enabled: process.env.NODE_ENV === "production",
    debug: process.env.NODE_ENV === "development",
  },
  muzitools: {
    gaId: process.env.NEXT_PUBLIC_GA_ID_MUZITOOLS,
    enabled: process.env.NODE_ENV === "production",
    debug: process.env.NODE_ENV === "development",
  },
  muziweb: {
    gaId: process.env.NEXT_PUBLIC_GA_ID_MUZIWEB,
    enabled: process.env.NODE_ENV === "production",
    debug: process.env.NODE_ENV === "development",
  },
  muzimerch: {
    gaId: process.env.NEXT_PUBLIC_GA_ID_MUZIMERCH,
    enabled: process.env.NODE_ENV === "production",
    debug: process.env.NODE_ENV === "development",
  },
};
