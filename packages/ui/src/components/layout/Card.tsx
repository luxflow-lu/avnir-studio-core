import * as React from "react";
import { cx } from "../../utils/cx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "wrapper";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      className={cx(variant === "wrapper" ? "wrapper" : "card", className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";
