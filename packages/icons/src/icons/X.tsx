import * as React from "react";
import type { IconProps } from "./ChevronRight";

export const X: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m18 6-12 12" />
    <path d="m6 6 12 12" />
  </svg>
);
