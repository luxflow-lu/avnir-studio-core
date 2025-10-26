import * as React from "react";

import { cx } from "../../utils/cx";

export interface TimePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  value?: string;
  onChange: (time: string) => void;
  error?: string;
}

export const TimePicker = React.forwardRef<HTMLInputElement, TimePickerProps>(
  ({ className, value, onChange, error, disabled, ...props }, ref) => {
    return (
      <div className={cx("timepicker", error && "timepicker--error", disabled && "timepicker--disabled", className)}>
        <input
          ref={ref}
          type="time"
          className="timepicker-input"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          {...props}
        />
        {error && <div className="timepicker-error">{error}</div>}
      </div>
    );
  }
);
TimePicker.displayName = "TimePicker";
