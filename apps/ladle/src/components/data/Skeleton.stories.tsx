import React from "react";

import { Skeleton } from "./Skeleton";

export default { title: "Data/Skeleton" };

export const Basic = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Skeleton height="20px" />
    <Skeleton height="16px" width="60%" />
    <Skeleton height="16px" width="80%" />
  </div>
);

export const Card = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="bg-[var(--surface)] rounded-[var(--radius-lg)] p-6 space-y-4">
      <div className="flex items-center gap-4">
        <Skeleton width="48px" height="48px" rounded />
        <div className="flex-1 space-y-2">
          <Skeleton height="16px" width="40%" />
          <Skeleton height="14px" width="60%" />
        </div>
      </div>
      <Skeleton height="200px" />
      <div className="space-y-2">
        <Skeleton height="16px" />
        <Skeleton height="16px" width="90%" />
        <Skeleton height="16px" width="70%" />
      </div>
    </div>
  </div>
);

export const List = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="flex items-center gap-4">
        <Skeleton width="40px" height="40px" rounded />
        <div className="flex-1 space-y-2">
          <Skeleton height="16px" width="30%" />
          <Skeleton height="14px" width="50%" />
        </div>
        <Skeleton width="60px" height="32px" />
      </div>
    ))}
  </div>
);
