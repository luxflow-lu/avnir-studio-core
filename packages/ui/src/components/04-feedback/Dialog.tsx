import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ className, open, onClose, title, children, ...props }, ref) => {
    if (!open) return null;

    return (
      <div className="dialog-overlay" onClick={onClose}>
        <div
          ref={ref}
          className={cx("dialog", className)}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          {...props}
        >
          {title && (
            <div className="dialog-header">
              <h2 className="dialog-title">{title}</h2>
              <Button variant="ghost" size="sm" onClick={onClose}>
                ×
              </Button>
            </div>
          )}
          <div className="dialog-content">{children}</div>
        </div>
      </div>
    );
  }
);
Dialog.displayName = "Dialog";
