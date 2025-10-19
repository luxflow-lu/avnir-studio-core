import React from "react";
import { Checkbox } from "./Checkbox";

export default { title: "Form/Checkbox" };

export const Default = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Checkbox label="Accept terms and conditions" />
    <Checkbox label="Subscribe to newsletter" defaultChecked />
    <Checkbox label="Enable notifications" />
  </div>
);

export const States = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Checkbox label="Normal checkbox" />
    <Checkbox label="Checked checkbox" defaultChecked />
    <Checkbox label="Disabled checkbox" disabled />
    <Checkbox label="Disabled checked" disabled defaultChecked />
  </div>
);
