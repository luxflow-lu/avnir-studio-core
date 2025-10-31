/**
 * SEO Metadata Generator
 */

import type { SiteSEOConfig, GenerateMetadataParams, Metadata } from "./types";

export function generateMetadata(
  siteConfig: SiteSEOConfig,
  params: GenerateMetadataParams = {}
): Metadata {
  // Get page-specific SEO if page key provided
  const pageSEO = params.page ? siteConfig.pages[params.page] : undefined;

  // Determine final values (priority: params > pageSEO > siteDefaults)
  const title = params.title || pageSEO?.title || siteConfig.siteName;
  const description = params.description || pageSEO?.description || siteConfig.defaultDescription;
  const keywords = params.keywords || pageSEO?.keywords || siteConfig.defaultKeywords;
  const ogImage = params.image || pageSEO?.ogImage || siteConfig.defaultOgImage;
  const noIndex = params.noIndex || pageSEO?.noIndex || false;
  const url = `${siteConfig.siteUrl}${params.path || ""}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.siteName,
      images: [{ url: ogImage }],
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: siteConfig.twitter,
    },
    robots: noIndex ? "noindex,nofollow" : "index,follow",
  };
}
