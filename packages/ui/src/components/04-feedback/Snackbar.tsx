import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface SnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  onClose?: () => void;
  duration?: number;
}

export const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(
  ({ className, message, action, onClose, duration = 5000, ...props }, ref) => {
    React.useEffect(() => {
      if (duration && onClose) {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
      }
    }, [duration, onClose]);

    return (
      <div ref={ref} className={cx("snackbar", className)} {...props}>
        <div className="snackbar-message">{message}</div>
        <div className="snackbar-actions">
          {action && (
            <Button variant="ghost" size="sm" onClick={action.onClick}>
              {action.label}
            </Button>
          )}
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              ×
            </Button>
          )}
        </div>
      </div>
    );
  }
);
Snackbar.displayName = "Snackbar";
