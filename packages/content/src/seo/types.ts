/**
 * SEO Types
 */

export interface PageSEO {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export interface SiteSEOConfig {
  siteName: string;
  siteUrl: string;
  locale: string;
  twitter: string;
  defaultOgImage: string;
  defaultDescription: string;
  defaultKeywords: string[];
  pages: Record<string, PageSEO>;
}

export interface GenerateMetadataParams {
  page?: string;
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  path?: string;
  noIndex?: boolean;
}

export interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: Array<{ url: string }>;
    locale: string;
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
    creator: string;
  };
  robots: string;
}
