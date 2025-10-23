module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals", // v15
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "detect" } },
  rules: {
    "react/jsx-no-target-blank": ["warn", { allowReferrer: true }],
    "import/no-unresolved": "off", // résolu par TS paths/workspaces
    "import/order": ["warn", { "newlines-between": "always" }],
    // forbid hardcoded hex colors in TS/TSX
    "no-restricted-syntax": [
      "warn",
      {
        selector: "Literal[value=/^#([0-9a-fA-F]{3}){1,2}$/]",
        message: "Couleurs hex interdites. Utilise les classes/tokens.",
      },
      {
        selector: "ImportDeclaration[source.value=/\\.\\.\\/\\.\\.\\/packages/]",
        message: "Utilise les imports de packages (@avnir/*) au lieu de chemins relatifs.",
      },
    ],
  },
  ignorePatterns: [
    "dist/**",
    "build/**",
    ".next/**",
    ".turbo/**",
    "**/*.d.ts",
    "**/*.css",
    "**/*.scss",
  ],
};
