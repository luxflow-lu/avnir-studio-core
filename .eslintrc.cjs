module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "import"
    // "tailwindcss" // enable when eslint-plugin-tailwindcss is installed
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
    // "plugin:tailwindcss/recommended" // optional
  ],
  settings: { react: { version: "detect" } },
  rules: {
    // forbid hardcoded hex colors in TS/TSX
    "no-restricted-syntax": [
      "error",
      {
        selector: "Literal[value=/^#([0-9a-fA-F]{3}){1,2}$/]",
        message: "Couleurs hex interdites. Utilise les classes/tokens.",
      }
    ]
  }
};
