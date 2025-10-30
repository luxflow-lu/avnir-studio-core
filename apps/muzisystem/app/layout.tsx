import type { Metadata } from "next";
import type React from "react";

import { defaultMetadata } from "../lib/metadata";

import { AppLayout } from "./providers";

import "./globals.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-brand="muzisystem" data-theme="dark">
      <body className="min-h-screen">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
