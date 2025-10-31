/**
 * Site Configuration - Legal pages per site type
 */

import type { SiteType, SiteTypeConfig } from "./types";

export const siteTypeConfig: Record<SiteType, SiteTypeConfig> = {
  vitrine: {
    dataCollected: ["Navigation", "Cookies analytics"],
    services: ["Présentation de services", "Formulaire de contact"],
    specificTerms: null,
  },
  learning: {
    dataCollected: ["Compte utilisateur", "Progression cours", "Certificats", "Paiements"],
    services: ["Accès formations", "Suivi progression", "Certificats", "Abonnements"],
    specificTerms: "learning",
  },
  ecommerce: {
    dataCollected: ["Compte", "Commandes", "Paiements", "Adresse livraison"],
    services: ["Vente en ligne", "Paiement sécurisé", "Livraison", "Retours"],
    specificTerms: "ecommerce",
  },
  saas: {
    dataCollected: ["Compte", "Données projets", "Fichiers uploadés", "Collaborateurs"],
    services: ["Accès plateforme", "Stockage données", "Collaboration", "API"],
    specificTerms: "saas",
  },
  marketplace: {
    dataCollected: ["Compte", "Transactions", "Évaluations", "Messages"],
    services: ["Mise en relation", "Paiement sécurisé", "Système d'évaluation", "Messagerie"],
    specificTerms: "marketplace",
  },
};

/**
 * Get legal links for a specific site type
 */
export function getLegalLinks(siteType: SiteType) {
  const config = siteTypeConfig[siteType];
  
  const baseLinks = [
    { label: "Mentions légales", href: "/legal/mentions" },
    { label: "Confidentialité", href: "/legal/privacy" },
    { label: "Cookies", href: "/legal/cookies" },
  ];

  // Add specific terms link if applicable
  if (config.specificTerms) {
    baseLinks.push({
      label: "Conditions Générales",
      href: "/legal/terms",
    });
  }

  return baseLinks;
}

/**
 * Map brand to site type
 */
export const brandToSiteType: Record<string, SiteType> = {
  "muzidev": "learning",
  "muzipics": "saas",
  "muziweb": "vitrine",
  "muzibase": "marketplace",
  "muzimerch": "ecommerce",
  "muzitools": "saas",
  "muzisystem": "vitrine",
  "avnir-studio": "saas",
};
