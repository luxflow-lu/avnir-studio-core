import * as React from "react";
import { cx } from "../../utils/cx";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cx(
        "h-10 w-full rounded-[var(--radius-sm)] bg-[color:var(--bg)/0.6] border border-white/10 px-3 placeholder:opacity-60",
        "focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)/0.4]",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
