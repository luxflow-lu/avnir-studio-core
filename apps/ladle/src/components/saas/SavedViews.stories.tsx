import React, { useState } from "react";
import { SavedViews } from "./SavedViews";

export default { title: "SaaS/SavedViews" };

const mockViews = [
  {
    id: "1",
    name: "Active Customers",
    filters: { status: "active", type: "customer" },
    isDefault: true,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-20")
  },
  {
    id: "2",
    name: "High Value Orders",
    filters: { amount: ">1000", status: "completed" },
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-18")
  },
  {
    id: "3",
    name: "Recent Signups",
    filters: { created: "last_7_days", status: "pending" },
    createdAt: new Date("2024-01-12"),
    updatedAt: new Date("2024-01-16")
  }
];

export const Default = () => {
  const [views, setViews] = useState(mockViews);
  const [currentView, setCurrentView] = useState("1");
  const [currentFilters, setCurrentFilters] = useState({ status: "active", category: "premium" });

  const handleSaveView = async (name: string, filters: Record<string, any>) => {
    const newView = {
      id: Date.now().toString(),
      name,
      filters,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    setViews(prev => [...prev, newView]);
  };

  const handleDeleteView = async (viewId: string) => {
    setViews(prev => prev.filter(v => v.id !== viewId));
    if (currentView === viewId) {
      setCurrentView("");
    }
  };

  const handleSetDefault = async (viewId: string) => {
    setViews(prev => prev.map(v => ({ ...v, isDefault: v.id === viewId })));
  };

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="max-w-md">
        <SavedViews
          views={views}
          currentView={currentView}
          onSelectView={setCurrentView}
          onSaveView={handleSaveView}
          onDeleteView={handleDeleteView}
          onSetDefault={handleSetDefault}
          currentFilters={currentFilters}
        />
        
        <div className="mt-6 p-4 bg-[var(--surface)] rounded-[var(--radius-lg)]">
          <h4 className="text-sm font-medium text-white mb-2">Current State</h4>
          <p className="text-xs text-[var(--text-muted)]">
            Selected view: {currentView ? views.find(v => v.id === currentView)?.name : "None"}
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Active filters: {Object.keys(currentFilters).length}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Empty = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="max-w-md">
      <SavedViews
        views={[]}
        currentFilters={{ search: "test", status: "active" }}
        onSaveView={async (name, filters) => {
          console.log("Saving view:", name, filters);
        }}
      />
    </div>
  </div>
);
