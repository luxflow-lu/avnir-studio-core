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
      const baseClasses =
        "transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]";

      switch (group.type) {
        case "color":
          return (
            <button
              key={variant.id}
              onClick={() => variant.available && onVariantChange(group.id, variant.id)}
              disabled={!variant.available}
              className={cx(
                baseClasses,
                "w-8 h-8-full-2",
                isSelected
                  ? "border-brand ring-2 ring-[var(--brand)]/20"
                  : "border-muted",
                !variant.available && "opacity-50 cursor-not-allowed",
              )}
              style={{ backgroundColor: variant.color }}
              title={`${variant.name}${!variant.available ? " (Out of stock)" : ""}`}
            >
              {!variant.available && (
                <div className="absolute inset-0-center">
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
                "px-3 py-2 text-sm font-medium-sm",
                isSelected
                  ? "border-brand bg-brand/10 text-brand"
                  : "border-muted text-white hover:border-white/40",
                !variant.available && "opacity-50 cursor-not-allowed line-through",
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
                "relative overflow-hidden-sm-2",
                isSelected ? "border-brand" : "border-muted",
                !variant.available && "opacity-50 cursor-not-allowed",
              )}
            >
              {variant.image ? (
                <img src={variant.image} alt={variant.name} className="icon-xl object-cover" />
              ) : (
                <div className="icon-xl bg-muted flex-center text-xs text-muted">
                  {variant.name}
                </div>
              )}
              {!variant.available && (
                <div className="absolute inset-0 bg-overlay-center">
                  <span className="text-xs text-foreground font-medium">Out</span>
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
                "px-4 py-2 text-sm font-medium-sm",
                isSelected
                  ? "border-brand bg-brand/10 text-brand"
                  : "border-muted text-white hover:border-white/40",
                !variant.available && "opacity-50 cursor-not-allowed",
              )}
            >
              {variant.name}
              {variant.price && <span className="ml-2 text-xs">+€{variant.price}</span>}
            </button>
          );
      }
    };

    return (
      <div ref={ref} className={cx("space-y-6", className)} {...props}>
        {variantGroups.map((group) => {
          const selectedVariant = group.variants.find((v) => v.id === selectedVariants[group.id]);

          return (
            <div key={group.id} className="stack-3">
              <div className="flex-between">
                <h3 className="text-sm font-medium text-foreground">
                  {group.name}
                  {group.required && <span className="text-destructive ml-1">*</span>}
                </h3>
                {selectedVariant && (
                  <span className="text-sm text-muted">
                    {selectedVariant.name}
                    {selectedVariant.price && ` (+€${selectedVariant.price})`}
                  </span>
                )}
              </div>

              <div className={cx("flex-wrap gap-2", group.type === "color" && "gap-3")}>
                {group.variants.map((variant) => renderVariant(group, variant))}
              </div>
            </div>
          );
        })}
      </div>
    );
  },
);
VariantsSwatches.displayName = "VariantsSwatches";
