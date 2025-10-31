/**
 * Legal Content Types
 */

export type SiteType = "vitrine" | "learning" | "ecommerce" | "saas" | "marketplace";

export interface LegalSection {
  id?: string;
  title: string;
  content: string;
  items?: string[];
  contact?: string;
}

export interface CompanyInfo {
  legalName: string;
  legalForm: string;
  siret: string;
  vatNumber?: string;
  capital?: string;
  address: string;
  email: string;
  phone?: string;
  director: string;
  host: {
    name: string;
    address: string;
    website?: string;
  };
}

export interface Cookie {
  type: string;
  purpose: string;
  duration: string;
  canDisable: boolean;
  examples: string[];
}

export interface LegalDocument {
  lastUpdated: string;
  sections: LegalSection[];
}

export interface SiteTypeConfig {
  dataCollected: string[];
  services: string[];
  specificTerms: string | null;
}
