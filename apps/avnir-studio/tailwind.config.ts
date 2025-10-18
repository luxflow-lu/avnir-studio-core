import preset from '../../packages/design/tailwind-preset.cjs';
import type { Config } from 'tailwindcss';
export default { presets: [preset as any], content: ['./app/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}', '../../features/**/*.{ts,tsx}'] } satisfies Config;
