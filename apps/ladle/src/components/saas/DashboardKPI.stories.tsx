import React from "react";
import { DashboardKPI } from "./DashboardKPI";

export default { title: "SaaS/DashboardKPI" };

const mockKPIs = [
  {
    id: "revenue",
    title: "Total Revenue",
    value: "€45,231",
    change: { value: 12.5, period: "last month", trend: "up" as const },
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
        />
      </svg>
    ),
    color: "text-green-400",
  },
  {
    id: "users",
    title: "Active Users",
    value: 2350,
    change: { value: 8.2, period: "last week", trend: "up" as const },
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        />
      </svg>
    ),
    color: "text-blue-400",
  },
  {
    id: "orders",
    title: "Orders",
    value: 156,
    change: { value: -3.1, period: "yesterday", trend: "down" as const },
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
    color: "text-purple-400",
  },
  {
    id: "conversion",
    title: "Conversion Rate",
    value: "3.24%",
    change: { value: 0, period: "last month", trend: "neutral" as const },
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    color: "text-orange-400",
  },
];

export const Default = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">Dashboard Overview</h2>
      <p className="text-[var(--text-muted)]">Key performance indicators for your business</p>
    </div>
    <DashboardKPI kpis={mockKPIs} />
  </div>
);

export const Loading = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <DashboardKPI kpis={[]} loading />
  </div>
);

export const Minimal = () => {
  const minimalKPIs = [
    { id: "1", title: "Revenue", value: "€12,345" },
    { id: "2", title: "Users", value: 1234 },
    { id: "3", title: "Growth", value: "+15%" },
  ];

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <DashboardKPI kpis={minimalKPIs} />
    </div>
  );
};
