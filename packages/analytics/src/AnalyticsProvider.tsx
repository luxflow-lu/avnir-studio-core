/**
 * Analytics Provider
 * Wraps app with analytics tracking
 */

"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { analyticsConfig } from "./config";
import { initGA, trackPageView } from "./ga";
import { EVENTS } from "./events";
import { trackEvent } from "./tracker";

interface AnalyticsProviderProps {
  children: React.ReactNode;
  brand: string;
}

export function AnalyticsProvider({ children, brand }: AnalyticsProviderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const config = analyticsConfig[brand];

  // Initialize GA on mount
  useEffect(() => {
    if (!config?.enabled || !config?.gaId) return;

    // Load GA script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${config.gaId}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      initGA(config.gaId!);
      
      if (config.debug) {
        console.log("[Analytics] Initialized for", brand, config.gaId);
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [config, brand]);

  // Track page views on route change
  useEffect(() => {
    if (!config?.enabled) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    
    trackPageView(url);
    trackEvent(EVENTS.PAGE_VIEW(url));

    if (config.debug) {
      console.log("[Analytics] Page view:", url);
    }
  }, [pathname, searchParams, config]);

  return <>{children}</>;
}
