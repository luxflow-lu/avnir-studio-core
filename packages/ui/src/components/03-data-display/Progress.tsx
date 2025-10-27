import * as React from "react";

import { cx } from "../../utils/cx";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg" | "xl";
  showValue?: boolean;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, max = 100, size = "md", showValue = false, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div ref={ref} className={cx("progress-container", className)} {...props}>
        {showValue && (
          <div className="progress-label">
            <span>Progress</span>
            <span className="progress-value">{Math.round(percentage)}%</span>
          </div>
        )}
        <div className={cx("progress", `progress--${size}`)}>
          <div
            className="progress-indicator"
            style={{ width: `${percentage}%` }}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={max}
          />
        </div>
      </div>
    );
  },
);
Progress.displayName = "Progress";
