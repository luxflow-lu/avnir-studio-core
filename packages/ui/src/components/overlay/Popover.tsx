import * as React from "react";

import { cx } from "../../utils/cx";

export interface PopoverProps {
  children: React.ReactElement;
  content: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  className?: string;
}

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      children,
      content,
      open: controlledOpen,
      onOpenChange,
      side = "bottom",
      align = "center",
      className,
    },
    ref,
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const triggerRef = React.useRef<HTMLElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);

    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const setOpen = onOpenChange || setInternalOpen;

    const updatePosition = React.useCallback(() => {
      if (!triggerRef.current || !contentRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();

      let x = 0,
        y = 0;

      // Calculate position based on side
      switch (side) {
        case "top":
          y = triggerRect.top - contentRect.height - 8;
          break;
        case "bottom":
          y = triggerRect.bottom + 8;
          break;
        case "left":
          x = triggerRect.left - contentRect.width - 8;
          break;
        case "right":
          x = triggerRect.right + 8;
          break;
      }

      // Calculate alignment
      if (side === "top" || side === "bottom") {
        switch (align) {
          case "start":
            x = triggerRect.left;
            break;
          case "center":
            x = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
            break;
          case "end":
            x = triggerRect.right - contentRect.width;
            break;
        }
      } else {
        switch (align) {
          case "start":
            y = triggerRect.top;
            break;
          case "center":
            y = triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;
            break;
          case "end":
            y = triggerRect.bottom - contentRect.height;
            break;
        }
      }

      setPosition({ x, y });
    }, [side, align]);

    React.useEffect(() => {
      if (isOpen) {
        updatePosition();
        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", updatePosition);
        return () => {
          window.removeEventListener("resize", updatePosition);
          window.removeEventListener("scroll", updatePosition);
        };
      }
    }, [isOpen, updatePosition]);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          triggerRef.current &&
          contentRef.current &&
          !triggerRef.current.contains(event.target as Node) &&
          !contentRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [isOpen, setOpen]);

    return (
      <div ref={ref} className="relative inline-block">
        {React.cloneElement(children, {
          ref: triggerRef,
          onClick: () => setOpen(!isOpen),
        })}

        {isOpen && (
          <div
            ref={contentRef}
            className={cx(
              "fixed z-50 bg-[var(--surface)] border border-white/10 rounded-[var(--radius-lg)] shadow-lg p-4",
              "animate-in fade-in-0 zoom-in-95 duration-200",
              className,
            )}
            style={{ left: position.x, top: position.y }}
          >
            {content}
          </div>
        )}
      </div>
    );
  },
);
Popover.displayName = "Popover";
