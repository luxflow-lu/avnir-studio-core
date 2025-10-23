import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "../form/Button";
import { Badge } from "../data/Badge";

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
      <Button variant="ghost" className="relative">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M20 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"
          />
        </svg>
        {totalItems > 0 && (
          <Badge className="absolute -top-2 -right-2 min-w-[20px] h-5 flex items-center justify-center text-xs">
            {totalItems}
          </Badge>
        )}
      </Button>
    );

    return (
      <div ref={ref} className={cx("relative", className)} {...props}>
        {React.cloneElement(trigger || defaultTrigger, {
          ref: triggerRef,
          onClick: () => setOpen(!isOpen),
        })}

        {isOpen && (
          <div
            ref={cartRef}
            className="absolute top-full right-0 w-80 bg-[var(--surface)] border border-white/10 rounded-[var(--radius-lg)] shadow-lg z-50"
          >
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Shopping Cart</h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-[var(--text-muted)] hover:text-white"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="max-h-80 overflow-y-auto">
              {items.length === 0 ? (
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 text-[var(--text-muted)]">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M20 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"
                      />
                    </svg>
                  </div>
                  <p className="text-[var(--text-muted)] text-sm">Your cart is empty</p>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-start gap-3">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-[var(--radius-sm)] object-cover bg-white/5"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-white/5 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-[var(--text-muted)]"
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

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-white truncate">{item.name}</h4>
                        {item.variant && (
                          <p className="text-xs text-[var(--text-muted)]">{item.variant}</p>
                        )}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                onUpdateQuantity?.(item.id, Math.max(0, item.quantity - 1))
                              }
                              className="w-6 h-6 rounded border border-white/20 flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-white/40"
                            >
                              -
                            </button>
                            <span className="text-sm text-white w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity?.(item.id, item.quantity + 1)}
                              className="w-6 h-6 rounded border border-white/20 flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-white/40"
                            >
                              +
                            </button>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-white">
                              {currency}
                              {(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => onRemoveItem?.(item.id)}
                              className="text-red-400 hover:text-red-300"
                            >
                              <svg
                                className="w-4 h-4"
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
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-white">Total</span>
                  <span className="text-lg font-bold text-white">
                    {currency}
                    {totalPrice.toFixed(2)}
                  </span>
                </div>
                <Button onClick={onCheckout} className="w-full">
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
