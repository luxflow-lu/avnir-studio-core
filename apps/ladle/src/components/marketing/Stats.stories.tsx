import React from "react";

import { Stats } from "./Stats";

export default { title: "Marketing/Stats", parameters: { layout: "padded" } };

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="mx-auto max-w-7xl p-6 bg-background text-foreground">{children}</div>
);

const items = [
  { value: "3k+", label: "Clients" },
  { value: "99.99%", label: "Uptime" },
  { value: "2x", label: "Vitesse de dev" },
  { value: "+45%", label: "ROI moyen" },
];

export const Default = () => (
  <Wrapper>
    <Stats title="Chiffres clés" items={items} />
  </Wrapper>
);

export const Columns3 = () => (
  <Wrapper>
    <Stats items={items.slice(0, 3)} columns={3} />
  </Wrapper>
);

export const Columns2 = () => (
  <Wrapper>
    <Stats items={items.slice(0, 2)} columns={2} />
  </Wrapper>
);
