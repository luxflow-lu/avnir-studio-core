/**
 * Common Terms & Conditions - Shared clauses across all site types
 */

import type { LegalSection } from "../types";
import { companyInfo } from "../company-info";

export const commonTermsSections: LegalSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptation des conditions",
    content: `En accédant et en utilisant ce site, vous acceptez d'être lié par les présentes Conditions Générales d'Utilisation (CGU), toutes les lois et réglementations applicables. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser ce site.`,
  },
  {
    id: "account",
    title: "2. Création de compte",
    content: `Pour accéder à certains services, vous devez créer un compte. Vous vous engagez à :`,
    items: [
      "Fournir des informations exactes, complètes et à jour",
      "Maintenir la confidentialité de vos identifiants de connexion",
      "Être responsable de toutes les activités effectuées sous votre compte",
      "Nous informer immédiatement de toute utilisation non autorisée de votre compte",
      "Ne pas créer de compte pour une autre personne sans autorisation",
    ],
  },
  {
    id: "prohibited-uses",
    title: "3. Utilisations interdites",
    content: `Vous vous engagez à ne pas utiliser le site pour :`,
    items: [
      "Violer des lois ou réglementations en vigueur",
      "Transmettre du contenu illégal, offensant, diffamatoire ou inapproprié",
      "Usurper l'identité d'une autre personne ou entité",
      "Tenter d'accéder de manière non autorisée au site ou aux systèmes",
      "Interférer avec le fonctionnement normal du site",
      "Collecter des données personnelles d'autres utilisateurs",
      "Utiliser des robots, scrapers ou autres moyens automatisés",
    ],
  },
  {
    id: "intellectual-property",
    title: "4. Propriété intellectuelle",
    content: `Tous les contenus présents sur le site (textes, images, logos, vidéos, etc.) sont la propriété exclusive d'${companyInfo.legalName} ou de ses partenaires et sont protégés par les lois sur la propriété intellectuelle.

Vous ne pouvez pas copier, reproduire, distribuer, modifier ou créer des œuvres dérivées sans autorisation écrite préalable.`,
  },
  {
    id: "user-content",
    title: "5. Contenu utilisateur",
    content: `Si vous publiez du contenu sur le site, vous garantissez que :`,
    items: [
      "Vous détenez tous les droits nécessaires sur ce contenu",
      "Le contenu ne viole aucun droit de propriété intellectuelle",
      "Le contenu n'est pas illégal, diffamatoire ou inapproprié",
    ],
    contact: `Vous accordez à ${companyInfo.legalName} une licence mondiale, non-exclusive, pour utiliser, reproduire et afficher votre contenu dans le cadre de la fourniture des services.`,
  },
  {
    id: "liability",
    title: "6. Limitation de responsabilité",
    content: `${companyInfo.legalName} s'efforce de maintenir le site accessible et fonctionnel, mais ne peut garantir :`,
    items: [
      "L'absence d'interruptions ou d'erreurs",
      "L'exactitude ou l'exhaustivité des informations",
      "La sécurité absolue contre les virus ou malwares",
    ],
    contact: `${companyInfo.legalName} ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser le site.`,
  },
  {
    id: "modifications",
    title: "7. Modifications des CGU",
    content: `${companyInfo.legalName} se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entreront en vigueur dès leur publication sur le site. Votre utilisation continue du site après publication des modifications constitue votre acceptation des nouvelles conditions.`,
  },
  {
    id: "termination",
    title: "8. Résiliation",
    content: `${companyInfo.legalName} se réserve le droit de suspendre ou de résilier votre accès au site à tout moment, sans préavis, en cas de violation des présentes CGU ou pour toute autre raison jugée nécessaire.`,
  },
  {
    id: "applicable-law",
    title: "9. Droit applicable",
    content: `Les présentes CGU sont régies par le droit français. Tout litige sera soumis à la compétence exclusive des tribunaux français.`,
  },
  {
    id: "contact",
    title: "10. Contact",
    content: `Pour toute question concernant ces CGU, contactez-nous à : ${companyInfo.email}`,
  },
];
