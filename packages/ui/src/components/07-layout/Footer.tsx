import * as React from "react";

import { cx } from "../../utils/cx";
import { Button as UIButton } from "../02-form/Button";

// Main Footer component - accepts children for composition
export type FooterProps = React.HTMLAttributes<HTMLElement>;

const FooterRoot = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, children, ...props }, ref) => (
    <footer ref={ref} className={cx("footer", className)} {...props}>
      {children}
    </footer>
  ),
);
FooterRoot.displayName = "Footer";

// Sub-components for composition
const Top: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={cx("footer-top", className)} {...props}>
    <div className="container">
      {children}
    </div>
  </div>
);

const Newsletter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={cx("footer-newsletter", className)} {...props}>
    {children}
  </div>
);

const Logo: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={cx("footer-logo", className)} {...props}>
    {children}
  </div>
);

const Text: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, children, ...props }) => (
  <p className={cx("footer-newsletter-text", className)} {...props}>
    {children}
  </p>
);

// eslint-disable-next-line react/prop-types
const Form: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = ({ className, children, ...props }) => (
  <form className={cx("footer-newsletter-form", className)} {...props}>
    {children}
  </form>
);

// eslint-disable-next-line react/prop-types
const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
  <input className={cx("footer-newsletter-input", className)} {...props} />
);

// eslint-disable-next-line react/prop-types
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, children, ...props }) => (
  <UIButton variant="solid" className={cx("footer-newsletter-button", className)} {...props}>
    {children}
  </UIButton>
);

const Disclaimer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={cx("footer-newsletter-disclaimer", className)} {...props}>
    {children}
  </div>
);

const Links: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={cx("footer-links", className)} {...props}>
    {children}
  </div>
);

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

const Column: React.FC<ColumnProps> = ({ className, title, children, ...props }) => (
  <div className={cx("footer-column", className)} {...props}>
    <h3 className="footer-column-title">{title}</h3>
    <div className="footer-column-links">{children}</div>
  </div>
);

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link: React.FC<LinkProps> = ({ className, children, ...props }) => (
  <a className={cx("footer-link", className)} {...props}>
    {children}
  </a>
);

const Separator: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className="container">
    <div className={cx("footer-separator", className)} {...props} />
  </div>
);

const Bottom: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={cx("footer-bottom", className)} {...props}>
    <div className="container">
      {children}
    </div>
  </div>
);

const Copyright: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={cx("footer-copyright", className)} {...props}>
    {children}
  </div>
);

const Social: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={cx("footer-social", className)} {...props}>
    {children}
  </div>
);

interface SocialLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const SocialLink: React.FC<SocialLinkProps> = ({ className, children, ...props }) => (
  <a className={cx("footer-social-link", className)} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);

// Export with sub-components
export const Footer = Object.assign(FooterRoot, {
  Top,
  Newsletter,
  Logo,
  Text,
  Form,
  Input,
  Button,
  Disclaimer,
  Links,
  Column,
  Link,
  Separator,
  Bottom,
  Copyright,
  Social,
  SocialLink,
});
