import * as React from "react";

import { cx } from "../../utils/cx";

export interface CheckoutStep {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  current: boolean;
  disabled?: boolean;
}

export interface CheckoutStepsProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: CheckoutStep[];
  onStepClick?: (stepId: string) => void;
  orientation?: "horizontal" | "vertical";
}

export const CheckoutSteps = React.forwardRef<HTMLDivElement, CheckoutStepsProps>(
  ({ className, steps, onStepClick, ...props }, ref) => {
    return (
      <div ref={ref} className={cx("checkout-steps", className)} {...props}>
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={cx(
              "checkout-step",
              step.current && "checkout-step--active",
              step.completed && "checkout-step--completed"
            )}
            onClick={
              onStepClick && !step.disabled && (step.completed || step.current)
                ? () => onStepClick(step.id)
                : undefined
            }
          >
            <div className="checkout-step-indicator">
              {step.completed ? (
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <div className="checkout-step-label">
              <div>{step.title}</div>
              {step.description && <div className="text-xs">{step.description}</div>}
            </div>
            <div className="checkout-step-connector" />
          </div>
        ))}
      </div>
    );
  },
);
CheckoutSteps.displayName = "CheckoutSteps";
