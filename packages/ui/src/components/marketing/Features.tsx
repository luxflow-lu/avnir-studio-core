import * as React from "react";
import clsx from "clsx";

import { SectionHeader } from "../layout/SectionHeader";

export type Feature = { icon?: React.ReactNode; title: string; description?: string };
export type FeaturesProps = {
  title?: string;
  subtitle?: string;
  items: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

const colMap: Record<NonNullable<FeaturesProps["columns"]>, string> = {
  2: "features-grid--2",
  3: "features-grid--3",
  4: "features-grid--4",
};

export const Features = React.forwardRef<HTMLElement, FeaturesProps>(
  ({ title, subtitle, items, columns = 3, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={clsx("features-section", className)} {...props}
      >
        <div className="features-container">
          <SectionHeader title={title} subtitle={subtitle} />
          <div className={clsx("features-grid", colMap[columns])}>
            {items.map((it, i) => (
              <div
                key={i}
                className="feature-card"
              >
                {it.icon && (
                  <div className="feature-icon">
                    {it.icon}
                  </div>
                )}
                <h3 className="feature-title">{it.title}</h3>
                {it.description && (
                  <p className="feature-description">
                    {it.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
);
Features.displayName = "Features";
