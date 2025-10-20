const preset = require("@avnir/tokens/tailwind-preset.cjs");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "../../apps/ladle/src/**/*.{ts,tsx,mdx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ]
};
