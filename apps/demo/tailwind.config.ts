import type { Config } from "tailwindcss";
import base from "../../apps/ladle/tailwind.config.cjs";

export default {
  presets: [base as unknown as Config],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "../../apps/ladle/src/**/*.{ts,tsx,mdx}",
  ],
} satisfies Config;
