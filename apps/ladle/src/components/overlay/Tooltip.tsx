import * as React from "react";

import { cx } from "../../utils/cx";

export interface TooltipProps {
  content: string;
  children: React.ReactElement;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, children, side = "top", className }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const triggerRef = React.useRef<HTMLElement>(null);
    const tooltipRef = React.useRef<HTMLDivElement>(null);

    const showTooltip = () => setIsVisible(true);
    const hideTooltip = () => setIsVisible(false);

    React.useEffect(() => {
      if (isVisible && triggerRef.current && tooltipRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();

        let x = 0,
          y = 0;

        switch (side) {
          case "top":
            x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
            y = triggerRect.top - tooltipRect.height - 8;
            break;
          case "bottom":
            x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
            y = triggerRect.bottom + 8;
            break;
          case "left":
            x = triggerRect.left - tooltipRect.width - 8;
            y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
            break;
          case "right":
            x = triggerRect.right + 8;
            y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
            break;
        }

        setPosition({ x, y });
      }
    }, [isVisible, side]);

    return (
      <div ref={ref} className="relative inline-block">
        {React.cloneElement(children, {
          ref: triggerRef,
          onMouseEnter: showTooltip,
          onMouseLeave: hideTooltip,
          onFocus: showTooltip,
          onBlur: hideTooltip,
        })}
        {isVisible && (
          <div
            ref={tooltipRef}
            className={cx(
              "fixed z-50 px-2 py-1 text-xs text-white bg-black rounded shadow-lg pointer-events-none",
              className,
            )}
            style={{ left: position.x, top: position.y }}
            role="tooltip"
          >
            {content}
          </div>
        )}
      </div>
    );
  },
);
Tooltip.displayName = "Tooltip";
