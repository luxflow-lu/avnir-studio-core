/**
 * MUZISYSTEM SEO Configuration
 */

import type { SiteSEOConfig } from "../types";

export const muzisystemSEO: SiteSEOConfig = {
  // Base configuration
  siteName: "MUZISYSTEM",
  siteUrl: "https://muzisystem.com",
  locale: "fr_FR",
  twitter: "@avnirstudio",
  defaultOgImage: "/images/og-muzisystem.jpg",
  defaultDescription: "Design system pour l'écosystème AVNIR. Composants, guidelines et patterns pour créer des interfaces cohérentes et accessibles.",
  defaultKeywords: ["design system", "ui components", "react components", "design tokens"],

  // Page-specific SEO
  pages: {
    home: {
      title: "MUZISYSTEM - Design System AVNIR",
      description: "Design system pour l'écosystème AVNIR. Composants, guidelines et patterns pour créer des interfaces cohérentes et accessibles.",
      keywords: ["design system", "avnir", "muzisystem", "ui library"],
    },
    overview: {
      title: "Overview | MUZISYSTEM",
      description: "Vue d'ensemble du design system MUZISYSTEM : architecture, principes et utilisation.",
      keywords: ["design system overview", "documentation"],
    },
    foundations: {
      title: "Foundations | MUZISYSTEM",
      description: "Fondations du design system : couleurs, typographie, espacements et tokens.",
      keywords: ["design tokens", "foundations", "colors", "typography"],
    },
    components: {
      title: "Components | MUZISYSTEM",
      description: "Bibliothèque complète de composants React : buttons, inputs, cards, modals et plus encore.",
      keywords: ["react components", "ui components", "component library"],
    },
    guidelines: {
      title: "Guidelines | MUZISYSTEM",
      description: "Guidelines et bonnes pratiques pour utiliser le design system MUZISYSTEM.",
      keywords: ["design guidelines", "best practices", "usage"],
    },
    patterns: {
      title: "Patterns | MUZISYSTEM",
      description: "Patterns de conception et templates réutilisables pour accélérer votre développement.",
      keywords: ["design patterns", "templates", "ui patterns"],
    },
  },
};
