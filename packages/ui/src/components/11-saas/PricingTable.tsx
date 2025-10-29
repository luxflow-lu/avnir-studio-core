import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";
import { Badge } from "../03-data-display/Badge";

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  popular?: boolean;
  cta: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
}

export interface PricingTableProps extends React.HTMLAttributes<HTMLDivElement> {
  plans: PricingPlan[];
  annual?: boolean;
}

export const PricingTable = React.forwardRef<HTMLDivElement, PricingTableProps>(
  ({ className, plans, annual: _annual = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cx("pricing-table", className)} {...props}
    >
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={cx(
            "pricing-card",
            plan.popular ? "pricing-card--popular" : "",
          )}
        >
          {plan.popular && (
            <div className="pricing-badge">
              <span className="pricing-badge-text">Most Popular</span>
            </div>
          )}
          <div className="pricing-header">
            <h3 className="pricing-name">{plan.name}</h3>
            {plan.description && (
              <p className="pricing-description">{plan.description}</p>
            )}
            <div className="pricing-price">
              <span className="pricing-amount">{plan.price}</span>
              {plan.period && <span className="pricing-period">{plan.period}</span>}
            </div>
          </div>
          <ul className="pricing-features">
            {plan.features.map((feature, index) => (
              <li key={index} className="pricing-feature">
                <svg
                  className="pricing-feature-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="pricing-feature-text">{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            className="pricing-cta"
            variant={plan.popular ? "solid" : "outline"}
            onClick={plan.cta.onClick}
          >
            {plan.cta.label}
          </Button>
        </div>
      ))}
    </div>
  ),
);
PricingTable.displayName = "PricingTable";
