import * as React from "react";

import { cx } from "../../utils/cx";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
// eslint-disable-next-line react/prop-types
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cx("input", className)} {...props}
    />
  ),
);
Input.displayName = "Input";
