import preset from "@avnir/tokens/tailwind-preset.cjs";
export default {
  presets: [preset],
  content: ["./src/**/*.{ts,tsx,mdx}","../../packages/ui/src/**/*.{ts,tsx}"]
};
