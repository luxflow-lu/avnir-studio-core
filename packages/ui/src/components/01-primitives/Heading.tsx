import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const headingVariants = cva("heading", {
  variants: {
    level: {
      h1: "heading--h1",
      h2: "heading--h2",
      h3: "heading--h3",
      h4: "heading--h4",
      h5: "heading--h5",
      h6: "heading--h6",
      display: "heading--display",
    },
    variant: {
      default: "",
      gradient: "heading--gradient",
      muted: "heading--muted",
    },
    align: {
      left: "heading--left",
      center: "heading--center",
      right: "heading--right",
    },
    spacing: {
      tight: "heading--tight",
      normal: "heading--normal",
      relaxed: "heading--relaxed",
    },
  },
  defaultVariants: {
    level: "h2",
    variant: "default",
    align: "left",
    spacing: "normal",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, variant, align, spacing, as, children, ...props }, ref) => {
    const Component = as || level === "display" ? "h1" : level || "h2";

    return (
      <Component
        ref={ref as React.Ref<HTMLHeadingElement>}
        className={cx(headingVariants({ level, variant, align, spacing }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
Heading.displayName = "Heading";
