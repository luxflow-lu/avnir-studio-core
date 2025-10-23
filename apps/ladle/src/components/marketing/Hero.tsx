import * as React from "react";
import { cx } from "../../utils/cx";

export type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  image?: React.ReactNode;
  layout?: "center" | "split";
  maxWidth?: "lg" | "xl" | "2xl";
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

const maxMap: Record<NonNullable<HeroProps["maxWidth"]>, string> = {
  lg: "max-w-4xl",
  xl: "max-w-5xl",
  "2xl": "max-w-6xl",
};

export const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      eyebrow,
      title,
      subtitle,
      actions,
      image,
      layout = "center",
      maxWidth = "xl",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cx("w-full mx-auto px-4 md:px-6 py-16 md:py-24", className)}
        aria-label={eyebrow ? `${eyebrow} — ${title}` : title}
        {...props}
      >
        <div className={cx("mx-auto", maxMap[maxWidth])}>
          {layout === "center" ? (
            <div className="text-center">
              {eyebrow && <p className="mb-2 text-sm font-medium text-primary">{eyebrow}</p>}
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {title}
              </h1>
              {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
              {actions && <div className="mt-6 inline-flex flex-wrap gap-3">{actions}</div>}
              {image && <div className="mt-10">{image}</div>}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                {eyebrow && <p className="mb-2 text-sm font-medium text-primary">{eyebrow}</p>}
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                  {title}
                </h1>
                {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
                {actions && <div className="mt-6 inline-flex flex-wrap gap-3">{actions}</div>}
              </div>
              <div className="min-h-[200px]">{image}</div>
            </div>
          )}
        </div>
      </section>
    );
  },
);
Hero.displayName = "Hero";
