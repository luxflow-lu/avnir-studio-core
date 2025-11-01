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
          { label: "Key & BPM Finder", href: "/tools/key-bpm-finder" },
          { label: "AutoCut", href: "/tools/auto-cut" },
          { label: "FAQ", href: "/#faq" },
          { label: "Contact", href: "/contact" },
        ]}
        actions={
          <Button variant="solid" size="md" onClick={() => window.location.href = '/tools/key-bpm-finder'}>
            Essayer l'outil
          </Button>
        }
      />
      <main>{children}</main>
      <StandardFooter
        brand="muzitools"
        logo={<BrandLogo size="lg" />}
        exploreLinks={[
          { label: "Accueil", href: "/" },
          { label: "Key & BPM Finder", href: "/tools/key-bpm-finder" },
          { label: "AutoCut", href: "/tools/auto-cut" },
          { label: "FAQ", href: "/#faq" },
          { label: "Contact", href: "/contact" },
        ]}
        newsletterAction="mailto:contact@avnir-studio.com?subject=Inscription Newsletter MUZITOOLS"
        newsletterPlaceholder="Ton email"
        newsletterButtonText="S'inscrire"
      />
    </>
  );
}
