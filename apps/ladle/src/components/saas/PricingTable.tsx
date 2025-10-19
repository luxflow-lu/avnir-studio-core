import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "../form/Button";
import { Badge } from "../data/Badge";

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
  ({ className, plans, annual = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cx("grid grid-cols-1 md:grid-cols-3 gap-6", className)}
      {...props}
    >
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={cx(
            "relative bg-[var(--surface)] rounded-[var(--radius-lg)] p-6 shadow-md",
            plan.popular && "ring-2 ring-[var(--brand)]"
          )}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge>Most Popular</Badge>
            </div>
          )}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
            {plan.description && (
              <p className="text-[var(--text-muted)] text-sm mb-4">{plan.description}</p>
            )}
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">{plan.price}</span>
              {plan.period && (
                <span className="text-[var(--text-muted)] ml-1">{plan.period}</span>
              )}
            </div>
          </div>
          <ul className="space-y-3 mb-6">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <svg className="w-4 h-4 text-[var(--brand)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[var(--text-muted)]">{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            className="w-full"
            variant={plan.popular ? "solid" : "outline"}
            onClick={plan.cta.onClick}
          >
            {plan.cta.label}
          </Button>
        </div>
      ))}
    </div>
  )
);
PricingTable.displayName = "PricingTable";
