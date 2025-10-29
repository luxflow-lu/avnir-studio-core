import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://muzisystem.avnir.studio";
const SITE_NAME = "MUZISYSTEM";
const SITE_DESCRIPTION = "Production-ready design system with 144+ components, comprehensive documentation, and multi-brand support. Built with React, TypeScript, and modern web standards.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Design System Showcase`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "design system",
    "react components",
    "typescript",
    "ui library",
    "component library",
    "avnir studio",
    "muzisystem",
    "accessible components",
    "wcag",
    "design tokens",
  ],
  authors: [{ name: "AVNIR Studio" }],
  creator: "AVNIR Studio",
  publisher: "AVNIR Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Design System Showcase`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Design System`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Design System Showcase`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
    creator: "@avnirstudio",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

// Helper pour créer des metadata personnalisées par page
export function createMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image || `${SITE_URL}/og-image.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

// Metadata pré-configurées pour les sections principales
export const sectionMetadata = {
  overview: createMetadata({
    title: "Overview",
    description: "Introduction to MUZISYSTEM design system. Learn about our principles, architecture, and how to get started building consistent, accessible interfaces.",
    path: "/overview",
  }),
  
  foundations: createMetadata({
    title: "Foundations",
    description: "Design tokens, color systems, typography, spacing, shadows, and breakpoints that form the foundation of MUZISYSTEM.",
    path: "/foundations",
  }),
  
  components: createMetadata({
    title: "Components",
    description: "144+ production-ready React components including forms, data display, navigation, overlays, and specialized components for SaaS, ecommerce, and marketing.",
    path: "/components",
  }),
  
  guidelines: createMetadata({
    title: "Guidelines",
    description: "Best practices for accessibility (WCAG 2.1 AA), responsive design, and content writing to ensure quality and consistency.",
    path: "/guidelines",
  }),
  
  patterns: createMetadata({
    title: "Patterns",
    description: "Reusable UI patterns and workflows including authentication flows, file uploads, and common user interactions.",
    path: "/patterns",
  }),
};
