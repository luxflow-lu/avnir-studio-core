import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const centerVariants = cva("center", {
  variants: {
    inline: {
      true: "center--inline",
      false: "",
    },
    vertical: {
      true: "center--vertical",
      false: "",
    },
  },
  defaultVariants: {
    inline: false,
    vertical: false,
  },
});

export interface CenterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof centerVariants> {}

export const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  ({ className, inline, vertical, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(centerVariants({ inline, vertical }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Center.displayName = "Center";
