import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface ScrollSpyItem {
  id: string;
  label: string;
}

export interface ScrollSpyProps extends React.HTMLAttributes<HTMLDivElement> {
  items: ScrollSpyItem[];
}

export const ScrollSpy = React.forwardRef<HTMLDivElement, ScrollSpyProps>(
  ({ className, items, ...props }, ref) => {
    const [activeId, setActiveId] = React.useState<string>("");

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "-20% 0px -80% 0px" }
      );

      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    }, [items]);

    const scrollTo = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    return (
      <nav ref={ref} className={cx("scrollspy", className)} {...props}>
        {items.map((item) => (
          <Button
            key={item.id}
            type="button"
            variant="ghost"
            className={cx(
              "scrollspy-item",
              activeId === item.id && "scrollspy-item--active"
            )}
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </nav>
    );
  }
);
ScrollSpy.displayName = "ScrollSpy";
