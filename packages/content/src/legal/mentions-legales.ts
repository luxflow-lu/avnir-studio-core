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
        content: `Le site **${siteName}** est édité par :

**${companyInfo.legalName}**, ${companyInfo.legalForm}
SIRET : ${companyInfo.siret}
${companyInfo.vatNumber ? `TVA Intracommunautaire : ${companyInfo.vatNumber}` : ""}
${companyInfo.capital ? `Capital social : ${companyInfo.capital}` : ""}
Siège social : ${companyInfo.address}
Email : ${companyInfo.email}
${companyInfo.phone ? `Téléphone : ${companyInfo.phone}` : ""}

**Directeur de publication** : ${companyInfo.director}`,
      },
      {
        id: "hosting",
        title: "2. Hébergement",
        content: `Le site **${siteName}** est hébergé par :

**${companyInfo.host.name}**
${companyInfo.host.address}
${companyInfo.host.website ? `Site web : ${companyInfo.host.website}` : ""}`,
      },
      {
        id: "intellectual-property",
        title: "3. Propriété intellectuelle",
        content: `L'ensemble du contenu du site **${siteName}** (textes, images, logos, vidéos, graphismes, icônes, sons, logiciels) est la propriété exclusive d'**${companyInfo.legalName}** ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.

Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable d'**${companyInfo.legalName}**.

Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.`,
      },
      {
        id: "trademarks",
        title: "4. Marques et logos",
        content: `Les marques, logos et signes distinctifs reproduits sur le site **${siteName}** sont la propriété d'**${companyInfo.legalName}** ou de tiers ayant autorisé leur utilisation.

Toute reproduction, imitation ou usage, total ou partiel, de ces marques, logos et signes distinctifs sans l'autorisation expresse et préalable d'**${companyInfo.legalName}** est prohibée et constitue une contrefaçon sanctionnée par les articles L.713-2 et suivants du Code de la Propriété Intellectuelle.`,
      },
      {
        id: "hyperlinks",
        title: "5. Liens hypertextes",
        content: `Le site **${siteName}** peut contenir des liens hypertextes vers d'autres sites internet. **${companyInfo.legalName}** n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.

La création de liens hypertextes vers le site **${siteName}** nécessite l'autorisation préalable écrite d'**${companyInfo.legalName}**. Cette autorisation peut être révoquée à tout moment.`,
      },
      {
        id: "liability",
        title: "6. Responsabilité",
        content: `**${companyInfo.legalName}** s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site **${siteName}**, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.

Toutefois, **${companyInfo.legalName}** ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.

**${companyInfo.legalName}** ne pourra être tenue responsable des dommages directs ou indirects résultant de l'accès au site ou de l'utilisation du site, y compris l'inaccessibilité, les pertes de données, détériorations, destructions ou virus qui pourraient affecter l'équipement informatique de l'utilisateur.`,
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
        content: `Pour toute question concernant le site **${siteName}** ou les présentes mentions légales, vous pouvez nous contacter :

Email : ${companyInfo.email}
${companyInfo.phone ? `Téléphone : ${companyInfo.phone}` : ""}
Adresse : ${companyInfo.address}`,
      },
    ],
  };
}
