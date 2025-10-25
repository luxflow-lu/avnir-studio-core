import React from "react";

import { Radio } from "./Radio";

export default { title: "Form/Radio" };

export const Default = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Radio name="plan" value="starter" label="Starter Plan" />
    <Radio name="plan" value="pro" label="Pro Plan" defaultChecked />
    <Radio name="plan" value="enterprise" label="Enterprise Plan" />
  </div>
);

export const States = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Radio name="state" value="normal" label="Normal radio" />
    <Radio name="state" value="checked" label="Checked radio" defaultChecked />
    <Radio name="state" value="disabled" label="Disabled radio" disabled />
    <Radio name="state" value="disabled-checked" label="Disabled checked" disabled defaultChecked />
  </div>
);
