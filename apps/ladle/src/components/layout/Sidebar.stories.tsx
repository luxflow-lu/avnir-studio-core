import React, { useState } from "react";

import { Sidebar } from "./Sidebar";

export default { title: "Layout/Sidebar" };

const mockItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z"
        />
      </svg>
    ),
    active: true,
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    children: [
      { id: "all-projects", label: "All Projects" },
      { id: "my-projects", label: "My Projects" },
      { id: "shared", label: "Shared with me" },
    ],
  },
  {
    id: "team",
    label: "Team",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        />
      </svg>
    ),
  },
  {
    id: "settings",
    label: "Settings",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export const Default = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="bg-[var(--bg)] h-screen flex">
      <Sidebar
        items={mockItems}
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        header={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[var(--brand)] rounded-lg"></div>
            {!collapsed && <span className="font-semibold text-white">Brand</span>}
          </div>
        }
        footer={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white truncate">John Doe</div>
                <div className="text-xs text-[var(--text-muted)] truncate">john@example.com</div>
              </div>
            )}
          </div>
        }
      />
      <div className="flex-1 p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        <p>Sidebar is {collapsed ? "collapsed" : "expanded"}</p>
      </div>
    </div>
  );
};

export const Collapsed = () => (
  <div className="bg-[var(--bg)] h-screen flex">
    <Sidebar
      items={mockItems}
      collapsed={true}
      header={
        <div className="flex justify-center">
          <div className="w-8 h-8 bg-[var(--brand)] rounded-lg"></div>
        </div>
      }
    />
    <div className="flex-1 p-6 text-white">
      <h1 className="text-2xl font-bold">Collapsed Sidebar</h1>
    </div>
  </div>
);
