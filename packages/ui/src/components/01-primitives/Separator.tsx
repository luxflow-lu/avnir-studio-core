import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const separatorVariants = cva("separator", {
  variants: {
    orientation: {
      horizontal: "separator--horizontal",
      vertical: "separator--vertical",
    },
    variant: {
      solid: "",
      dashed: "separator--dashed",
      dotted: "separator--dotted",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    variant: "solid",
  },
});

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> {
  decorative?: boolean;
}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation, variant, decorative = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role={decorative ? "none" : "separator"}
        aria-orientation={decorative ? undefined : orientation || undefined}
        className={cx(separatorVariants({ orientation, variant }), className)}
        {...props}
      />
    );
  },
);
Separator.displayName = "Separator";
