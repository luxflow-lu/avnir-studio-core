import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "./Button";

export interface ColorPickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  value?: string;
  onChange: (color: string) => void;
  presets?: string[];
}

export const ColorPicker = React.forwardRef<HTMLInputElement, ColorPickerProps>(
  ({ className, value = "#000000", onChange, presets, disabled, ...props }, ref) => {
    return (
      <div className={cx("colorpicker", disabled && "colorpicker--disabled", className)}>
        <div className="colorpicker-input-wrapper">
          <input
            ref={ref}
            type="color"
            className="colorpicker-input"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            {...props}
          />
          <div className="colorpicker-preview" style={{ "--color-value": value } as React.CSSProperties} />
          <input
            type="text"
            className="colorpicker-text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
          />
        </div>
        {presets && presets.length > 0 && (
          <div className="colorpicker-presets">
            {presets.map((preset) => (
              <Button
                key={preset}
                type="button"
                variant="ghost"
                className="colorpicker-preset"
                style={{ "--preset-color": preset } as React.CSSProperties}
                onClick={() => onChange(preset)}
                disabled={disabled}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);
ColorPicker.displayName = "ColorPicker";
