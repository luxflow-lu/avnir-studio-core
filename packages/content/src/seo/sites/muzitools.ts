/**
 * MUZITOOLS SEO Configuration
 */

import type { SiteSEOConfig } from "../types";

export const muzitoolsSEO: SiteSEOConfig = {
  // Base configuration
  siteName: "MUZITOOLS",
  siteUrl: "https://muzitools.com",
  locale: "fr_FR",
  twitter: "@muzitools",
  defaultOgImage: "/og-image.png",
  defaultDescription:
    "Outils gratuits pour créateurs musicaux. Key & BPM Finder, AutoCut, analyse audio, et plus encore. 100% gratuit, 100% local, 0% tracking.",
  defaultKeywords: [
    "BPM finder",
    "key finder",
    "camelot wheel",
    "audio analysis",
    "music tools",
    "DJ tools",
    "producer tools",
    "free music tools",
    "audio trimmer",
    "autocut",
    "waveform editor",
    "stems separator",
    "vocal remover",
  ],

  // Pages SEO
  pages: {
    home: {
      title: "MUZITOOLS - Outils Gratuits pour Créateurs Musicaux",
      description:
        "Key & BPM Finder, AutoCut, analyse audio et outils gratuits pour producteurs et DJs. Analyse locale, résultats instantanés, aucun tracking.",
      keywords: ["BPM finder", "key finder", "camelot", "music tools", "audio trimmer", "autocut"],
    },
    contact: {
      title: "Contact - MUZITOOLS",
      description: "Contactez l'équipe MUZITOOLS pour toute question ou suggestion d'outil.",
      keywords: ["contact", "support", "aide"],
    },
  },
};
