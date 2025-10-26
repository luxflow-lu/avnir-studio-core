import * as React from "react";
import { cx } from "../../utils/cx";

export interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Prose = React.forwardRef<HTMLDivElement, ProseProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cx("prose", className)} {...props}>
      {children}
    </div>
  )
);
Prose.displayName = "Prose";
