# @avnir/consent

RGPD compliant cookie consent system for all AVNIR sites.

## Features

- ✅ RGPD/GDPR compliant
- ✅ Granular consent (Necessary, Analytics, Marketing, Preferences)
- ✅ localStorage persistence
- ✅ React hooks
- ✅ Customizable UI
- ✅ Type-safe with TypeScript

## Installation

```bash
pnpm add @avnir/consent
```

## Usage

### Add CookieBanner to your app

```tsx
// app/layout.tsx
import { CookieBanner } from "@avnir/consent";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <CookieBanner
          onAccept={(preferences) => {
            console.log("User accepted:", preferences);
            // Initialize analytics if accepted
            if (preferences.analytics) {
              // initAnalytics();
            }
          }}
          onDecline={() => {
            console.log("User declined optional cookies");
          }}
        />
      </body>
    </html>
  );
}
```

### Check consent with useConsent hook

```tsx
import { useConsent } from "@avnir/consent";

function MyComponent() {
  const { hasAnalytics, hasMarketing } = useConsent();

  useEffect(() => {
    if (hasAnalytics) {
      // Track page view
    }
  }, [hasAnalytics]);

  return <div>...</div>;
}
```

### Check consent programmatically

```typescript
import { getConsent, hasConsent } from "@avnir/consent";

// Check if user has given any consent
if (hasConsent()) {
  const preferences = getConsent();
  
  if (preferences?.analytics) {
    // Initialize analytics
  }
}
```

## Integration with Analytics

```tsx
import { CookieBanner } from "@avnir/consent";
import { initGA } from "@avnir/analytics";

<CookieBanner
  onAccept={(preferences) => {
    if (preferences.analytics) {
      initGA("G-XXXXXXXXXX");
    }
  }}
/>
```

## Consent Categories

### Necessary
- Always enabled (required for site functionality)
- Cannot be disabled by user
- Examples: Session cookies, security cookies

### Analytics
- Google Analytics, Plausible, etc.
- User can opt-out
- Examples: Page views, user behavior

### Marketing
- Advertising cookies
- User can opt-out
- Examples: Facebook Pixel, Google Ads

### Preferences
- User preferences and settings
- User can opt-out
- Examples: Theme, language, layout preferences

## Storage

Consent preferences are stored in `localStorage` under the key `avnir_cookie_consent`.

```json
{
  "necessary": true,
  "analytics": true,
  "marketing": false,
  "preferences": true
}
```

## API

### CookieBanner

```tsx
interface CookieBannerProps {
  onAccept?: (preferences: ConsentPreferences) => void;
  onDecline?: () => void;
}
```

### useConsent

```typescript
const {
  consent,          // ConsentPreferences | null
  hasConsent,       // (category: ConsentCategory) => boolean
  hasAnalytics,     // boolean
  hasMarketing,     // boolean
  hasPreferences,   // boolean
} = useConsent();
```

### Storage functions

```typescript
getConsent(): ConsentPreferences | null
saveConsent(preferences: ConsentPreferences): void
clearConsent(): void
hasConsent(): boolean
```

## Styling

The banner uses CSS classes from `@avnir/design`:
- `.cookie-banner`
- `.cookie-banner-content`
- `.cookie-banner-title`
- `.cookie-banner-description`
- `.cookie-preferences`
- `.cookie-btn-primary`
- `.cookie-btn-secondary`
- `.cookie-btn-ghost`

## RGPD Compliance

This package helps you comply with RGPD/GDPR by:
- ✅ Requiring explicit consent before setting non-necessary cookies
- ✅ Providing granular control over cookie categories
- ✅ Allowing users to change their preferences at any time
- ✅ Storing consent preferences securely

## Best Practices

1. **Show banner on first visit** - Don't hide it until user makes a choice
2. **Respect user choice** - Don't load analytics/marketing scripts if declined
3. **Provide privacy policy link** - Link to your privacy policy page
4. **Allow preference changes** - Provide a way to change consent later
5. **Don't block content** - Site should work with only necessary cookies

## Example: Full Integration

```tsx
// app/layout.tsx
import { CookieBanner } from "@avnir/consent";
import { initGA } from "@avnir/analytics";
import { initSentry } from "@avnir/monitoring";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <CookieBanner
          onAccept={(preferences) => {
            // Analytics
            if (preferences.analytics) {
              initGA("G-XXXXXXXXXX");
            }
            
            // Error tracking (if considered analytics)
            if (preferences.analytics) {
              initSentry({ dsn: "..." });
            }
            
            // Marketing pixels
            if (preferences.marketing) {
              // initFacebookPixel();
              // initGoogleAds();
            }
          }}
        />
      </body>
    </html>
  );
}
```
