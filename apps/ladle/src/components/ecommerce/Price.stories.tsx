import React from "react";

import { Price } from "./Price";

export default { title: "E-commerce/Price" };

export const Sizes = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Price amount={29.99} size="sm" />
    <Price amount={29.99} size="md" />
    <Price amount={29.99} size="lg" />
  </div>
);

export const WithDiscount = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Price amount={19.99} originalAmount={29.99} />
    <Price amount={99.99} originalAmount={149.99} size="lg" />
  </div>
);

export const Currencies = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <Price amount={29.99} currency="€" />
    <Price amount={29.99} currency="$" />
    <Price amount={29.99} currency="£" />
    <Price amount={29.99} showCurrency={false} />
  </div>
);
