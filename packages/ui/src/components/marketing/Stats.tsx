import * as React from "react";
import { cx } from "../../utils/cx";

export type Stat = { label: string; value: string; sublabel?: string };
export type StatsProps = {
  title?: string;
  items: Stat[];
  columns?: 2 | 3 | 4;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Stats = React.forwardRef<HTMLElement, StatsProps>(
  ({ title, items, columns = 4, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cx("stats-section", `stats-section--${columns}`, className)} {...props}
      >
        <div className="stats-container">
          {title && (
            <h2 className="stats-title">{title}</h2>
          )}
          <div className={cx("stats-grid", `stats-grid--${columns}`)}>
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
        </div>
      </section>
    );
  },
);
Stats.displayName = "Stats";
