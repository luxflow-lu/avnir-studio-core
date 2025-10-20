import React from "react";
import { Banner } from "@avnir/ui";

export default {
  title: "UI/Banner",
  args: { variant: "surface", size: "md" }
};

export const Demo = (args:any) => (
  <div className="p-6 space-y-4">
    <Banner {...args}>Banner default</Banner>
    <Banner variant="primary">Primary</Banner>
  </div>
);
