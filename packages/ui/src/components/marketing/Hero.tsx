import * as React from "react";
import { cx } from "../../utils/cx";

export type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  image?: React.ReactNode;
  layout?: "center" | "split" | "left";
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      eyebrow,
      title,
      subtitle,
      actions,
      image,
      layout = "center",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cx("hero", `hero--${layout}`, className)}
        aria-label={eyebrow ? `${eyebrow} — ${title}` : title} {...props}
      >
        <div className="hero-container">
          {layout === "center" ? (
            <div className="hero-content hero-content--center">
              {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
              <h1 className="hero-title">{title}</h1>
              {subtitle && <p className="hero-subtitle">{subtitle}</p>}
              {actions && <div className="hero-actions">{actions}</div>}
              {image && <div className="hero-image">{image}</div>}
            </div>
          ) : layout === "left" ? (
            <div className="hero-content hero-content--left">
              {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
              <h1 className="hero-title">{title}</h1>
              {subtitle && <p className="hero-subtitle">{subtitle}</p>}
              {actions && <div className="hero-actions">{actions}</div>}
            </div>
          ) : (
            <div className="hero-content hero-content--split">
              <div className="hero-text">
                {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
                <h1 className="hero-title">{title}</h1>
                {subtitle && <p className="hero-subtitle">{subtitle}</p>}
                {actions && <div className="hero-actions">{actions}</div>}
              </div>
              <div className="hero-image">{image}</div>
            </div>
          )}
        </div>
      </section>
    );
  },
);
Hero.displayName = "Hero";
