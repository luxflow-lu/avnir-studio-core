import * as React from "react";

import { cx } from "../../utils/cx";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}
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
