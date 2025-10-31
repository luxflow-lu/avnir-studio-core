/**
 * Feature Flags Configuration
 * Simple JSON-based feature flags for gradual rollouts
 */

export interface FeatureFlag {
  enabled: boolean;
  description: string;
  rolloutPercentage?: number; // 0-100
  environments?: ("development" | "preview" | "production")[];
}

export interface FeatureFlags {
  [key: string]: FeatureFlag;
}

/**
 * Global feature flags
 */
export const featureFlags: FeatureFlags = {
  // Analytics
  analytics: {
    enabled: true,
    description: "Google Analytics tracking",
    environments: ["production"],
  },
  
  // Error tracking
  errorTracking: {
    enabled: true,
    description: "Sentry error tracking",
    environments: ["production"],
  },
  
  // New features (examples)
  newDashboard: {
    enabled: false,
    description: "New dashboard design",
    rolloutPercentage: 10, // 10% of users
  },
  
  darkMode: {
    enabled: true,
    description: "Dark mode toggle",
  },
  
  betaFeatures: {
    enabled: false,
    description: "Beta features access",
    environments: ["development", "preview"],
  },
  
  // Payment features
  stripePayments: {
    enabled: false,
    description: "Stripe payment integration",
    environments: ["development"],
  },
  
  // Social features
  socialSharing: {
    enabled: true,
    description: "Social media sharing",
  },
  
  // Experimental
  aiFeatures: {
    enabled: false,
    description: "AI-powered features",
    rolloutPercentage: 5,
  },
};

/**
 * Check if a feature is enabled
 */
export function isFeatureEnabled(
  featureName: string,
  environment: string = process.env.NODE_ENV || "development",
  userId?: string
): boolean {
  const feature = featureFlags[featureName];
  
  if (!feature) {
    console.warn(`Feature flag "${featureName}" not found`);
    return false;
  }
  
  // Check if feature is globally enabled
  if (!feature.enabled) {
    return false;
  }
  
  // Check environment restriction
  if (feature.environments && !feature.environments.includes(environment as any)) {
    return false;
  }
  
  // Check rollout percentage
  if (feature.rolloutPercentage !== undefined && userId) {
    const hash = simpleHash(userId);
    const userPercentage = hash % 100;
    return userPercentage < feature.rolloutPercentage;
  }
  
  return true;
}

/**
 * Simple hash function for user ID
 */
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}
