import type { Metadata } from "next";
import "./globals.css";
import { Layout, System } from "@avnir/ui";

export const metadata: Metadata = {
  title: "MUZISYSTEM - Design System Showcase",
  description: "Comprehensive design system documentation and component showcase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-brand="avnir-studio" data-theme="dark">
      <body className="min-h-screen">
        <Layout.Navbar
          logo={<span className="text-xl font-bold">MUZISYSTEM</span>}
          links={[
            { label: "Home", href: "/" },
            { label: "Foundations", href: "/foundations" },
            { label: "Colors", href: "/colors" },
            { label: "Components", href: "/components" },
            { label: "All Components", href: "/all-components" },
            { label: "Guidelines", href: "/guidelines" },
          ]}
          actions={<System.BrandThemeSelector />}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
