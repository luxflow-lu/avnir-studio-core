import React from "react";

import { PricingTable } from "./PricingTable";

export default {
  title: "SaaS/PricingTable",
  argTypes: {
    featuredIndex: { control: { type: "number", min: 0, max: 2 } },
  },
};

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "€9",
    period: "/mois",
    description: "Perfect for individuals",
    features: ["5 projects", "10GB storage", "Email support", "Basic analytics"],
    cta: { label: "Get Started" },
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
      "API access",
    ],
    cta: { label: "Start Free Trial" },
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
      "Dedicated manager",
    ],
    cta: { label: "Contact Sales" },
  },
];

function withFeatured(index = 1) {
  return plans.map((p, i) => ({ ...p, popular: i === index }));
}

export const Default = (args: { featuredIndex?: number }) => (
  <div className="mx-auto max-w-5xl p-6 md:p-10 bg-background text-foreground">
    <PricingTable plans={withFeatured(args.featuredIndex ?? 1)} />
  </div>
);
Default.args = { featuredIndex: 1 };

export const Annual = () => (
  <div className="mx-auto max-w-5xl p-6 md:p-10 bg-background text-foreground">
    <PricingTable plans={withFeatured(1)} annual />
  </div>
);
