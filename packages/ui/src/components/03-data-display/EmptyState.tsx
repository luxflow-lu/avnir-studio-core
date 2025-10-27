import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const emptyStateVariants = cva("empty-state", {
  variants: {
    variant: {
      default: "",
      compact: "empty-state--compact",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface EmptyStateProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyStateVariants> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, variant, icon, title, description, action, ...props }, ref) => (
    <div ref={ref} className={cx(emptyStateVariants({ variant }), className)} {...props}>
      {icon && (
        <div className="empty-state-icon" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="empty-state-title">{title}</h3>
      {description && <p className="empty-state-description">{description}</p>}
      {action && <div className="empty-state-action">{action}</div>}
    </div>
  ),
);
EmptyState.displayName = "EmptyState";
