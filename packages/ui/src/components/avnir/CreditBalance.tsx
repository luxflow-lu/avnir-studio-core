import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "../form/Button";
import { Progress } from "../data-display/Progress";

export interface CreditBalanceProps extends React.HTMLAttributes<HTMLDivElement> {
  currentCredits: number;
  totalCredits: number;
  monthlyAllowance?: number;
  nextRefillDate?: Date;
  onBuyCredits?: () => void;
  showProgress?: boolean;
  size?: "sm" | "md" | "lg";
}

export const CreditBalance = React.forwardRef<HTMLDivElement, CreditBalanceProps>(
  (
    {
      className,
      currentCredits,
      totalCredits,
      monthlyAllowance,
      nextRefillDate,
      onBuyCredits,
      showProgress = true,
      size = "md",
      ...props
    },
    ref,
  ) => {
    const percentage = Math.round((currentCredits / totalCredits) * 100);
    const isLow = percentage < 20;
    const isCritical = percentage < 10;

    const formatNextRefill = (date: Date) => {
      const now = new Date();
      const diffTime = date.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 0) return "aujourd'hui";
      if (diffDays === 1) return "demain";
      if (diffDays < 7) return `dans ${diffDays} jours`;
      return date.toLocaleDateString();
    };

    return (
      <div
        ref={ref}
        className={cx(
          "card-base",
          "credit-balance",
          `credit-balance--${size}`,
          isCritical && "credit-balance--critical",
          isLow && !isCritical && "credit-balance--low",
          className,
        )} {...props}
      >
        {/* Header */}
        <div className="credit-balance-header">
          <div className="credit-balance-title">
            <div className={cx(
              "credit-balance-indicator",
              isCritical ? "credit-balance-indicator--critical" : 
              isLow ? "credit-balance-indicator--low" : "credit-balance-indicator--good"
            )} />
            <h3 className="credit-balance-heading">
              Crédits disponibles
            </h3>
          </div>
          
          {onBuyCredits && (
            <Button
              variant="outline"
              size={size === "lg" ? "md" : "sm"}
              onClick={onBuyCredits}
              className="credit-balance-buy-button"
            >
              Acheter
            </Button>
          )}
        </div>

        {/* Credits Display */}
        <div className="credit-balance-display">
          <div className="credit-balance-numbers">
            <span className={cx(
              "credit-balance-current",
              isCritical ? "credit-balance-current--critical" : 
              isLow ? "credit-balance-current--low" : "credit-balance-current--good"
            )}>
              {currentCredits.toLocaleString()}
            </span>
            <span className="credit-balance-total">
              / {totalCredits.toLocaleString()}
            </span>
          </div>
          
          {showProgress && (
            <Progress
              value={percentage}
              className="credit-balance-progress"
            />
          )}
        </div>

        {/* Additional Info */}
        <div className="credit-balance-info">
          {monthlyAllowance && (
            <div className="credit-balance-row">
              <span>Allocation mensuelle</span>
              <span>{monthlyAllowance.toLocaleString()}</span>
            </div>
          )}
          
          {nextRefillDate && (
            <div className="credit-balance-row">
              <span>Prochain rechargement</span>
              <span>{formatNextRefill(nextRefillDate)}</span>
            </div>
          )}
          
          {isCritical && (
            <div className="credit-balance-alert">
              <svg className="credit-balance-alert-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              <span className="credit-balance-alert-text">
                Crédits faibles ! Rechargez pour continuer à utiliser les services.
              </span>
            </div>
          )}
        </div>
      </div>
    );
  },
);
CreditBalance.displayName = "CreditBalance";
