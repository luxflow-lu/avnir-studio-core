export const brandConfig = {
  name: "MUZISYSTEM",
  description: "A comprehensive design system built for modern web applications",
  url: "https://muzisystem.com",

  // App-specific image paths
  images: {
    hero: "/images/hero-placeholder.svg",
    ogImage: "/images/og-muzisystem.png",
    features: {
      accessibility: "/images/features/accessibility.svg",
      performance: "/images/features/performance.svg",
      theming: "/images/features/theming.svg",
    },
  },

  // Logo paths (served from public)
  logos: {
    main: "/logos/muzisystem-logo.svg",
    icon: "/logos/muzisystem-icon.svg",
  },

  // Social media
  social: {
    twitter: "@muzisystem",
    github: "https://github.com/avnir/muzisystem",
  },
} as const;
