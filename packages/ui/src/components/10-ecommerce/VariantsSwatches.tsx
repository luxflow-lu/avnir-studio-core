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

      switch (group.type) {
        case "color":
          return (
            <button
              key={variant.id}
              onClick={() => variant.available && onVariantChange(group.id, variant.id)}
              disabled={!variant.available}
              className={cx(
                "swatch",
                isSelected && "swatch--active",
                !variant.available && "swatch--disabled"
              )}
              style={{ backgroundColor: variant.color }}
              title={`${variant.name}${!variant.available ? " (Out of stock)" : ""}`}
            />
          );

        case "size":
          return (
            <button
              key={variant.id}
              onClick={() => variant.available && onVariantChange(group.id, variant.id)}
              disabled={!variant.available}
              className={cx(
                "swatch swatch--size",
                isSelected && "swatch--active",
                !variant.available && "swatch--disabled"
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
                "swatch swatch--image",
                isSelected && "swatch--active",
                !variant.available && "swatch--disabled"
              )}
            >
              {variant.image && <img src={variant.image} alt={variant.name} />}
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
                "swatch swatch--text",
                isSelected && "swatch--active",
                !variant.available && "swatch--disabled"
              )}
            >
              {variant.name}
              {variant.price && <span className="text-xs">+€{variant.price}</span>}
            </button>
          );
      }
    };

    return (
      <div ref={ref} className={cx("variants-swatches", className)} {...props}>
        {variantGroups.map((group) => {
          const selectedVariant = group.variants.find((v) => v.id === selectedVariants[group.id]);

          return (
            <div key={group.id}>
              <div className="variants-swatches-label">
                {group.name}
                {group.required && <span className="text-destructive">*</span>}
                {selectedVariant && (
                  <span className="text-muted">
                    {" - "}{selectedVariant.name}
                    {selectedVariant.price && ` (+€${selectedVariant.price})`}
                  </span>
                )}
              </div>
              <div className="variants-swatches-group">
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
