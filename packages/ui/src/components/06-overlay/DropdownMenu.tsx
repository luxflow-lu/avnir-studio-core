import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right";
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  children,
  align = "left",
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={ref} className="dropdown-menu">
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div className={cx("dropdown-menu-content", `dropdown-menu-content--${align}`)}>
          {children}
        </div>
      )}
    </div>
  );
};

export interface DropdownMenuItemProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children,
  disabled,
  onClick,
}) => (
  <Button
    variant="ghost"
    className="dropdown-menu-item"
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </Button>
);

export const DropdownMenuSeparator: React.FC = () => (
  <div className="dropdown-menu-separator" />
);
