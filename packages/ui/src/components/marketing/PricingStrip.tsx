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
      <section ref={ref} className={cx("w-full mx-auto px-4 md:px-6 py-12", className)} {...props}>
        <div className="mx-auto max-w-7xl text-center">
          {title && (
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
          <div className="mt-4 inline-flex gap-3">{cta}</div>
        </div>
      </section>
    );
  },
);
PricingStrip.displayName = "PricingStrip";
