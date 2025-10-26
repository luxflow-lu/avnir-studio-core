import * as React from "react";
import { cx } from "../../utils/cx";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around";
  gap?: "sm" | "md" | "lg" | "xl";
  wrap?: boolean;
  children: React.ReactNode;
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({
    className,
    direction = "row",
    align = "start",
    justify = "start",
    gap = "md",
    wrap = false,
    children,
    ...props
  }, ref) => (
    <div
      ref={ref}
      className={cx(
        "flex",
        `flex--${direction}`,
        `flex--align-${align}`,
        `flex--justify-${justify}`,
        `flex--gap-${gap}`,
        wrap && "flex--wrap",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
Flex.displayName = "Flex";
