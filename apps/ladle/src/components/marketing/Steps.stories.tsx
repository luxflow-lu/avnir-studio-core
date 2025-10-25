import React from "react";

import { Steps } from "./Steps";

export default { title: "Marketing/Steps", parameters: { layout: "padded" } };

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="mx-auto max-w-7xl p-6 bg-background text-foreground">{children}</div>
);

const items = [
  { title: "Créer", description: "Initialisez votre projet en quelques secondes." },
  { title: "Configurer", description: "Activez les tokens et composants adaptés." },
  { title: "Publier", description: "Déployez vite en gardant la cohérence." },
  { title: "Analyser", description: "Mesurez l'impact et itérez." },
];

export const Horizontal = () => (
  <Wrapper>
    <Steps title="Comment ça marche" subtitle="4 étapes simples" items={items} />
  </Wrapper>
);

export const Vertical = () => (
  <Wrapper>
    <Steps items={items} direction="vertical" />
  </Wrapper>
);

export const Minimal = () => (
  <Wrapper>
    <Steps items={items.slice(0, 3)} />
  </Wrapper>
);
