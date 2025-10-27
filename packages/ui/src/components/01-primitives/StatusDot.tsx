import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const statusDotVariants = cva("status-dot", {
  variants: {
    status: {
      online: "status-dot--online",
      offline: "status-dot--offline",
      away: "status-dot--away",
      busy: "status-dot--busy",
    },
    size: {
      sm: "status-dot--sm",
      md: "status-dot--md",
      lg: "status-dot--lg",
    },
  },
  defaultVariants: {
    status: "offline",
    size: "md",
  },
});

export interface StatusDotProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusDotVariants> {
  pulse?: boolean;
}

export const StatusDot = React.forwardRef<HTMLSpanElement, StatusDotProps>(
  ({ className, status, size, pulse = false, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cx(
          statusDotVariants({ status, size }),
          pulse && "status-dot--pulse",
          className
        )}
        role="status"
        aria-label={status || undefined}
        {...props}
      />
    );
  },
);
StatusDot.displayName = "StatusDot";
