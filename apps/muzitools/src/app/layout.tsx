import type { Metadata, Viewport } from "next";
import "@avnir/design/index.css";
import "@avnir/ui/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "MUZITOOLS - Song Key & BPM Finder",
  description: "Analysez vos fichiers audio pour découvrir le BPM, la tonalité et le code Camelot. Outil expérimental v0.",
  keywords: ["BPM", "Key", "Camelot", "Audio", "Music", "Analysis", "DJ", "Producer"],
  authors: [{ name: "AVNIR Studio" }],
  robots: "index, follow"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-brand="avnir-studio" data-theme="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
