import * as React from "react";
import { cx } from "../../utils/cx";

export interface KPICard {
  id: string;
  title: string;
  value: string | number;
  change?: {
    value: number;
    period: string;
    trend: "up" | "down" | "neutral";
  };
  icon?: React.ReactNode;
  color?: string;
}

export interface DashboardKPIProps extends React.HTMLAttributes<HTMLDivElement> {
  kpis: KPICard[];
  loading?: boolean;
}

export const DashboardKPI = React.forwardRef<HTMLDivElement, DashboardKPIProps>(
  ({ className, kpis, loading = false, ...props }, ref) => {
    if (loading) {
      return (
        <div
          ref={ref}
          className={cx("grid-1 md:grid-2 lg:grid-cols-4 gap-6", className)} {...props}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-surface-lg p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-muted mb-2"></div>
                <div className="h-8 bg-muted mb-2"></div>
                <div className="h-3 bg-muted w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cx("grid-1 md:grid-2 lg:grid-cols-4 gap-6", className)} {...props}
      >
        {kpis.map((kpi) => (
          <div
            key={kpi.id}
            className="bg-surface-lg p-6-white/5 hover:border-muted"
          >
            <div className="flex flex-start justify-between mb-4">
              <div >
                <h3 className="text-sm font-medium text-muted mb-1">{kpi.title}</h3>
                <div className="text-2xl font-bold text-foreground">
                  {typeof kpi.value === "number" ? kpi.value.toLocaleString() : kpi.value}
                </div>
              </div>
              {kpi.icon && (
                <div
                  className={cx(
                    "p-2 rounded-sm",
                    kpi.color || "text-brand",
                  )}
                >
                  {kpi.icon}
                </div>
              )}
            </div>

            {kpi.change && (
              <div className="flex-center gap-1">
                <div
                  className={cx(
                    "flex-center gap-1 text-sm",
                    kpi.change.trend === "up"
                      ? "text-green-400"
                      : kpi.change.trend === "down"
                        ? "text-red-400"
                        : "text-muted",
                  )}
                >
                  {kpi.change.trend === "up" && (
                    <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17l9.2-9.2M17 17V7H7"
                      />
                    </svg>
                  )}
                  {kpi.change.trend === "down" && (
                    <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 7l-9.2 9.2M7 7v10h10"
                      />
                    </svg>
                  )}
                  <span>
                    {kpi.change.trend !== "neutral" && (kpi.change.value > 0 ? "+" : "")}
                    {kpi.change.value}%
                  </span>
                </div>
                <span className="text-xs text-muted">vs {kpi.change.period}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  },
);
DashboardKPI.displayName = "DashboardKPI";
