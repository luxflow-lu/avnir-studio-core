/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./src/styles-source.css"],
  darkMode: ["class", '[data-theme="dark"]'],
  presets: [require("@avnir/design/tailwind-preset.cjs")]
};
