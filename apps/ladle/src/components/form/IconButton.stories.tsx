import React from "react";
import { IconButton } from "./IconButton";

export default { title: "Form/IconButton" };

const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

export const Variants = () => (
  <div className="flex gap-3 bg-[var(--bg)] p-6">
    <IconButton icon={<PlusIcon />} />
    <IconButton variant="outline" icon={<PlusIcon />} />
    <IconButton variant="ghost" icon={<PlusIcon />} />
  </div>
);

export const Sizes = () => (
  <div className="flex items-center gap-3 bg-[var(--bg)] p-6">
    <IconButton size="sm" icon={<PlusIcon />} />
    <IconButton size="md" icon={<PlusIcon />} />
    <IconButton size="lg" icon={<PlusIcon />} />
  </div>
);

export const States = () => (
  <div className="flex items-center gap-3 bg-[var(--bg)] p-6">
    <IconButton disabled icon={<PlusIcon />} />
    <IconButton loading icon={<PlusIcon />} />
    <IconButton icon={<HeartIcon />} />
  </div>
);
