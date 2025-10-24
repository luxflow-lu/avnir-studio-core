import * as React from "react";
import { cx } from "../../utils/cx";

export type CtaSectionProps = {
  title: string;
  subtitle?: string;
  actions: React.ReactNode;
  image?: React.ReactNode;
  reverse?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const CtaSection = React.forwardRef<HTMLElement, CtaSectionProps>(
  ({ title, subtitle, actions, image, reverse = false, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cx("cta-section", className)}
        {...props}
      >
        <div className="container">
          <div className={cx("grid items-center gap-8", image ? "md:grid-cols-2" : "")}>
            {image && reverse && <div className="order-1 md:order-none">{image}</div>}
            <div>
              <h2 className="cta-title">
                {title}
              </h2>
              {subtitle && <p className="cta-subtitle">{subtitle}</p>}
              <div className="cta-actions">{actions}</div>
            </div>
            {image && !reverse && <div>{image}</div>}
          </div>
        </div>
      </section>
    );
  },
);
CtaSection.displayName = "CtaSection";
