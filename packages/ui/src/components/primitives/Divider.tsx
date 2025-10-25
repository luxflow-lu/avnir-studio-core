import * as React from "react";

import { cx } from "../../utils/cx";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {}
export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, ...props }, ref) => (
    <hr ref={ref} className={cx("border-t border-white/10", className)} {...props} />
  ),
);
Divider.displayName = "Divider";
