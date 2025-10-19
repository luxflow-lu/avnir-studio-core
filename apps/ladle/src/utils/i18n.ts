export function t(key: string, vars?: Record<string, string | number>) {
  if (!vars) return key;
  return Object.entries(vars).reduce((acc, [k, v]) => acc.replaceAll(`{${k}}`, String(v)), key);
}

export const i18n = { t };
