import React from "react";

import { Container } from "./Container";

export default { title: "Primitives/Container" };

export const Default = () => (
  <div className="bg-[var(--bg)] text-white">
    <Container>
      <div className="py-12">Contenu dans un container 7xl</div>
    </Container>
  </div>
);
