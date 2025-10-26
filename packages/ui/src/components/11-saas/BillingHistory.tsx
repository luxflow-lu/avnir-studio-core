import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface Invoice {
  id: string;
  date: string;
  amount: string;
  status: "paid" | "pending" | "failed";
  description: string;
  downloadUrl?: string;
}

export interface BillingHistoryProps extends React.HTMLAttributes<HTMLDivElement> {
  invoices: Invoice[];
  onDownload?: (invoice: Invoice) => void;
}

export const BillingHistory = React.forwardRef<HTMLDivElement, BillingHistoryProps>(
  ({ className, invoices, onDownload, ...props }, ref) => (
    <div ref={ref} className={cx("billing-history", className)} {...props}>
      <table className="billing-table">
        <thead>
          <tr>
            <th className="billing-table-header">Date</th>
            <th className="billing-table-header">Description</th>
            <th className="billing-table-header">Amount</th>
            <th className="billing-table-header">Status</th>
            <th className="billing-table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="billing-table-row">
              <td className="billing-table-cell">{invoice.date}</td>
              <td className="billing-table-cell">{invoice.description}</td>
              <td className="billing-table-cell">{invoice.amount}</td>
              <td className="billing-table-cell">
                <span className={cx("billing-status", `billing-status--${invoice.status}`)}>
                  {invoice.status}
                </span>
              </td>
              <td className="billing-table-cell">
                {invoice.downloadUrl && onDownload && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDownload(invoice)}
                  >
                    Download
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
);
BillingHistory.displayName = "BillingHistory";
