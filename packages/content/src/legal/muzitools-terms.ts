/**
 * MUZITOOLS Terms of Service
 */

import type { LegalDocument } from "./types";
import { companyInfo } from "./company-info";

export const muzitoolsTerms: LegalDocument = {
  lastUpdated: "2024-11-01",
  sections: [
    {
      id: "acceptance",
      title: "1. Acceptation des conditions",
      content: "En accédant et en utilisant MUZITOOLS, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le service.",
    },
    {
      id: "service-description",
      title: "2. Description du service",
      content: "MUZITOOLS est une plateforme gratuite d'outils audio pour créateurs musicaux. Le service inclut actuellement :",
      items: [
        "Key & BPM Finder : Analyse de tonalité et tempo",
        "AutoCut : Éditeur audio avec waveform interactif",
        "D'autres outils à venir",
      ],
    },
    {
      id: "license",
      title: "3. Licence d'utilisation",
      content: "MUZITOOLS vous accorde une licence non exclusive, non transférable et révocable pour utiliser le service à des fins personnelles ou commerciales.",
    },
    {
      id: "restrictions",
      title: "4. Restrictions d'utilisation",
      content: "Vous vous engagez à NE PAS :",
      items: [
        "Utiliser le service à des fins illégales",
        "Tenter de contourner les mesures de sécurité",
        "Surcharger ou perturber le service",
        "Copier, modifier ou distribuer le code source",
        "Utiliser le service pour créer un service concurrent",
      ],
    },
    {
      id: "intellectual-property",
      title: "5. Propriété intellectuelle",
      content: "Tous les droits de propriété intellectuelle sur MUZITOOLS (code, design, marques, logos) appartiennent à AVNIR Studio. Vous conservez tous les droits sur vos fichiers audio. MUZITOOLS ne revendique aucun droit sur vos créations.",
    },
    {
      id: "free-service",
      title: "6. Gratuité du service",
      content: "MUZITOOLS est actuellement gratuit et le restera. Nous nous réservons le droit d'ajouter des fonctionnalités premium à l'avenir, mais les outils actuels resteront gratuits.",
    },
    {
      id: "availability",
      title: "7. Disponibilité du service",
      content: "Nous nous efforçons de maintenir MUZITOOLS disponible 24/7, mais nous ne garantissons pas une disponibilité ininterrompue. Le service peut être temporairement indisponible pour maintenance ou mise à jour.",
    },
    {
      id: "liability",
      title: "8. Limitation de responsabilité",
      content: "MUZITOOLS est fourni \"tel quel\" sans garantie d'aucune sorte. Nous ne sommes pas responsables :",
      items: [
        "Des erreurs d'analyse (BPM, tonalité incorrects)",
        "De la perte de données",
        "Des dommages directs ou indirects liés à l'utilisation du service",
        "De l'utilisation que vous faites des résultats",
      ],
    },
    {
      id: "modifications",
      title: "9. Modifications du service",
      content: "Nous nous réservons le droit de modifier, suspendre ou arrêter tout ou partie du service à tout moment, avec ou sans préavis.",
    },
    {
      id: "termination",
      title: "10. Résiliation",
      content: "Nous nous réservons le droit de suspendre ou résilier votre accès au service en cas de violation de ces conditions.",
    },
    {
      id: "applicable-law",
      title: "11. Droit applicable",
      content: "Ces conditions sont régies par le droit luxembourgeois. Tout litige sera soumis à la juridiction exclusive des tribunaux du Luxembourg.",
    },
    {
      id: "contact",
      title: "12. Contact",
      content: `Pour toute question concernant ces conditions d'utilisation, contactez-nous à : ${companyInfo.email}`,
    },
  ],
};
