import type { Metadata } from "next";
import type React from "react";
import { generateMetadata, muzitoolsSEO } from "@avnir/content";

import { AppLayout } from "./providers";

import "./globals.css";

export const metadata: Metadata = {
  ...generateMetadata(muzitoolsSEO, { page: "home" }),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-brand="avnir-studio" data-theme="dark">
      <body className="min-h-screen">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
