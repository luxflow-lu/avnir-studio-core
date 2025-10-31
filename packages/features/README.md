# @avnir/features

Simple feature flags system for gradual rollouts and A/B testing.

## Features

- ✅ JSON-based configuration
- ✅ Environment-based flags
- ✅ Percentage-based rollouts
- ✅ React hooks and components
- ✅ Type-safe with TypeScript
- ✅ No external dependencies

## Installation

```bash
pnpm add @avnir/features
```

## Usage

### Check feature flag programmatically

```typescript
import { isFeatureEnabled } from "@avnir/features";

if (isFeatureEnabled("newDashboard")) {
  // Show new dashboard
} else {
  // Show old dashboard
}
```

### Use React hook

```tsx
import { useFeature } from "@avnir/features";

function MyComponent() {
  const hasNewDashboard = useFeature("newDashboard");
  
  return hasNewDashboard ? <NewDashboard /> : <OldDashboard />;
}
```

### Use FeatureGate component

```tsx
import { FeatureGate } from "@avnir/features";

function App() {
  return (
    <FeatureGate 
      feature="newDashboard"
      fallback={<OldDashboard />}
    >
      <NewDashboard />
    </FeatureGate>
  );
}
```

## Configuration

Edit `packages/features/src/config.ts` to add/modify feature flags:

```typescript
export const featureFlags: FeatureFlags = {
  myNewFeature: {
    enabled: true,
    description: "My new feature",
    rolloutPercentage: 50, // 50% of users
    environments: ["production"],
  },
};
```

## Feature Flag Options

### Basic flag

```typescript
{
  enabled: true,
  description: "Feature description",
}
```

### Environment-specific

```typescript
{
  enabled: true,
  description: "Only in production",
  environments: ["production"],
}
```

### Percentage rollout

```typescript
{
  enabled: true,
  description: "Gradual rollout",
  rolloutPercentage: 10, // 10% of users
}
```

## Examples

### A/B Testing

```tsx
import { useFeature } from "@avnir/features";

function PricingPage() {
  const showNewPricing = useFeature("newPricingPage", userId);
  
  return showNewPricing ? <NewPricing /> : <OldPricing />;
}
```

### Beta Features

```tsx
import { FeatureGate } from "@avnir/features";

function App() {
  return (
    <FeatureGate feature="betaFeatures">
      <BetaFeaturesPanel />
    </FeatureGate>
  );
}
```

### Dark Mode Toggle

```tsx
import { useFeature } from "@avnir/features";

function Settings() {
  const darkModeEnabled = useFeature("darkMode");
  
  return (
    <div>
      {darkModeEnabled && (
        <Toggle label="Dark Mode" />
      )}
    </div>
  );
}
```

## Rollout Strategy

### Phase 1: Development (0%)
```typescript
{
  enabled: true,
  environments: ["development"],
}
```

### Phase 2: Preview (10%)
```typescript
{
  enabled: true,
  environments: ["development", "preview"],
  rolloutPercentage: 10,
}
```

### Phase 3: Production (50%)
```typescript
{
  enabled: true,
  rolloutPercentage: 50,
}
```

### Phase 4: Full Rollout (100%)
```typescript
{
  enabled: true,
}
```

## Best Practices

1. **Always provide a description** - Helps team understand the feature
2. **Start with low rollout** - Test with 5-10% before full rollout
3. **Use environment flags** - Test in dev/preview before production
4. **Clean up old flags** - Remove flags after full rollout
5. **Document rollout plan** - Track progress in comments

## Future Enhancements

- Remote configuration (API-based)
- User targeting (by role, email, etc.)
- Analytics integration
- Admin dashboard for flag management
- Scheduled rollouts
