import * as React from "react";

import { cx } from "../../utils/cx";

export type ToastVariant = "default" | "success" | "warning" | "destructive";

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  toast: Toast;
  onClose: (id: string) => void;
}

const variants: Record<ToastVariant, string> = {
  default: "bg-surface-white/10",
  success: "bg-success text-success",
  warning: "bg-warning text-warning",
  destructive: "bg-error text-error",
};

const icons: Record<ToastVariant, React.ReactNode> = {
  default: null,
  success: (
    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  warning: (
    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  ),
  destructive: (
    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
};

export const ToastComponent = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, toast, onClose, ...props }, ref) => {
    React.useEffect(() => {
      if (toast.duration !== 0) {
        const timer = setTimeout(() => {
          onClose(toast.id);
        }, toast.duration || 5000);
        return () => clearTimeout(timer);
      }
    }, [toast.id, toast.duration, onClose]);

    return (
      <div
        ref={ref}
        className={cx(
          "relative items flex-start gap-3 p-4-lg",
          "animate-in slide-in-from-right-full duration-300",
          variants[toast.variant || "default"],
          className,
        )} {...props}
      >
        {icons[toast.variant || "default"] && (
          <div className="flex-shrink-0 mt-0.5">{icons[toast.variant || "default"]}</div>
        )}

        <div >
          {toast.title && <div className="font-medium text-foreground mb-1">{toast.title}</div>}
          {toast.description && (
            <div className="text-sm text-muted">{toast.description}</div>
          )}
        </div>

        <button
          onClick={() => onClose(toast.id)}
          className="flex-shrink-0 text-muted hover:text-foreground"
          aria-label="Close"
        >
          <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    );
  },
);
ToastComponent.displayName = "ToastComponent";

// Toast Provider Context
interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextType | null>(null);

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const addToast = React.useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50-col gap-2 max-w-sm">
        {toasts.map((toast) => (
          <ToastComponent key={toast.id} toast={toast} onClose={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
