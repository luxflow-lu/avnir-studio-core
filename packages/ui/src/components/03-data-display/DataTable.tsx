import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface DataTableColumn<T> {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
}

export interface DataTableProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  columns: DataTableColumn<T>[];
  data: T[];
  onSort?: (key: string, direction: "asc" | "desc") => void;
}

export const DataTable = <T extends Record<string, any>>({
  className,
  columns,
  data,
  onSort,
  ...props
}: DataTableProps<T>) => {
  const [sortKey, setSortKey] = React.useState<string | null>(null);
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc");

  const handleSort = (key: string) => {
    const newDirection = sortKey === key && sortDirection === "asc" ? "desc" : "asc";
    setSortKey(key);
    setSortDirection(newDirection);
    onSort?.(key, newDirection);
  };

  return (
    <div className={cx("data-table", className)} {...props}>
      <table className="data-table-table">
        <thead>
          <tr className="data-table-header-row">
            {columns.map((column) => (
              <th key={column.key} className="data-table-header">
                {column.sortable ? (
                  <Button
                    type="button"
                    variant="ghost"
                    className="data-table-sort-button"
                    onClick={() => handleSort(column.key)}
                  >
                    {column.label}
                    {sortKey === column.key && (
                      <span className="data-table-sort-icon">
                        {sortDirection === "asc" ? " ↑" : " ↓"}
                      </span>
                    )}
                  </Button>
                ) : (
                  column.label
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="data-table-row">
              {columns.map((column) => (
                <td key={column.key} className="data-table-cell">
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
