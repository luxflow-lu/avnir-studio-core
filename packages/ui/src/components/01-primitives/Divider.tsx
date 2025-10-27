import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const dividerVariants = cva("divider", {
  variants: {
    orientation: {
      horizontal: "",
      vertical: "divider--vertical",
    },
    size: {
      sm: "divider--sm",
      md: "divider--md",
      lg: "divider--lg",
      xl: "divider--xl",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    size: "md",
  },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLHRElement>,
    VariantProps<typeof dividerVariants> {}

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation, size, ...props }, ref) => (
    <hr ref={ref} className={cx(dividerVariants({ orientation, size }), className)} {...props} />
  ),
);
Divider.displayName = "Divider";
