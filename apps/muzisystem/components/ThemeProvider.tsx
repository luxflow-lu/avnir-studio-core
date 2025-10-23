"use client";

import { useEffect } from "react";

export function ThemeProvider() {
  useEffect(() => {
    // Set default brand if not already set
    if (!document.documentElement.hasAttribute("data-brand")) {
      document.documentElement.setAttribute("data-brand", "avnir-studio");
    }
  }, []);

  return null;
}

export function ThemeToggle() {
  const toggleTheme = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? null : "light";

    if (newTheme) {
      html.setAttribute("data-theme", newTheme);
    } else {
      html.removeAttribute("data-theme");
    }
  };

  const toggleBrand = () => {
    const html = document.documentElement;
    const brands = [
      "avnir-studio",
      "muzidev",
      "muzipics",
      "muziweb",
      "muzimerch",
      "muzibase",
      "muzimanager",
    ];
    const currentBrand = html.getAttribute("data-brand") || "avnir-studio";
    const currentIndex = brands.indexOf(currentBrand);
    const nextBrand = brands[(currentIndex + 1) % brands.length];

    if (nextBrand) {
      html.setAttribute("data-brand", nextBrand);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={toggleTheme}
        className="px-3 py-1 text-sm bg-surface border border-muted rounded hover:bg-accent/10 transition-colors"
      >
        Toggle Theme
      </button>
      <button
        onClick={toggleBrand}
        className="px-3 py-1 text-sm bg-surface border border-muted rounded hover:bg-accent/10 transition-colors"
      >
        Switch Brand
      </button>
    </div>
  );
}
