import type { Metadata } from "next";
import type React from "react";
import { generateMetadata, muzidevSEO } from "@avnir/content";

import { AppLayout } from "./providers";

import "./globals.css";

export const metadata: Metadata = {
  ...generateMetadata(muzidevSEO, { page: "home" }),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
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
