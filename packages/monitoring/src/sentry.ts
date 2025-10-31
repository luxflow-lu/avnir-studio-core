/**
 * Sentry Integration
 * Error tracking and performance monitoring
 */

import * as Sentry from "@sentry/nextjs";
import { MonitoringConfig } from "./config";

/**
 * Initialize Sentry
 */
export function initSentry(config: MonitoringConfig) {
  if (!config.enabled || !config.sentryDsn) {
    if (config.debug) {
      console.log("[Sentry] Disabled or no DSN provided");
    }
    return;
  }

  Sentry.init({
    dsn: config.sentryDsn,
    environment: config.environment,
    
    // Performance Monitoring
    tracesSampleRate: config.tracesSampleRate,
    
    // Error Sampling
    sampleRate: config.sampleRate,
    
    // Debug mode
    debug: config.debug,
    
    // Integrations
    integrations: [
      new Sentry.BrowserTracing({
        // Track navigation and interactions
        tracePropagationTargets: ["localhost", /^\//],
      }),
      new Sentry.Replay({
        // Session replay for debugging
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],
    
    // Session Replay sampling
    replaysSessionSampleRate: 0.1, // 10% of sessions
    replaysOnErrorSampleRate: 1.0, // 100% of sessions with errors
    
    // Filter out sensitive data
    beforeSend(event, hint) {
      // Don't send errors in development
      if (config.environment === "development") {
        return null;
      }
      
      // Filter out known non-critical errors
      if (event.exception) {
        const error = hint.originalException;
        if (error instanceof Error) {
          // Ignore network errors
          if (error.message.includes("NetworkError")) {
            return null;
          }
          // Ignore cancelled requests
          if (error.message.includes("AbortError")) {
            return null;
          }
        }
      }
      
      return event;
    },
  });

  if (config.debug) {
    console.log("[Sentry] Initialized for", config.environment);
  }
}

/**
 * Capture exception
 */
export function captureException(error: Error, context?: Record<string, any>) {
  Sentry.captureException(error, {
    extra: context,
  });
}

/**
 * Capture message
 */
export function captureMessage(message: string, level: Sentry.SeverityLevel = "info") {
  Sentry.captureMessage(message, level);
}

/**
 * Set user context
 */
export function setUser(user: { id: string; email?: string; username?: string }) {
  Sentry.setUser(user);
}

/**
 * Clear user context
 */
export function clearUser() {
  Sentry.setUser(null);
}

/**
 * Add breadcrumb
 */
export function addBreadcrumb(breadcrumb: {
  message: string;
  category?: string;
  level?: Sentry.SeverityLevel;
  data?: Record<string, any>;
}) {
  Sentry.addBreadcrumb(breadcrumb);
}

/**
 * Set context
 */
export function setContext(name: string, context: Record<string, any>) {
  Sentry.setContext(name, context);
}

/**
 * Start transaction (for performance monitoring)
 */
export function startTransaction(name: string, op: string) {
  return Sentry.startTransaction({ name, op });
}
