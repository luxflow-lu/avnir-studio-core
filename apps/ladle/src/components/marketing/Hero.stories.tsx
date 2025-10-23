import React from "react";
import { Hero } from "./Hero";
import { Button } from "../form/Button";

export default { title: "Marketing/Hero", parameters: { layout: "padded" } };

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="mx-auto max-w-7xl p-6 bg-background text-foreground">{children}</div>
);

export const Default = () => (
  <Wrapper>
    <Hero
      eyebrow="Nouveau"
      title="Construisez plus vite"
      subtitle="Des composants prêts pour shipper vos interfaces en un temps record."
      actions={
        <div className="flex gap-3">
          <Button>Commencer</Button>
          <Button variant="outline">Voir la doc</Button>
        </div>
      }
    />
  </Wrapper>
);

export const Split = () => (
  <Wrapper>
    <Hero
      layout="split"
      eyebrow="Plateforme"
      title="Accélérez vos lancements"
      subtitle="Une base solide avec des primitives, styles et tokens unifiés."
      image={
        <div className="aspect-video w-full rounded-[var(--radius)] bg-card border border-border" />
      }
      actions={<Button>Essayer maintenant</Button>}
    />
  </Wrapper>
);

export const Wide = () => (
  <Wrapper>
    <Hero
      maxWidth="2xl"
      eyebrow="Framework"
      title="Design system moderne"
      subtitle="Respect des tokens, accessibilité et performance."
      actions={<Button>Découvrir</Button>}
    />
  </Wrapper>
);
