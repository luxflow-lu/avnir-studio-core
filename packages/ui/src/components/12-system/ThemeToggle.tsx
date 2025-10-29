"use client";

import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export type ThemeToggleProps = React.HTMLAttributes<HTMLDivElement>;

export const ThemeToggle = React.forwardRef<HTMLDivElement, ThemeToggleProps>(
  ({ className, ...props }, ref) => {
    // Read theme from HTML - no hardcoded default
    const [currentTheme, setCurrentTheme] = React.useState<string>("");

    React.useEffect(() => {
      if (typeof window === "undefined") return;
      
      // Read from localStorage or HTML
      const savedTheme = localStorage.getItem("theme");
      const html = document.documentElement;
      const theme = savedTheme || html.getAttribute("data-theme") || "dark";
      
      setCurrentTheme(theme);
      html.setAttribute("data-theme", theme);
    }, []);

    const toggleTheme = () => {
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      setCurrentTheme(newTheme);
    };

    // Don't render until theme is loaded
    if (!currentTheme) return null;

    return (
      <div ref={ref} className={cx("flex gap-4", className)} {...props}>
        <Button
          variant="outline"
          onClick={toggleTheme}
          aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
        >
          {currentTheme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </Button>
      </div>
    );
  },
);
ThemeToggle.displayName = "ThemeToggle";
