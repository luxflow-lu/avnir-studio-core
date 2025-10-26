import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="accordion-item">
      <Button
        variant="ghost"
        className={cx("accordion-trigger", isOpen && "accordion-trigger--open")}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
      </Button>
      {isOpen && (
        <div className="accordion-content">
          <div className="accordion-body">{children}</div>
        </div>
      )}
    </div>
  );
};

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cx("accordion", className)} {...props}>
        {children}
      </div>
    );
  }
);
Accordion.displayName = "Accordion";
