import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "../form/Button";
import { Badge } from "../data/Badge";

export interface Plan {
  id: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description?: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface PlanPickerProps extends React.HTMLAttributes<HTMLDivElement> {
  plans: Plan[];
  billing: "monthly" | "yearly";
  onBillingChange: (billing: "monthly" | "yearly") => void;
  onSelectPlan: (planId: string) => void;
  selectedPlan?: string;
}

export const PlanPicker = React.forwardRef<HTMLDivElement, PlanPickerProps>(
  ({ className, plans, billing, onBillingChange, onSelectPlan, selectedPlan, ...props }, ref) => {
    const yearlyDiscount = Math.max(
      0,
      Math.round((1 - (plans[0]?.price.yearly * 12) / (plans[0]?.price.monthly * 12)) * 100) || 0,
    );

    return (
      <div ref={ref} className={cx("w-full", className)} {...props}>
        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-[var(--surface)] p-1 rounded-[var(--radius-lg)] flex">
            <button
              onClick={() => onBillingChange("monthly")}
              className={cx(
                "px-4 py-2 text-sm font-medium rounded-[var(--radius-md)] transition-colors",
                billing === "monthly"
                  ? "bg-[var(--brand)] text-[var(--brand-on)]"
                  : "text-[var(--text-muted)] hover:text-white",
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => onBillingChange("yearly")}
              className={cx(
                "px-4 py-2 text-sm font-medium rounded-[var(--radius-md)] transition-colors relative",
                billing === "yearly"
                  ? "bg-[var(--brand)] text-[var(--brand-on)]"
                  : "text-[var(--text-muted)] hover:text-white",
              )}
            >
              Yearly
              {yearlyDiscount > 0 && (
                <Badge className="absolute -top-2 -right-2 text-xs bg-green-500/15 text-green-400">
                  -{yearlyDiscount}%
                </Badge>
              )}
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 overflow-visible">
          {plans.map((plan) => {
            const price = billing === "monthly" ? plan.price.monthly : plan.price.yearly;
            const isSelected = selectedPlan === plan.id;

            return (
              <div
                key={plan.id}
                className={cx(
                  "relative bg-[var(--surface)] rounded-[var(--radius-lg)] p-6 shadow-md transition-all",
                  plan.popular && "ring-2 ring-[var(--brand)]",
                  isSelected && "ring-2 ring-[var(--brand)]/50",
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-2 py-1 rounded-full bg-muted text-foreground/80 text-[11px] font-medium border border-border shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
                  {plan.description && (
                    <p className="text-[var(--text-muted)] text-sm mb-4">{plan.description}</p>
                  )}

                  <div className="mb-2">
                    <span className="text-3xl font-bold text-white">€{price}</span>
                    <span className="text-[var(--text-muted)] ml-1">
                      /{billing === "monthly" ? "mois" : "an"}
                    </span>
                  </div>

                  {billing === "yearly" && (
                    <p className="text-xs text-[var(--text-muted)]">
                      €{Math.round(price / 12)}/mois facturé annuellement
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <svg
                        className="w-4 h-4 text-[var(--brand)] mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[var(--text-muted)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full mt-4"
                  variant={plan.popular ? "solid" : "outline"}
                  onClick={() => onSelectPlan(plan.id)}
                >
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
PlanPicker.displayName = "PlanPicker";
