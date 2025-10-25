import React, { useState } from "react";

import { CheckoutSteps } from "./CheckoutSteps";

export default { title: "E-commerce/CheckoutSteps" };

const mockSteps = [
  {
    id: "cart",
    title: "Cart",
    description: "Review your items",
    completed: true,
    current: false,
  },
  {
    id: "shipping",
    title: "Shipping",
    description: "Enter delivery details",
    completed: true,
    current: false,
  },
  {
    id: "payment",
    title: "Payment",
    description: "Choose payment method",
    completed: false,
    current: true,
  },
  {
    id: "confirmation",
    title: "Confirmation",
    description: "Order summary",
    completed: false,
    current: false,
    disabled: true,
  },
];

export const Horizontal = () => {
  const [steps, setSteps] = useState(mockSteps);

  const handleStepClick = (stepId: string) => {
    setSteps((prev) =>
      prev.map((step) => ({
        ...step,
        current: step.id === stepId,
      })),
    );
  };

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="max-w-4xl mx-auto">
        <CheckoutSteps steps={steps} onStepClick={handleStepClick} orientation="horizontal" />
      </div>
    </div>
  );
};

export const Vertical = () => {
  const [steps, setSteps] = useState(mockSteps);

  const handleStepClick = (stepId: string) => {
    setSteps((prev) =>
      prev.map((step) => ({
        ...step,
        current: step.id === stepId,
      })),
    );
  };

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="max-w-md">
        <CheckoutSteps steps={steps} onStepClick={handleStepClick} orientation="vertical" />
      </div>
    </div>
  );
};

export const NonInteractive = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="max-w-4xl mx-auto">
      <CheckoutSteps steps={mockSteps} />
    </div>
  </div>
);

export const AllCompleted = () => {
  const completedSteps = mockSteps.map((step, index) => ({
    ...step,
    completed: true,
    current: index === mockSteps.length - 1,
    disabled: false,
  }));

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="max-w-4xl mx-auto">
        <CheckoutSteps steps={completedSteps} />
      </div>
    </div>
  );
};
