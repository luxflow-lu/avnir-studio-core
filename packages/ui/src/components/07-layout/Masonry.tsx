import * as React from "react";

import { cx } from "../../utils/cx";

export interface MasonryProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Masonry = React.forwardRef<HTMLDivElement, MasonryProps>(
  ({ className, columns = 3, gap = "md", children, ...props }, ref) => (
    <div
      ref={ref}
      className={cx("masonry", `masonry--cols-${columns}`, `masonry--gap-${gap}`, className)}
      {...props}
    >
      {children}
    </div>
  )
);
Masonry.displayName = "Masonry";
