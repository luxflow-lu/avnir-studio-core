/**
 * Company Information - Shared across all AVNIR sites
 */

import type { CompanyInfo } from "./types";

export const companyInfo: CompanyInfo = {
  legalName: "AVNIR-Studio",
  legalForm: "SARL", // À adapter selon la forme juridique réelle
  siret: "XXX XXX XXX XXXXX", // À remplir avec le vrai SIRET
  vatNumber: "FR XX XXX XXX XXX", // À remplir avec le vrai numéro de TVA
  capital: "10 000 €", // À adapter
  address: "123 Rue Example, 75001 Paris, France", // À remplir avec la vraie adresse
  email: "contact@avnir-studio.com",
  phone: "+33 X XX XX XX XX", // À remplir avec le vrai numéro
  director: "Prénom Nom", // À remplir avec le vrai nom du directeur de publication
  host: {
    name: "Vercel Inc.",
    address: "340 S Lemon Ave #4133, Walnut, CA 91789, USA",
    website: "https://vercel.com",
  },
};
