import * as React from "react";

import { cx } from "../../utils/cx";

export interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  value?: Date | undefined;
  onChange: (date: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
  error?: string;
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, value, onChange, minDate, maxDate, error, disabled, ...props }, ref) => {
    const formatDate = (date: Date | undefined) => {
      if (!date) return "";
      return date.toISOString().split("T")[0];
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const dateValue = e.target.value;
      if (!dateValue) {
        onChange(null);
        return;
      }
      onChange(new Date(dateValue));
    };

    return (
      <div className={cx("date-picker", error && "date-picker--error", disabled && "date-picker--disabled", className)}>
        <input
          ref={ref}
          type="date"
          className="date-picker-input"
          value={formatDate(value)}
          onChange={handleChange}
          min={minDate ? formatDate(minDate) : undefined}
          max={maxDate ? formatDate(maxDate) : undefined}
          disabled={disabled}
          {...props}
        />
        {error && <div className="date-picker-error">{error}</div>}
      </div>
    );
  }
);
DatePicker.displayName = "DatePicker";
