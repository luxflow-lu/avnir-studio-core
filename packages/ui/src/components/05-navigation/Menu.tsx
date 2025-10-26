import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface MenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ children, onClick, disabled }) => (
  <Button
    variant="ghost"
    className="menu-item"
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </Button>
);

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cx("menu", className)} role="menu" {...props}>
      {children}
    </div>
  )
);
Menu.displayName = "Menu";

export const MenuSeparator: React.FC = () => <div className="menu-separator" />;
