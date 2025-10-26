import * as React from "react";

import { cx } from "../../utils/cx";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const checkboxId = React.useId();
    const finalId = id || checkboxId;
    return (
      <div className="flex-row gap-2">
        <input
          ref={ref}
          type="checkbox"
          id={finalId}
          className={cx(
            "h-4 w-4 rounded border border-white/20 bg-[color:var(--bg)/0.6]",
            "checked:bg-brand checked:border-brand",
            "focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)/0.4]",
            className,
          )} {...props}
        />
        {label && (
          <label htmlFor={finalId} className="text-sm cursor-pointer">
            {label}
          </label>
        )}
      </div>
    );
  },
);
Checkbox.displayName = "Checkbox";
