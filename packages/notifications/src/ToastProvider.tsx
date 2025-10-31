/**
 * Toast Provider
 * Provides toast notifications to the app
 */

"use client";

import { Toaster } from "./toast";

export function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 4000,
        style: {
          background: "var(--surface)",
          color: "var(--text)",
        },
      }}
    />
  );
}
