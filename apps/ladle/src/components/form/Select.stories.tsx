import React from "react";

import { Select } from "./Select";

export default { title: "Form/Select" };

export const Default = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Select>
      <option value="">Choose an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  </div>
);

export const States = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Select>
      <option>Normal select</option>
      <option>Option 2</option>
    </Select>
    <Select disabled>
      <option>Disabled select</option>
    </Select>
    <Select required>
      <option value="">Required select</option>
      <option value="1">Option 1</option>
    </Select>
  </div>
);
