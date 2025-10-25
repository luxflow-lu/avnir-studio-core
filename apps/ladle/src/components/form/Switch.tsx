import * as React from "react";

import { cx } from "../../utils/cx";

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, id, ...props }, ref) => {
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;
    return (
      <div className="flex items-center gap-3">
        <label htmlFor={switchId} className="relative inline-flex cursor-pointer">
          <input
            ref={ref}
            type="checkbox"
            id={switchId}
            className={cx("sr-only peer", className)}
            {...props}
          />
          <div className="w-11 h-6 bg-white/20 rounded-full peer peer-checked:bg-[var(--brand)] peer-focus:ring-2 peer-focus:ring-[color:var(--brand)/0.4] peer-focus:ring-offset-2 peer-focus:ring-offset-[var(--bg)] transition-colors">
            <div className="absolute top-0.5 left-0.5 bg-white rounded-full h-5 w-5 transition-transform peer-checked:translate-x-5"></div>
          </div>
        </label>
        {label && (
          <label htmlFor={switchId} className="text-sm cursor-pointer">
            {label}
          </label>
        )}
      </div>
    );
  },
);
Switch.displayName = "Switch";
