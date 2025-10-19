import * as React from "react";
import { cx } from "../../utils/cx";

export interface Column<T = any> {
  key: string;
  title: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
}

export interface TableProps<T = any> extends React.HTMLAttributes<HTMLDivElement> {
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
      <div ref={ref} className={cx("overflow-hidden rounded-[var(--radius-lg)] border border-white/10", className)} {...props}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[var(--surface)]">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={cx(
                      "px-4 py-3 text-left text-sm font-medium text-white",
                      column.sortable && "cursor-pointer hover:bg-white/5"
                    )}
                    onClick={column.sortable ? () => onSort?.(column.key) : undefined}
                  >
                    <div className="flex items-center gap-2">
                      {column.title}
                      {column.sortable && (
                        <div className="flex flex-col">
                          <svg 
                            className={cx(
                              "w-3 h-3",
                              sortBy === column.key && sortOrder === "asc" ? "text-[var(--brand)]" : "text-[var(--text-muted)]"
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
            <tbody className="bg-[var(--bg)] divide-y divide-white/10">
              {loading ? (
                <tr>
                  <td colSpan={columns.length} className="px-4 py-8 text-center text-[var(--text-muted)]">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-[var(--brand)] border-t-transparent rounded-full animate-spin" />
                      Chargement...
                    </div>
                  </td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="px-4 py-8 text-center text-[var(--text-muted)]">
                    Aucune donnée disponible
                  </td>
                </tr>
              ) : (
                data.map((row, index) => (
                  <tr key={index} className="hover:bg-white/5">
                    {columns.map((column) => (
                      <td key={column.key} className="px-4 py-3 text-sm text-white">
                        {column.render ? column.render(row[column.key], row) : row[column.key]}
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
  }
);
Table.displayName = "Table";
