/** Visually hidden utility (screen-reader only). */
export const visuallyHidden = "sr-only";

/** Returns an accessible id from a base and suffix */
export function a11yId(base: string, suffix: string) {
  return `${base}__${suffix}`;
}
