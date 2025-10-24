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
        "container-md": "var(--container-lg)",
        "container-lg": "var(--container-xl)",
        "container-xl": "var(--container-2xl)",
      },
      fontFamily: { sans: "var(--font-sans)", mono: "var(--font-mono)" },
      fontSize: {
        h1: ["var(--h1-size)", { lineHeight: "var(--h1-line)", fontWeight: "var(--h1-weight)" }],
        h2: ["var(--h2-size)", { lineHeight: "var(--h2-line)", fontWeight: "var(--h2-weight)" }],
        h3: ["var(--h3-size)", { lineHeight: "var(--h3-line)", fontWeight: "var(--h3-weight)" }],
        h4: ["var(--h4-size)", { lineHeight: "var(--h4-line)", fontWeight: "var(--h4-weight)" }],
        body: [
          "var(--body-size)",
          { lineHeight: "var(--body-line)", fontWeight: "var(--body-weight)" },
        ],
        small: [
          "var(--small-size)",
          { lineHeight: "var(--small-line)", fontWeight: "var(--small-weight)" },
        ],
      },
      boxShadow: { soft: "0 0.375rem 1.5rem rgba(0,0,0,.2)" },
      padding: {
        "section-sm": "var(--section-sm)",
        "section-md": "var(--section-md)",
        "section-lg": "var(--section-lg)",
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
      /* responsive container paddings */
      addUtilities({
        ".container": { "padding-inline": "1.5rem" }
      }, { variants: ["md"] });
      addUtilities({
        ".container": { "padding-inline": "2rem" }
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
