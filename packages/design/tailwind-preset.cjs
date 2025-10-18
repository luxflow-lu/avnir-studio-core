/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: 'clamp(1rem, 4vw, 2rem)' },
      screens: { sm: '40rem', md: '48rem', lg: '64rem', xl: '75rem', '2xl': '82.5rem' }
    },
    extend: {
      colors: {
        bg: 'var(--bg)', surface: 'var(--surface)', text: 'var(--text)', titles: 'var(--titles)',
        muted: 'var(--muted)', accent: 'var(--accent)', primary: 'var(--primary)'
      },
      borderRadius: { sm: 'var(--radius-sm)', md: 'var(--radius-md)', lg: 'var(--radius-lg)', xl: 'var(--radius-xl)' },
      spacing: { 1: 'var(--space-1)', 2:'var(--space-2)', 3:'var(--space-3)', 4:'var(--space-4)', 5:'var(--space-5)', 6:'var(--space-6)', 7:'var(--space-7)', 8:'var(--space-8)' },
      maxWidth: { 'container-md': 'var(--container-lg)', 'container-lg': 'var(--container-xl)', 'container-xl': 'var(--container-2xl)' },
      fontFamily: { sans: 'var(--font-sans)', mono: 'var(--font-mono)' },
      fontSize: {
        h1: ['var(--h1-size)', { lineHeight: 'var(--h1-line)', fontWeight: 'var(--h1-weight)' }],
        h2: ['var(--h2-size)', { lineHeight: 'var(--h2-line)', fontWeight: 'var(--h2-weight)' }],
        h3: ['var(--h3-size)', { lineHeight: 'var(--h3-line)', fontWeight: 'var(--h3-weight)' }],
        h4: ['var(--h4-size)', { lineHeight: 'var(--h4-line)', fontWeight: 'var(--h4-weight)' }],
        body: ['var(--body-size)', { lineHeight: 'var(--body-line)', fontWeight: 'var(--body-weight)' }],
        small: ['var(--small-size)', { lineHeight: 'var(--small-line)', fontWeight: 'var(--small-weight)' }]
      },
      boxShadow: { soft: '0 0.375rem 1.5rem rgba(0,0,0,.2)' },
      padding: { 'section-sm': 'var(--section-sm)', 'section-md': 'var(--section-md)', 'section-lg': 'var(--section-lg)' }
    }
  }
};
