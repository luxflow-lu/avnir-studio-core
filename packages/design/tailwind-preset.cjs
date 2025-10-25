/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "clamp(1rem, 4vw, 2rem)" },
      screens: { sm: "40rem", md: "48rem", lg: "64rem", xl: "75rem", "2xl": "82.5rem" },
    },
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
        titles: "var(--titles)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        primary: "var(--primary)",
        // Semantic aliases
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: { DEFAULT: "var(--card)", foreground: "var(--card-foreground)" },
        "primary-foreground": "var(--primary-foreground)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      spacing: {
        0: "0",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        12: "3rem",
        16: "4rem",
      },
      maxWidth: {
        // Removed: container-* variables not needed (using .container utility instead)
      },
      fontFamily: { sans: "var(--font-sans)", mono: "var(--font-mono)" },
      fontSize: {
        // Using existing tokens from themes.css
        h1: ["var(--text-5xl)", { lineHeight: "var(--leading-tight)", fontWeight: "var(--font-extrabold)" }],
        h2: ["var(--text-4xl)", { lineHeight: "var(--leading-tight)", fontWeight: "var(--font-bold)" }],
        h3: ["var(--text-2xl)", { lineHeight: "var(--leading-snug)", fontWeight: "var(--font-semibold)" }],
        h4: ["var(--text-xl)", { lineHeight: "var(--leading-snug)", fontWeight: "var(--font-semibold)" }],
        body: [
          "var(--text-base)",
          { lineHeight: "var(--leading-normal)", fontWeight: "var(--font-normal)" },
        ],
        small: [
          "var(--text-sm)",
          { lineHeight: "var(--leading-snug)", fontWeight: "var(--font-medium)" },
        ],
      },
      boxShadow: { soft: "0 0.375rem 1.5rem rgba(0,0,0,.2)" },
      padding: {
        "section-sm": "var(--space-section-sm)",
        "section-md": "var(--space-section-md)",
        "section-lg": "var(--space-section-lg)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        /* container with responsive inline padding */
        ".container": {
          "margin-inline": "auto",
          "max-width": "80rem", /* ~1280px */
          "padding-inline": "var(--space-global-x)"
        },
      });
      /* responsive container paddings - using tokens */
      addUtilities({
        ".container": { "padding-inline": "var(--space-24)" }
      }, { variants: ["md"] });
      addUtilities({
        ".container": { "padding-inline": "var(--space-32)" }
      }, { variants: ["lg"] });

      /* section vertical spacings */
      addUtilities({
        ".section-medium": { "padding-block": "var(--space-section-md)" },
        ".section-large":  { "padding-block": "var(--space-section-lg)" },
        ".global-padding": { "padding-inline": "var(--space-global-x)" }
      });
    },
  ],
};
