/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        surface: 'var(--surface)',
        primary: 'var(--primary)',
        'on-background': 'var(--on-bg)',
        'on-surface': 'var(--on-surface)',
        'on-primary': 'var(--on-primary)'
      },
      borderColor: { DEFAULT: 'var(--border)' },
      ringColor: { DEFAULT: 'var(--primary)' },
      boxShadow: { card: '0 10px 30px rgba(0,0,0,0.25)' },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' }
    }
  }
};
