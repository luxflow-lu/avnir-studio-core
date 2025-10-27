import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const codeVariants = cva("code", {
  variants: {
    variant: {
      default: "",
      primary: "code--primary",
      success: "code--success",
      warning: "code--warning",
      error: "code--error",
    },
    size: {
      xs: "code--xs",
      sm: "code--sm",
      md: "code--md",
      lg: "code--lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface CodeProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof codeVariants> {}

export const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={cx(codeVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </code>
    );
  },
);
Code.displayName = "Code";
