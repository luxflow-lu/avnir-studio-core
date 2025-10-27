import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const containerVariants = cva("container", {
  variants: {
    size: {
      sm: "container--sm",
      md: "container--md",
      lg: "container--lg",
      xl: "container--xl",
      "2xl": "container--2xl",
      full: "container--full",
    },
  },
  defaultVariants: {
    size: "xl",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cx(containerVariants({ size }), className)} {...props} />
  ),
);
Container.displayName = "Container";
