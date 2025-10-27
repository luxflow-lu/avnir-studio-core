import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const stackVariants = cva("stack", {
  variants: {
    direction: {
      vertical: "",
      horizontal: "stack--horizontal",
    },
    gap: {
      xs: "stack--xs",
      sm: "stack--sm",
      md: "stack--md",
      lg: "stack--lg",
      xl: "stack--xl",
    },
    align: {
      start: "stack--start",
      center: "stack--center",
      end: "stack--end",
      stretch: "stack--stretch",
    },
    justify: {
      start: "stack--justify-start",
      center: "stack--justify-center",
      end: "stack--justify-end",
      between: "stack--justify-between",
    },
  },
  defaultVariants: {
    direction: "vertical",
    gap: "md",
    align: "stretch",
    justify: "start",
  },
});

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction, gap, align, justify, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(stackVariants({ direction, gap, align, justify }), className)}
      {...props}
    />
  ),
);
Stack.displayName = "Stack";

export const HStack = React.forwardRef<HTMLDivElement, Omit<StackProps, "direction">>(
  (props, ref) => <Stack ref={ref} direction="horizontal" {...props} />,
);
HStack.displayName = "HStack";

export const VStack = React.forwardRef<HTMLDivElement, Omit<StackProps, "direction">>(
  (props, ref) => <Stack ref={ref} direction="vertical" {...props} />,
);
VStack.displayName = "VStack";
