import React from "react";
import { PricingTable } from "./PricingTable";

export default { title: "SaaS/PricingTable" };

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "€9",
    period: "/mois",
    description: "Perfect for individuals",
    features: [
      "5 projects",
      "10GB storage",
      "Email support",
      "Basic analytics"
    ],
    cta: { label: "Get Started" }
  },
  {
    id: "pro",
    name: "Pro",
    price: "€29",
    period: "/mois",
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
    cta: { label: "Start Free Trial" }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "24/7 phone support",
      "Custom integrations",
      "SLA guarantee",
      "Dedicated manager"
    ],
    cta: { label: "Contact Sales" }
  }
];

export const Default = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-[var(--text-muted)]">Select the perfect plan for your needs</p>
      </div>
      <PricingTable plans={plans} />
    </div>
  </div>
);

export const Annual = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="max-w-6xl mx-auto">
      <PricingTable plans={plans} annual />
    </div>
  </div>
);
