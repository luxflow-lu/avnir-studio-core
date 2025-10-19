import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/form/Button";
import { Hero } from "@/components/marketing/Hero";
import { LogoCloud } from "@/components/marketing/LogoCloud";
import { Features } from "@/components/marketing/Features";
import { Stats } from "@/components/marketing/Stats";
import { Steps } from "@/components/marketing/Steps";
import { PricingTable } from "@/components/saas/PricingTable";
import { PricingStrip } from "@/components/marketing/PricingStrip";
import { Testimonials } from "@/components/marketing/Testimonials";
import { Faq } from "@/components/marketing/Faq";
import { Newsletter } from "@/components/marketing/Newsletter";

export const Home: React.FC = () => {
  const pricingRef = React.useRef<HTMLDivElement>(null);
  const scrollToPricing = () => pricingRef.current?.scrollIntoView({ behavior: "smooth" });

  const logos = Array.from({ length: 6 }).map((_, i) => ({ src: `https://dummyimage.com/120x40/fff/aaa.png&text=Logo+${i+1}`, alt: `Logo ${i+1}` }));
  const features = [
    { title: "Design tokens", description: "Palette unifiée et thèmes dark/light." },
    { title: "A11y d’office", description: "Focus visibles, navigation clavier, ARIA." },
    { title: "Ladle docs", description: "Stories isolées avec Provider & thèmes." },
    { title: "SaaS/E-com packs", description: "Blocs réutilisables pour accélérer." },
    { title: "Brandkit", description: "data-brand et presets prêts." },
    { title: "DX rapide", description: "Vite + TS + Tailwind intégrés." },
  ];
  const stats = [
    { value: "+120", label: "Composants" },
    { value: "<30s", label: "Scaffold" },
    { value: "100%", label: "TypeScript" },
    { value: "0", label: "Couleur magique" },
  ];
  const steps = [
    { title: "Cloner", description: "Clonez le repo et installez." },
    { title: "Brandkit", description: "Activez data-brand et vos tokens." },
    { title: "Composer", description: "Assemblez les blocs marketing." },
    { title: "Déployer", description: "Poussez en quelques minutes." },
  ];
  const testimonials = [
    { quote: "On shippe chaque semaine.", author: "Daniel", role: "Engineering Manager" },
    { quote: "Design et accessibilité impeccables.", author: "Camille", role: "Lead Design" },
    { quote: "Nos équipes itèrent 2x plus vite.", author: "Bruno", role: "VP Product" },
  ];
  const faq = [
    { q: "Comment démarrer ?", a: "Installez, lancez Ladle, puis composez vos pages." },
    { q: "Le theming est-il simple ?", a: "Oui, dark/light et surface-invert pour semi-light." },
    { q: "A11y ?", a: "Composants avec focus visibles et ARIA." },
    { q: "Performance ?", a: "Vite + Tailwind, chargement rapide." },
    { q: "Licence ?", a: "Libre d’utilisation interne." },
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
        <LogoCloud title="Ils nous font confiance" logos={logos} />
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20">
        <Features title="Fonctionnalités" items={features} />
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20">
        <Stats title="Chiffres clés" items={stats} />
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20">
        <Steps title="Comment ça marche" subtitle="4 étapes simples" items={steps} />
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20" ref={pricingRef}>
        <PricingStrip title="Des plans pour chaque équipe" subtitle="Simple et transparent" cta={<Button onClick={scrollToPricing}>Voir les tarifs</Button>} />
        <div className="mt-8">
          <PricingTable
            plans={[
              { id: "starter", name: "Starter", price: "€9", period: "/mois", description: "Pour débuter", features: ["5 projects","10GB storage","Support"], cta: { label: "Get Started" } },
              { id: "pro", name: "Pro", price: "€29", period: "/mois", description: "Pour les équipes", features: ["Unlimited projects","Priority support"], cta: { label: "Start Free Trial" }, popular: true },
              { id: "enterprise", name: "Enterprise", price: "Custom", description: "Grandes orga", features: ["SLA","Manager dédié"], cta: { label: "Contact Sales" } },
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20">
        <Testimonials title="Ils témoignent" items={testimonials} />
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20">
        <Faq title="Questions fréquentes" items={faq} />
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20">
        <Newsletter title="Restez informé(e)" subtitle="Recevez nos nouveautés chaque mois." />
      </section>

      <div className="surface-invert">
        <Footer bottomContent={<div className="text-[var(--text-muted)]">© 2025 AVNIR</div>} />
      </div>
    </main>
  );
};
