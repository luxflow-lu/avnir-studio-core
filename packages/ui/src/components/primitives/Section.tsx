import * as React from "react";

import { cx } from "../../utils/cx";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {}
export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, ...props }, ref) => (
    <section ref={ref} className={cx("py-12 md:py-16", className)} {...props} />
  ),
);
Section.displayName = "Section";
