"use client";

import * as React from "react";
import { cx } from "../../utils/cx";

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ tabs, defaultTab, onTabChange, className }, ref) => {
    const [activeTab, setActiveTab] = React.useState(defaultTab || tabs[0]?.id);

    const handleTabChange = (tabId: string) => {
      setActiveTab(tabId);
      onTabChange?.(tabId);
    };

    const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

    return (
      <div ref={ref} className={cx("w-full", className)}>
        <div className="border-b border-white/10">
          <nav className="flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => !tab.disabled && handleTabChange(tab.id)}
                className={cx(
                  "py-2 px-1 border-b-2 font-medium text-sm transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]",
                  activeTab === tab.id
                    ? "border-[var(--brand)] text-[var(--brand)]"
                    : "border-transparent text-[var(--text-muted)] hover:text-white hover:border-white/20",
                  tab.disabled && "opacity-50 cursor-not-allowed",
                )}
                disabled={tab.disabled}
                aria-selected={activeTab === tab.id}
                role="tab"
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-4" role="tabpanel">
          {activeTabContent}
        </div>
      </div>
    );
  },
);
Tabs.displayName = "Tabs";
