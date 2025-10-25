import * as React from "react";

import { cx } from "../../utils/cx";

export type SectionHeaderProps = {
  title?: string | undefined;
  subtitle?: string | undefined;
  align?: "left" | "center" | "right";
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ title, subtitle, align = "center", className, ...props }, ref) => {
    if (!title && !subtitle) return null;

    return (
      <div
        ref={ref}
        className={cx("section-header", `section-header--${align}`, className)} {...props}
      >
        {title && (
          <h2 className="section-header-title">
            {title}
          </h2>
        )}
        {subtitle && <p className="section-header-subtitle">{subtitle}</p>}
      </div>
    );
  },
);
SectionHeader.displayName = "SectionHeader";
