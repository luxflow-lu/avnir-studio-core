import React from "react";

import { Spinner } from "./Spinner";

export default { title: "Data/Spinner" };

export const Sizes = () => (
  <div className="bg-[var(--bg)] text-white p-6 flex items-center gap-6">
    <div className="flex flex-col items-center gap-2">
      <Spinner size="sm" />
      <span className="text-xs text-[var(--text-muted)]">Small</span>
    </div>
    <div className="flex flex-col items-center gap-2">
      <Spinner size="md" />
      <span className="text-xs text-[var(--text-muted)]">Medium</span>
    </div>
    <div className="flex flex-col items-center gap-2">
      <Spinner size="lg" />
      <span className="text-xs text-[var(--text-muted)]">Large</span>
    </div>
  </div>
);

export const InButton = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <button className="inline-flex items-center gap-2 bg-[var(--brand)] text-[var(--brand-on)] px-4 py-2 rounded-[var(--radius-sm)]">
      <Spinner size="sm" />
      Loading...
    </button>
  </div>
);
