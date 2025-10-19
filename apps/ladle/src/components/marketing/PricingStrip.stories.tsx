import React from "react";
import { PricingStrip } from "./PricingStrip";
import { Button } from "../form/Button";

export default { title: "Marketing/PricingStrip", parameters: { layout: "padded" } };

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="mx-auto max-w-7xl p-6 bg-background text-foreground">{children}</div>
);

export const Default = () => (
  <Wrapper>
    <PricingStrip title="Des plans pour chaque équipe" subtitle="Simple et transparent" cta={<Button>Voir les tarifs</Button>} />
  </Wrapper>
);

export const Minimal = () => (
  <Wrapper>
    <PricingStrip cta={<Button>Voir les tarifs</Button>} />
  </Wrapper>
);

export const WithSecondary = () => (
  <Wrapper>
    <PricingStrip title="Des plans flexibles" cta={<><Button>Essayer</Button><Button variant="outline">Contact</Button></>} />
  </Wrapper>
);
