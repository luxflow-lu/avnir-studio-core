import * as React from "react";

import { cx } from "../../utils/cx";
import { SectionHeader } from "../07-layout/SectionHeader";

export type Testimonial = { quote: string; author: string; role?: string; avatarSrc?: string };
export type TestimonialsProps = {
  title?: string;
  subtitle?: string;
  items: Testimonial[];
  variant?: "grid" | "carousel";
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Testimonials = React.forwardRef<HTMLElement, TestimonialsProps>(
  ({ title, subtitle, items, variant = "grid", className, ...props }, ref) => {
    // For now, provide a simple carousel fallback: render as grid always; carousel can be enhanced later.
    return (
      <section
        ref={ref}
        className={cx("testimonials-section", className)} {...props}
      >
        <div className="testimonials-container">
          <SectionHeader title={title} subtitle={subtitle} />
          <div className="testimonials-grid">
            {items.map((t, i) => (
              <figure
                key={i}
                className="testimonial-card"
              >
                <blockquote className="testimonial-quote">
                  “{t.quote}”
                </blockquote>
                <figcaption className="testimonial-author">
                  {t.avatarSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={t.avatarSrc} alt="" className="testimonial-avatar" />
                  ) : (
                    <div className="testimonial-avatar testimonial-avatar--placeholder" aria-hidden />
                  )}
                  <div className="testimonial-info">
                    <div className="testimonial-name">{t.author}</div>
                    {t.role && <div className="testimonial-role">{t.role}</div>}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  },
);
Testimonials.displayName = "Testimonials";
