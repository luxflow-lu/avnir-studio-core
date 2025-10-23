module.exports = {
  root: false,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: { react: { version: "detect" } },
  rules: {
    // Interdit les couleurs hex en dur
    "no-restricted-syntax": [
      "error",
      {
        selector: "Literal[value=/^#([0-9a-fA-F]{3}){1,2}$/]",
        message: "Couleurs hex interdites. Utilise les classes/tokens.",
      },
      {
        selector: "Literal[value=/\\btext-white\\b/]",
        message: "Pas de text-white sur primary. Utilise text-on-primary.",
      },
    ],
  },
};
