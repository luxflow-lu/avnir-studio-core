/**
 * Accessibility utilities for better UX
 */

export interface AriaProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  "aria-expanded"?: boolean;
  "aria-hidden"?: boolean;
  "aria-disabled"?: boolean;
  "aria-pressed"?: boolean;
  "aria-selected"?: boolean;
  "aria-current"?: boolean | "page" | "step" | "location" | "date" | "time";
  role?: string;
}

/**
 * Generate accessible IDs for form elements
 */
export function generateId(prefix = "avnir"): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Get ARIA attributes for interactive elements
 */
export function getAriaProps(props: Record<string, any>): AriaProps {
  return Object.keys(props).reduce((acc, key) => {
    if (key.startsWith("aria-") || key === "role") {
      const value = props[key];
      if (value !== undefined) {
        (acc as any)[key] = value;
      }
    }
    return acc;
  }, {} as AriaProps);
}

/**
 * Screen reader only text utility
 */
export const srOnly =
  "sr-only absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0";
