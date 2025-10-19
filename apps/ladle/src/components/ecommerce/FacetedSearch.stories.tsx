import React, { useState } from "react";
import { FacetedSearch } from "./FacetedSearch";

export default { title: "E-commerce/FacetedSearch" };

const mockFilters = [
  {
    id: "category",
    label: "Category",
    type: "checkbox" as const,
    options: [
      { value: "electronics", label: "Electronics", count: 245 },
      { value: "clothing", label: "Clothing", count: 189 },
      { value: "home", label: "Home & Garden", count: 156 },
      { value: "books", label: "Books", count: 89 }
    ]
  },
  {
    id: "price",
    label: "Price Range",
    type: "range" as const,
    min: 0,
    max: 1000
  },
  {
    id: "brand",
    label: "Brand",
    type: "select" as const,
    options: [
      { value: "apple", label: "Apple", count: 45 },
      { value: "samsung", label: "Samsung", count: 38 },
      { value: "nike", label: "Nike", count: 67 },
      { value: "adidas", label: "Adidas", count: 52 }
    ]
  },
  {
    id: "rating",
    label: "Customer Rating",
    type: "checkbox" as const,
    options: [
      { value: "5", label: "5 Stars", count: 123 },
      { value: "4", label: "4 Stars & Up", count: 234 },
      { value: "3", label: "3 Stars & Up", count: 345 }
    ]
  }
];

export const Default = () => {
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (filterId: string, value: any) => {
    const filterLabel = mockFilters.find(f => f.id === filterId)?.label || filterId;
    const optionLabel = mockFilters
      .find(f => f.id === filterId)
      ?.options?.find(o => o.value === value)?.label || value;
    
    setActiveFilters(prev => [
      ...prev.filter(f => f.filterId !== filterId),
      { filterId, value, label: `${filterLabel}: ${optionLabel}` }
    ]);
  };

  const handleClearFilter = (filterId: string) => {
    setActiveFilters(prev => prev.filter(f => f.filterId !== filterId));
  };

  const handleClearAll = () => {
    setActiveFilters([]);
    setSearchQuery("");
  };

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="max-w-sm">
        <FacetedSearch
          filters={mockFilters}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          onClearFilter={handleClearFilter}
          onClearAll={handleClearAll}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          resultCount={1247}
        />
      </div>
    </div>
  );
};

export const WithoutSearch = () => {
  const [activeFilters, setActiveFilters] = useState([]);

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="max-w-sm">
        <FacetedSearch
          filters={mockFilters}
          activeFilters={activeFilters}
          onFilterChange={(filterId, value) => {
            const filterLabel = mockFilters.find(f => f.id === filterId)?.label || filterId;
            const optionLabel = mockFilters
              .find(f => f.id === filterId)
              ?.options?.find(o => o.value === value)?.label || value;
            
            setActiveFilters(prev => [
              ...prev.filter(f => f.filterId !== filterId),
              { filterId, value, label: `${filterLabel}: ${optionLabel}` }
            ]);
          }}
          onClearFilter={(filterId) => {
            setActiveFilters(prev => prev.filter(f => f.filterId !== filterId));
          }}
          onClearAll={() => setActiveFilters([])}
        />
      </div>
    </div>
  );
};
