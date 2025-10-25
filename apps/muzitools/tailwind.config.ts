import type { Config } from "tailwindcss";
import preset from "@avnir/design/tailwind-preset.cjs";

const config: Config = {
  presets: [preset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "../../features/audio-tools/src/**/*.{js,ts,jsx,tsx}"
  ]
};

export default config;
