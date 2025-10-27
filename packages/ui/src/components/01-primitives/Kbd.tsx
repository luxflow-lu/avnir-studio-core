import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const kbdVariants = cva("kbd", {
  variants: {
    size: {
      sm: "kbd--sm",
      md: "kbd--md",
      lg: "kbd--lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {}

export const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <kbd ref={ref} className={cx(kbdVariants({ size }), className)} {...props}>
        {children}
      </kbd>
    );
  },
);
Kbd.displayName = "Kbd";
