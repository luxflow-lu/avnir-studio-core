import * as React from "react";
import { cx } from "../../utils/cx";

export interface PriceProps extends React.HTMLAttributes<HTMLDivElement> {
  amount: number;
  currency?: string;
  originalAmount?: number;
  size?: "sm" | "md" | "lg";
  showCurrency?: boolean;
}

const sizes = {
  sm: { price: "text-lg", currency: "text-sm", original: "text-sm" },
  md: { price: "text-xl", currency: "text-base", original: "text-base" },
  lg: { price: "text-3xl", currency: "text-lg", original: "text-lg" },
};

export const Price = React.forwardRef<HTMLDivElement, PriceProps>(
  (
    {
      className,
      amount,
      currency = "€",
      originalAmount,
      size = "md",
      showCurrency = true,
      ...props
    },
    ref,
  ) => {
    const sizeClasses = sizes[size];
    const hasDiscount = originalAmount && originalAmount > amount;

    return (
      <div ref={ref} className={cx("flex items-baseline gap-2", className)} {...props}>
        <div className="flex items-baseline">
          {showCurrency && (
            <span className={cx("text-[var(--text-muted)]", sizeClasses.currency)}>{currency}</span>
          )}
          <span className={cx("font-bold text-white", sizeClasses.price)}>{amount.toFixed(2)}</span>
        </div>
        {hasDiscount && (
          <span className={cx("line-through text-[var(--text-muted)]", sizeClasses.original)}>
            {showCurrency && currency}
            {originalAmount.toFixed(2)}
          </span>
        )}
      </div>
    );
  },
);
Price.displayName = "Price";
