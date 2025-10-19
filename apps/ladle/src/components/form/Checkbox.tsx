import * as React from "react";
import { cx } from "../../utils/cx";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    return (
      <div className="flex items-center gap-2">
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          className={cx(
            "h-4 w-4 rounded border border-white/20 bg-[color:var(--bg)/0.6]",
            "checked:bg-[var(--brand)] checked:border-[var(--brand)]",
            "focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)/0.4]",
            className
          )}
          {...props}
        />
        {label && (
          <label htmlFor={checkboxId} className="text-sm cursor-pointer">
            {label}
          </label>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
