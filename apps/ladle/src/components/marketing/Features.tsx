import * as React from "react";
import { cx } from "../../utils/cx";

export type Feature = { icon?: React.ReactNode; title: string; description?: string };
export type FeaturesProps = {
  title?: string;
  subtitle?: string;
  items: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

const colMap: Record<NonNullable<FeaturesProps["columns"]>, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 md:grid-cols-3",
  4: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
};

export const Features = React.forwardRef<HTMLElement, FeaturesProps>(
  ({ title, subtitle, items, columns = 3, className, ...props }, ref) => {
    return (
      <section ref={ref} className={cx("w-full mx-auto px-4 md:px-6 py-16 md:py-24", className)} {...props}>
        <div className="mx-auto max-w-7xl">
          {(title || subtitle) && (
            <div className="mb-10 text-center">
              {title && <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">{title}</h2>}
              {subtitle && <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>}
            </div>
          )}
          <div className={cx("grid grid-cols-1 gap-8", colMap[columns])}>
            {items.map((it, i) => (
              <div
                key={i}
                className="rounded-[var(--radius)] border border-border bg-card text-card-foreground p-6 shadow-sm transition-colors transition-shadow hover:shadow-md"
              >
                {it.icon && (
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-muted text-primary">
                    {it.icon}
                  </div>
                )}
                <h3 className="font-medium tracking-tight text-card-foreground">{it.title}</h3>
                {it.description && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);
Features.displayName = "Features";
