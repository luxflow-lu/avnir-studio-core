import * as React from "react";

import { cx } from "../../utils/cx";

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  showValue?: boolean;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, value, onChange, min = 0, max = 100, step = 1, showValue = false, disabled, ...props }, ref) => {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
      <div 
        className={cx("slider", disabled && "slider--disabled", className)}
        style={{ "--slider-percentage": `${percentage}%` } as React.CSSProperties}
      >
        {showValue && (
          <div className="slider-value">
            <span>{value}</span>
          </div>
        )}
        <div className="slider-track">
          <div className="slider-range" />
          <input
            ref={ref}
            type="range"
            className="slider-input"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            {...props}
          />
        </div>
      </div>
    );
  }
);
Slider.displayName = "Slider";
