/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    // Container désactivé - géré par themes.css
    container: false,
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
        // Utiliser les variables sémantiques du design system
        0: "0",
        xs: "var(--gap-xs)",    // 0.25rem (4px)
        sm: "var(--gap-sm)",    // 0.5rem (8px)
        md: "var(--gap-md)",    // 1rem (16px)
        lg: "var(--gap-lg)",    // 1.5rem (24px)
        xl: "var(--gap-xl)",    // 2rem (32px)
        // Aliases numériques pour compatibilité (déconseillé)
        1: "var(--gap-xs)",
        2: "var(--gap-sm)",
        4: "var(--gap-md)",
        6: "var(--gap-lg)",
        8: "var(--gap-xl)",
      },
      maxWidth: {
        // Removed: container-* variables not needed (using .container utility instead)
      },
      fontFamily: { sans: "var(--font-sans)", mono: "var(--font-mono)" },
      fontSize: {
        // Using SEMANTIC tokens from themes.css
        h1: ["var(--text-h1)", { lineHeight: "var(--leading-tight)", fontWeight: "var(--font-extrabold)" }],
        h2: ["var(--text-h2)", { lineHeight: "var(--leading-tight)", fontWeight: "var(--font-bold)" }],
        h3: ["var(--text-h3)", { lineHeight: "var(--leading-snug)", fontWeight: "var(--font-semibold)" }],
        h4: ["var(--text-h4)", { lineHeight: "var(--leading-snug)", fontWeight: "var(--font-semibold)" }],
        h5: ["var(--text-h5)", { lineHeight: "var(--leading-snug)", fontWeight: "var(--font-semibold)" }],
        h6: ["var(--text-h6)", { lineHeight: "var(--leading-snug)", fontWeight: "var(--font-semibold)" }],
        body: [
          "var(--text-body)",
          { lineHeight: "var(--leading-normal)", fontWeight: "var(--font-normal)" },
        ],
        "body-sm": [
          "var(--text-body-sm)",
          { lineHeight: "var(--leading-normal)", fontWeight: "var(--font-normal)" },
        ],
        "body-lg": [
          "var(--text-body-lg)",
          { lineHeight: "var(--leading-normal)", fontWeight: "var(--font-normal)" },
        ],
        small: [
          "var(--text-small)",
          { lineHeight: "var(--leading-snug)", fontWeight: "var(--font-medium)" },
        ],
        tiny: [
          "var(--text-tiny)",
          { lineHeight: "var(--leading-snug)", fontWeight: "var(--font-medium)" },
        ],
        "display-sm": ["var(--text-display-sm)", { lineHeight: "var(--leading-tight)", fontWeight: "var(--font-extrabold)" }],
        "display-md": ["var(--text-display-md)", { lineHeight: "var(--leading-tight)", fontWeight: "var(--font-extrabold)" }],
        "display-lg": ["var(--text-display-lg)", { lineHeight: "var(--leading-tight)", fontWeight: "var(--font-extrabold)" }],
      },
      boxShadow: { soft: "0 0.375rem 1.5rem rgba(0,0,0,.2)" },
      padding: {
        "section-sm": "var(--padding-section-sm)",
        "section-md": "var(--padding-section-md)",
        "section-lg": "var(--padding-section-lg)",
        "section-xl": "var(--padding-section-xl)",
        "container": "var(--padding-container)",
      },
    },
  },
  plugins: [
    // Container et sections gérés dans themes.css avec media queries responsive
    // Pas de plugin nécessaire ici
  ],
};
