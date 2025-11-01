/**
 * MUZITOOLS Legal Mentions
 */

import type { LegalDocument } from "./types";
import { companyInfo } from "./company-info";

export const muzitoolsMentions: LegalDocument = {
  lastUpdated: "2024-11-01",
  sections: [
    {
      id: "editor",
      title: "1. Éditeur du site",
      content: `<strong>Raison sociale :</strong> ${companyInfo.legalName}<br/>
<strong>Forme juridique :</strong> ${companyInfo.legalForm}<br/>
<strong>SIRET :</strong> ${companyInfo.siret}<br/>
<strong>Adresse :</strong> ${companyInfo.address}<br/>
<strong>Email :</strong> ${companyInfo.email}<br/>
<strong>Directeur de la publication :</strong> Maxime Zaoui`,
    },
    {
      id: "hosting",
      title: "2. Hébergement",
      content: `<strong>Hébergeur :</strong> Vercel Inc.<br/>
<strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br/>
<strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a>`,
    },
    {
      id: "intellectual-property",
      title: "3. Propriété intellectuelle",
      content: "L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, code source) est la propriété exclusive d'AVNIR Studio, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit d'AVNIR Studio.",
    },
    {
      id: "trademarks",
      title: "4. Marques",
      content: "Les marques suivantes sont la propriété d'AVNIR Studio :",
      items: [
        "AVNIR Studio",
        "MUZITOOLS",
        "MUZIDEV",
        "MUZIPICS",
        "MUZIWEB",
        "MUZIBASE",
        "MUZIMERCH",
        "MUZISYSTEM",
      ],
    },
    {
      id: "personal-data",
      title: "5. Données personnelles",
      content: "Pour plus d'informations sur le traitement de vos données personnelles, consultez notre <a href=\"/legal/privacy\">politique de confidentialité</a>.",
    },
    {
      id: "cookies",
      title: "6. Cookies",
      content: "Pour plus d'informations sur l'utilisation des cookies, consultez notre <a href=\"/legal/cookies\">politique de cookies</a>.",
    },
    {
      id: "credits",
      title: "7. Crédits",
      content: `<strong>Design et développement :</strong> AVNIR Studio<br/>
<strong>Technologies utilisées :</strong> Next.js, React, TypeScript, Vercel<br/>
<strong>Algorithmes audio :</strong> Essentia.js, Web Audio API`,
    },
    {
      id: "contact",
      title: "8. Contact",
      content: `Pour toute question ou réclamation concernant le site, vous pouvez nous contacter :<br/>
• Par email : ${companyInfo.email}<br/>
• Via le formulaire de contact : <a href="/contact">https://muzitools.com/contact</a>`,
    },
    {
      id: "mediation",
      title: "9. Médiation",
      content: "Conformément à l'article L.612-1 du Code de la consommation, nous proposons un dispositif de médiation de la consommation. L'entité de médiation retenue est : Centre de Médiation de la Consommation de Conciliateurs de Justice (CM2C). En cas de litige, vous pouvez déposer votre réclamation sur le site : <a href=\"https://cm2c.net\" target=\"_blank\" rel=\"noopener noreferrer\">https://cm2c.net</a>",
    },
  ],
};
