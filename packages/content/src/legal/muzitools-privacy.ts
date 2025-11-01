/**
 * MUZITOOLS Privacy Policy - No data collection
 */

import type { LegalDocument } from "./types";
import { companyInfo } from "./company-info";

export const muzitoolsPrivacy: LegalDocument = {
  lastUpdated: "2024-11-01",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content: `MUZITOOLS est un service d'outils audio gratuits développé par ${companyInfo.legalName}. Cette politique de confidentialité explique comment nous traitons vos données lorsque vous utilisez notre site web.`,
    },
    {
      id: "no-data-collection",
      title: "1. Données que nous NE collectons PAS",
      content: "MUZITOOLS fonctionne 100% localement dans votre navigateur. Nous ne collectons, ne stockons et ne transmettons AUCUNE des données suivantes :",
      items: [
        "Vos fichiers audio",
        "Les résultats d'analyse (BPM, tonalité, etc.)",
        "Votre historique d'utilisation des outils",
        "Vos données de navigation personnelles",
        "Cookies de tracking ou de publicité",
      ],
    },
    {
      id: "technical-data",
      title: "2. Données techniques minimales",
      content: "Nous collectons uniquement des données techniques anonymes via notre hébergeur (Vercel) pour assurer le bon fonctionnement du service :",
      items: [
        "Logs d'accès serveur (adresse IP, user agent, pages visitées)",
        "Métriques de performance (temps de chargement, erreurs)",
      ],
      contact: "Ces données sont anonymisées et ne permettent pas de vous identifier personnellement.",
    },
    {
      id: "data-usage",
      title: "3. Utilisation des données",
      content: "Les données techniques collectées sont utilisées uniquement pour :",
      items: [
        "Assurer la sécurité et la stabilité du service",
        "Détecter et corriger les bugs",
        "Améliorer les performances",
      ],
    },
    {
      id: "data-sharing",
      title: "4. Partage des données",
      content: "Nous ne vendons, ne louons et ne partageons AUCUNE donnée avec des tiers, sauf obligation légale.",
    },
    {
      id: "cookies",
      title: "5. Cookies",
      content: "MUZITOOLS n'utilise AUCUN cookie de tracking, publicité ou analytics. Les seuls cookies utilisés sont des cookies techniques essentiels au fonctionnement du site (préférences de thème, langue, etc.).",
      contact: "Pour plus d'informations, consultez notre politique de cookies.",
    },
    {
      id: "user-rights",
      title: "6. Vos droits (RGPD)",
      content: "Conformément au RGPD, vous disposez des droits suivants :",
      items: [
        "Droit d'accès à vos données",
        "Droit de rectification",
        "Droit à l'effacement",
        "Droit à la portabilité",
        "Droit d'opposition",
      ],
      contact: "Cependant, comme nous ne collectons aucune donnée personnelle vous concernant, ces droits ne s'appliquent pas dans le cadre de l'utilisation de MUZITOOLS.",
    },
    {
      id: "security",
      title: "7. Sécurité",
      content: "Tous vos fichiers audio sont traités localement dans votre navigateur. Ils ne sont jamais uploadés sur nos serveurs. La connexion au site est sécurisée via HTTPS.",
    },
    {
      id: "updates",
      title: "8. Modifications",
      content: "Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour.",
    },
    {
      id: "contact",
      title: "9. Contact",
      content: `Pour toute question concernant cette politique de confidentialité, contactez-nous à : ${companyInfo.email}`,
    },
  ],
};
