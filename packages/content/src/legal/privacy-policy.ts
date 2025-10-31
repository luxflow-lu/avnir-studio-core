/**
 * Privacy Policy (RGPD Compliant) - Shared across all AVNIR sites
 */

import type { LegalDocument } from "./types";
import { companyInfo } from "./company-info";

export const privacyPolicy: LegalDocument = {
  lastUpdated: "2025-01-31",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content: `${companyInfo.legalName} accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données conformément au Règlement Général sur la Protection des Données (RGPD).`,
    },
    {
      id: "data-controller",
      title: "1. Responsable du traitement",
      content: `Le responsable du traitement des données est :
${companyInfo.legalName}, ${companyInfo.legalForm}
SIRET : ${companyInfo.siret}
Adresse : ${companyInfo.address}
Email : ${companyInfo.email}`,
    },
    {
      id: "data-collected",
      title: "2. Données collectées",
      content: "Nous collectons les données suivantes :",
      items: [
        "**Données d'identification** : nom, prénom, adresse email",
        "**Données de connexion** : adresse IP, logs de connexion, identifiant de session",
        "**Données de navigation** : pages visitées, durée de visite, source de trafic",
        "**Données de paiement** : informations de facturation (traitées par notre prestataire de paiement sécurisé)",
        "**Données d'utilisation** : interactions avec nos services, préférences, historique d'activité",
      ],
    },
    {
      id: "data-purpose",
      title: "3. Finalités du traitement",
      content: "Vos données sont utilisées pour :",
      items: [
        "**Gestion de votre compte** : création, authentification, gestion de profil",
        "**Fourniture des services** : accès aux fonctionnalités, traitement des commandes",
        "**Amélioration de nos services** : analyse d'usage, optimisation de l'expérience utilisateur",
        "**Communications** : emails transactionnels, support client, newsletters (avec consentement)",
        "**Sécurité** : prévention de la fraude, protection contre les abus",
        "**Obligations légales** : conformité fiscale et comptable",
      ],
    },
    {
      id: "legal-basis",
      title: "4. Base légale du traitement",
      content: "Le traitement de vos données repose sur :",
      items: [
        "**Exécution du contrat** : nécessaire pour fournir nos services",
        "**Consentement** : pour les communications marketing et cookies non-essentiels",
        "**Intérêt légitime** : amélioration de nos services, sécurité",
        "**Obligation légale** : conservation des données comptables et fiscales",
      ],
    },
    {
      id: "data-retention",
      title: "5. Durée de conservation",
      content: "Vos données sont conservées pendant :",
      items: [
        "**Comptes actifs** : pendant toute la durée d'utilisation du service",
        "**Comptes inactifs** : 3 ans après la dernière connexion, puis suppression",
        "**Données de paiement** : 10 ans (obligation légale comptable)",
        "**Données marketing** : jusqu'au retrait du consentement",
        "**Logs de connexion** : 12 mois maximum",
      ],
    },
    {
      id: "user-rights",
      title: "6. Vos droits (RGPD)",
      content: "Conformément au RGPD, vous disposez des droits suivants :",
      items: [
        "**Droit d'accès** : obtenir une copie de vos données personnelles",
        "**Droit de rectification** : corriger des données inexactes ou incomplètes",
        "**Droit à l'effacement** (droit à l'oubli) : supprimer vos données dans certains cas",
        "**Droit à la limitation** : restreindre le traitement de vos données",
        "**Droit à la portabilité** : récupérer vos données dans un format structuré",
        "**Droit d'opposition** : vous opposer au traitement de vos données",
        "**Droit de retirer votre consentement** : à tout moment pour les traitements basés sur le consentement",
        "**Droit de définir des directives post-mortem** : concernant le sort de vos données après votre décès",
      ],
      contact: `Pour exercer vos droits, contactez-nous à : ${companyInfo.email}. Nous vous répondrons dans un délai d'un mois maximum.`,
    },
    {
      id: "data-sharing",
      title: "7. Partage des données",
      content: "Nous ne vendons jamais vos données. Nous pouvons les partager avec :",
      items: [
        "**Prestataires de services** : hébergement (Vercel), paiement (Stripe), analytics (Google Analytics)",
        "**Autorités légales** : si requis par la loi ou pour protéger nos droits",
        "**Transferts hors UE** : certains prestataires peuvent être situés hors UE, avec garanties appropriées (clauses contractuelles types)",
      ],
    },
    {
      id: "data-security",
      title: "8. Sécurité des données",
      content: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :",
      items: [
        "Chiffrement des données sensibles (HTTPS, SSL/TLS)",
        "Authentification sécurisée (hashage bcrypt, tokens JWT)",
        "Contrôles d'accès stricts et principe du moindre privilège",
        "Sauvegardes régulières et plan de reprise d'activité",
        "Audits de sécurité et mises à jour régulières",
      ],
    },
    {
      id: "cookies",
      title: "9. Cookies et traceurs",
      content: "Nous utilisons des cookies pour améliorer votre expérience. Consultez notre Politique de Cookies pour plus d'informations sur les cookies utilisés et comment les gérer.",
    },
    {
      id: "minors",
      title: "10. Données des mineurs",
      content: "Nos services ne sont pas destinés aux personnes de moins de 16 ans. Nous ne collectons pas sciemment de données personnelles de mineurs sans le consentement parental.",
    },
    {
      id: "dpo",
      title: "11. Délégué à la Protection des Données (DPO)",
      content: `Pour toute question relative à la protection de vos données, vous pouvez contacter notre DPO à : dpo@avnir-studio.com`,
    },
    {
      id: "cnil",
      title: "12. Réclamation auprès de la CNIL",
      content: "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) : www.cnil.fr",
    },
    {
      id: "updates",
      title: "13. Modifications de cette politique",
      content: "Nous pouvons mettre à jour cette politique de confidentialité. La date de dernière mise à jour est indiquée en haut de ce document. Les modifications importantes vous seront notifiées par email.",
    },
  ],
};
