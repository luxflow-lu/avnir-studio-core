import * as React from "react";

import { cx } from "../../utils/cx";

export type Stat = { label: string; value: string; sublabel?: string };
export type StatsProps = {
  title?: string;
  items: Stat[];
  columns?: 2 | 3 | 4;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

const colMap: Record<NonNullable<StatsProps["columns"]>, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-2 md:grid-cols-4",
};

export const Stats = React.forwardRef<HTMLElement, StatsProps>(
  ({ title, items, columns = 4, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cx("w-full mx-auto px-4 md:px-6 py-16 md:py-24", className)}
        {...props}
      >
        <div className="mx-auto max-w-7xl">
          {title && (
            <h2 className="mb-8 text-center text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              {title}
            </h2>
          )}
          <div className={cx("grid grid-cols-2 gap-6", colMap[columns])}>
            {items.map((s, i) => (
              <div
                key={i}
                className="rounded-[var(--radius)] border border-border bg-card text-card-foreground p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-semibold tracking-tight">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                {s.sublabel && (
                  <div className="mt-1 text-xs text-muted-foreground">{s.sublabel}</div>
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
