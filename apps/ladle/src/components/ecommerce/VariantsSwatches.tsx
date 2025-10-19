import * as React from "react";
import { cx } from "../../utils/cx";

export interface Variant {
  id: string;
  name: string;
  value: string;
  available: boolean;
  color?: string;
  image?: string;
  price?: number;
}

export interface VariantGroup {
  id: string;
  name: string;
  type: "color" | "size" | "style" | "text";
  variants: Variant[];
  required?: boolean;
}

export interface VariantsSwatchesProps extends React.HTMLAttributes<HTMLDivElement> {
  variantGroups: VariantGroup[];
  selectedVariants: Record<string, string>;
  onVariantChange: (groupId: string, variantId: string) => void;
}

export const VariantsSwatches = React.forwardRef<HTMLDivElement, VariantsSwatchesProps>(
  ({ className, variantGroups, selectedVariants, onVariantChange, ...props }, ref) => {
    const renderVariant = (group: VariantGroup, variant: Variant) => {
      const isSelected = selectedVariants[group.id] === variant.id;
      const baseClasses = "transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]";

      switch (group.type) {
        case "color":
          return (
            <button
              key={variant.id}
              onClick={() => variant.available && onVariantChange(group.id, variant.id)}
              disabled={!variant.available}
              className={cx(
                baseClasses,
                "w-8 h-8 rounded-full border-2 relative",
                isSelected ? "border-[var(--brand)] ring-2 ring-[var(--brand)]/20" : "border-white/20",
                !variant.available && "opacity-50 cursor-not-allowed"
              )}
              style={{ backgroundColor: variant.color }}
              title={`${variant.name}${!variant.available ? " (Out of stock)" : ""}`}
            >
              {!variant.available && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-0.5 bg-red-400 rotate-45"></div>
                </div>
              )}
            </button>
          );

        case "size":
          return (
            <button
              key={variant.id}
              onClick={() => variant.available && onVariantChange(group.id, variant.id)}
              disabled={!variant.available}
              className={cx(
                baseClasses,
                "px-3 py-2 text-sm font-medium rounded-[var(--radius-sm)] border",
                isSelected
                  ? "border-[var(--brand)] bg-[var(--brand)]/10 text-[var(--brand)]"
                  : "border-white/20 text-white hover:border-white/40",
                !variant.available && "opacity-50 cursor-not-allowed line-through"
              )}
            >
              {variant.value}
            </button>
          );

        case "style":
          return (
            <button
              key={variant.id}
              onClick={() => variant.available && onVariantChange(group.id, variant.id)}
              disabled={!variant.available}
              className={cx(
                baseClasses,
                "relative overflow-hidden rounded-[var(--radius-sm)] border-2",
                isSelected ? "border-[var(--brand)]" : "border-white/20",
                !variant.available && "opacity-50 cursor-not-allowed"
              )}
            >
              {variant.image ? (
                <img
                  src={variant.image}
                  alt={variant.name}
                  className="w-16 h-16 object-cover"
                />
              ) : (
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center text-xs text-[var(--text-muted)]">
                  {variant.name}
                </div>
              )}
              {!variant.available && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-xs text-white font-medium">Out</span>
                </div>
              )}
            </button>
          );

        case "text":
        default:
          return (
            <button
              key={variant.id}
              onClick={() => variant.available && onVariantChange(group.id, variant.id)}
              disabled={!variant.available}
              className={cx(
                baseClasses,
                "px-4 py-2 text-sm font-medium rounded-[var(--radius-sm)] border",
                isSelected
                  ? "border-[var(--brand)] bg-[var(--brand)]/10 text-[var(--brand)]"
                  : "border-white/20 text-white hover:border-white/40",
                !variant.available && "opacity-50 cursor-not-allowed"
              )}
            >
              {variant.name}
              {variant.price && (
                <span className="ml-2 text-xs">+€{variant.price}</span>
              )}
            </button>
          );
      }
    };

    return (
      <div ref={ref} className={cx("space-y-6", className)} {...props}>
        {variantGroups.map((group) => {
          const selectedVariant = group.variants.find(v => v.id === selectedVariants[group.id]);
          
          return (
            <div key={group.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-white">
                  {group.name}
                  {group.required && <span className="text-red-400 ml-1">*</span>}
                </h3>
                {selectedVariant && (
                  <span className="text-sm text-[var(--text-muted)]">
                    {selectedVariant.name}
                    {selectedVariant.price && ` (+€${selectedVariant.price})`}
                  </span>
                )}
              </div>
              
              <div className={cx(
                "flex flex-wrap gap-2",
                group.type === "color" && "gap-3"
              )}>
                {group.variants.map((variant) => renderVariant(group, variant))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);
VariantsSwatches.displayName = "VariantsSwatches";
