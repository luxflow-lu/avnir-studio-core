import React from "react";
import { Avatar } from "./Avatar";

export default { title: "Data/Avatar" };

export const Sizes = () => (
  <div className="bg-[var(--bg)] text-white p-6 flex items-center gap-4">
    <Avatar size="sm" fallback="SM" />
    <Avatar size="md" fallback="MD" />
    <Avatar size="lg" fallback="LG" />
    <Avatar size="xl" fallback="XL" />
  </div>
);

export const WithImages = () => (
  <div className="bg-[var(--bg)] text-white p-6 flex items-center gap-4">
    <Avatar
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      alt="John Doe"
    />
    <Avatar
      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      alt="Jane Smith"
    />
    <Avatar src="invalid-url" alt="Fallback User" />
  </div>
);

export const Fallbacks = () => (
  <div className="bg-[var(--bg)] text-white p-6 flex items-center gap-4">
    <Avatar alt="John Doe" />
    <Avatar fallback="JS" />
    <Avatar fallback="AB" />
    <Avatar />
  </div>
);
