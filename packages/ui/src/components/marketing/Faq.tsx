"use client";

import * as React from "react";
import { cx } from "../../utils/cx";
import { SectionHeader } from "../layout/SectionHeader";

export type Qa = { q: string; a: string };
export type FaqProps = {
  title?: string;
  subtitle?: string;
  items: Qa[];
  defaultOpen?: number[];
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Faq = React.forwardRef<HTMLElement, FaqProps>(
  ({ title, subtitle, items, defaultOpen = [], className, ...props }, ref) => {
    const [open, setOpen] = React.useState<Set<number>>(new Set(defaultOpen));

    const toggle = (idx: number) => {
      setOpen((prev) => {
        const next = new Set(prev);
        if (next.has(idx)) next.delete(idx);
        else next.add(idx);
        return next;
      });
    };

    return (
      <section
        ref={ref}
        className={cx("section", className)} {...props}
      >
        <div className="container">
          <SectionHeader title={title} subtitle={subtitle} />

          <div className="faq-container">
            {items.map((qa, i) => {
              const id = `faq-item-${i}`;
              const expanded = open.has(i);
              return (
                <div key={i} className="faq-item">
                  <button
                    className="faq-question"
                    aria-controls={`${id}-panel`}
                    aria-expanded={expanded}
                    onClick={() => toggle(i)}
                  >
                    <span>{qa.q}</span>
                    <svg
                      className={cx("faq-icon", expanded && "faq-icon--open")}
                      aria-hidden
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expanded && (
                    <div
                      id={`${id}-panel`}
                      role="region"
                      aria-labelledby={id}
                      className="faq-answer"
                    >
                      <p>{qa.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  },
);
Faq.displayName = "Faq";
