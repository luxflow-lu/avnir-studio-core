import * as React from "react";

import { cx } from "../../utils/cx";

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, id, ...props }, ref) => {
    const switchId = React.useId();
    const finalId = id || switchId;
    return (
      <div className="flex-row gap-3">
        <label htmlFor={finalId} className="relative inline-flex">
          <input
            ref={ref}
            type="checkbox"
            id={finalId}
            className={cx("sr-only peer", className)} {...props}
          />
          <div className="w-11 h-6 bg-white/20-full peer peer-checked:bg-brand peer-focus:ring-2 peer-focus:ring-[color:var(--brand)/0.4] peer-focus:ring-offset-2 peer-focus:ring-offset-[var(--bg)]">
            <div className="absolute top-0.5 left-0.5 bg-white-full h-5 w-5 transition-transform peer-checked:translate-x-5"></div>
          </div>
        </label>
        {label && (
          <label htmlFor={finalId} className="text-sm">
            {label}
          </label>
        )}
      </div>
    );
  },
);
Switch.displayName = "Switch";
