import type { Metadata } from "next";

import "./globals.css";
import { AppLayout } from "./providers";
import { defaultMetadata } from "../lib/metadata";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-brand="muzisystem" data-theme="dark">
      <head>
        {/* Critical CSS - Inline pour éviter le flash */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              [data-brand="muzisystem"] { --primary: #ededed; }
              :root {
                --bg: #0b0b0d;
                --surface: #141317;
                --text: #c5ccd6;
                --titles: #ffffff;
                --muted: #9ca3af;
                --border: #1f1f23;
              }
            `,
          }}
        />
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
