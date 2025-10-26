import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  onClose?: () => void;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "info", title, children, onClose, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx("alert", `alert--${variant}`, className)}
        role="alert"
        {...props}
      >
        <div className="alert-content">
          {title && <div className="alert-title">{title}</div>}
          <div className="alert-message">{children}</div>
        </div>
        {onClose && (
          <div className="alert-close">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              aria-label="Close alert"
            >
              ×
            </Button>
          </div>
        )}
      </div>
    );
  }
);
Alert.displayName = "Alert";
