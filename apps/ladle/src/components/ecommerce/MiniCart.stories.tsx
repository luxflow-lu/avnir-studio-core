import React, { useState } from "react";

import { MiniCart } from "./MiniCart";

export default { title: "E-commerce/MiniCart" };

const mockItems = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 99.99,
    quantity: 1,
    variant: "Black",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    name: "Smartphone Case",
    price: 24.99,
    quantity: 2,
    variant: "Clear",
  },
  {
    id: "3",
    name: "USB-C Cable",
    price: 12.99,
    quantity: 1,
  },
];

export const Default = () => {
  const [items, setItems] = useState(mockItems);

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    if (quantity === 0) {
      setItems((prev) => prev.filter((item) => item.id !== itemId));
    } else {
      setItems((prev) => prev.map((item) => (item.id === itemId ? { ...item, quantity } : item)));
    }
  };

  const handleRemoveItem = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="flex justify-end">
        <MiniCart
          items={items}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={() => console.log("Checkout clicked")}
        />
      </div>
    </div>
  );
};

export const Empty = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="flex justify-end">
      <MiniCart items={[]} onCheckout={() => console.log("Checkout clicked")} />
    </div>
  </div>
);

export const InNavbar = () => {
  const [items, setItems] = useState(mockItems);

  return (
    <div className="bg-[var(--bg)] text-white">
      <nav className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--brand)] rounded-lg"></div>
          <span className="font-semibold">Store</span>
        </div>

        <MiniCart
          items={items}
          onUpdateQuantity={(itemId, quantity) => {
            if (quantity === 0) {
              setItems((prev) => prev.filter((item) => item.id !== itemId));
            } else {
              setItems((prev) =>
                prev.map((item) => (item.id === itemId ? { ...item, quantity } : item)),
              );
            }
          }}
          onRemoveItem={(itemId) => {
            setItems((prev) => prev.filter((item) => item.id !== itemId));
          }}
          onCheckout={() => console.log("Checkout")}
        />
      </nav>

      <div className="p-6">
        <p>Click the cart icon in the navbar to see the mini cart</p>
      </div>
    </div>
  );
};
