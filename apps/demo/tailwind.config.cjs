const preset = require("@avnir/tokens/tailwind-preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
    "../../packages/ui/dist/**/*.{js,ts,tsx}",
    "../../packages/**/*.{ts,tsx,js,jsx,mdx}"
  ]
};
