import React from "react";
import { Textarea } from "./Textarea";

export default { title: "Form/Textarea" };

export const Default = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Textarea placeholder="Enter your message..." rows={4} />
    <Textarea value="Pre-filled content" rows={3} readOnly />
  </div>
);

export const States = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Textarea placeholder="Normal textarea" rows={3} />
    <Textarea placeholder="Disabled textarea" rows={3} disabled />
    <Textarea placeholder="Required textarea" rows={3} required />
  </div>
);
