/**
 * Toast Notifications
 * Wrapper around react-hot-toast with AVNIR styling
 */

import toast, { Toaster as HotToaster } from "react-hot-toast";

export { HotToaster as Toaster };

/**
 * Success notification
 */
export function success(message: string, duration = 4000) {
  return toast.success(message, {
    duration,
    style: {
      background: "var(--success, #10b981)",
      color: "var(--bg, #fff)",
      padding: "1rem",
      borderRadius: "var(--radius-md, 8px)",
    },
    iconTheme: {
      primary: "var(--bg, #fff)",
      secondary: "var(--success, #10b981)",
    },
  });
}

/**
 * Error notification
 */
export function error(message: string, duration = 5000) {
  return toast.error(message, {
    duration,
    style: {
      background: "var(--error, #ef4444)",
      color: "var(--bg, #fff)",
      padding: "1rem",
      borderRadius: "var(--radius-md, 8px)",
    },
    iconTheme: {
      primary: "var(--bg, #fff)",
      secondary: "var(--error, #ef4444)",
    },
  });
}

/**
 * Info notification
 */
export function info(message: string, duration = 4000) {
  return toast(message, {
    duration,
    icon: "ℹ️",
    style: {
      background: "var(--primary, #3b82f6)",
      color: "var(--bg, #fff)",
      padding: "1rem",
      borderRadius: "var(--radius-md, 8px)",
    },
  });
}

/**
 * Warning notification
 */
export function warning(message: string, duration = 4500) {
  return toast(message, {
    duration,
    icon: "⚠️",
    style: {
      background: "var(--warning, #f59e0b)",
      color: "var(--bg, #fff)",
      padding: "1rem",
      borderRadius: "var(--radius-md, 8px)",
    },
  });
}

/**
 * Loading notification
 */
export function loading(message: string) {
  return toast.loading(message, {
    style: {
      background: "var(--surface, #1f2937)",
      color: "var(--text, #fff)",
      padding: "1rem",
      borderRadius: "var(--radius-md, 8px)",
    },
  });
}

/**
 * Promise notification
 * Shows loading, then success or error based on promise result
 */
export function promise<T>(
  promise: Promise<T>,
  messages: {
    loading: string;
    success: string | ((data: T) => string);
    error: string | ((error: any) => string);
  }
) {
  return toast.promise(
    promise,
    {
      loading: messages.loading,
      success: messages.success,
      error: messages.error,
    },
    {
      style: {
        padding: "1rem",
        borderRadius: "var(--radius-md, 8px)",
      },
      success: {
        style: {
          background: "var(--success, #10b981)",
          color: "var(--bg, #fff)",
        },
      },
      error: {
        style: {
          background: "var(--error, #ef4444)",
          color: "var(--bg, #fff)",
        },
      },
      loading: {
        style: {
          background: "var(--surface, #1f2937)",
          color: "var(--text, #fff)",
        },
      },
    }
  );
}

/**
 * Dismiss notification
 */
export function dismiss(toastId?: string) {
  if (toastId) {
    toast.dismiss(toastId);
  } else {
    toast.dismiss();
  }
}

/**
 * Custom notification
 */
export function custom(message: string, options?: any) {
  return toast(message, options);
}
