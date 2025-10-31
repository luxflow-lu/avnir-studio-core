"use client";
import React from "react";
import { Layout, StandardFooter } from "@avnir/ui";
import { BrandLogo } from "@avnir/brandkit";
import { Button } from "@avnir/ui";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Layout.Navbar
        transparent
        logo={<BrandLogo size="md" />}
        links={[
          { label: "Accueil", href: "/" },
          { label: "Galerie", href: "/gallery" },
          { label: "Tarifs", href: "/pricing" },
          { label: "FAQ", href: "/faq" },
          { label: "Contact", href: "/contact" },
        ]}
        actions={
          <>
            <Button variant="solid" size="md" onClick={() => window.location.href = '/signup'}>
              Commencer
            </Button>
            <Button variant="outline" size="md" onClick={() => window.location.href = '/login'}>
              Se connecter
            </Button>
          </>
        }
      />
      <main>{children}</main>
      <StandardFooter
        brand="muzipics"
        logo={<BrandLogo size="lg" />}
        exploreLinks={[
          { label: "Accueil", href: "/" },
          { label: "Galerie", href: "/gallery" },
          { label: "Tarifs", href: "/pricing" },
          { label: "FAQ", href: "/faq" },
          { label: "Contact", href: "/contact" },
        ]}
        newsletterAction="mailto:contact@avnir-studio.com?subject=Inscription Newsletter MUZIPICS"
        newsletterPlaceholder="Ton email"
        newsletterButtonText="S'inscrire"
      />
    </>
  );
}
