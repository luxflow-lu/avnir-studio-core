import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const blockquoteVariants = cva("blockquote", {
  variants: {
    variant: {
      default: "",
      primary: "blockquote--primary",
      success: "blockquote--success",
      warning: "blockquote--warning",
      error: "blockquote--error",
    },
    size: {
      sm: "blockquote--sm",
      md: "blockquote--md",
      lg: "blockquote--lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface BlockquoteProps
  extends React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
    VariantProps<typeof blockquoteVariants> {}

export const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <blockquote
        ref={ref}
        className={cx(blockquoteVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </blockquote>
    );
  },
);
Blockquote.displayName = "Blockquote";
