const tokensPreset = require("@avnir/tokens/tailwind-preset.cjs");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tokensPreset],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "../../apps/ladle/src/**/*.{ts,tsx,mdx}",
    "../../packages/**/*.{ts,tsx,mdx}",
  ],
};
