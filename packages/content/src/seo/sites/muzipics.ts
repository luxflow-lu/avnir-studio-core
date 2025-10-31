/**
 * MUZIPICS SEO Configuration
 */

import type { SiteSEOConfig } from "../types";

export const muzipicsSEO: SiteSEOConfig = {
  // Base configuration
  siteName: "MUZIPICS",
  siteUrl: "https://muzipics.com",
  locale: "fr_FR",
  twitter: "@muzipics",
  defaultOgImage: "/og-image.png",
  defaultDescription:
    "Créez des visuels époustouflants pour vos projets musicaux. Templates professionnels, génération IA, et export HD. Gratuit pour commencer.",
  defaultKeywords: [
    "générateur visuels",
    "cover art",
    "artwork musique",
    "design graphique",
    "templates visuels",
    "IA génération",
    "artiste indépendant",
    "pochette album",
    "visuel musical",
  ],

  // Pages SEO
  pages: {
    home: {
      title: "MUZIPICS - Générateur de Visuels pour Artistes",
      description:
        "Créez des visuels époustouflants pour vos projets musicaux. Templates professionnels, génération IA, et export HD.",
      keywords: ["générateur visuels", "cover art", "artwork musique"],
    },
    gallery: {
      title: "Galerie - MUZIPICS",
      description: "Découvrez notre galerie de templates et créations visuelles pour artistes.",
      keywords: ["galerie", "templates", "exemples visuels"],
    },
    pricing: {
      title: "Tarifs - MUZIPICS",
      description: "Plans gratuits et premium pour créer des visuels professionnels sans limite.",
      keywords: ["tarifs", "prix", "abonnement", "gratuit"],
    },
    faq: {
      title: "FAQ - MUZIPICS",
      description: "Questions fréquentes sur MUZIPICS et la création de visuels.",
      keywords: ["faq", "questions", "aide"],
    },
    contact: {
      title: "Contact - MUZIPICS",
      description: "Contactez l'équipe MUZIPICS pour toute question ou demande.",
      keywords: ["contact", "support", "aide"],
    },
  },
};
