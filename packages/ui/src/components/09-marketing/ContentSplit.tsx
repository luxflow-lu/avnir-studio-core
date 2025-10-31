import * as React from "react";

import { cx } from "../../utils/cx";

export type ContentSplitProps = {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  image: React.ReactNode;
  reverse?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const ContentSplit = React.forwardRef<HTMLDivElement, ContentSplitProps>(
  ({ title, subtitle, actions, image, reverse = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx("content-split", reverse && "content-split--reverse", className)}
        {...props}
      >
        {!reverse && <div className="content-split-image">{image}</div>}
        <div className="content-split-content">
          <h2 className="content-split-title">{title}</h2>
          {subtitle && <p className="content-split-subtitle">{subtitle}</p>}
          {actions && <div className="content-split-actions">{actions}</div>}
        </div>
        {reverse && <div className="content-split-image">{image}</div>}
      </div>
    );
  },
);
ContentSplit.displayName = "ContentSplit";
