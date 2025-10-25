import React from "react";

import { Switch } from "./Switch";

export default { title: "Form/Switch" };

export const Default = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Switch label="Enable notifications" />
    <Switch label="Auto-save" defaultChecked />
    <Switch label="Dark mode" />
  </div>
);

export const States = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Switch label="Normal switch" />
    <Switch label="Checked switch" defaultChecked />
    <Switch label="Disabled switch" disabled />
    <Switch label="Disabled checked" disabled defaultChecked />
  </div>
);
