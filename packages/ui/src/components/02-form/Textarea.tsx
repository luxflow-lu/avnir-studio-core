import * as React from "react";

import { cx } from "../../utils/cx";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
// eslint-disable-next-line react/prop-types
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cx("textarea", className)} {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
