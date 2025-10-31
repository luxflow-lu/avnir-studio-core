/**
 * FeatureGate Component
 * Conditionally render children based on feature flag
 */

"use client";

import { useFeature } from "./useFeature";

interface FeatureGateProps {
  feature: string;
  userId?: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function FeatureGate({ feature, userId, children, fallback = null }: FeatureGateProps) {
  const isEnabled = useFeature(feature, userId);
  
  return isEnabled ? <>{children}</> : <>{fallback}</>;
}
