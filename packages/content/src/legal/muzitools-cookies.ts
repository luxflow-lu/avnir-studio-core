/**
 * MUZITOOLS Cookies Policy - No tracking cookies
 */

import type { LegalDocument } from "./types";
import { companyInfo } from "./company-info";

export const muzitoolsCookies: LegalDocument = {
  lastUpdated: "2024-11-01",
  sections: [
    {
      id: "what-are-cookies",
      title: "1. Qu'est-ce qu'un cookie ?",
      content: "Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. Les cookies permettent au site de mémoriser vos actions et préférences.",
    },
    {
      id: "our-commitment",
      title: "2. Notre engagement",
      content: "MUZITOOLS n'utilise AUCUN cookie de tracking, publicité ou analytics. Nous respectons votre vie privée et ne suivons pas votre comportement sur le web. Pas de Google Analytics, pas de Facebook Pixel, pas de cookies tiers.",
    },
    {
      id: "essential-cookies",
      title: "3. Cookies strictement nécessaires",
      content: "Nous utilisons uniquement des cookies techniques essentiels au fonctionnement du site :",
      items: [
        "<strong>theme</strong> (durée: 1 an) - Mémorise votre préférence de thème (clair/sombre)",
        "<strong>locale</strong> (durée: 1 an) - Mémorise votre langue préférée",
      ],
    },
    {
      id: "local-storage",
      title: "4. Stockage local (localStorage)",
      content: "MUZITOOLS utilise le stockage local de votre navigateur pour :",
      items: [
        "Mémoriser vos préférences d'interface",
        "Sauvegarder temporairement vos paramètres d'outils",
      ],
      contact: "Ces données restent sur votre appareil et ne sont jamais transmises à nos serveurs.",
    },
    {
      id: "third-party-cookies",
      title: "5. Cookies tiers",
      content: "MUZITOOLS n'utilise AUCUN cookie tiers. Nous n'intégrons pas de services externes qui pourraient déposer des cookies (Google, Facebook, etc.).",
    },
    {
      id: "cookie-management",
      title: "6. Gestion des cookies",
      content: "Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. Cependant, cela peut affecter certaines fonctionnalités du site (thème, langue).",
      items: [
        "<strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies et autres données de sites",
        "<strong>Firefox :</strong> Paramètres → Vie privée et sécurité → Cookies et données de sites",
        "<strong>Safari :</strong> Préférences → Confidentialité → Gérer les données de sites web",
        "<strong>Edge :</strong> Paramètres → Confidentialité, recherche et services → Cookies et autorisations de site",
      ],
    },
    {
      id: "updates",
      title: "7. Modifications",
      content: "Nous nous réservons le droit de modifier cette politique de cookies à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour.",
    },
    {
      id: "contact",
      title: "8. Contact",
      content: `Pour toute question concernant notre utilisation des cookies, contactez-nous à : ${companyInfo.email}`,
    },
  ],
};
