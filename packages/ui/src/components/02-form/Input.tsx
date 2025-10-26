import * as React from "react";

import { cx } from "../../utils/cx";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cx("input", className)} {...props}
    />
  ),
);
Input.displayName = "Input";
