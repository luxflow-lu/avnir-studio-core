/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Old tokens (keep for compatibility)
        bg: "rgb(var(--bg))",
        "bg-dark": "var(--bg-dark)",
        surface: "var(--surface)",
        "bg-light": "var(--bg-light)",
        brand: "var(--brand)",
        "brand-on": "var(--brand-on)",
        muted: "var(--text-muted)",
        
        // Semantic colors (for components)
        background: "rgb(var(--bg))",
        foreground: "rgb(var(--foreground))",
        card: {
          DEFAULT: "rgb(var(--card))",
          foreground: "rgb(var(--card-foreground))"
        },
        primary: {
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
          foreground: "rgb(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive))",
          foreground: "rgb(var(--destructive-foreground))"
        },
        border: "rgb(var(--border))",
        ring: "rgb(var(--ring))",
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
