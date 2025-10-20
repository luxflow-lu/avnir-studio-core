/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Base colors using RGB tuples
        bg: "rgb(var(--bg))",
        surface: "rgb(var(--surface))",
        border: "rgb(var(--border))",
        "on-bg": "rgb(var(--on-bg))",
        "on-surface": "rgb(var(--on-surface))",
        
        // Primary colors
        primary: "rgb(var(--primary))",
        "on-primary": "rgb(var(--on-primary))",
        
        // Semantic aliases for components
        background: "rgb(var(--bg))",
        foreground: "rgb(var(--on-bg))",
        card: {
          DEFAULT: "rgb(var(--surface))",
          foreground: "rgb(var(--on-surface))"
        },
        ring: "rgb(var(--primary))",
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
        DEFAULT: "var(--radius)"
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)"
      }
    }
  }
};
