import preset from '../../packages/tokens/tailwind-preset.cjs';
import type { Config } from 'tailwindcss';
export default { presets: [preset as any], content: ['./app/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}', '../../features/**/*.{ts,tsx}'] } satisfies Config;
