import React, { useState } from "react";
import { VariantsSwatches } from "./VariantsSwatches";

export default { title: "E-commerce/VariantsSwatches" };

const mockVariantGroups = [
  {
    id: "color",
    name: "Color",
    type: "color" as const,
    required: true,
    variants: [
      { id: "black", name: "Black", value: "black", available: true, color: "#000000" },
      { id: "white", name: "White", value: "white", available: true, color: "#ffffff" },
      { id: "red", name: "Red", value: "red", available: false, color: "#ef4444" },
      { id: "blue", name: "Blue", value: "blue", available: true, color: "#3b82f6" }
    ]
  },
  {
    id: "size",
    name: "Size",
    type: "size" as const,
    required: true,
    variants: [
      { id: "xs", name: "XS", value: "XS", available: true },
      { id: "s", name: "S", value: "S", available: true },
      { id: "m", name: "M", value: "M", available: false },
      { id: "l", name: "L", value: "L", available: true },
      { id: "xl", name: "XL", value: "XL", available: true }
    ]
  },
  {
    id: "material",
    name: "Material",
    type: "text" as const,
    variants: [
      { id: "cotton", name: "Cotton", value: "cotton", available: true },
      { id: "polyester", name: "Polyester", value: "polyester", available: true, price: 5 },
      { id: "wool", name: "Wool", value: "wool", available: true, price: 15 }
    ]
  }
];

export const Default = () => {
  const [selectedVariants, setSelectedVariants] = useState({
    color: "black",
    size: "m"
  });

  const handleVariantChange = (groupId: string, variantId: string) => {
    setSelectedVariants(prev => ({
      ...prev,
      [groupId]: variantId
    }));
  };

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="max-w-md">
        <VariantsSwatches
          variantGroups={mockVariantGroups}
          selectedVariants={selectedVariants}
          onVariantChange={handleVariantChange}
        />
        
        <div className="mt-8 p-4 bg-[var(--surface)] rounded-[var(--radius-lg)]">
          <h4 className="text-sm font-medium text-white mb-2">Selected Variants</h4>
          <pre className="text-xs text-[var(--text-muted)]">
            {JSON.stringify(selectedVariants, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export const StyleVariants = () => {
  const [selectedVariants, setSelectedVariants] = useState({});

  const styleGroups = [
    {
      id: "style",
      name: "Style",
      type: "style" as const,
      variants: [
        { 
          id: "classic", 
          name: "Classic", 
          value: "classic", 
          available: true,
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop"
        },
        { 
          id: "modern", 
          name: "Modern", 
          value: "modern", 
          available: true,
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop"
        },
        { 
          id: "vintage", 
          name: "Vintage", 
          value: "vintage", 
          available: false,
          image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop"
        }
      ]
    }
  ];

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="max-w-md">
        <VariantsSwatches
          variantGroups={styleGroups}
          selectedVariants={selectedVariants}
          onVariantChange={(groupId, variantId) => {
            setSelectedVariants(prev => ({
              ...prev,
              [groupId]: variantId
            }));
          }}
        />
      </div>
    </div>
  );
};
