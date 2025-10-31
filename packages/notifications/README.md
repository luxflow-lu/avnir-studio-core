# @avnir/notifications

Centralized notification system for all AVNIR sites using react-hot-toast.

## Features

- ✅ Toast notifications (success, error, info, warning)
- ✅ Loading states
- ✅ Promise-based notifications
- ✅ Styled with AVNIR design system
- ✅ Type-safe with TypeScript
- ✅ Customizable duration and position

## Installation

```bash
pnpm add @avnir/notifications
```

## Setup

### 1. Add ToastProvider to your app

```tsx
// app/layout.tsx
import { ToastProvider } from "@avnir/notifications";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
```

## Usage

### Success notification

```typescript
import { success } from "@avnir/notifications";

success("Profile updated successfully!");
```

### Error notification

```typescript
import { error } from "@avnir/notifications";

error("Failed to save changes. Please try again.");
```

### Info notification

```typescript
import { info } from "@avnir/notifications";

info("New features available! Check them out.");
```

### Warning notification

```typescript
import { warning } from "@avnir/notifications";

warning("Your session will expire in 5 minutes.");
```

### Loading notification

```typescript
import { loading, dismiss } from "@avnir/notifications";

const toastId = loading("Saving changes...");

// Later, dismiss it
dismiss(toastId);
```

### Promise notification

Automatically shows loading, then success or error based on promise result:

```typescript
import { promise } from "@avnir/notifications";

promise(
  fetch("/api/save").then(res => res.json()),
  {
    loading: "Saving...",
    success: "Saved successfully!",
    error: "Failed to save",
  }
);

// With dynamic messages
promise(
  updateProfile(data),
  {
    loading: "Updating profile...",
    success: (data) => `Welcome back, ${data.name}!`,
    error: (err) => `Error: ${err.message}`,
  }
);
```

### Custom duration

```typescript
import { success, error } from "@avnir/notifications";

success("Quick message", 2000); // 2 seconds
error("Important error", 10000); // 10 seconds
```

### Dismiss notifications

```typescript
import { dismiss } from "@avnir/notifications";

// Dismiss specific toast
const toastId = success("Message");
dismiss(toastId);

// Dismiss all toasts
dismiss();
```

## Styling

Notifications automatically use AVNIR design system variables:

- `--success` - Success background
- `--error` - Error background
- `--warning` - Warning background
- `--primary` - Info background
- `--surface` - Default background
- `--text` - Text color
- `--radius-md` - Border radius

## Position

Default position is `bottom-right`. You can customize in `ToastProvider`:

```tsx
<Toaster position="top-center" />
```

Available positions:
- `top-left`
- `top-center`
- `top-right`
- `bottom-left`
- `bottom-center`
- `bottom-right`

## Examples

### Form submission

```typescript
import { promise } from "@avnir/notifications";

const handleSubmit = async (data) => {
  await promise(
    submitForm(data),
    {
      loading: "Submitting form...",
      success: "Form submitted successfully!",
      error: "Failed to submit form",
    }
  );
};
```

### File upload

```typescript
import { loading, success, error, dismiss } from "@avnir/notifications";

const handleUpload = async (file) => {
  const toastId = loading("Uploading file...");
  
  try {
    await uploadFile(file);
    dismiss(toastId);
    success("File uploaded successfully!");
  } catch (err) {
    dismiss(toastId);
    error("Failed to upload file");
  }
};
```

### API call with retry

```typescript
import { warning, promise } from "@avnir/notifications";

const fetchData = async () => {
  try {
    return await promise(
      api.getData(),
      {
        loading: "Loading data...",
        success: "Data loaded!",
        error: "Failed to load data",
      }
    );
  } catch (err) {
    warning("Click to retry", 0); // No auto-dismiss
  }
};
```

## Best Practices

1. **Use promise() for async operations** - Handles loading/success/error automatically
2. **Keep messages concise** - Users should understand at a glance
3. **Use appropriate types** - success for positive actions, error for failures
4. **Don't spam** - Dismiss previous toasts if showing many in succession
5. **Provide context** - Include what failed and how to fix it
