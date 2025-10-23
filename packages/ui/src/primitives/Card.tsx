import * as React from "react";
import clsx from "clsx";

export function Card({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <section
      className={clsx("bg-[var(--surface)] rounded-[var(--radius-lg)] shadow-md p-6", className)}
    >
      {children}
    </section>
  );
}
