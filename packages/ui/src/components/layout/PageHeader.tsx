import * as React from "react";
import { cx } from "../../utils/cx";

export type PageHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const PageHeader = React.forwardRef<HTMLElement, PageHeaderProps>(
  ({ title, subtitle, align = "center", className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cx("page-header", `page-header--${align}`, className)}
        {...props}
      >
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-title">{title}</h1>
            {subtitle && <p className="page-subtitle">{subtitle}</p>}
          </div>
        </div>
      </section>
    );
  },
);
PageHeader.displayName = "PageHeader";
