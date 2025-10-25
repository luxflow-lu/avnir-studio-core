import React from "react";

import { Progress } from "./Progress";

export default { title: "Data/Progress" };

export const Sizes = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-6">
    <div>
      <p className="text-sm mb-2">Small</p>
      <Progress value={65} size="sm" />
    </div>
    <div>
      <p className="text-sm mb-2">Medium</p>
      <Progress value={65} size="md" />
    </div>
    <div>
      <p className="text-sm mb-2">Large</p>
      <Progress value={65} size="lg" />
    </div>
  </div>
);

export const WithValue = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-6">
    <Progress value={25} showValue />
    <Progress value={50} showValue />
    <Progress value={75} showValue />
    <Progress value={100} showValue />
  </div>
);

export const States = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Progress value={0} showValue />
    <Progress value={33} showValue />
    <Progress value={66} showValue />
    <Progress value={100} showValue />
  </div>
);
