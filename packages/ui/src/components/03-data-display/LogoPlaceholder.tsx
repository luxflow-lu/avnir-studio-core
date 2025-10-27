import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const logoPlaceholderVariants = cva("logo-placeholder", {
  variants: {
    size: {
      sm: "logo-placeholder--sm",
      md: "logo-placeholder--md",
      lg: "logo-placeholder--lg",
      xl: "logo-placeholder--xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface LogoPlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof logoPlaceholderVariants> {
  children: React.ReactNode;
}

export const LogoPlaceholder = React.forwardRef<HTMLDivElement, LogoPlaceholderProps>(
  ({ className, size, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(logoPlaceholderVariants({ size }), className)}
      {...props}
    >
      {children}
    </div>
  )
);
LogoPlaceholder.displayName = "LogoPlaceholder";
