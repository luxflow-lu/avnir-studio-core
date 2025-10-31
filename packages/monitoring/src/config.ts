/**
 * Monitoring Configuration
 * Centralized error tracking config for all AVNIR sites
 */

export interface MonitoringConfig {
  sentryDsn?: string;
  environment: "development" | "preview" | "production";
  enabled: boolean;
  sampleRate: number; // 0.0 to 1.0
  tracesSampleRate: number; // Performance monitoring
  debug?: boolean;
}

export const monitoringConfig: Record<string, MonitoringConfig> = {
  muzidev: {
    sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN_MUZIDEV,
    environment: (process.env.NEXT_PUBLIC_VERCEL_ENV as any) || "development",
    enabled: process.env.NODE_ENV === "production",
    sampleRate: 1.0, // Capture 100% of errors
    tracesSampleRate: 0.1, // Capture 10% of transactions for performance
    debug: process.env.NODE_ENV === "development",
  },
  muzisystem: {
    sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN_MUZISYSTEM,
    environment: (process.env.NEXT_PUBLIC_VERCEL_ENV as any) || "development",
    enabled: process.env.NODE_ENV === "production",
    sampleRate: 1.0,
    tracesSampleRate: 0.1,
    debug: process.env.NODE_ENV === "development",
  },
  muzipics: {
    sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN_MUZIPICS,
    environment: (process.env.NEXT_PUBLIC_VERCEL_ENV as any) || "development",
    enabled: process.env.NODE_ENV === "production",
    sampleRate: 1.0,
    tracesSampleRate: 0.1,
    debug: process.env.NODE_ENV === "development",
  },
  muzitools: {
    sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN_MUZITOOLS,
    environment: (process.env.NEXT_PUBLIC_VERCEL_ENV as any) || "development",
    enabled: process.env.NODE_ENV === "production",
    sampleRate: 1.0,
    tracesSampleRate: 0.1,
    debug: process.env.NODE_ENV === "development",
  },
};
