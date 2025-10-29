import * as React from "react";

import { cx } from "../../utils/cx";

export interface Column<T = unknown> {
  key: string;
  title: string;
  sortable?: boolean;
  render?: (value: unknown, row: T) => React.ReactNode;
}

export interface TableProps<T = unknown> extends React.HTMLAttributes<HTMLDivElement> {
  columns: Column<T>[];
  data: T[];
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  onSort?: (key: string) => void;
  loading?: boolean;
}

export const Table = React.forwardRef<HTMLDivElement, TableProps>(
  ({ className, columns, data, sortBy, sortOrder, onSort, loading = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(
          "overflow-hidden-lg-white/10",
          className,
        )} {...props}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-surface">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={cx(
                      "px-4 py-3 text-sm font-medium text-on-primary",
                      column.sortable && "cursor-pointer hover:bg-muted",
                    )}
                    onClick={column.sortable ? () => onSort?.(column.key) : undefined}
                  >
                    <div className="flex-row gap-2">
                      {column.title}
                      {column.sortable && (
                        <div className="flex-col">
                          <svg
                            className={cx(
                              "w-3 h-3",
                              sortBy === column.key && sortOrder === "asc"
                                ? "text-brand"
                                : "text-muted",
                            )}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-muted divide-y divide-white/10">
              {loading ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-4 py-8 text-muted"
                  >
                    <div className="flex-center gap-2">
                      <div className="spinner" />
                      Chargement...
                    </div>
                  </td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-4 py-8 text-muted"
                  >
                    Aucune donnée disponible
                  </td>
                </tr>
              ) : (
                data.map((row, index) => (
                  <tr key={index} className="hover:bg-muted">
                    {columns.map((column) => (
                      <td key={column.key} className="px-4 py-3 text-sm text-foreground">
                        {column.render ? column.render((row as Record<string, unknown>)[column.key], row) : String((row as Record<string, unknown>)[column.key])}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  },
);
Table.displayName = "Table";
