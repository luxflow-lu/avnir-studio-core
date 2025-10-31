import type { Metadata } from "next";
import type React from "react";
import { generateMetadata, muzipicsSEO } from "@avnir/content";

import { AppLayout } from "./providers";

import "./globals.css";

export const metadata: Metadata = {
  ...generateMetadata(muzipicsSEO, { page: "home" }),
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-brand="muzipics" data-theme="dark">
      <body className="min-h-screen">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
