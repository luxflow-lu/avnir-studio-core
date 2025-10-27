import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const notificationVariants = cva("notification", {
  variants: {
    variant: {
      default: "",
      success: "notification--success",
      warning: "notification--warning",
      error: "notification--error",
      info: "notification--info",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationVariants> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  onClose?: () => void;
}

export const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  (
    { className, variant, title, description, icon, actions, onClose, children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cx(notificationVariants({ variant }), className)}
        role="alert"
        {...props}
      >
        {icon && <div className="notification-icon">{icon}</div>}
        <div className="notification-content">
          {title && <div className="notification-title">{title}</div>}
          {description && <div className="notification-description">{description}</div>}
          {children}
          {actions && <div className="notification-actions">{actions}</div>}
        </div>
        {onClose && (
          <button
            type="button"
            className="notification-close"
            onClick={onClose}
            aria-label="Close notification"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 4L4 12M4 4l8 8" />
            </svg>
          </button>
        )}
      </div>
    );
  }
);
Notification.displayName = "Notification";
