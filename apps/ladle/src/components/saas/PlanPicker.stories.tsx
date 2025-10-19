import React, { useState } from "react";
import { PlanPicker } from "./PlanPicker";

export default { title: "SaaS/PlanPicker" };

const mockPlans = [
  {
    id: "starter",
    name: "Starter",
    price: { monthly: 9, yearly: 90 },
    description: "Perfect for individuals",
    features: [
      "5 projects",
      "10GB storage",
      "Email support",
      "Basic analytics"
    ],
    cta: "Get Started"
  },
  {
    id: "pro",
    name: "Pro",
    price: { monthly: 29, yearly: 290 },
    description: "Best for growing teams",
    features: [
      "Unlimited projects",
      "100GB storage",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
      "API access"
    ],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: { monthly: 99, yearly: 990 },
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "24/7 phone support",
      "Custom integrations",
      "SLA guarantee",
      "Dedicated manager"
    ],
    cta: "Contact Sales"
  }
];

export const Default = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<string>();

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-[var(--text-muted)]">Select the perfect plan for your needs</p>
        </div>
        
        <PlanPicker
          plans={mockPlans}
          billing={billing}
          onBillingChange={setBilling}
          onSelectPlan={setSelectedPlan}
          selectedPlan={selectedPlan}
        />
        
        {selectedPlan && (
          <div className="mt-8 text-center">
            <p className="text-[var(--text-muted)]">
              Selected plan: <span className="text-white font-medium">{selectedPlan}</span> 
              {" "}({billing})
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
