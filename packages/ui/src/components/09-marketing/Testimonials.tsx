import * as React from "react";

import { cx } from "../../utils/cx";
import { Carousel } from "../03-data-display/Carousel";

export type Testimonial = { quote: string; author: string; role?: string; avatarSrc?: string };
export type TestimonialsProps = {
  items: Testimonial[];
  variant?: "grid" | "carousel";
  autoPlay?: boolean;
  interval?: number;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Testimonials = React.forwardRef<HTMLDivElement, TestimonialsProps>(
  ({ items, variant = "grid", autoPlay = true, interval = 5000, className, ...props }, ref) => {
    const testimonialCards = items.map((t, i) => (
      <figure
        key={i}
        className="testimonial-card"
      >
        <blockquote className="testimonial-quote">
          &ldquo;{t.quote}&rdquo;
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
    ));

    if (variant === "carousel") {
      return (
        <Carousel
          ref={ref}
          autoPlay={autoPlay}
          interval={interval}
          className={cx("testimonials-carousel", className)}
          {...props}
        >
          {testimonialCards}
        </Carousel>
      );
    }

    return (
      <div
        ref={ref}
        className={cx("testimonials-grid", className)}
        {...props}
      >
        {testimonialCards}
      </div>
    );
  },
);
Testimonials.displayName = "Testimonials";
