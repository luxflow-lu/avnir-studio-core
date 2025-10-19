import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "../form/Button";
import { Input } from "../form/Input";
import { Checkbox } from "../form/Checkbox";
import { Badge } from "../data/Badge";

export interface SearchFilter {
  id: string;
  label: string;
  type: "checkbox" | "range" | "select";
  options?: { value: string; label: string; count?: number }[];
  min?: number;
  max?: number;
  value?: any;
}

export interface ActiveFilter {
  filterId: string;
  value: any;
  label: string;
}

export interface FacetedSearchProps extends React.HTMLAttributes<HTMLDivElement> {
  filters: SearchFilter[];
  activeFilters: ActiveFilter[];
  onFilterChange: (filterId: string, value: any) => void;
  onClearFilter: (filterId: string) => void;
  onClearAll: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  resultCount?: number;
}

export const FacetedSearch = React.forwardRef<HTMLDivElement, FacetedSearchProps>(
  ({ 
    className, 
    filters, 
    activeFilters, 
    onFilterChange, 
    onClearFilter, 
    onClearAll,
    searchQuery = "",
    onSearchChange,
    resultCount,
    ...props 
  }, ref) => {
    const renderFilter = (filter: SearchFilter) => {
      switch (filter.type) {
        case "checkbox":
          return (
            <div className="space-y-2">
              {filter.options?.map((option) => (
                <div key={option.value} className="flex items-center justify-between">
                  <Checkbox
                    label={option.label}
                    checked={activeFilters.some(af => af.filterId === filter.id && af.value === option.value)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        onFilterChange(filter.id, option.value);
                      } else {
                        onClearFilter(filter.id);
                      }
                    }}
                  />
                  {option.count !== undefined && (
                    <span className="text-xs text-[var(--text-muted)]">({option.count})</span>
                  )}
                </div>
              ))}
            </div>
          );

        case "range":
          return (
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Min"
                  min={filter.min}
                  max={filter.max}
                  className="flex-1"
                />
                <Input
                  type="number"
                  placeholder="Max"
                  min={filter.min}
                  max={filter.max}
                  className="flex-1"
                />
              </div>
              <div className="text-xs text-[var(--text-muted)]">
                {filter.min} - {filter.max}
              </div>
            </div>
          );

        case "select":
          return (
            <div className="space-y-2">
              {filter.options?.map((option) => (
                <button
                  key={option.value}
                  onClick={() => onFilterChange(filter.id, option.value)}
                  className={cx(
                    "w-full text-left p-2 rounded-[var(--radius-sm)] text-sm transition-colors",
                    activeFilters.some(af => af.filterId === filter.id && af.value === option.value)
                      ? "bg-[var(--brand)]/10 text-[var(--brand)]"
                      : "text-[var(--text-muted)] hover:text-white hover:bg-white/5"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span>{option.label}</span>
                    {option.count !== undefined && (
                      <span className="text-xs">({option.count})</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          );

        default:
          return null;
      }
    };

    return (
      <div ref={ref} className={cx("space-y-6", className)} {...props}>
        {/* Search Bar */}
        {onSearchChange && (
          <div className="space-y-3">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full"
            />
            {resultCount !== undefined && (
              <div className="text-sm text-[var(--text-muted)]">
                {resultCount.toLocaleString()} results found
              </div>
            )}
          </div>
        )}

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-white">Active Filters</h3>
              <Button variant="ghost" size="sm" onClick={onClearAll}>
                Clear All
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((filter, index) => (
                <Badge
                  key={`${filter.filterId}-${index}`}
                  className="flex items-center gap-2 pr-1"
                >
                  <span>{filter.label}</span>
                  <button
                    onClick={() => onClearFilter(filter.filterId)}
                    className="hover:text-red-400 transition-colors"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="space-y-6">
          {filters.map((filter) => (
            <div key={filter.id} className="space-y-3">
              <h4 className="text-sm font-medium text-white border-b border-white/10 pb-2">
                {filter.label}
              </h4>
              {renderFilter(filter)}
            </div>
          ))}
        </div>
      </div>
    );
  }
);
FacetedSearch.displayName = "FacetedSearch";
