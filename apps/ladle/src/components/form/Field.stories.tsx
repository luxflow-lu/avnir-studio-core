import React from "react";
import { Field } from "./Field";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

export default { title: "Form/Field" };

export const WithInput = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-6">
    <Field label="Email" help="We'll never share your email">
      <Input type="email" placeholder="Enter your email" />
    </Field>
    <Field label="Password" required>
      <Input type="password" placeholder="Enter your password" />
    </Field>
  </div>
);

export const WithError = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-6">
    <Field label="Username" error="Username is already taken">
      <Input placeholder="Enter username" />
    </Field>
    <Field label="Description" error="Description is too short">
      <Textarea placeholder="Enter description" />
    </Field>
  </div>
);
