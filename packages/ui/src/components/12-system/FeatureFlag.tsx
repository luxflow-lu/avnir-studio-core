import * as React from "react";

export interface FeatureFlagProps {
  flag: string;
  enabled?: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const FeatureFlag: React.FC<FeatureFlagProps> = ({
  enabled = false,
  children,
  fallback = null,
}) => {
  // In production, this would check against a feature flag service
  // For now, we use the enabled prop
  const isEnabled = enabled;

  if (!isEnabled) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};
