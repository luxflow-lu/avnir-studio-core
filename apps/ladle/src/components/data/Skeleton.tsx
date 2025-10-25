import * as React from "react";

import { cx } from "../../utils/cx";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  rounded?: boolean;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, width, height, rounded = false, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(
        "animate-pulse bg-white/10",
        rounded ? "rounded-full" : "rounded-[var(--radius-sm)]",
        className,
      )}
      style={{
        width: width || "100%",
        height: height || "1rem",
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  ),
);
Skeleton.displayName = "Skeleton";
