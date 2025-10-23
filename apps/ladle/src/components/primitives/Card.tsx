import * as React from "react";
import { cx } from "../../utils/cx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cx("bg-[var(--surface)] rounded-[var(--radius-lg)] shadow-md p-6", className)}
    {...props}
  />
));
Card.displayName = "Card";
