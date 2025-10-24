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
        className={cx(
          "relative w-full min-h-full flex items-center py-16 md:py-24",
          layout === "left" && maxWidth === "full" ? "px-4 md:px-6 lg:px-8" : "px-4 md:px-6",
          className
        )}
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
          <div 
            className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/60 to-transparent"
            aria-hidden="true"
          />
        )}
        <div className={cx(
          "relative z-10",
          layout === "left" && maxWidth === "full" ? "w-full" : cx("mx-auto", maxMap[maxWidth])
        )}>
          {layout === "center" ? (
            <div className="text-center">
              <h1 className="h1">
                {title}
              </h1>
              {subtitle && <p className="body mt-4">{subtitle}</p>}
              {actions && <div className="mt-6 inline-flex flex-wrap gap-3">{actions}</div>}
              {image && <div className="mt-10">{image}</div>}
            </div>
          ) : layout === "left" ? (
            <div className="text-left w-full">
              <h1 className="hero-title">
                {title}
              </h1>
              {subtitle && <p className="hero-subtitle">{subtitle}</p>}
              {actions && <div className="hero-actions">{actions}</div>}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                {eyebrow && <p className="mb-2 text-sm font-medium text-primary">{eyebrow}</p>}
                <h1 className="h1">
                  {title}
                </h1>
                {subtitle && <p className="body mt-4">{subtitle}</p>}
                {actions && <div className="mt-6 inline-flex flex-wrap gap-3">{actions}</div>}
              </div>
              <div style={{ minHeight: '200px' }}>{image}</div>
            </div>
          )}
        </div>
      </section>
    );
  },
);
Hero.displayName = "Hero";
