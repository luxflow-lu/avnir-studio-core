import React from "react";

import { Divider } from "./Divider";

export default { title: "Primitives/Divider" };

export const Default = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div>Contenu au-dessus</div>
    <Divider className="my-4" />
    <div>Contenu en-dessous</div>
  </div>
);
