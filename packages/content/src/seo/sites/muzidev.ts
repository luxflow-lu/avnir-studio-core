/**
 * MUZIDEV SEO Configuration
 */

import type { SiteSEOConfig } from "../types";

export const muzidevSEO: SiteSEOConfig = {
  // Base configuration
  siteName: "MUZIDEV",
  siteUrl: "https://muzidev.com",
  locale: "fr_FR",
  twitter: "@muzidev",
  defaultOgImage: "/images/og-muzidev.jpg",
  defaultDescription: "La formation la plus complète d'internet pour les artistes et producteurs indépendants. Apprends à maîtriser chaque étape de ta carrière musicale.",
  defaultKeywords: ["formation musique", "production musicale", "artiste indépendant", "beatmaker", "rapper"],

  // Page-specific SEO
  pages: {
    home: {
      title: "Formation en ligne pour artistes et producteurs | MUZIDEV",
      description: "La formation la plus complète d'internet pour les artistes et producteurs indépendants. Apprends à maîtriser chaque étape de ta carrière musicale, de la création à la réussite.",
      keywords: ["formation musique en ligne", "cours production musicale", "formation artiste indépendant"],
    },
    formation: {
      title: "Programme de formation complet | MUZIDEV",
      description: "Découvrez notre programme de formation complet : Production, Développement, Marketing et Business. 4 piliers pour bâtir une carrière solide dans la musique.",
      keywords: ["programme formation musique", "cours production", "formation marketing musical"],
    },
    pricing: {
      title: "Tarifs et abonnements | MUZIDEV",
      description: "Choisissez la formule qui vous convient : accès gratuit limité, abonnement mensuel ou annuel. Commencez votre formation dès aujourd'hui.",
      keywords: ["tarifs formation musique", "abonnement muzidev", "prix cours musique"],
    },
    faq: {
      title: "Questions fréquentes | MUZIDEV",
      description: "Toutes les réponses à vos questions sur la formation MUZIDEV : contenu, accès, certificats, paiement et plus encore.",
      keywords: ["faq formation musique", "questions muzidev"],
    },
    contact: {
      title: "Nous contacter | MUZIDEV",
      description: "Une question ? Besoin d'aide ? Contactez l'équipe MUZIDEV. Nous sommes là pour vous accompagner dans votre formation musicale.",
      keywords: ["contact muzidev", "support formation"],
    },
  },
};
