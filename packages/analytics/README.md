# @avnir/analytics

Centralized analytics system for all AVNIR sites.

## Features

- ✅ Google Analytics 4 integration
- ✅ Standardized event tracking
- ✅ Type-safe events
- ✅ Automatic page view tracking
- ✅ Privacy-first (ready for Plausible)
- ✅ Debug mode for development

## Installation

```bash
pnpm add @avnir/analytics
```

## Usage

### 1. Wrap your app with AnalyticsProvider

```tsx
// app/layout.tsx
import { AnalyticsProvider } from "@avnir/analytics";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <AnalyticsProvider brand="muzidev">
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}
```

### 2. Track events with useAnalytics hook

```tsx
"use client";
import { useAnalytics } from "@avnir/analytics";

export function MyComponent() {
  const { track, events } = useAnalytics();

  const handleClick = () => {
    track(events.BUTTON_CLICK("cta-signup"));
  };

  return <button onClick={handleClick}>Sign up</button>;
}
```

### 3. Track custom events

```tsx
import { track } from "@avnir/analytics";

// Simple tracking
track("custom_action", { metadata: "value" });

// Or use predefined events
import { EVENTS, trackEvent } from "@avnir/analytics";

trackEvent(EVENTS.FORM_SUBMIT("contact-form"));
trackEvent(EVENTS.VIDEO_PLAY("intro-video"));
trackEvent(EVENTS.PURCHASE("order-123", 99.99));
```

## Configuration

Add your Google Analytics ID to `.env.local`:

```bash
# MUZIDEV
NEXT_PUBLIC_GA_ID_MUZIDEV=G-XXXXXXXXXX

# MUZISYSTEM
NEXT_PUBLIC_GA_ID_MUZISYSTEM=G-XXXXXXXXXX

# MUZIPICS
NEXT_PUBLIC_GA_ID_MUZIPICS=G-XXXXXXXXXX
```

## Available Events

- `PAGE_VIEW(page)` - Track page views
- `SIGNUP(method)` - User signup
- `LOGIN(method)` - User login
- `LOGOUT()` - User logout
- `BUTTON_CLICK(buttonName)` - Button clicks
- `LINK_CLICK(url)` - Link clicks
- `FORM_SUBMIT(formName)` - Form submissions
- `VIDEO_PLAY(videoId)` - Video plays
- `VIDEO_COMPLETE(videoId)` - Video completions
- `DOWNLOAD(fileName)` - File downloads
- `ADD_TO_CART(productId, value)` - E-commerce
- `PURCHASE(orderId, value)` - E-commerce
- `ERROR(errorMessage)` - Error tracking
- `NEWSLETTER_SIGNUP(location)` - Newsletter signups
- `CONTACT_FORM_SUBMIT(brand)` - Contact form submissions

## Debug Mode

Analytics are automatically in debug mode during development:

```bash
# Console output in development
[Analytics] Initialized for muzidev G-XXXXXXXXXX
[Analytics] Page view: /about
[Analytics] Event: { action: "button_click", category: "engagement", ... }
```

## Privacy

- Analytics only enabled in production
- No tracking in development (unless explicitly enabled)
- Ready for GDPR-compliant alternatives (Plausible)
- User consent integration (future)
