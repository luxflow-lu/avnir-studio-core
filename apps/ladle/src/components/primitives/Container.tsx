import * as React from "react";
import { cx } from "../../utils/cx";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cx("max-w-7xl mx-auto px-4 md:px-6", className)} {...props} />
  ),
);
Container.displayName = "Container";
