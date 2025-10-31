/**
 * useFeature Hook
 * React hook for checking feature flags
 */

"use client";

import { useMemo } from "react";
import { isFeatureEnabled } from "./config";

export function useFeature(featureName: string, userId?: string): boolean {
  return useMemo(() => {
    const environment = process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NODE_ENV || "development";
    return isFeatureEnabled(featureName, environment, userId);
  }, [featureName, userId]);
}
