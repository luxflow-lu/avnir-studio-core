import * as React from "react";

import { cx } from "../../utils/cx";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cx("textarea", className)} {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
