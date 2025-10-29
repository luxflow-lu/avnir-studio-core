import type { Metadata } from "next";

import "./globals.css";
import { AppLayout } from "./providers";
import { defaultMetadata } from "../lib/metadata";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-brand="muzisystem" data-theme="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.documentElement.setAttribute('data-brand', 'muzisystem');
                document.documentElement.setAttribute('data-theme', 'dark');
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
