import * as React from "react";
import { cx } from "../../utils/cx";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ open, onClose, title, children, className }, ref) => {
    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      if (open) {
        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";
      }
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "";
      };
    }, [open, onClose]);

    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
        <div
          ref={ref}
          className={cx(
            "relative bg-[var(--surface)] rounded-[var(--radius-lg)] shadow-lg max-w-md w-full mx-4 p-6",
            "focus:outline-none",
            className,
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
        >
          {title && (
            <h2 id="modal-title" className="text-lg font-semibold text-white mb-4">
              {title}
            </h2>
          )}
          <div className="text-white">{children}</div>
        </div>
      </div>
    );
  },
);
Modal.displayName = "Modal";
