import * as React from "react";
import { cx } from "../../utils/cx";
import { SectionHeader } from "../layout/SectionHeader";

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
        className={cx("cta-section", className)} {...props}
      >
        <div className="cta-container">
          {!image ? (
            // Text-only CTA with centered header
            <div className="cta-content--text-only">
              <SectionHeader title={title} subtitle={subtitle} />
              <div className="cta-actions">{actions}</div>
            </div>
          ) : (
            // CTA with image - keep custom layout
            <div className={cx("cta-content--with-image", reverse ? "cta-content--reverse" : "")}>
              {reverse && <div className="cta-image cta-image--reverse">{image}</div>}
              <div className="cta-text">
                <SectionHeader title={title} subtitle={subtitle} align="left" />
                <div className="cta-actions">{actions}</div>
              </div>
              {!reverse && <div className="cta-image">{image}</div>}
            </div>
          )}
        </div>
      </section>
    );
  },
);
CtaSection.displayName = "CtaSection";
