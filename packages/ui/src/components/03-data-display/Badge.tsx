import * as React from "react";

import { cx } from "../../utils/cx";

export type BadgeVariant = "default" | "primary" | "secondary" | "success" | "warning" | "destructive";
export type BadgeSize = "sm" | "md" | "lg";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const variants: Record<BadgeVariant, string> = {
  default: "badge",
  primary: "badge badge--primary",
  secondary: "badge badge--secondary",
  success: "badge badge--success",
  warning: "badge badge--warning",
  destructive: "badge badge--destructive",
};

const sizes: Record<BadgeSize, string> = {
  sm: "badge--sm",
  md: "",
  lg: "badge--lg",
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => (
    <span ref={ref} className={cx(variants[variant], sizes[size], className)} {...props} />
  ),
);
Badge.displayName = "Badge";
