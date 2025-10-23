import * as React from "react";
import { cx } from "../../utils/cx";

export type BadgeVariant = "default" | "success" | "warning" | "destructive";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  default: "badge", // Use our CSS class
  success: "badge badge-studio", // Use our CSS class
  warning: "badge badge-draft", // Use our CSS class
  destructive: "badge badge-archived", // Use our CSS class
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <span ref={ref} className={cx(variants[variant], className)} {...props} />
  ),
);
Badge.displayName = "Badge";
