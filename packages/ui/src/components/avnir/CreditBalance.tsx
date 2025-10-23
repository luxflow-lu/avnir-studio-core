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
    const usedCredits = totalCredits - currentCredits;
    const usagePercentage = totalCredits > 0 ? (usedCredits / totalCredits) * 100 : 0;

    const isLowCredits = currentCredits < totalCredits * 0.2;
    const isVeryLowCredits = currentCredits < totalCredits * 0.1;

    const getStatusColor = () => {
      if (isVeryLowCredits) return "text-red-400";
      if (isLowCredits) return "text-yellow-400";
      return "text-green-400";
    };

    const getProgressColor = () => {
      if (isVeryLowCredits) return "bg-red-500";
      if (isLowCredits) return "bg-yellow-500";
      return "bg-[var(--brand)]";
    };

    const formatNumber = (num: number) => {
      return new Intl.NumberFormat().format(num);
    };

    const getDaysUntilRefill = () => {
      if (!nextRefillDate) return null;
      const now = new Date();
      const diffTime = nextRefillDate.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    };

    const daysUntilRefill = getDaysUntilRefill();

    return (
      <div
        ref={ref}
        className={cx(
          "bg-[var(--surface)] rounded-[var(--radius-lg)] border border-white/5",
          size === "sm" ? "p-3" : size === "lg" ? "p-6" : "p-4",
          className,
        )}
        {...props}
      >
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--brand)]/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[var(--brand)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3
                className={cx(
                  "font-medium text-white",
                  size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base",
                )}
              >
                Crédits
              </h3>
            </div>

            {onBuyCredits && (
              <Button variant="outline" size={size === "lg" ? "md" : "sm"} onClick={onBuyCredits}>
                Acheter
              </Button>
            )}
          </div>

          {/* Balance Display */}
          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline gap-1">
                <span
                  className={cx(
                    "font-bold",
                    size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : "text-2xl",
                    getStatusColor(),
                  )}
                >
                  {formatNumber(currentCredits)}
                </span>
                <span
                  className={cx("text-[var(--text-muted)]", size === "sm" ? "text-xs" : "text-sm")}
                >
                  / {formatNumber(totalCredits)}
                </span>
              </div>

              <div className={cx("text-right", size === "sm" ? "text-xs" : "text-sm")}>
                <div className={cx("font-medium", getStatusColor())}>
                  {Math.round((currentCredits / totalCredits) * 100)}%
                </div>
                <div className="text-[var(--text-muted)]">disponible</div>
              </div>
            </div>

            {/* Progress Bar */}
            {showProgress && (
              <div className="relative">
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div
                    className={cx("h-full transition-all duration-500", getProgressColor())}
                    style={{ width: `${Math.max(0, 100 - usagePercentage)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div
            className={cx(
              "flex items-center justify-between text-[var(--text-muted)]",
              size === "sm" ? "text-xs" : "text-sm",
            )}
          >
            <div className="flex items-center gap-4">
              <span>Utilisés: {formatNumber(usedCredits)}</span>
              {monthlyAllowance && <span>Mensuel: {formatNumber(monthlyAllowance)}</span>}
            </div>

            {daysUntilRefill !== null && (
              <div className="text-right">
                <span>
                  Recharge dans {daysUntilRefill} jour{daysUntilRefill > 1 ? "s" : ""}
                </span>
              </div>
            )}
          </div>

          {/* Warning Messages */}
          {isVeryLowCredits && (
            <div className="flex items-center gap-2 p-2 bg-red-500/10 border border-red-500/20 rounded-[var(--radius-sm)]">
              <svg
                className="w-4 h-4 text-red-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span className="text-xs text-red-400">
                Crédits très faibles ! Rechargez pour continuer à créer.
              </span>
            </div>
          )}

          {isLowCredits && !isVeryLowCredits && (
            <div className="flex items-center gap-2 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-[var(--radius-sm)]">
              <svg
                className="w-4 h-4 text-yellow-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xs text-yellow-400">
                Crédits faibles. Pensez à recharger bientôt.
              </span>
            </div>
          )}
        </div>
      </div>
    );
  },
);
CreditBalance.displayName = "CreditBalance";
