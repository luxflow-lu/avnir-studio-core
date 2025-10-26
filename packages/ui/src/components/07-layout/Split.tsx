import * as React from "react";

import { cx } from "../../utils/cx";

export interface SplitProps extends React.HTMLAttributes<HTMLDivElement> {
  left: React.ReactNode;
  right: React.ReactNode;
  ratio?: "1:1" | "1:2" | "2:1" | "1:3" | "3:1";
  direction?: "horizontal" | "vertical";
}

export const Split = React.forwardRef<HTMLDivElement, SplitProps>(
  ({ className, left, right, ratio = "1:1", direction = "horizontal", ...props }, ref) => (
    <div
      ref={ref}
      className={cx(
        "split",
        `split--${direction}`,
        `split--ratio-${ratio.replace(":", "-")}`,
        className
      )}
      {...props}
    >
      <div className="split-left">{left}</div>
      <div className="split-right">{right}</div>
    </div>
  )
);
Split.displayName = "Split";
