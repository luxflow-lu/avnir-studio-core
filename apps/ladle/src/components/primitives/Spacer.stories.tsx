import React from "react";
import { Spacer } from "./Spacer";

export default { title: "Primitives/Spacer" };

export const Sizes = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div>Contenu 1</div>
    <Spacer size="xs" />
    <div className="bg-[var(--surface)] p-2 rounded text-sm">Spacer XS</div>
    <Spacer size="md" />
    <div className="bg-[var(--surface)] p-2 rounded text-sm">Spacer MD</div>
    <Spacer size="xl" />
    <div className="bg-[var(--surface)] p-2 rounded text-sm">Spacer XL</div>
  </div>
);
