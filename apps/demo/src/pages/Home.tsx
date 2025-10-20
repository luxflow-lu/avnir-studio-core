import * as React from "react";
import { Navbar, Footer, Hero, FeatureGrid, Button } from "@avnir/ui";

export const Home: React.FC = () => {
  const items = [
    { title: "Design tokens", text: "Palette unifiée et thèmes dark/light." },
    { title: "Accessibilité", text: "Focus visibles, navigation clavier, ARIA." },
    { title: "UI Kit", text: "Composants buildés et typés." },
    { title: "SaaS / E‑com", text: "Blocs réutilisables pour accélérer." },
    { title: "Brandkit", text: "data-brand et presets prêts." },
    { title: "DX rapide", text: "Vite + TS + Tailwind intégrés." },
  ];

  return (
    <main className="bg-background text-foreground">
      <div className="surface-invert">
        <Navbar
          logo={
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="text-foreground font-semibold">Brand</span>
            </div>
          }
          links={[
            { label: "Home", href: "#home" },
            { label: "Products", href: "#products" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ]}
          actions={
            <div className="flex items-center gap-3">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Sign In
              </Button>
              <Button variant="solid">
                Sign Up
              </Button>
            </div>
          }
        />
      </div>

      <Hero
        layout="split"
        title="Concevez plus vite. Shippez serein."
        subtitle="Composants typés, tokens unifiés, theming semi-light — tout est prêt."
        actions={<>
          <Button>Commencer</Button>
          <Button variant="outline">Voir la doc</Button>
        </>}
        image={<img alt="UI Kit preview" src="https://picsum.photos/800/540" className="rounded-xl border border-border shadow-sm" />}
      />

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20">
        <FeatureGrid items={items} />
      </section>

      <div className="surface-invert">
        <Footer
          sections={[
            { title: "Produit", links: [
              { label: "UI Kit", href: "#ui-kit" },
              { label: "Composants", href: "#composants" },
              { label: "Pricing", href: "#pricing" },
            ]},
            { title: "Ressources", links: [
              { label: "Docs", href: "#docs" },
              { label: "Guides", href: "#guides" },
              { label: "Changelog", href: "#changelog" },
            ]},
            { title: "Entreprise", links: [
              { label: "À propos", href: "#about" },
              { label: "Carrières", href: "#careers" },
            ]},
            { title: "Légal", links: [
              { label: "Confidentialité", href: "#privacy" },
              { label: "CGU", href: "#terms" },
            ]},
          ]}
          bottomContent={
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>© 2025 AVNIR</span>
              <span>Tous droits réservés</span>
            </div>
          }
        />
      </div>
    </main>
  );
};
