# @avnir/monitoring

Centralized error tracking and performance monitoring for all AVNIR sites using Sentry.

## Features

- ✅ Sentry integration for error tracking
- ✅ Performance monitoring
- ✅ Session replay on errors
- ✅ React ErrorBoundary
- ✅ Breadcrumbs for debugging
- ✅ User context tracking
- ✅ Automatic error filtering

## Installation

```bash
pnpm add @avnir/monitoring
```

## Setup

### 1. Initialize Sentry in your app

```tsx
// app/layout.tsx
import { initSentry, monitoringConfig } from "@avnir/monitoring";

// Initialize on app start
if (typeof window !== "undefined") {
  initSentry(monitoringConfig.muzidev);
}
```

### 2. Wrap your app with ErrorBoundary

```tsx
// app/layout.tsx
import { ErrorBoundary } from "@avnir/monitoring";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
```

### 3. Add Sentry configuration files

Create `sentry.client.config.ts` in your app root:

```typescript
import { initSentry, monitoringConfig } from "@avnir/monitoring";

initSentry(monitoringConfig.muzidev);
```

Create `sentry.server.config.ts` in your app root:

```typescript
import { initSentry, monitoringConfig } from "@avnir/monitoring";

initSentry(monitoringConfig.muzidev);
```

Create `sentry.edge.config.ts` in your app root:

```typescript
import { initSentry, monitoringConfig } from "@avnir/monitoring";

initSentry(monitoringConfig.muzidev);
```

## Configuration

Add your Sentry DSN to `.env.local`:

```bash
# MUZIDEV
NEXT_PUBLIC_SENTRY_DSN_MUZIDEV=https://xxx@xxx.ingest.sentry.io/xxx

# MUZISYSTEM
NEXT_PUBLIC_SENTRY_DSN_MUZISYSTEM=https://xxx@xxx.ingest.sentry.io/xxx

# Environment (auto-detected on Vercel)
NEXT_PUBLIC_VERCEL_ENV=production
```

## Usage

### Capture exceptions manually

```typescript
import { captureException } from "@avnir/monitoring";

try {
  // Your code
} catch (error) {
  captureException(error as Error, {
    extra: "context",
  });
}
```

### Capture messages

```typescript
import { captureMessage } from "@avnir/monitoring";

captureMessage("Something important happened", "info");
captureMessage("Warning: Low memory", "warning");
captureMessage("Critical error", "error");
```

### Set user context

```typescript
import { setUser, clearUser } from "@avnir/monitoring";

// After login
setUser({
  id: "user-123",
  email: "user@example.com",
  username: "johndoe",
});

// After logout
clearUser();
```

### Add breadcrumbs

```typescript
import { addBreadcrumb } from "@avnir/monitoring";

addBreadcrumb({
  message: "User clicked button",
  category: "ui",
  level: "info",
  data: { buttonId: "cta-signup" },
});
```

### Performance monitoring

```typescript
import { startTransaction } from "@avnir/monitoring";

const transaction = startTransaction("api-call", "http");

try {
  await fetch("/api/data");
  transaction.setStatus("ok");
} catch (error) {
  transaction.setStatus("error");
  throw error;
} finally {
  transaction.finish();
}
```

## Error Filtering

The package automatically filters out:
- ❌ Development errors (not sent to Sentry)
- ❌ Network errors (transient issues)
- ❌ Cancelled requests (user-initiated)

## Session Replay

- 10% of normal sessions are recorded
- 100% of sessions with errors are recorded
- All text and media are masked for privacy

## Best Practices

1. **Always set user context** after login
2. **Add breadcrumbs** for important user actions
3. **Use custom contexts** for additional debugging info
4. **Monitor performance** for critical API calls
5. **Test in preview** before production

## Privacy

- All text is masked in session replays
- All media is blocked in session replays
- User IDs are hashed
- No sensitive data is sent to Sentry
