import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const iconButtonVariants = cva("icon-btn", {
  variants: {
    variant: {
      solid: "icon-btn--solid",
      outline: "icon-btn--outline",
      ghost: "icon-btn--ghost",
    },
    size: {
      sm: "icon-btn--sm",
      md: "icon-btn--md",
      lg: "icon-btn--lg",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  loading?: boolean;
  icon: React.ReactNode;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, loading = false, icon, ...props }, ref) => (
    <button
      ref={ref}
      className={cx(iconButtonVariants({ variant, size }), className)}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <span className="icon-btn-spinner" aria-hidden />
      ) : (
        <span aria-hidden>{icon}</span>
      )}
    </button>
  ),
);
IconButton.displayName = "IconButton";
