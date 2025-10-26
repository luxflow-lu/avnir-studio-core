import * as React from "react";
import { cx } from "../../utils/cx";

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: "1/1" | "4/3" | "16/9" | "21/9";
  children: React.ReactNode;
}

export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ className, ratio = "16/9", children, ...props }, ref) => (
    <div
      ref={ref}
      className={cx("aspect-ratio", `aspect-ratio--${ratio.replace("/", "-")}`, className)}
      {...props}
    >
      <div className="aspect-ratio-content">{children}</div>
    </div>
  )
);
AspectRatio.displayName = "AspectRatio";
