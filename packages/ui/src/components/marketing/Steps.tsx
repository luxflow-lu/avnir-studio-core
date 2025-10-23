import * as React from "react";
import { cx } from "../../utils/cx";

export type Step = { title: string; description?: string; icon?: React.ReactNode };
export type StepsProps = {
  title?: string;
  subtitle?: string;
  items: Step[];
  direction?: "vertical" | "horizontal";
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Steps = React.forwardRef<HTMLElement, StepsProps>(
  ({ title, subtitle, items, direction = "horizontal", className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cx("w-full mx-auto px-4 md:px-6 py-16 md:py-24", className)}
        {...props}
      >
        <div className="mx-auto max-w-7xl">
          {(title || subtitle) && (
            <div className="mb-10 text-center">
              {title && (
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  {title}
                </h2>
              )}
              {subtitle && <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>}
            </div>
          )}
          <ol
            className={cx(direction === "vertical" ? "space-y-6" : "grid gap-6 md:grid-cols-4")}
            aria-label="Étapes"
          >
            {items.map((s, i) => (
              <li
                key={i}
                className="rounded-[var(--radius)] border border-border bg-card text-card-foreground p-6"
              >
                {s.icon && (
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-muted text-primary">
                    {s.icon}
                  </div>
                )}
                <div className="text-sm text-muted-foreground">Étape {i + 1}</div>
                <div className="mt-1 font-medium text-card-foreground">{s.title}</div>
                {s.description && (
                  <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  },
);
Steps.displayName = "Steps";
