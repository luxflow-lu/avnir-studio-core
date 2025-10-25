import React, { useState } from "react";

import { ThemeToggle, type ThemeMode } from "./ThemeToggle";

export default { title: "System/ThemeToggle" };

export const Default = () => {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="flex items-center gap-4">
        <ThemeToggle theme={theme} onThemeChange={setTheme} />
        <span>Current theme: {theme}</span>
      </div>
    </div>
  );
};

export const InNavbar = () => {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  return (
    <div className="bg-[var(--bg)] text-white">
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--brand)] rounded-lg"></div>
          <span className="font-semibold">Brand</span>
        </div>
        <ThemeToggle theme={theme} onThemeChange={setTheme} />
      </div>
      <div className="p-6">
        <p>Theme toggle in navbar context</p>
      </div>
    </div>
  );
};
