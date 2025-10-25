import React from "react";

import { Badge } from "./Badge";

export default { title: "Data/Badge" };

export const Variants = () => (
  <div className="bg-[var(--bg)] text-white p-6 flex gap-3">
    <Badge>Default</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="destructive">Error</Badge>
  </div>
);

export const InContext = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <div className="flex items-center gap-2">
      <span>Status:</span>
      <Badge variant="success">Active</Badge>
    </div>
    <div className="flex items-center gap-2">
      <span>Priority:</span>
      <Badge variant="warning">High</Badge>
    </div>
  </div>
);
