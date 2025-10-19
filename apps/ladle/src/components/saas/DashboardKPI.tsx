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
        <div ref={ref} className={cx("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", className)} {...props}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-[var(--surface)] rounded-[var(--radius-lg)] p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-white/10 rounded mb-2"></div>
                <div className="h-8 bg-white/10 rounded mb-2"></div>
                <div className="h-3 bg-white/10 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div ref={ref} className={cx("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", className)} {...props}>
        {kpis.map((kpi) => (
          <div
            key={kpi.id}
            className="bg-[var(--surface)] rounded-[var(--radius-lg)] p-6 border border-white/5 hover:border-white/10 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-[var(--text-muted)] mb-1">
                  {kpi.title}
                </h3>
                <div className="text-2xl font-bold text-white">
                  {typeof kpi.value === 'number' ? kpi.value.toLocaleString() : kpi.value}
                </div>
              </div>
              {kpi.icon && (
                <div className={cx("p-2 rounded-[var(--radius-sm)]", kpi.color || "text-[var(--brand)]")}>
                  {kpi.icon}
                </div>
              )}
            </div>
            
            {kpi.change && (
              <div className="flex items-center gap-1">
                <div className={cx(
                  "flex items-center gap-1 text-sm",
                  kpi.change.trend === "up" ? "text-green-400" :
                  kpi.change.trend === "down" ? "text-red-400" :
                  "text-[var(--text-muted)]"
                )}>
                  {kpi.change.trend === "up" && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  )}
                  {kpi.change.trend === "down" && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-9.2 9.2M7 7v10h10" />
                    </svg>
                  )}
                  <span>
                    {kpi.change.trend !== "neutral" && (kpi.change.value > 0 ? "+" : "")}
                    {kpi.change.value}%
                  </span>
                </div>
                <span className="text-xs text-[var(--text-muted)]">
                  vs {kpi.change.period}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
);
DashboardKPI.displayName = "DashboardKPI";
