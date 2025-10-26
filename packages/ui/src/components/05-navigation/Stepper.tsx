import * as React from "react";
import { cx } from "../../utils/cx";

export interface Step {
  label: string;
  description?: string;
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Step[];
  currentStep: number;
  orientation?: "horizontal" | "vertical";
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ className, steps, currentStep, orientation = "horizontal", ...props }, ref) => (
    <div
      ref={ref}
      className={cx("stepper", `stepper--${orientation}`, className)}
      {...props}
    >
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div
            key={index}
            className={cx(
              "stepper-step",
              isActive && "stepper-step--active",
              isCompleted && "stepper-step--completed"
            )}
          >
            <div className="stepper-step-indicator">
              <div className="stepper-step-number">
                {isCompleted ? "✓" : index + 1}
              </div>
              {index < steps.length - 1 && <div className="stepper-step-line" />}
            </div>
            <div className="stepper-step-content">
              <div className="stepper-step-label">{step.label}</div>
              {step.description && (
                <div className="stepper-step-description">{step.description}</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  )
);
Stepper.displayName = "Stepper";
