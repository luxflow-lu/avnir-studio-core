import React from "react";

import { Input } from "./Input";

export default { title: "Form/Input" };

export const Default = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Input placeholder="Placeholder text" />
    <Input value="Filled input" readOnly />
  </div>
);

export const States = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Input placeholder="Normal" />
    <Input placeholder="Disabled" disabled />
    <Input placeholder="Required" required />
  </div>
);

export const Types = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Input type="email" placeholder="Email" />
    <Input type="password" placeholder="Password" />
    <Input type="number" placeholder="Number" />
  </div>
);
