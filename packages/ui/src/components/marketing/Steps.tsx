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
        className={cx("steps", className)} {...props}
      >
        <div className="steps-container">
          {(title || subtitle) && (
            <div className="steps-header">
              {title && (
                <h2 className="steps-title">
                  {title}
                </h2>
              )}
              {subtitle && <p className="steps-subtitle">{subtitle}</p>}
            </div>
          )}
          <ol
            className="steps-list"
            aria-label="Étapes"
          >
            {items.map((s, i) => (
              <li
                key={i}
                className="step-item"
              >
                <div className="step-number">{i + 1}</div>
                <div className="step-content">
                  <div className="step-title">{s.title}</div>
                  {s.description && (
                    <p className="step-description">{s.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  },
);
Steps.displayName = "Steps";
