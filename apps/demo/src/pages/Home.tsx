import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/form/Button";
import { Hero } from "@/components/marketing/Hero";
import { Features } from "@/components/marketing/Features";

export const Home: React.FC = () => {
  const features = [
    { title: "Design tokens", description: "Palette unifiée et thèmes dark/light." },
    { title: "A11y d'office", description: "Focus visibles, navigation clavier, ARIA." },
    { title: "Ladle docs", description: "Stories isolées avec Provider & thèmes." },
    { title: "SaaS/E-com packs", description: "Blocs réutilisables pour accélérer." },
    { title: "Brandkit", description: "data-brand et presets prêts." },
    { title: "DX rapide", description: "Vite + TS + Tailwind intégrés." },
  ];

  return (
    <main className="bg-background text-foreground">
      <div className="surface-invert">
        <Navbar />
      </div>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20">
        <Hero
          layout="split"
          eyebrow="Nouveau • AVNIR"
          title="Concevez plus vite. Shippez serein."
          subtitle="Composants typés, tokens unifiés, theming semi-light — tout est prêt."
          actions={<>
            <Button>Commencer</Button>
            <Button variant="outline">Voir la doc</Button>
          </>}
          image={<img alt="UI Kit preview" src="https://picsum.photos/800/600" className="rounded-[var(--radius)] border border-border shadow-sm" />}
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20">
        <Features title="Fonctionnalités" items={features} />
      </section>

      <div className="surface-invert">
        <Footer bottomContent={<div className="text-[var(--text-muted)]">© 2025 AVNIR</div>} />
      </div>
    </main>
  );
};
