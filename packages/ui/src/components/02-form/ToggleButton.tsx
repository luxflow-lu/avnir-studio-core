import * as React from "react";

import { cx } from "../../utils/cx";

export interface ToggleButtonOption {
  value: string;
  label: React.ReactNode;
}

export interface ToggleButtonProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: ToggleButtonOption[];
  value: string;
  onChange: (value: string) => void;
}

export const ToggleButton = React.forwardRef<HTMLDivElement, ToggleButtonProps>(
  ({ className, options, value, onChange, ...props }, ref) => {
    return (
      <div ref={ref} className={cx("toggle-button", className)} {...props}>
        <div className="toggle-button-group">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={cx(
                "toggle-button-option",
                value === option.value && "toggle-button-option--active"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    );
  }
);

ToggleButton.displayName = "ToggleButton";
