import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const textVariants = cva("text", {
  variants: {
    size: {
      xs: "text--xs",
      sm: "text--sm",
      md: "text--md",
      lg: "text--lg",
      xl: "text--xl",
    },
    variant: {
      default: "",
      muted: "text--muted",
      subtle: "text--subtle",
      primary: "text--primary",
      success: "text--success",
      warning: "text--warning",
      error: "text--error",
    },
    weight: {
      light: "text--light",
      normal: "text--normal",
      medium: "text--medium",
      semibold: "text--semibold",
      bold: "text--bold",
    },
    align: {
      left: "text--left",
      center: "text--center",
      right: "text--right",
      justify: "text--justify",
    },
    transform: {
      none: "",
      uppercase: "text--uppercase",
      lowercase: "text--lowercase",
      capitalize: "text--capitalize",
    },
    truncate: {
      none: "",
      single: "text--truncate",
      clamp2: "text--clamp-2",
      clamp3: "text--clamp-3",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
    weight: "normal",
    align: "left",
    transform: "none",
    truncate: "none",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div" | "label";
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, size, variant, weight, align, transform, truncate, as, children, ...props }, ref) => {
    const Component = as || "p";

    return (
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        className={cx(textVariants({ size, variant, weight, align, transform, truncate }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
Text.displayName = "Text";
