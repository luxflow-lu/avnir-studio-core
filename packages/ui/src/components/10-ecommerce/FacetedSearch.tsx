import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";
import { Input } from "../02-form/Input";
import { Checkbox } from "../02-form/Checkbox";
import { Badge } from "../03-data-display/Badge";

export interface SearchFilter {
  id: string;
  label: string;
  type: "checkbox" | "range" | "select";
  options?: { value: string; label: string; count?: number }[];
  min?: number;
  max?: number;
  value?: string | number | boolean;
}

export interface ActiveFilter {
  filterId: string;
  value: string | number | boolean;
  label: string;
}

export interface FacetedSearchProps extends React.HTMLAttributes<HTMLDivElement> {
  filters: SearchFilter[];
  activeFilters: ActiveFilter[];
  onFilterChange: (filterId: string, value: string | number | boolean) => void;
  onClearFilter: (filterId: string) => void;
  onClearAll: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  resultCount?: number;
}

export const FacetedSearch = React.forwardRef<HTMLDivElement, FacetedSearchProps>(
  (
    {
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
    },
    ref,
  ) => {
    const renderFilter = (filter: SearchFilter) => {
      switch (filter.type) {
        case "checkbox":
          return (
            <div className="faceted-search-facet-options">
              {filter.options?.map((option) => (
                <div key={option.value} className="faceted-search-option">
                  <Checkbox
                    label={option.label}
                    checked={activeFilters.some(
                      (af) => af.filterId === filter.id && af.value === option.value,
                    )}
                    onChange={(e) => {
                      if (e.target.checked) {
                        onFilterChange(filter.id, option.value);
                      } else {
                        onClearFilter(filter.id);
                      }
                    }}
                  />
                  {option.count !== undefined && (
                    <span className="faceted-search-checkbox-option-count">({option.count})</span>
                  )}
                </div>
              ))}
            </div>
          );

        case "range":
          return (
            <div className="faceted-search-range">
              <div className="faceted-search-range-values">
                <Input
                  type="number"
                  placeholder="Min"
                  min={filter.min}
                  max={filter.max}
                  className="faceted-search-range-input"
                />
                <Input
                  type="number"
                  placeholder="Max"
                  min={filter.min}
                  max={filter.max}
                  className="faceted-search-range-input"
                />
              </div>
              <div className="faceted-search-option-count">
                {filter.min} - {filter.max}
              </div>
            </div>
          );

        case "select":
          return (
            <div className="faceted-search-facet-options">
              {filter.options?.map((option) => (
                <button
                  key={option.value}
                  onClick={() => onFilterChange(filter.id, option.value)}
                  className={cx(
                    "faceted-search-option",
                    activeFilters.some(
                      (af) => af.filterId === filter.id && af.value === option.value,
                    ) && "faceted-search-option--active",
                  )}
                >
                  <div>
                    <span>{option.label}</span>
                    {option.count !== undefined && (
                      <span className="faceted-search-option-count">({option.count})</span>
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
      <div ref={ref} className={cx("faceted-search", className)} {...props}>
        {/* Search Bar */}
        {onSearchChange && (
          <div className="faceted-search-search">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            {resultCount !== undefined && (
              <div className="faceted-search-result-count">
                {resultCount.toLocaleString()} results found
              </div>
            )}
          </div>
        )}

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="faceted-search-active-section">
            <div className="faceted-search-header">
              <h3 className="faceted-search-title">Active Filters</h3>
              <Button variant="ghost" size="sm" onClick={onClearAll}>
                Clear All
              </Button>
            </div>
            <div className="faceted-search-active">
              {activeFilters.map((filter, index) => (
                <Badge key={`${filter.filterId}-${index}`} className="faceted-search-active-filter">
                  <span>{filter.label}</span>
                  <button
                    onClick={() => onClearFilter(filter.filterId)}
                    className="faceted-search-active-filter-remove"
                  >
                    <svg className="icon-xs" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="faceted-search-facets">
          {filters.map((filter) => (
            <div key={filter.id} className="faceted-search-facet">
              <h4 className="faceted-search-facet-title">
                {filter.label}
              </h4>
              {renderFilter(filter)}
            </div>
          ))}
        </div>
      </div>
    );
  },
);
FacetedSearch.displayName = "FacetedSearch";
