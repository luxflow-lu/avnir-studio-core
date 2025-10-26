import * as React from "react";
import { cx } from "../../utils/cx";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 12, gap = "md", children, ...props }, ref) => (
    <div
      ref={ref}
      className={cx("grid", `grid--cols-${cols}`, `grid--gap-${gap}`, className)}
      {...props}
    >
      {children}
    </div>
  )
);
Grid.displayName = "Grid";

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  colSpan?: 1 | 2 | 3 | 4 | 6 | 12;
  children: React.ReactNode;
}

export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ className, colSpan = 1, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cx("grid-item", `grid-item--span-${colSpan}`, className)}
      {...props}
    >
      {children}
    </div>
  )
);
GridItem.displayName = "GridItem";
