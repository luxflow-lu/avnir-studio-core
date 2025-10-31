/**
 * Cookies Policy - Shared across all AVNIR sites
 */

import type { Cookie, LegalDocument } from "./types";

export const cookiesUsed: Cookie[] = [
  {
    type: "Cookies essentiels",
    purpose: "Nécessaires au fonctionnement du site (authentification, panier, préférences)",
    duration: "Session ou 1 an",
    canDisable: false,
    examples: ["session_id", "auth_token", "csrf_token", "preferences"],
  },
  {
    type: "Cookies analytiques",
    purpose: "Mesure d'audience et analyse du trafic (Google Analytics)",
    duration: "13 mois",
    canDisable: true,
    examples: ["_ga", "_gid", "_gat"],
  },
  {
    type: "Cookies marketing",
    purpose: "Publicité ciblée et remarketing",
    duration: "Variable (3 à 12 mois)",
    canDisable: true,
    examples: ["_fbp", "ads_id"],
  },
];

export const cookiesPolicy: LegalDocument = {
  lastUpdated: "2025-01-31",
  sections: [
    {
      id: "what-is-cookie",
      title: "1. Qu'est-ce qu'un cookie ?",
      content: "Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, smartphone, tablette) lorsque vous visitez un site web. Les cookies permettent au site de mémoriser vos actions et préférences (langue, taille de police, etc.) pendant une certaine période, pour ne pas avoir à les ressaisir à chaque visite.",
    },
    {
      id: "types-of-cookies",
      title: "2. Types de cookies utilisés",
      content: "Nous utilisons différents types de cookies sur nos sites :",
    },
    {
      id: "essential-cookies",
      title: "2.1. Cookies essentiels (obligatoires)",
      content: "Ces cookies sont indispensables au fonctionnement du site. Ils permettent :",
      items: [
        "L'authentification et la gestion de votre session",
        "La sécurité et la protection contre les attaques (CSRF)",
        "Le fonctionnement du panier d'achat (e-commerce)",
        "La mémorisation de vos préférences (langue, thème)",
      ],
    },
    {
      id: "analytics-cookies",
      title: "2.2. Cookies analytiques (optionnels)",
      content: "Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site :",
      items: [
        "Nombre de visiteurs et pages vues",
        "Durée de visite et taux de rebond",
        "Source de trafic (moteurs de recherche, réseaux sociaux)",
        "Comportement de navigation et parcours utilisateur",
      ],
    },
    {
      id: "marketing-cookies",
      title: "2.3. Cookies marketing (optionnels)",
      content: "Ces cookies permettent de vous proposer des publicités pertinentes :",
      items: [
        "Suivi des conversions publicitaires",
        "Remarketing et publicité ciblée",
        "Mesure de l'efficacité des campagnes",
      ],
    },
    {
      id: "cookie-management",
      title: "3. Gestion de vos préférences",
      content: "Vous pouvez gérer vos préférences cookies de plusieurs façons :",
      items: [
        "**Bandeau de consentement** : À votre première visite, un bandeau vous permet d'accepter ou refuser les cookies non-essentiels",
        "**Paramètres du site** : Vous pouvez modifier vos préférences à tout moment via le lien 'Gérer les cookies' en bas de page",
        "**Paramètres du navigateur** : Vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies",
      ],
    },
    {
      id: "browser-settings",
      title: "4. Configuration du navigateur",
      content: "Voici comment gérer les cookies dans les principaux navigateurs :",
      items: [
        "**Chrome** : Paramètres > Confidentialité et sécurité > Cookies",
        "**Firefox** : Paramètres > Vie privée et sécurité > Cookies",
        "**Safari** : Préférences > Confidentialité > Cookies",
        "**Edge** : Paramètres > Confidentialité > Cookies",
      ],
    },
    {
      id: "third-party-cookies",
      title: "5. Cookies tiers",
      content: "Certains cookies sont déposés par des services tiers (Google Analytics, réseaux sociaux). Ces services ont leurs propres politiques de confidentialité :",
      items: [
        "**Google Analytics** : https://policies.google.com/privacy",
        "**Facebook** : https://www.facebook.com/privacy/explanation",
      ],
    },
    {
      id: "consequences",
      title: "6. Conséquences du refus des cookies",
      content: "Si vous refusez les cookies non-essentiels :",
      items: [
        "Le site continuera de fonctionner normalement",
        "Certaines fonctionnalités peuvent être limitées",
        "Nous ne pourrons pas améliorer votre expérience de navigation",
        "Vous verrez toujours des publicités, mais moins pertinentes",
      ],
    },
    {
      id: "updates",
      title: "7. Modifications de cette politique",
      content: "Nous pouvons mettre à jour cette politique de cookies. La date de dernière mise à jour est indiquée en haut de ce document.",
    },
  ],
};
