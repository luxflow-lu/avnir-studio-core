import * as React from "react";

import { cx } from "../../utils/cx";

export type PricingStripProps = {
  title?: string;
  subtitle?: string;
  cta: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const PricingStrip = React.forwardRef<HTMLElement, PricingStripProps>(
  ({ title, subtitle, cta, className, ...props }, ref) => {
    return (
      <section ref={ref} className={cx("pricing-strip", className)} {...props}>
        <div className="pricing-strip-container">
          {title && <h2 className="pricing-strip-title">{title}</h2>}
          {subtitle && <p className="pricing-strip-description">{subtitle}</p>}
          <div className="pricing-strip-actions">{cta}</div>
        </div>
      </section>
    );
  },
);
PricingStrip.displayName = "PricingStrip";
