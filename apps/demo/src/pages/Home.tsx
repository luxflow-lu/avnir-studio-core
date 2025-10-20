import * as React from "react";
import { Navbar, Footer, Hero, FeatureGrid, Button } from "@avnir/ui";

export const Home: React.FC = () => {
  const items = [
    { title: "Design tokens", text: "Palette unifiée et thèmes dark/light." },
    { title: "A11y d'office", text: "Focus visibles, navigation clavier, ARIA." },
    { title: "UI kit", text: "Composants buildés et typés." },
    { title: "SaaS/E-com packs", text: "Blocs réutilisables pour accélérer." },
    { title: "Brandkit", text: "data-brand et presets prêts." },
    { title: "DX rapide", text: "Vite + TS + Tailwind intégrés." },
  ];

  return (
    <main className="bg-background text-foreground">
      {/* Test Tailwind */}
      <div className="min-h-16 w-full bg-blue-500 text-white p-4 rounded-xl">
        ✅ Test Tailwind OK - Si vous voyez ce bloc bleu, Tailwind compile !
      </div>

      {/* Test tokens/vars */}
      <div className="p-4 rounded-xl m-4" style={{ 
        background: "var(--surface)", 
        color: "var(--on-surface)" 
      }}>
        <div className="text-sm opacity-80">
          brand: {typeof document !== 'undefined' ? document.documentElement.getAttribute('data-brand') : 'N/A'} • theme: {typeof document !== 'undefined' ? document.documentElement.getAttribute('data-theme') : 'N/A'}
        </div>
        <div>--primary = <span style={{ color: "var(--primary)" }}>●</span> (devrait être coloré selon la brand)</div>
      </div>

      <div className="surface-invert">
        <Navbar links={[]} />
      </div>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20">
        <Hero
          title="Concevez plus vite. Shippez serein."
          subtitle="Composants typés, tokens unifiés, theming semi-light — tout est prêt."
          actions={<>
            <Button>Commencer</Button>
            <Button variant="outline">Voir la doc</Button>
          </>}
          media={<img alt="UI Kit preview" src="https://picsum.photos/800/600" className="rounded-[var(--radius-lg)] border border-[color:var(--border)] shadow-card" />}
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20">
        <FeatureGrid items={items} />
      </section>

      <div className="surface-invert">
        <Footer
          columns={[
            { title: "Produit", links: [
              { label: "UI Kit", href: "#" },
              { label: "Composants", href: "#" },
              { label: "Pricing", href: "#" }
            ]},
            { title: "Ressources", links: [
              { label: "Docs", href: "#" },
              { label: "Guides", href: "#" },
              { label: "Changelog", href: "#" }
            ]},
            { title: "Entreprise", links: [
              { label: "À propos", href: "#" },
              { label: "Carrières", href: "#" }
            ]},
            { title: "Légal", links: [
              { label: "Confidentialité", href: "#" },
              { label: "CGU", href: "#" }
            ]}
          ]}
          legal={{ left: <>© 2025 AVNIR</>, right: <>Tous droits réservés</> }}
        />
      </div>
    </main>
  );
};
