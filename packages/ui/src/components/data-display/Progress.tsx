import * as React from "react";
import { cx } from "../../utils/cx";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
}

const sizes = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
};

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, max = 100, size = "md", showValue = false, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div ref={ref} className={cx("w-full", className)} {...props}>
        {showValue && (
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-white">Progress</span>
            <span className="text-sm text-[var(--text-muted)]">{Math.round(percentage)}%</span>
          </div>
        )}
        <div className={cx("w-full bg-white/10 rounded-full overflow-hidden", sizes[size])}>
          <div
            className="h-full bg-[var(--brand)] transition-all duration-300 ease-out"
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
