import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";
import { Badge } from "../03-data-display/Badge";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  variant?: string;
}

export interface MiniCartProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CartItem[];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onUpdateQuantity?: (itemId: string, quantity: number) => void;
  onRemoveItem?: (itemId: string) => void;
  onCheckout?: () => void;
  currency?: string;
  trigger?: React.ReactElement;
}

export const MiniCart = React.forwardRef<HTMLDivElement, MiniCartProps>(
  (
    {
      className,
      items,
      open: controlledOpen,
      onOpenChange,
      onUpdateQuantity,
      onRemoveItem,
      onCheckout,
      currency = "€",
      trigger,
      ...props
    },
    ref,
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(false);
    const cartRef = React.useRef<HTMLDivElement>(null);
    const triggerRef = React.useRef<HTMLElement>(null);

    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const setOpen = onOpenChange || setInternalOpen;

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          cartRef.current &&
          triggerRef.current &&
          !cartRef.current.contains(event.target as Node) &&
          !triggerRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [isOpen, setOpen]);

    const defaultTrigger = (
      <Button variant="ghost" className="mini-cart-trigger">
        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M20 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"
          />
        </svg>
        {totalItems > 0 && (
          <Badge className="mini-cart-badge">
            {totalItems}
          </Badge>
        )}
      </Button>
    );

    return (
      <div ref={ref} className={cx("mini-cart", className)} {...props}>
        {React.cloneElement(trigger || defaultTrigger, {
          ref: triggerRef,
          onClick: () => setOpen(!isOpen),
        })}

        {isOpen && (
          <div
            ref={cartRef}
            className="mini-cart-panel"
          >
            <div className="mini-cart-header">
              <h3 className="mini-cart-title">Shopping Cart</h3>
              <button
                onClick={() => setOpen(false)}
                className="mini-cart-close"
              >
                <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
            </div>

            <div className="mini-cart-items">
              {items.length === 0 ? (
                <div className="mini-cart-empty">
                  <div className="mini-cart-empty-icon">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M20 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"
                      />
                    </svg>
                  </div>
                  <p className="mini-cart-empty-text">Your cart is empty</p>
                </div>
              ) : (
                <div>
                  {items.map((item) => (
                    <div key={item.id} className="mini-cart-item">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="mini-cart-item-image"
                        />
                      ) : (
                        <div className="mini-cart-item-placeholder">
                          <svg
                            className="icon"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}

                      <div className="mini-cart-item-content">
                        <h4 className="mini-cart-item-name">{item.name}</h4>
                        {item.variant && (
                          <p className="mini-cart-item-variant">{item.variant}</p>
                        )}
                        <div className="mini-cart-item-footer">
                          <div className="mini-cart-quantity">
                            <button
                              onClick={() =>
                                onUpdateQuantity?.(item.id, Math.max(0, item.quantity - 1))
                              }
                              className="mini-cart-quantity-btn"
                            >
                              -
                            </button>
                            <span className="mini-cart-quantity-value">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity?.(item.id, item.quantity + 1)}
                              className="mini-cart-quantity-btn"
                            >
                              +
                            </button>
                          </div>
                          <div>
                            <span className="mini-cart-item-price">
                              {currency}
                              {(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => onRemoveItem?.(item.id)}
                              className="mini-cart-item-remove"
                            >
                              <svg
                                className="icon-sm"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="mini-cart-footer">
                <div className="mini-cart-total">
                  <span className="mini-cart-total-label">Total</span>
                  <span className="mini-cart-total-amount">
                    {currency}
                    {totalPrice.toFixed(2)}
                  </span>
                </div>
                <Button onClick={onCheckout} className="btn-full-width">
                  Checkout ({totalItems} items)
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
);
MiniCart.displayName = "MiniCart";
