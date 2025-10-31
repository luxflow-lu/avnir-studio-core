/**
 * Terms & Conditions for Learning Platforms (MUZIDEV)
 */

import type { LegalSection } from "../types";
import { companyInfo } from "../company-info";

export const learningTermsSections: LegalSection[] = [
  {
    id: "access-formations",
    title: "11. Accès aux formations",
    content: `L'accès aux formations est soumis à inscription et, le cas échéant, au paiement des frais correspondants.

Les formations sont accessibles en ligne 24h/24, 7j/7, sous réserve de disponibilité technique.`,
  },
  {
    id: "subscription",
    title: "12. Abonnement et paiement",
    content: `Les modalités d'abonnement sont les suivantes :`,
    items: [
      "<strong>Formules disponibles</strong> : Gratuit (accès limité), Mensuel, Annuel",
      "<strong>Paiement</strong> : Par carte bancaire via notre prestataire sécurisé (Stripe)",
      "<strong>Renouvellement</strong> : Automatique sauf résiliation avant la date d'échéance",
      "<strong>Facturation</strong> : Une facture est envoyée par email après chaque paiement",
    ],
  },
  {
    id: "cancellation",
    title: "13. Résiliation et remboursement",
    content: `Vous pouvez résilier votre abonnement à tout moment depuis votre compte.`,
    items: [
      "<strong>Résiliation</strong> : Effective à la fin de la période en cours (pas de remboursement au prorata)",
      "<strong>Droit de rétractation</strong> : 14 jours à compter de la souscription (conformément à la loi)",
      "<strong>Remboursement</strong> : Possible dans les 14 jours si aucune formation n'a été commencée",
      "<strong>Accès après résiliation</strong> : Maintenu jusqu'à la fin de la période payée",
    ],
  },
  {
    id: "intellectual-property-courses",
    title: "14. Propriété intellectuelle des contenus pédagogiques",
    content: `Tous les contenus pédagogiques (vidéos, supports de cours, exercices, quiz) sont la propriété exclusive d'${companyInfo.legalName}.

Vous disposez d'un droit d'utilisation personnel et non-transmissible pour votre apprentissage uniquement. Il est strictement interdit de :`,
    items: [
      "Télécharger, copier ou reproduire les contenus",
      "Partager vos identifiants de connexion avec des tiers",
      "Diffuser, revendre ou distribuer les contenus",
      "Utiliser les contenus à des fins commerciales",
    ],
  },
  {
    id: "certificates",
    title: "15. Certificats et attestations",
    content: `À l'issue de certaines formations, vous pouvez obtenir un certificat de réussite sous réserve de :`,
    items: [
      "Avoir complété l'intégralité des modules",
      "Avoir réussi les évaluations avec le score minimum requis",
      "Être à jour de vos paiements",
    ],
    contact: `Les certificats sont délivrés au format numérique (PDF) et peuvent être partagés sur vos profils professionnels.`,
  },
  {
    id: "progress-tracking",
    title: "16. Suivi de progression",
    content: `Nous conservons un historique de votre progression (modules complétés, scores aux quiz, temps passé) pour :`,
    items: [
      "Vous permettre de reprendre là où vous vous êtes arrêté",
      "Générer vos certificats de réussite",
      "Améliorer nos contenus pédagogiques",
    ],
  },
  {
    id: "updates",
    title: "17. Mises à jour des formations",
    content: `${companyInfo.legalName} s'engage à maintenir les formations à jour et à ajouter régulièrement de nouveaux contenus.

Les abonnés actifs bénéficient automatiquement de toutes les mises à jour et nouveaux contenus sans frais supplémentaires.`,
  },
  {
    id: "support",
    title: "18. Support et assistance",
    content: `Un support technique et pédagogique est disponible par email à : ${companyInfo.email}

Délai de réponse : sous 48h ouvrées maximum.`,
  },
];
