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
        className={cx("w-full mx-auto px-4 md:px-6 py-16 md:py-24", className)}
        {...props}
      >
        <div className="mx-auto max-w-7xl">
          <div className={cx("grid gap-8 items-center", image ? "md:grid-cols-2" : "")}>
            {image && reverse && <div className="order-1 md:order-none">{image}</div>}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                {title}
              </h2>
              {subtitle && <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>}
              <div className="mt-6 inline-flex flex-wrap gap-3">{actions}</div>
            </div>
            {image && !reverse && <div>{image}</div>}
          </div>
        </div>
      </section>
    );
  },
);
CtaSection.displayName = "CtaSection";
