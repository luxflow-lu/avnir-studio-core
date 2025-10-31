/**
 * Mentions Légales - Template with brand variables
 */

import type { LegalDocument } from "./types";
import { companyInfo } from "./company-info";

export function getMentionsLegales(siteName: string): LegalDocument {
  return {
    lastUpdated: "2025-01-31",
    sections: [
      {
        id: "editor",
        title: "1. Éditeur du site",
        content: `Le site <strong>${siteName}</strong> est édité par :

<strong>${companyInfo.legalName}</strong>, ${companyInfo.legalForm}
SIRET : ${companyInfo.siret}
${companyInfo.vatNumber ? `TVA Intracommunautaire : ${companyInfo.vatNumber}` : ""}
${companyInfo.capital ? `Capital social : ${companyInfo.capital}` : ""}
Siège social : ${companyInfo.address}
Email : ${companyInfo.email}
${companyInfo.phone ? `Téléphone : ${companyInfo.phone}` : ""}

<strong>Directeur de publication</strong> : ${companyInfo.director}`,
      },
      {
        id: "hosting",
        title: "2. Hébergement",
        content: `Le site <strong>${siteName}</strong> est hébergé par :

<strong>${companyInfo.host.name}</strong>
${companyInfo.host.address}
${companyInfo.host.website ? `Site web : ${companyInfo.host.website}` : ""}`,
      },
      {
        id: "intellectual-property",
        title: "3. Propriété intellectuelle",
        content: `L'ensemble du contenu du site <strong>${siteName}</strong> (textes, images, logos, vidéos, graphismes, icônes, sons, logiciels) est la propriété exclusive d'<strong>${companyInfo.legalName}</strong> ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.

Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable d'<strong>${companyInfo.legalName}</strong>.

Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.`,
      },
      {
        id: "trademarks",
        title: "4. Marques et logos",
        content: `Les marques, logos et signes distinctifs reproduits sur le site <strong>${siteName}</strong> sont la propriété d'<strong>${companyInfo.legalName}</strong> ou de tiers ayant autorisé leur utilisation.

Toute reproduction, imitation ou usage, total ou partiel, de ces marques, logos et signes distinctifs sans l'autorisation expresse et préalable d'<strong>${companyInfo.legalName}</strong> est prohibée et constitue une contrefaçon sanctionnée par les articles L.713-2 et suivants du Code de la Propriété Intellectuelle.`,
      },
      {
        id: "hyperlinks",
        title: "5. Liens hypertextes",
        content: `Le site <strong>${siteName}</strong> peut contenir des liens hypertextes vers d'autres sites internet. <strong>${companyInfo.legalName}</strong> n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.

La création de liens hypertextes vers le site <strong>${siteName}</strong> nécessite l'autorisation préalable écrite d'<strong>${companyInfo.legalName}</strong>. Cette autorisation peut être révoquée à tout moment.`,
      },
      {
        id: "liability",
        title: "6. Responsabilité",
        content: `<strong>${companyInfo.legalName}</strong> s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site <strong>${siteName}</strong>, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.

Toutefois, <strong>${companyInfo.legalName}</strong> ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.

<strong>${companyInfo.legalName}</strong> ne pourra être tenue responsable des dommages directs ou indirects résultant de l'accès au site ou de l'utilisation du site, y compris l'inaccessibilité, les pertes de données, détériorations, destructions ou virus qui pourraient affecter l'équipement informatique de l'utilisateur.`,
      },
      {
        id: "applicable-law",
        title: "7. Droit applicable et juridiction",
        content: `Les présentes mentions légales sont régies par le droit français.

En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.`,
      },
      {
        id: "contact",
        title: "8. Contact",
        content: `Pour toute question concernant le site <strong>${siteName}</strong> ou les présentes mentions légales, vous pouvez nous contacter :

Email : ${companyInfo.email}
${companyInfo.phone ? `Téléphone : ${companyInfo.phone}` : ""}
Adresse : ${companyInfo.address}`,
      },
    ],
  };
}
