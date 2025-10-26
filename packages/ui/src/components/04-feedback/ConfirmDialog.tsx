import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface ConfirmDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "danger" | "warning" | "info";
}

export const ConfirmDialog = React.forwardRef<HTMLDivElement, ConfirmDialogProps>(
  ({
    className,
    open,
    onClose,
    onConfirm,
    title = "Confirm",
    message,
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    variant = "info",
    ...props
  }, ref) => {
    if (!open) return null;

    const handleConfirm = () => {
      onConfirm();
      onClose();
    };

    return (
      <div className="dialog-overlay" onClick={onClose}>
        <div
          ref={ref}
          className={cx("confirm-dialog", `confirm-dialog--${variant}`, className)}
          onClick={(e) => e.stopPropagation()}
          role="alertdialog"
          aria-modal="true"
          {...props}
        >
          <div className="confirm-dialog-header">
            <h2 className="confirm-dialog-title">{title}</h2>
          </div>
          <div className="confirm-dialog-content">
            <p className="confirm-dialog-message">{message}</p>
          </div>
          <div className="confirm-dialog-actions">
            <Button variant="outline" onClick={onClose}>
              {cancelLabel}
            </Button>
            <Button variant="solid" onClick={handleConfirm}>
              {confirmLabel}
            </Button>
          </div>
        </div>
      </div>
    );
  }
);
ConfirmDialog.displayName = "ConfirmDialog";
