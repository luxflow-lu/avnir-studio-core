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
  ({ className, steps, onStepClick, orientation = "horizontal", ...props }, ref) => {
    const isHorizontal = orientation === "horizontal";

    return (
      <div
        ref={ref}
        className={cx(
          "w-full",
          isHorizontal ? "flex items-center" : "flex flex-col space-y-4",
          className,
        )}
        {...props}
      >
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          const canClick = onStepClick && !step.disabled && (step.completed || step.current);

          return (
            <div
              key={step.id}
              className={cx("flex items-center", isHorizontal ? "flex-1" : "w-full")}
            >
              {/* Step Content */}
              <div
                className={cx(
                  "flex items-center",
                  canClick && "cursor-pointer group",
                  isHorizontal ? "flex-col text-center" : "flex-row",
                )}
                onClick={canClick ? () => onStepClick(step.id) : undefined}
              >
                {/* Step Circle */}
                <div
                  className={cx(
                    "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all",
                    step.completed
                      ? "bg-[var(--brand)] border-[var(--brand)] text-[var(--brand-on)]"
                      : step.current
                        ? "border-[var(--brand)] text-[var(--brand)] bg-[var(--brand)]/10"
                        : step.disabled
                          ? "border-white/20 text-[var(--text-muted)] bg-white/5"
                          : "border-white/40 text-[var(--text-muted)] hover:border-white/60",
                    canClick && "group-hover:scale-105",
                    isHorizontal ? "mb-2" : "mr-4",
                  )}
                >
                  {step.completed ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </div>

                {/* Step Text */}
                <div className={cx(isHorizontal ? "text-center" : "flex-1")}>
                  <h3
                    className={cx(
                      "text-sm font-medium transition-colors",
                      step.current
                        ? "text-white"
                        : step.completed
                          ? "text-white"
                          : step.disabled
                            ? "text-[var(--text-muted)]"
                            : "text-[var(--text-muted)]",
                      canClick && "group-hover:text-white",
                    )}
                  >
                    {step.title}
                  </h3>
                  {step.description && (
                    <p
                      className={cx(
                        "text-xs mt-1 transition-colors",
                        step.current || step.completed
                          ? "text-[var(--text-muted)]"
                          : "text-[var(--text-muted)]/70",
                      )}
                    >
                      {step.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Connector Line */}
              {!isLast && (
                <div
                  className={cx(
                    "transition-colors",
                    isHorizontal ? "flex-1 h-0.5 mx-4" : "w-0.5 h-8 ml-5 -mt-2 mb-2",
                    step.completed ? "bg-[var(--brand)]" : "bg-white/20",
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  },
);
CheckoutSteps.displayName = "CheckoutSteps";
