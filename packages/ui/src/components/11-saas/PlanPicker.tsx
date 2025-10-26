import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";
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
}

export const PlanPicker = React.forwardRef<HTMLDivElement, PlanPickerProps>(
  ({ className, plans, billing, onBillingChange, onSelectPlan, selectedPlan, ...props }, ref) => {
    const firstPlan = plans[0];
    const yearlyDiscount = firstPlan
      ? Math.max(
          0,
          Math.round((1 - (firstPlan.price.yearly * 12) / (firstPlan.price.monthly * 12)) * 100) ||
            0,
        )
      : 0;

    return (
      <div ref={ref} className={cx("plan-picker-container", className)} {...props}>
        {/* Billing Toggle */}
        <div className="plan-picker-billing">
          <div className="plan-picker-billing-toggle">
            <button
              onClick={() => onBillingChange("monthly")}
              className={cx(
                "plan-picker-billing-button",
                billing === "monthly" && "plan-picker-billing-button--active",
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => onBillingChange("yearly")}
              className={cx(
                "plan-picker-billing-button",
                billing === "yearly" && "plan-picker-billing-button--active",
              )}
            >
              Yearly
              {yearlyDiscount > 0 && (
                <Badge className="plan-picker-badge">
                  -{yearlyDiscount}%
                </Badge>
              )}
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="plan-picker-grid">
          {plans.map((plan) => {
            const price = billing === "monthly" ? plan.price.monthly : plan.price.yearly;
            const isSelected = selectedPlan === plan.id;

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

                  {billing === "yearly" && (
                    <p className="plan-picker-price-note">
                      €{Math.round(price / 12)}/mois facturé annuellement
                    </p>
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
