"use client";
import { useEffect } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const html = document.documentElement;
    if (!html.getAttribute("data-brand")) html.setAttribute("data-brand", "muzidev");
    if (!html.getAttribute("data-theme")) html.setAttribute("data-theme", "dark");
  }, []);
  return children as any;
}
