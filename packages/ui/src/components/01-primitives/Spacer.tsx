import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const spacerVariants = cva("spacer", {
  variants: {
    size: {
      xs: "spacer--xs",
      sm: "spacer--sm",
      md: "spacer--md",
      lg: "spacer--lg",
      xl: "spacer--xl",
      "2xl": "spacer--2xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface SpacerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spacerVariants> {}

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cx(spacerVariants({ size }), className)} aria-hidden {...props} />
  ),
);
Spacer.displayName = "Spacer";
