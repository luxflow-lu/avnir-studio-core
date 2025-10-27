import * as React from "react";

import { cx } from "../../utils/cx";

export type Stat = { label: string; value: string; sublabel?: string };
export type StatsProps = {
  items: Stat[];
  columns?: 2 | 3 | 4;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Stats = React.forwardRef<HTMLDivElement, StatsProps>(
  ({ items, columns = 4, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx("stats-grid", `stats-grid--${columns}`, className)} {...props}
      >
            {items.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
                {s.sublabel && (
                  <div className="stat-sublabel">{s.sublabel}</div>
                )}
              </div>
            ))}
      </div>
    );
  },
);
Stats.displayName = "Stats";
