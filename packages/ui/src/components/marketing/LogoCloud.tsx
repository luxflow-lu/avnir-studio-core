import * as React from "react";
import { cx } from "../../utils/cx";

export type Logo = { src: string; alt: string };
export type LogoCloudProps = {
  title?: string;
  subtitle?: string;
  logos: Logo[];
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const LogoCloud = React.forwardRef<HTMLElement, LogoCloudProps>(
  ({ title, subtitle, logos, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cx("w-full mx-auto px-4 md:px-6 py-16 md:py-24", className)}
        {...props}
      >
        <div className="mx-auto max-w-7xl">
          {(title || subtitle) && (
            <div className="mb-8 text-center">
              {title && (
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                  {title}
                </h2>
              )}
              {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
            </div>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {logos.map((l, i) => (
              <div
                key={i}
                className="flex items-center justify-center opacity-80 hover:opacity-100 transition"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.src} alt={l.alt} className="h-8 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
);
LogoCloud.displayName = "LogoCloud";
