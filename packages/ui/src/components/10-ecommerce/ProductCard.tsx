import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  onAddToCart?: () => void;
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ className, image, title, price, originalPrice, badge, onAddToCart, ...props }, ref) => (
    <div ref={ref} className={cx("product-card", className)} {...props}>
      <div className="product-card-image-wrapper">
        {badge && <div className="product-card-badge">{badge}</div>}
        <img src={image} alt={title} className="product-card-image" />
      </div>
      <div className="product-card-content">
        <h3 className="product-card-title">{title}</h3>
        <div className="product-card-pricing">
          <span className="product-card-price">{price}</span>
          {originalPrice && (
            <span className="product-card-original-price">{originalPrice}</span>
          )}
        </div>
        {onAddToCart && (
          <Button variant="solid" className="product-card-button" onClick={onAddToCart}>
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  )
);
ProductCard.displayName = "ProductCard";
