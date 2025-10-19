import React from "react";
import { Section } from "./Section";

export default { title: "Primitives/Section" };

export const Default = () => (
  <div className="bg-[var(--bg)] text-white">
    <Section>
      <div>Contenu avec espacement vertical py-12 md:py-16</div>
    </Section>
  </div>
);
