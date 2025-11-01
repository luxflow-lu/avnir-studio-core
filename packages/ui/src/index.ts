/**
 * AVNIR Design System - Component Library
 * 
 * Organized by layer (01-13) from base to specialized
 */

// ============================================
// NAMESPACE EXPORTS (for namespaced usage)
// ============================================

// 01 - Primitives (Base components)
export * as Primitives from "./components/01-primitives";

// 02 - Form (Form controls)
export * as Form from "./components/02-form";

// 03 - Data Display (Tables, badges, etc.)
export * as DataDisplay from "./components/03-data-display";

// 04 - Feedback (Alerts, toasts, etc.)
export * as Feedback from "./components/04-feedback";

// 05 - Navigation (Menus, breadcrumbs, etc.)
export * as Navigation from "./components/05-navigation";

// 06 - Overlay (Modals, drawers, etc.)
export * as Overlay from "./components/06-overlay";

// 07 - Layout (Navbar, footer, etc.)
export * as Layout from "./components/07-layout";

// 08 - Content (Prose, markdown, etc.)
export * as Content from "./components/08-content";

// 09 - Marketing (Hero, features, etc.)
export * as Marketing from "./components/09-marketing";

// 10 - E-commerce (Products, cart, etc.)
export * as Ecommerce from "./components/10-ecommerce";

// 11 - SaaS (Dashboard, metrics, etc.)
export * as Saas from "./components/11-saas";

// 12 - System (Error pages, theme, etc.)
export * as System from "./components/12-system";

// 13 - AI (Prompt editors, model selectors, etc.)
export * as AI from "./components/13-ai";

// 14 - Media (Asset management, media players, etc.)
export * as Media from "./components/14-media";

// 15 - Auth (Authentication, login, register, etc.)
export * as Auth from "./components/15-auth";

// 16 - Features (Specialized features like audio tools)
export * as Features from "./components/16-features";

// Templates
export * as Templates from "./components/templates";

// ============================================
// DIRECT EXPORTS (for backward compatibility)
// ============================================

// Most commonly used components exported directly for convenience
// Use namespace imports (Form.Button, Primitives.Card) for better tree-shaking
export { Button } from "./components/02-form/Button";
export { Input } from "./components/02-form/Input";
export { Card, CardContent, CardTitle, CardDescription, CardFooter, CardHeader, CardImage } from "./components/01-primitives/Card";
export { Badge } from "./components/03-data-display/Badge";
export { StandardFooter } from "./components/07-layout/StandardFooter";

// ============================================
// UTILITIES & HOOKS
// ============================================

export * from "./hooks";
export * from "./utils";

// ============================================
// EXTERNAL PACKAGES
// ============================================
// Note: @avnir/icons and @avnir/brandkit should be imported directly by apps
// export * from "@avnir/icons";
// export * from "@avnir/brandkit";
