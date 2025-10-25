import React from "react";

import { Stack, HStack, VStack } from "./Stack";

export default { title: "Primitives/Stack" };

export const VStackDefault = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <VStack>
      <div className="bg-[var(--surface)] p-4 rounded">Item 1</div>
      <div className="bg-[var(--surface)] p-4 rounded">Item 2</div>
      <div className="bg-[var(--surface)] p-4 rounded">Item 3</div>
    </VStack>
  </div>
);

export const HStackDefault = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <HStack>
      <div className="bg-[var(--surface)] p-4 rounded">Item 1</div>
      <div className="bg-[var(--surface)] p-4 rounded">Item 2</div>
      <div className="bg-[var(--surface)] p-4 rounded">Item 3</div>
    </HStack>
  </div>
);

export const Gaps = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-6">
    <VStack gap="xs">
      <div className="bg-[var(--surface)] p-2 rounded text-sm">Gap XS</div>
      <div className="bg-[var(--surface)] p-2 rounded text-sm">Gap XS</div>
    </VStack>
    <VStack gap="lg">
      <div className="bg-[var(--surface)] p-2 rounded text-sm">Gap LG</div>
      <div className="bg-[var(--surface)] p-2 rounded text-sm">Gap LG</div>
    </VStack>
  </div>
);
