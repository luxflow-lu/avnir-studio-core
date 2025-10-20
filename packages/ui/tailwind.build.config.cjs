const preset = require("@avnir/tokens/tailwind-preset");
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset],
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",          // scanner uniquement la lib
    // si composants sont dans un dossier différent, adapter
  ],
  theme: { extend: {} },
  plugins: []
};
