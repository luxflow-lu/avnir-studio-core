import * as React from "react";
import { cx } from "../../utils/cx";

export type DrawerSide = "left" | "right" | "top" | "bottom";

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  side?: DrawerSide;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const sideClasses: Record<DrawerSide, { container: string; panel: string }> = {
  left: { 
    container: "justify-start", 
    panel: "h-full w-80 transform transition-transform data-[closed]:-translate-x-full" 
  },
  right: { 
    container: "justify-end", 
    panel: "h-full w-80 transform transition-transform data-[closed]:translate-x-full" 
  },
  top: { 
    container: "items-start", 
    panel: "w-full h-80 transform transition-transform data-[closed]:-translate-y-full" 
  },
  bottom: { 
    container: "items-end", 
    panel: "w-full h-80 transform transition-transform data-[closed]:translate-y-full" 
  }
};

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ open, onClose, side = "right", title, children, className }, ref) => {
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
      <div className="fixed inset-0 z-50 flex">
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
        <div className={cx("relative flex", sideClasses[side].container)}>
          <div
            ref={ref}
            className={cx(
              "bg-[var(--surface)] shadow-lg flex flex-col",
              sideClasses[side].panel,
              className
            )}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "drawer-title" : undefined}
          >
            {title && (
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 id="drawer-title" className="text-lg font-semibold text-white">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="text-[var(--text-muted)] hover:text-white"
                  aria-label="Fermer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            <div className="flex-1 p-6 text-white overflow-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
Drawer.displayName = "Drawer";
