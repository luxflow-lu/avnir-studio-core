import React from "react";

import { CreditBalance } from "./CreditBalance";

export default { title: "AVNIR/CreditBalance" };

export const Healthy = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="max-w-md">
      <CreditBalance
        currentCredits={850}
        totalCredits={1000}
        monthlyAllowance={1000}
        nextRefillDate={new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)}
        onBuyCredits={() => console.log("Buy credits")}
      />
    </div>
  </div>
);

export const LowCredits = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="max-w-md">
      <CreditBalance
        currentCredits={150}
        totalCredits={1000}
        monthlyAllowance={1000}
        nextRefillDate={new Date(Date.now() + 8 * 24 * 60 * 60 * 1000)}
        onBuyCredits={() => console.log("Buy credits")}
      />
    </div>
  </div>
);

export const VeryLowCredits = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="max-w-md">
      <CreditBalance
        currentCredits={45}
        totalCredits={1000}
        monthlyAllowance={1000}
        nextRefillDate={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)}
        onBuyCredits={() => console.log("Buy credits")}
      />
    </div>
  </div>
);

export const Sizes = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-6">
    <div className="max-w-sm">
      <h3 className="text-sm font-medium text-white mb-3">Small</h3>
      <CreditBalance
        currentCredits={750}
        totalCredits={1000}
        size="sm"
        onBuyCredits={() => console.log("Buy credits")}
      />
    </div>

    <div className="max-w-md">
      <h3 className="text-sm font-medium text-white mb-3">Medium</h3>
      <CreditBalance
        currentCredits={750}
        totalCredits={1000}
        size="md"
        onBuyCredits={() => console.log("Buy credits")}
      />
    </div>

    <div className="max-w-lg">
      <h3 className="text-sm font-medium text-white mb-3">Large</h3>
      <CreditBalance
        currentCredits={750}
        totalCredits={1000}
        size="lg"
        monthlyAllowance={1000}
        nextRefillDate={new Date(Date.now() + 12 * 24 * 60 * 60 * 1000)}
        onBuyCredits={() => console.log("Buy credits")}
      />
    </div>
  </div>
);

export const WithoutProgress = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="max-w-md">
      <CreditBalance
        currentCredits={650}
        totalCredits={1000}
        showProgress={false}
        onBuyCredits={() => console.log("Buy credits")}
      />
    </div>
  </div>
);

export const InDashboard = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <CreditBalance
        currentCredits={1250}
        totalCredits={2000}
        monthlyAllowance={2000}
        nextRefillDate={new Date(Date.now() + 20 * 24 * 60 * 60 * 1000)}
        size="sm"
      />

      <div className="bg-[var(--surface)] rounded-[var(--radius-lg)] p-4 flex items-center justify-center">
        <span className="text-[var(--text-muted)]">Autre widget</span>
      </div>

      <div className="bg-[var(--surface)] rounded-[var(--radius-lg)] p-4 flex items-center justify-center">
        <span className="text-[var(--text-muted)]">Autre widget</span>
      </div>
    </div>
  </div>
);
