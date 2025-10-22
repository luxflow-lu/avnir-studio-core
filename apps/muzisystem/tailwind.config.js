/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@avnir/design/tailwind-preset.cjs")],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        foreground: 'var(--text)',
        card: 'var(--surface)',
        'card-foreground': 'var(--text)',
        popover: 'var(--surface)',
        'popover-foreground': 'var(--text)',
        border: 'var(--muted)',
        input: 'var(--surface)',
        ring: 'var(--accent)',
        'on-primary': 'var(--on-primary, #000000)',
        'on-surface': 'var(--on-surface, var(--text))',
        'on-accent': 'var(--on-accent, #000000)',
      },
      animation: {
        'fade-in': 'fadeIn var(--duration-200, 200ms) var(--easing-standard, ease)',
        'slide-up': 'slideUp var(--duration-300, 300ms) var(--easing-decelerate, ease-out)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
