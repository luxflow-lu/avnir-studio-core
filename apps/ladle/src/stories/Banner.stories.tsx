import React from "react";
import { Banner } from "@avnir/ui";

export default {
  title: "UI/Banner",
};

export const Default = () => (
  <div className="p-6 space-y-4">
    <Banner>Default Banner</Banner>
  </div>
);

export const AllVariants = () => (
  <div className="p-6 space-y-4">
    <Banner variant="surface">Surface banner</Banner>
    <Banner variant="primary">Primary banner</Banner>
    <Banner variant="ghost">Ghost banner</Banner>
  </div>
);
