import * as React from "react";
import { cx } from "../../utils/cx";

type Direction = "row" | "col";
interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: Direction;
  gap?: keyof typeof gaps;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between";
}

const gaps = { none: "", xs: "gap-2", sm: "gap-3", md: "gap-4", lg: "gap-6", xl: "gap-8" } as const;

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    { className, direction = "col", gap = "md", align = "stretch", justify = "start", ...props },
    ref,
  ) => (
    <div
      ref={ref}
      className={cx(
        direction === "row" ? "flex flex-row" : "flex flex-col",
        gaps[gap],
        align === "start"
          ? "items-start"
          : align === "center"
            ? "items-center"
            : align === "end"
              ? "items-end"
              : "items-stretch",
        justify === "start"
          ? "justify-start"
          : justify === "center"
            ? "justify-center"
            : justify === "end"
              ? "justify-end"
              : "justify-between",
        className,
      )}
      {...props}
    />
  ),
);
Stack.displayName = "Stack";

export const HStack = React.forwardRef<HTMLDivElement, Omit<StackProps, "direction">>(
  (props, ref) => <Stack ref={ref} direction="row" {...props} />,
);
HStack.displayName = "HStack";

export const VStack = React.forwardRef<HTMLDivElement, Omit<StackProps, "direction">>(
  (props, ref) => <Stack ref={ref} direction="col" {...props} />,
);
VStack.displayName = "VStack";
