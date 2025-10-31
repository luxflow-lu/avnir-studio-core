import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";
import { ToggleButton } from "../02-form/ToggleButton";
import { Badge } from "../03-data-display/Badge";

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
  columns?: 2 | 3;
}

export const PlanPicker = React.forwardRef<HTMLDivElement, PlanPickerProps>(
  ({ className, plans, billing, onBillingChange, onSelectPlan, selectedPlan, columns = 3, ...props }, ref) => {
    return (
      <div ref={ref} className={cx("plan-picker-container", className)} {...props}>
        {/* Billing Toggle */}
        <ToggleButton
          value={billing}
          onChange={(value) => onBillingChange(value as "monthly" | "yearly")}
          options={[
            { value: "monthly", label: "Monthly" },
            { value: "yearly", label: "Yearly" },
          ]}
        />

        {/* Plans Grid */}
        <div className={cx("plan-picker-grid", columns === 2 && "plan-picker-grid--two-cols")}>
          {plans.map((plan) => {
            const price = billing === "monthly" ? plan.price.monthly : plan.price.yearly;
            const isSelected = selectedPlan === plan.id;
            const yearlyDiscount = plan.price.monthly > 0
              ? Math.max(
                  0,
                  Math.round((1 - plan.price.yearly / (plan.price.monthly * 12)) * 100) || 0
                )
              : 0;

            return (
              <div
                key={plan.id}
                className={cx(
                  "plan-picker-card",
                  plan.popular && "plan-picker-card--popular",
                  isSelected && "plan-picker-card--selected",
                )}
              >
                {plan.popular && (
                  <div className="plan-picker-badge">
                    <span className="plan-picker-badge-content">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="plan-picker-header">
                  <h3 className="plan-picker-name">{plan.name}</h3>
                  {plan.description && (
                    <p className="plan-picker-description">{plan.description}</p>
                  )}

                  <div className="plan-picker-price">
                    <span className="plan-picker-price-amount">€{price}</span>
                    <span className="plan-picker-price-period">
                      /{billing === "monthly" ? "mois" : "an"}
                    </span>
                  </div>

                  {billing === "yearly" && yearlyDiscount > 0 && (
                    <div className="plan-picker-price-note">
                      <Badge variant="primary" size="sm">
                        🎉 -{yearlyDiscount}% de réduction
                      </Badge>
                    </div>
                  )}
                </div>

                <ul className="plan-picker-features">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="plan-picker-feature">
                      <svg
                        className="plan-picker-feature-icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="plan-picker-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="plan-picker-cta"
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
