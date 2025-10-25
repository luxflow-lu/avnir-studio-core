import * as React from "react";
import { cx } from "../../utils/cx";

export type ThemeMode = "light" | "dark" | "system";
export interface ThemeToggleProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: ThemeMode;
  onThemeChange?: (theme: ThemeMode) => void;
}

export const ThemeToggle = React.forwardRef<HTMLDivElement, ThemeToggleProps>(
  ({ className, theme = "dark", onThemeChange, ...props }, ref) => {
    const modes: ThemeMode[] = ["dark", "light", "system"];
    const next = () => {
      const idx = modes.indexOf(theme);
      const nextTheme = modes[(idx + 1) % modes.length];
      if (nextTheme) {
        onThemeChange?.(nextTheme);
      }
    };

    return (
      <div
        ref={ref}
        className={cx(
          "inline-flex items-center rounded-[var(--radius-sm)] transition-colors",
          "text-[var(--text-muted)]",
          className,
        )} {...props}
      >
        <button
          onClick={next}
          className={cx(
            "inline-flex items-center justify-center h-9 px-3 rounded-[var(--radius-sm)]",
            "hover:bg-white/5 text-[var(--text-muted)] hover:text-white",
            "focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]",
          )}
          aria-label={`Switch theme (current: ${theme})`}
        >
          {theme === "dark" && <span>Dark</span>}
          {theme === "light" && <span>Light</span>}
          {theme === "system" && <span>System</span>}
        </button>
      </div>
    );
  },
);
ThemeToggle.displayName = "ThemeToggle";
