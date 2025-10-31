/**
 * useAnalytics Hook
 * React hook for tracking events
 */

"use client";

import { useCallback } from "react";
import { EVENTS, AnalyticsEvent } from "./events";
import { trackEvent } from "./tracker";

export function useAnalytics() {
  const track = useCallback((event: AnalyticsEvent) => {
    trackEvent(event);
  }, []);

  return {
    track,
    events: EVENTS,
  };
}
