import * as React from "react";

import { cx } from "../../utils/cx";

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  help?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, label, help, error, required, children, ...props }, ref) => {
    const fieldId = React.useId();
    const helpId = help ? `${fieldId}-help` : undefined;
    const errorId = error ? `${fieldId}-error` : undefined;

    return (
      <div ref={ref} className={cx("space-y-2", className)} {...props}>
        {label && (
          <label htmlFor={fieldId} className="block text-sm font-medium text-foreground">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <div>
          {React.cloneElement(children as React.ReactElement, {
            id: fieldId,
            "aria-describedby": cx(helpId, errorId).trim() || undefined,
            "aria-invalid": error ? "true" : undefined,
          })}
        </div>
        {help && !error && (
          <p id={helpId} className="text-xs text-muted">
            {help}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-xs text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  },
);
Field.displayName = "Field";
