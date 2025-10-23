import * as React from "react";
import { cx } from "../../utils/cx";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, title, description, action, ...props }, ref) => (
    <div
      ref={ref}
      className={cx("flex flex-col items-center justify-center text-center py-12", className)}
      {...props}
    >
      {icon && (
        <div className="mb-4 text-[var(--text-muted)]" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      {description && <p className="text-[var(--text-muted)] mb-6 max-w-sm">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  ),
);
EmptyState.displayName = "EmptyState";
