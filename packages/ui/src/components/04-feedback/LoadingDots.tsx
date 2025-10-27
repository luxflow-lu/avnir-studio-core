import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const loadingDotsVariants = cva("loading-dots", {
  variants: {
    variant: {
      default: "",
      primary: "loading-dots--primary",
      muted: "loading-dots--muted",
    },
    size: {
      sm: "loading-dots--sm",
      md: "loading-dots--md",
      lg: "loading-dots--lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface LoadingDotsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingDotsVariants> {}

export const LoadingDots = React.forwardRef<HTMLDivElement, LoadingDotsProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(loadingDotsVariants({ variant, size }), className)}
        role="status"
        aria-label="Loading"
        {...props}
      >
        <span className="loading-dots-dot" />
        <span className="loading-dots-dot" />
        <span className="loading-dots-dot" />
      </div>
    );
  }
);
LoadingDots.displayName = "LoadingDots";
