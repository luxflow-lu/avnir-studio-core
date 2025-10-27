import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const linkVariants = cva("link", {
  variants: {
    variant: {
      default: "",
      underline: "link--underline",
      muted: "link--muted",
      subtle: "link--subtle",
    },
    size: {
      xs: "link--xs",
      sm: "link--sm",
      md: "link--md",
      lg: "link--lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  external?: boolean;
  disabled?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, external, disabled, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cx(
          linkVariants({ variant, size }),
          external && "link--external",
          disabled && "link--disabled",
          className
        )}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </a>
    );
  },
);
Link.displayName = "Link";
