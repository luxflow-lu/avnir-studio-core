import * as React from "react";
import { cx } from "../../utils/cx";

export interface Metric {
  label: string;
  current: number;
  limit: number;
  unit?: string;
}

export interface UsageMetricsProps extends React.HTMLAttributes<HTMLDivElement> {
  metrics: Metric[];
}

export const UsageMetrics = React.forwardRef<HTMLDivElement, UsageMetricsProps>(
  ({ className, metrics, ...props }, ref) => (
    <div ref={ref} className={cx("usage-metrics", className)} {...props}>
      {metrics.map((metric, index) => {
        const percentage = (metric.current / metric.limit) * 100;
        const isNearLimit = percentage >= 80;
        const isOverLimit = percentage >= 100;

        return (
          <div key={index} className="usage-metric">
            <div className="usage-metric-header">
              <span className="usage-metric-label">{metric.label}</span>
              <span className="usage-metric-value">
                {metric.current} / {metric.limit} {metric.unit || ""}
              </span>
            </div>
            <div className="usage-metric-bar">
              <div
                className={cx(
                  "usage-metric-progress",
                  isOverLimit && "usage-metric-progress--over",
                  isNearLimit && !isOverLimit && "usage-metric-progress--near"
                )}
                style={{ "--usage-percentage": `${Math.min(percentage, 100)}%` } as React.CSSProperties}
              />
            </div>
            <div className="usage-metric-percentage">
              {percentage.toFixed(0)}% used
            </div>
          </div>
        );
      })}
    </div>
  )
);
UsageMetrics.displayName = "UsageMetrics";
