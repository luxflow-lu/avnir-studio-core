/**
 * Footer Configuration
 * Centralized footer links and social media for all AVNIR apps
 */

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

/**
 * Social Media Links (same for all brands)
 */
export const socialLinks = {
  instagram: "https://www.instagram.com/avnir_studio/",
  youtube: "https://www.youtube.com/@avnirstudio/",
} as const;

/**
 * All AVNIR Sites
 */
export const avnirSites = {
  "avnir-studio": { name: "AVNIR-Studio", url: "https://avnir-studio.com" },
  "muzidev": { name: "MUZIDEV", url: "https://muzidev.com" },
  "muzipics": { name: "MUZIPICS", url: "https://muzipics.com" },
  "muziweb": { name: "MUZIWEB", url: "https://muziweb.com" },
  "muzibase": { name: "MUZIBASE", url: "https://muzibase.com" },
  "muzimerch": { name: "MUZIMERCH", url: "https://muzimerch.com" },
  "muzitools": { name: "MUZITOOLS", url: "https://muzitools.com" },
  "muzisystem": { name: "MUZISYSTEM", url: "https://muzisystem.com" },
} as const;

export type BrandKey = keyof typeof avnirSites;

/**
 * Company Links (same for all brands)
 */
export const companyLinks: FooterLink[] = [
  { label: "AVNIR-Studio", href: avnirSites["avnir-studio"].url, external: true },
  { label: "Jacques (IA)", href: "https://jacques.avnir-studio.com", external: true },
  { label: "MUZISYSTEM", href: avnirSites.muzisystem.url, external: true },
];

/**
 * Legal Links (same for all brands)
 */
export const legalLinks: FooterLink[] = [
  { label: "Mentions légales", href: "/legal/mentions" },
  { label: "Confidentialité", href: "/legal/privacy" },
  { label: "Cookies", href: "/legal/cookies" },
];

/**
 * Get Services Links (all sites except current brand and AVNIR-Studio)
 */
export function getServicesLinks(currentBrand: BrandKey): FooterLink[] {
  return Object.entries(avnirSites)
    .filter(([key]) => key !== currentBrand && key !== "avnir-studio")
    .map(([_, site]) => ({
      label: site.name,
      href: site.url,
      external: true,
    }));
}

/**
 * Get Copyright Text
 */
export function getCopyright(brandName: string): string {
  const year = new Date().getFullYear();
  return `© ${year} ${brandName}. Powered by AVNIR-Studio.`;
}

/**
 * Get Footer Configuration for a specific brand
 */
export function getFooterConfig(brand: BrandKey, exploreLinks: FooterLink[] = []) {
  return {
    brand,
    brandName: avnirSites[brand].name,
    sections: {
      explore: exploreLinks.length > 0 ? { title: "Explorer", links: exploreLinks } : null,
      services: { title: "Services", links: getServicesLinks(brand) },
      company: { title: "Company", links: companyLinks },
      legal: { title: "Légal", links: legalLinks },
    },
    social: socialLinks,
    copyright: getCopyright(avnirSites[brand].name),
  };
}
