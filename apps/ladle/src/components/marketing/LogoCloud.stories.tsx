import React from "react";
import { LogoCloud } from "./LogoCloud";

export default { title: "Marketing/LogoCloud", parameters: { layout: "padded" } };

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="mx-auto max-w-7xl p-6 bg-background text-foreground">{children}</div>
);

const logos = [
  { src: "https://dummyimage.com/120x40/fff/aaa.png&text=Logo+1", alt: "Logo 1" },
  { src: "https://dummyimage.com/120x40/fff/aaa.png&text=Logo+2", alt: "Logo 2" },
  { src: "https://dummyimage.com/120x40/fff/aaa.png&text=Logo+3", alt: "Logo 3" },
  { src: "https://dummyimage.com/120x40/fff/aaa.png&text=Logo+4", alt: "Logo 4" },
  { src: "https://dummyimage.com/120x40/fff/aaa.png&text=Logo+5", alt: "Logo 5" },
  { src: "https://dummyimage.com/120x40/fff/aaa.png&text=Logo+6", alt: "Logo 6" },
];

export const Default = () => (
  <Wrapper>
    <LogoCloud
      title="Ils nous font confiance"
      subtitle="Des équipes ambitieuses dans toute l'Europe"
      logos={logos}
    />
  </Wrapper>
);

export const Dense = () => (
  <Wrapper>
    <LogoCloud logos={[...logos, ...logos]} />
  </Wrapper>
);

export const Minimal = () => (
  <Wrapper>
    <LogoCloud logos={logos.slice(0, 4)} />
  </Wrapper>
);
