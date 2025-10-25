import * as React from "react";

import { cx } from "../../utils/cx";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, id, ...props }, ref) => {
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
    return (
      <div className="flex-row gap-2">
        <input
          ref={ref}
          type="radio"
          id={radioId}
          className={cx(
            "h-4 w-4 rounded-full border border-white/20 bg-[color:var(--bg)/0.6]",
            "checked:bg-brand checked:border-brand",
            "focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)/0.4]",
            className,
          )} {...props}
        />
        {label && (
          <label htmlFor={radioId} className="text-sm cursor-pointer">
            {label}
          </label>
        )}
      </div>
    );
  },
);
Radio.displayName = "Radio";
