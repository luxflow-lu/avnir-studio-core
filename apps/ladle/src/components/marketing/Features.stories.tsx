import React from "react";

import { Features } from "./Features";

export default { title: "Marketing/Features", parameters: { layout: "padded" } };

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="mx-auto max-w-7xl p-6 bg-background text-foreground">{children}</div>
);

const items = Array.from({ length: 6 }).map((_, i) => ({
  icon: (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  ),
  title: `Atout ${i + 1}`,
  description: "Description concise en une ou deux lignes pour expliquer la valeur.",
}));

export const Default = () => (
  <Wrapper>
    <Features title="Fonctionnalités" subtitle="Tout ce qu'il faut pour démarrer" items={items} />
  </Wrapper>
);

export const Columns4 = () => (
  <Wrapper>
    <Features title="Fonctionnalités" items={items} columns={4} />
  </Wrapper>
);

export const Minimal = () => (
  <Wrapper>
    <Features items={items.slice(0, 3)} columns={3} />
  </Wrapper>
);
