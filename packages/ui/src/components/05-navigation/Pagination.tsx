import * as React from "react";

import { cx } from "../../utils/cx";

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisible?: number;
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      className,
      currentPage,
      totalPages,
      onPageChange,
      showFirstLast = true,
      showPrevNext = true,
      maxVisible = 5,
      ...props
    },
    ref,
  ) => {
    const getVisiblePages = () => {
      const pages: (number | string)[] = [];
      const half = Math.floor(maxVisible / 2);

      let start = Math.max(1, currentPage - half);
      const end = Math.min(totalPages, start + maxVisible - 1);

      if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1);
      }

      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push("...");
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) pages.push("...");
        pages.push(totalPages);
      }

      return pages;
    };

    const visiblePages = getVisiblePages();

    return (
      <div ref={ref} className={cx("pagination", className)} {...props}>
        <div className="pagination-content">
          {showFirstLast && (
            <button
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1}
              className={cx(
                "pagination-item pagination-previous",
                currentPage === 1 && "pagination-item--disabled"
              )}
            >
              First
            </button>
          )}

          {showPrevNext && (
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={cx(
                "pagination-item pagination-previous",
                currentPage === 1 && "pagination-item--disabled"
              )}
            >
              Previous
            </button>
          )}

          {visiblePages.map((page, index) => (
            <React.Fragment key={index}>
              {typeof page === "string" ? (
                <span className="pagination-ellipsis">{page}</span>
              ) : (
                <button
                  onClick={() => onPageChange(page)}
                  className={cx(
                    "pagination-item",
                    page === currentPage && "pagination-item--active"
                  )}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}

          {showPrevNext && (
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={cx(
                "pagination-item pagination-next",
                currentPage === totalPages && "pagination-item--disabled"
              )}
            >
              Next
            </button>
          )}

          {showFirstLast && (
            <button
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}
              className={cx(
                "pagination-item pagination-next",
                currentPage === totalPages && "pagination-item--disabled"
              )}
            >
              Last
            </button>
          )}
        </div>
      </div>
    );
  },
);
Pagination.displayName = "Pagination";
