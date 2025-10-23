module.exports = {
  presets: [require("@avnir/design/tailwind-preset.cjs")],
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
};
