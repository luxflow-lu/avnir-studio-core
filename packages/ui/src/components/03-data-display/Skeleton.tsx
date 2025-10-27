import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const skeletonVariants = cva("skeleton", {
  variants: {
    variant: {
      default: "",
      text: "skeleton--text",
      title: "skeleton--title",
      avatar: "skeleton--avatar",
      button: "skeleton--button",
      card: "skeleton--card",
    },
    shape: {
      rectangle: "skeleton--rectangle",
      circle: "skeleton--circle",
    },
    size: {
      xs: "skeleton--xs",
      sm: "skeleton--sm",
      md: "skeleton--md",
      lg: "skeleton--lg",
      xl: "skeleton--xl",
    },
  },
  defaultVariants: {
    variant: "default",
    shape: "rectangle",
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  width?: string;
  height?: string;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, shape, size, width, height, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(skeletonVariants({ variant, shape, size }), className)}
      style={{
        ...(width && { width }),
        ...(height && { height }),
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  ),
);
Skeleton.displayName = "Skeleton";
