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
        className={cx("logo-cloud", className)} {...props}
      >
        <div className="logo-cloud-container">
          {(title || subtitle) && (
            <div className="logo-cloud-header">
              {title && (
                <h2 className="logo-cloud-title">
                  {title}
                </h2>
              )}
              {subtitle && <p className="logo-cloud-subtitle">{subtitle}</p>}
            </div>
          )}
          <div className="logo-cloud-grid">
            {logos.map((l, i) => (
              <div
                key={i}
                className="logo-cloud-item"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.src} alt={l.alt} className="logo-cloud-image" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
);
LogoCloud.displayName = "LogoCloud";
