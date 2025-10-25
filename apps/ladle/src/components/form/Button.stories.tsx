import React from "react";

import { Button } from "./Button";

export default { title: "Form/Button" };

export const Variants = () => (
  <div className="flex gap-3 bg-[var(--bg)] p-6">
    <Button>Primary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
);

export const Sizes = () => (
  <div className="flex items-center gap-3 bg-[var(--bg)] p-6">
    <Button size="sm">sm</Button>
    <Button size="md">md</Button>
    <Button size="lg">lg</Button>
  </div>
);

export const States = () => (
  <div className="flex items-center gap-3 bg-[var(--bg)] p-6">
    <Button disabled>Disabled</Button>
    <Button loading>Loading</Button>
  </div>
);
