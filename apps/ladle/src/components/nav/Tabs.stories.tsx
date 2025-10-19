import React from "react";
import { Tabs } from "./Tabs";

export default { title: "Nav/Tabs" };

const tabs = [
  {
    id: "overview",
    label: "Overview",
    content: <div className="text-white">Overview content here</div>
  },
  {
    id: "analytics",
    label: "Analytics",
    content: <div className="text-white">Analytics dashboard content</div>
  },
  {
    id: "settings",
    label: "Settings",
    content: <div className="text-white">Settings panel content</div>
  },
  {
    id: "disabled",
    label: "Disabled",
    content: <div className="text-white">This tab is disabled</div>,
    disabled: true
  }
];

export const Default = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <Tabs tabs={tabs} />
  </div>
);

export const WithDefaultTab = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <Tabs tabs={tabs} defaultTab="analytics" />
  </div>
);
