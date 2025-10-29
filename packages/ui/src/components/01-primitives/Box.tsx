import * as React from "react";

import { cx } from "../../utils/cx";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ className, as: Component = "div", children, ...props }, ref) => {
    const Element = Component as React.ElementType;
    
    return (
      <Element
        ref={ref}
        className={cx("box", className)}
        {...props}
      >
        {children}
      </Element>
    );
  }
);
Box.displayName = "Box";
