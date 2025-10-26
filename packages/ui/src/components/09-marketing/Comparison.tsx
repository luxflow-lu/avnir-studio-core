import * as React from "react";
import { cx } from "../../utils/cx";

export interface ComparisonFeature {
  name: string;
  basic: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

export interface ComparisonProps extends React.HTMLAttributes<HTMLDivElement> {
  features: ComparisonFeature[];
}

export const Comparison = React.forwardRef<HTMLDivElement, ComparisonProps>(
  ({ className, features, ...props }, ref) => {
    const renderValue = (value: boolean | string) => {
      if (typeof value === "boolean") {
        return value ? "✓" : "−";
      }
      return value;
    };

    return (
      <div ref={ref} className={cx("comparison", className)} {...props}>
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="comparison-header">Features</th>
              <th className="comparison-header">Basic</th>
              <th className="comparison-header">Pro</th>
              <th className="comparison-header">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="comparison-row">
                <td className="comparison-feature">{feature.name}</td>
                <td className="comparison-value">{renderValue(feature.basic)}</td>
                <td className="comparison-value">{renderValue(feature.pro)}</td>
                <td className="comparison-value">{renderValue(feature.enterprise)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
);
Comparison.displayName = "Comparison";
