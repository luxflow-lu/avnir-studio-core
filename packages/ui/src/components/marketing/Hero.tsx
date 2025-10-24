"use client";

import * as React from "react";
import { cx } from "../../utils/cx";

export type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  image?: React.ReactNode;
  backgroundImage?: string;
  layout?: "center" | "split" | "left";
  maxWidth?: "lg" | "xl" | "2xl" | "full";
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

const maxMap: Record<NonNullable<HeroProps["maxWidth"]>, string> = {
  lg: "max-w-4xl",
  xl: "max-w-5xl",
  "2xl": "max-w-6xl",
  "full": "max-w-none",
};

export const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      eyebrow,
      title,
      subtitle,
      actions,
      image,
      backgroundImage,
      layout = "left",
      maxWidth = "full",
      className,
      ...props
    },
    ref,
  ) => {
    const [brand, setBrand] = React.useState("avnir-studio");

    React.useEffect(() => {
      if (typeof document === "undefined") return;

      const updateBrand = () => {
        const html = document.documentElement;
        setBrand(html.getAttribute("data-brand") || "avnir-studio");
      };

      // Initial update
      updateBrand();

      // Watch for changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "data-brand"
          ) {
            updateBrand();
          }
        });
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-brand"],
      });

      return () => observer.disconnect();
    }, []);

    // Auto-detect background image from brandkit if not provided
    const resolvedBackgroundImage = backgroundImage || (brand === "muzidev" ? "/images/hero-muzidev-bg.webp" : undefined);
    return (
      <section
        ref={ref}
        className={cx("hero", layout === "left" ? "hero--left" : layout === "center" ? "hero--center" : "hero--split", className)}
        style={resolvedBackgroundImage ? {
          backgroundImage: `url(${resolvedBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        } : undefined}
        aria-label={eyebrow ? `${eyebrow} — ${title}` : title}
        {...props}
      >
        {/* Overlay gradient */}
        {resolvedBackgroundImage && (
          <div className="hero-overlay" aria-hidden="true" />
        )}
        <div className="hero-container">
          {layout === "center" ? (
            <div className="hero-content hero-content--center">
              <h1 className="hero-title">
                {title}
              </h1>
              {subtitle && <p className="hero-subtitle">{subtitle}</p>}
              {actions && <div className="hero-actions">{actions}</div>}
              {image && <div className="hero-image">{image}</div>}
            </div>
          ) : layout === "left" ? (
            <div className="hero-content hero-content--left">
              <h1 className="hero-title">
                {title}
              </h1>
              {subtitle && <p className="hero-subtitle">{subtitle}</p>}
              {actions && <div className="hero-actions">{actions}</div>}
            </div>
          ) : (
            <div className="hero-content hero-content--split">
              <div className="hero-text">
                {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
                <h1 className="hero-title">
                  {title}
                </h1>
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
