import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const spinnerVariants = cva("spinner", {
  variants: {
    size: {
      xs: "spinner--xs",
      sm: "spinner--sm",
      md: "spinner--md",
      lg: "spinner--lg",
      xl: "spinner--xl",
    },
    variant: {
      primary: "spinner--primary",
      secondary: "spinner--secondary",
      success: "spinner--success",
      warning: "spinner--warning",
      destructive: "spinner--destructive",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(spinnerVariants({ size, variant }), className)}
      role="status"
      aria-label="Loading"
      {...props}
    />
  ),
);
Spinner.displayName = "Spinner";
