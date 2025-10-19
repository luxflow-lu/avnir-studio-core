import React, { useState } from "react";
import { PlanPicker } from "./PlanPicker";

export default {
  title: "SaaS/PlanPicker",
  argTypes: {
    billingCycle: { control: { type: "radio" }, options: ["monthly", "yearly"] },
    featuredIndex: { control: { type: "number", min: 0, max: 2 } }
  }
};

const basePlans = [
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

function WithFeatured(plans: typeof basePlans, featuredIndex = 1) {
  return plans.map((p, i) => ({ ...p, popular: i === featuredIndex }));
}

type Billing = "monthly" | "yearly";

export const Default = (args: { billingCycle?: Billing; featuredIndex?: number }) => {
  const [billing, setBilling] = useState<Billing>(args.billingCycle ?? "monthly");
  const [selectedPlan, setSelectedPlan] = useState<string>();
  const plans = WithFeatured(basePlans, args.featuredIndex ?? 1);

  return (
    <div className="mx-auto max-w-5xl p-6 md:p-10 bg-background text-foreground">
      <PlanPicker
        plans={plans}
        billing={billing}
        onBillingChange={setBilling}
        onSelectPlan={setSelectedPlan}
        selectedPlan={selectedPlan}
      />
    </div>
  );
};
Default.args = { billingCycle: "monthly", featuredIndex: 1 };

export const Yearly = () => {
  const [billing, setBilling] = useState<Billing>("yearly");
  const plans = WithFeatured(basePlans, 1);
  return (
    <div className="mx-auto max-w-5xl p-6 md:p-10 bg-background text-foreground">
      <PlanPicker
        plans={plans}
        billing={billing}
        onBillingChange={setBilling}
        onSelectPlan={() => {}}
      />
    </div>
  );
};

export const FeaturedCenter = () => {
  const plans = WithFeatured(basePlans, 1);
  return (
    <div className="mx-auto max-w-5xl p-6 md:p-10 bg-background text-foreground">
      <PlanPicker
        plans={plans}
        billing={"monthly"}
        onBillingChange={() => {}}
        onSelectPlan={() => {}}
      />
    </div>
  );
};
