/**
 * Analytics Tracker
 * Unified interface for tracking events
 */

import { AnalyticsEvent } from "./events";
import { trackEvent as trackGAEvent } from "./ga";

/**
 * Track event across all enabled analytics platforms
 */
export function trackEvent(event: AnalyticsEvent) {
  // Track in Google Analytics
  trackGAEvent(event);

  // Future: Add Plausible, Mixpanel, etc.
  
  // Debug logging
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics] Event:", event);
  }
}

/**
 * Track custom event with simplified API
 */
export function track(action: string, metadata?: Record<string, any>) {
  trackEvent({
    action,
    category: "engagement",
    metadata,
  });
}
