"use client";

import { Layout, System } from "@avnir/ui";
import { BrandLogo } from "@avnir/brandkit";

export function ClientNavbar() {
  return (
    <Layout.Navbar
      logo={<BrandLogo size="md" />}
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
  );
}
