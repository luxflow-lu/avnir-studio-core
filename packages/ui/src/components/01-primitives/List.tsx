import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const listVariants = cva("list", {
  variants: {
    variant: {
      default: "",
      checklist: "list--checklist",
      numbered: "list--numbered",
    },
    size: {
      sm: "list--sm",
      md: "list--md",
      lg: "list--lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof listVariants> {
  ordered?: boolean;
}

export const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, variant, size, ordered = false, children, ...props }, ref) => {
    const Component = ordered ? "ol" : "ul";

    return (
      <Component
        ref={ref as React.Ref<HTMLUListElement | HTMLOListElement>}
        className={cx(listVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
List.displayName = "List";
