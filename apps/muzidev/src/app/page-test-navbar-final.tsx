"use client";
import { Layout } from "@avnir/ui";
import { BrandLogo } from "@avnir/brandkit";

export default function SimpleTestPage() {
  return (
    <>
      <Layout.Navbar
        logo={<BrandLogo variant="full" size="md" />}
        links={[
          { label: "Accueil", href: "/" },
          { label: "Formation", href: "/formation" },
          { label: "Tarifs", href: "/pricing" },
          { label: "FAQ", href: "/faq" },
          { label: "Se connecter", href: "/login" },
        ]}
        actions={
          <a href="/signup" className="btn btn-primary h-10 px-4 py-2 text-sm">
            S'inscrire
          </a>
        }
      />
      <div style={{ padding: "2rem", background: "#1a1a1a", color: "white", minHeight: "100vh" }}>
        <h1>MUZIDEV - Test Nouvelle Navbar</h1>
        <p>✅ Navbar modifiée avec :</p>
        <ul style={{ marginLeft: "2rem", lineHeight: "1.8" }}>
          <li>✅ Pas de background blur</li>
          <li>✅ Background color = #0b0b0d</li>
          <li>✅ Logo MUZIDEV à gauche</li>
          <li>✅ Links + CTA à droite</li>
          <li>✅ Menu hamburger sur mobile/tablet</li>
        </ul>
      </div>
    </>
  );
}
