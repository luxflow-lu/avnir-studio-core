import type { Config } from 'tailwindcss'

export default {
  content: [
    './.storybook/**/*.{ts,tsx,mdx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
    '../../packages/design/**/*.{css,ts}',
    '../**/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
