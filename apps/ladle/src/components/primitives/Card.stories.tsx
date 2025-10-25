import React from "react";

import { Card } from "./Card";

export default { title: "Primitives/Card" };

export const Default = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <Card>
      <h3 className="text-lg font-semibold mb-2">Titre de carte</h3>
      <p className="text-[var(--text-muted)]">Contenu de la carte avec surface et shadow-md</p>
    </Card>
  </div>
);

export const WithoutPadding = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <Card className="p-0 overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-[var(--brand)] to-purple-600"></div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">Carte avec image</h3>
        <p className="text-[var(--text-muted)]">Padding retiré pour image pleine largeur</p>
      </div>
    </Card>
  </div>
);
