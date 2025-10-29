import * as React from "react";

import { cx } from "../../utils/cx";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;
// eslint-disable-next-line react/prop-types
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cx("select", className)} {...props}
    >
      {children}
    </select>
  ),
);
Select.displayName = "Select";
