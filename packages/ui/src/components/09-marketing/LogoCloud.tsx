import * as React from "react";

import { cx } from "../../utils/cx";

export type Logo = { src: string; alt: string };
export type LogoCloudProps = {
  logos: Logo[];
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const LogoCloud = React.forwardRef<HTMLDivElement, LogoCloudProps>(
  ({ logos, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx("logo-cloud", className)} {...props}
      >
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
    );
  },
);
LogoCloud.displayName = "LogoCloud";
