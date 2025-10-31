/**
 * EmptyState Component
 * Display when no content is available
 */

import * as React from "react";
import { cx } from "../../utils/cx";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, title, description, action, ...props }, ref) => {
    return (
      <div ref={ref} className={cx("empty-state", className)} {...props}>
        {icon && <div className="empty-state-icon">{icon}</div>}
        <h3 className="empty-state-title">{title}</h3>
        {description && <p className="empty-state-description">{description}</p>}
        {action && <div className="empty-state-action">{action}</div>}
      </div>
    );
  }
);

EmptyState.displayName = "EmptyState";
