module.exports = {
  presets: [require("@avnir/design/tailwind-preset.cjs")],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "../../packages/ui/**/*.tsx"],
  darkMode: ["class", '[data-theme="dark"]'],
};
