"use client";

import type React from "react";
import { BrandLogo } from "@avnir/brandkit";
import { Layout, StandardFooter, System } from "@avnir/ui";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Layout.Navbar
        logo={<BrandLogo size="md" />}
        links={[
          { label: "Home", href: "/" },
          { label: "Overview", href: "/overview" },
          { label: "Foundations", href: "/foundations" },
          { label: "Components", href: "/components" },
          { label: "Guidelines", href: "/guidelines" },
          { label: "Patterns", href: "/patterns" },
        ]}
        actions={<System.ThemeToggle />}
      />
      <main>{children}</main>
      <StandardFooter
        brand="muzisystem"
        logo={<BrandLogo size="lg" />}
        exploreLinks={[
          { label: "Home", href: "/" },
          { label: "Overview", href: "/overview" },
          { label: "Foundations", href: "/foundations" },
          { label: "Components", href: "/components" },
          { label: "Guidelines", href: "/guidelines" },
          { label: "Patterns", href: "/patterns" },
        ]}
      />
    </>
  );
}
