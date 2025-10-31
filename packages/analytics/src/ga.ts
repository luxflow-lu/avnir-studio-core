/**
 * Google Analytics 4 Integration
 */

import { AnalyticsEvent } from "./events";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Initialize Google Analytics
 */
export function initGA(measurementId: string) {
  if (typeof window === "undefined") return;

  // Create gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };

  // Initialize with timestamp
  window.gtag("js", new Date());

  // Configure GA
  window.gtag("config", measurementId, {
    send_page_view: false, // We'll handle page views manually
  });
}

/**
 * Track page view
 */
export function trackPageView(url: string, title?: string) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: url,
    page_title: title,
  });
}

/**
 * Track custom event
 */
export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", event.action, {
    event_category: event.category,
    event_label: event.label,
    value: event.value,
    ...event.metadata,
  });
}

/**
 * Set user properties
 */
export function setUserProperties(properties: Record<string, any>) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("set", "user_properties", properties);
}

/**
 * Set user ID (for cross-device tracking)
 */
export function setUserId(userId: string) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("set", { user_id: userId });
}
