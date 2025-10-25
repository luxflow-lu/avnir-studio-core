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
      let end = Math.min(totalPages, start + maxVisible - 1);

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

    const buttonClass =
      "px-3 py-2 text-sm font-medium rounded-[var(--radius-sm)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]";
    const activeClass = "bg-[var(--brand)] text-[var(--brand-on)]";
    const inactiveClass = "text-[var(--text-muted)] hover:text-white hover:bg-white/5";
    const disabledClass = "text-[var(--text-muted)] opacity-50 cursor-not-allowed";

    return (
      <div ref={ref} className={cx("flex items-center gap-1", className)} {...props}>
        {showFirstLast && (
          <button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className={cx(buttonClass, currentPage === 1 ? disabledClass : inactiveClass)}
          >
            First
          </button>
        )}

        {showPrevNext && (
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={cx(buttonClass, currentPage === 1 ? disabledClass : inactiveClass)}
          >
            Previous
          </button>
        )}

        {visiblePages.map((page, index) => (
          <React.Fragment key={index}>
            {typeof page === "string" ? (
              <span className="px-3 py-2 text-[var(--text-muted)]">{page}</span>
            ) : (
              <button
                onClick={() => onPageChange(page)}
                className={cx(buttonClass, page === currentPage ? activeClass : inactiveClass)}
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
            className={cx(buttonClass, currentPage === totalPages ? disabledClass : inactiveClass)}
          >
            Next
          </button>
        )}

        {showFirstLast && (
          <button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className={cx(buttonClass, currentPage === totalPages ? disabledClass : inactiveClass)}
          >
            Last
          </button>
        )}
      </div>
    );
  },
);
Pagination.displayName = "Pagination";
