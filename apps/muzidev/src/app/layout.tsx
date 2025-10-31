import type { Metadata } from "next";
import type React from "react";

import { AppLayout } from "./providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "MUZIDEV | Formation en ligne pour artistes et producteurs",
  description: "La formation la plus complète d'internet pour les artistes et producteurs indépendants. Apprends à maîtriser chaque étape de ta carrière musicale, de la création à la réussite.",
  keywords: ["formation musique", "artiste indépendant", "producteur", "beatmaker", "rap", "production musicale", "marketing musical"],
  authors: [{ name: "AVNIR-Studio" }],
  creator: "AVNIR-Studio",
  publisher: "MUZIDEV",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://muzidev.com",
    title: "MUZIDEV | Formation en ligne pour artistes et producteurs",
    description: "La formation la plus complète d'internet pour les artistes et producteurs indépendants.",
    siteName: "MUZIDEV",
  },
  twitter: {
    card: "summary_large_image",
    title: "MUZIDEV | Formation en ligne pour artistes et producteurs",
    description: "La formation la plus complète d'internet pour les artistes et producteurs indépendants.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-brand="muzidev" data-theme="dark">
      <body className="min-h-screen">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
