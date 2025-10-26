import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface WishlistButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  isInWishlist: boolean;
  onChange: (isInWishlist: boolean) => void;
  size?: "sm" | "md" | "lg";
}

export const WishlistButton = React.forwardRef<HTMLButtonElement, WishlistButtonProps>(
  ({ className, isInWishlist, onChange, size = "md", ...props }, ref) => {
    const handleClick = () => {
      onChange(!isInWishlist);
    };

    return (
      <Button
        ref={ref}
        variant="ghost"
        size={size}
        className={cx("wishlist-button", isInWishlist && "wishlist-button--active", className)}
        onClick={handleClick}
        aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        {...props}
      >
        <span className="wishlist-icon">{isInWishlist ? "❤️" : "🤍"}</span>
      </Button>
    );
  }
);
WishlistButton.displayName = "WishlistButton";
