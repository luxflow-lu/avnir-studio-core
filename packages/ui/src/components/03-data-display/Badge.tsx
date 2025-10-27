import * as React from "react";

import { cx } from "../../utils/cx";

export type BadgeVariant = "default" | "primary" | "secondary" | "success" | "warning" | "destructive";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  default: "badge badge--default",
  primary: "badge badge--primary",
  secondary: "badge badge--secondary",
  success: "badge badge--success",
  warning: "badge badge--warning",
  destructive: "badge badge--destructive",
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <span ref={ref} className={cx(variants[variant], className)} {...props} />
  ),
);
Badge.displayName = "Badge";
