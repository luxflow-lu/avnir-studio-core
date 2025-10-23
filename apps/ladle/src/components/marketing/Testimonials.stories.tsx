import React from "react";
import { Testimonials } from "./Testimonials";

export default { title: "Marketing/Testimonials", parameters: { layout: "padded" } };

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="mx-auto max-w-7xl p-6 bg-background text-foreground">{children}</div>
);

const items = [
  { quote: "Un gain de vitesse incomparable.", author: "Alice", role: "CTO" },
  { quote: "Nos équipes itèrent 2x plus vite.", author: "Bruno", role: "VP Product" },
  { quote: "Design et accessibilité impeccables.", author: "Camille", role: "Lead Design" },
  { quote: "On shippe chaque semaine.", author: "Daniel", role: "Engineering Manager" },
  { quote: "La cohérence nous fait gagner du temps.", author: "Emma", role: "PM" },
  { quote: "Adopté partout dans l'entreprise.", author: "Farid", role: "Head of Eng" },
];

export const Grid = () => (
  <Wrapper>
    <Testimonials title="Ils témoignent" subtitle="Ce que disent nos clients" items={items} />
  </Wrapper>
);

export const Minimal = () => (
  <Wrapper>
    <Testimonials items={items.slice(0, 3)} />
  </Wrapper>
);

export const WithAvatars = () => (
  <Wrapper>
    <Testimonials
      items={items.map((i) => ({
        ...i,
        avatarSrc: "https://dummyimage.com/72x72/fff/aaa.png&text=A",
      }))}
    />
  </Wrapper>
);
