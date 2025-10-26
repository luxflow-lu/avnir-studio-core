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
  sm: "price--sm",
  md: "price--md",
  lg: "price--lg",
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
    const sizeClass = sizes[size];
    const hasDiscount = originalAmount && originalAmount > amount;

    return (
      <div ref={ref} className={cx("price", sizeClass, className)} {...props}>
        <div className="flex items-baseline">
          {showCurrency && (
            <span className="price-currency">{currency}</span>
          )}
          <span className="price-amount">{amount.toFixed(2)}</span>
        </div>
        {hasDiscount && (
          <span className="price-original">
            {showCurrency && currency}
            {originalAmount.toFixed(2)}
          </span>
        )}
      </div>
    );
  },
);
Price.displayName = "Price";
