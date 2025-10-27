import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const progressCircleVariants = cva("progress-circle", {
  variants: {
    variant: {
      default: "",
      success: "progress-circle--success",
      warning: "progress-circle--warning",
      error: "progress-circle--error",
    },
    size: {
      sm: "progress-circle--sm",
      md: "progress-circle--md",
      lg: "progress-circle--lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface ProgressCircleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressCircleVariants> {
  value: number;
  max?: number;
  showLabel?: boolean;
  strokeWidth?: number;
}

export const ProgressCircle = React.forwardRef<HTMLDivElement, ProgressCircleProps>(
  (
    {
      className,
      variant,
      size,
      value,
      max = 100,
      showLabel = true,
      strokeWidth = 8,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    const radius = 50 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div
        ref={ref}
        className={cx(progressCircleVariants({ variant, size }), className)}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        {...props}
      >
        <svg className="progress-circle-svg" viewBox="0 0 100 100">
          <circle
            className="progress-circle-track"
            cx="50"
            cy="50"
            r={radius}
            strokeWidth={strokeWidth}
          />
          <circle
            className="progress-circle-indicator"
            cx="50"
            cy="50"
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        {showLabel && (
          <span className="progress-circle-label">{Math.round(percentage)}%</span>
        )}
      </div>
    );
  }
);
ProgressCircle.displayName = "ProgressCircle";
