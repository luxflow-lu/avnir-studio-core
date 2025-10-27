import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const iconVariants = cva("icon", {
  variants: {
    size: {
      xs: "icon--xs",
      sm: "icon--sm",
      md: "icon--md",
      lg: "icon--lg",
      xl: "icon--xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface IconProps
  extends React.SVGAttributes<SVGElement>,
    VariantProps<typeof iconVariants> {
  children: React.ReactNode;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={cx(iconVariants({ size }), className)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {children}
      </svg>
    );
  },
);
Icon.displayName = "Icon";
