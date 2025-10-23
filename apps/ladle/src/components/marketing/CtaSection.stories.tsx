import React from "react";
import { CtaSection } from "./CtaSection";
import { Button } from "../form/Button";

export default { title: "Marketing/CtaSection", parameters: { layout: "padded" } };

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="mx-auto max-w-7xl p-6 bg-background text-foreground">{children}</div>
);

export const Default = () => (
  <Wrapper>
    <CtaSection
      title="Prêt(e) à démarrer ?"
      subtitle="Rejoignez des équipes qui livrent plus vite."
      actions={
        <>
          <Button>Essayer gratuitement</Button>
          <Button variant="outline">Parler à l'équipe</Button>
        </>
      }
    />
  </Wrapper>
);

export const WithImage = () => (
  <Wrapper>
    <CtaSection
      title="Tout ce qu'il faut pour lancer"
      subtitle="Composants réactifs et accessibles."
      image={
        <div className="aspect-video w-full rounded-[var(--radius)] bg-card border border-border" />
      }
      actions={<Button>Voir la démo</Button>}
    />
  </Wrapper>
);

export const Reverse = () => (
  <Wrapper>
    <CtaSection
      title="Un design cohérent"
      subtitle="Un seul système de tokens pour toute l'app."
      reverse
      image={
        <div className="aspect-video w-full rounded-[var(--radius)] bg-card border border-border" />
      }
      actions={<Button>Documentation</Button>}
    />
  </Wrapper>
);
