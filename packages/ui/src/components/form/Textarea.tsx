import * as React from "react";
import { cx } from "../../utils/cx";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cx(
      "w-full rounded-[var(--radius-sm)] bg-[color:var(--bg)/0.6] border border-white/10 px-3 py-2 placeholder:opacity-60 resize-vertical",
      "focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)/0.4]",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
