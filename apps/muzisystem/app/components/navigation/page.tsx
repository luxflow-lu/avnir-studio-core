"use client";

import React from "react";
import { Badge, Button, Layout, Navigation, Primitives } from "@avnir/ui";

// Template de section pour chaque composant
interface ComponentSectionProps {
  name: string;
  category: string;
  description: string;
  variants?: string[];
  preview: React.ReactNode;
  status?: 'stable' | 'beta' | 'deprecated';
  browsers?: string[];
  a11y?: 'AA' | 'AAA';
}

function ComponentSection({ name, category, description, variants, preview, status = 'stable', browsers = ['all'], a11y = 'AA' }: ComponentSectionProps) {
  const statusConfig = {
    stable: { label: 'Stable', color: 'var(--success)', emoji: '✅' },
    beta: { label: 'Beta', color: 'var(--warning)', emoji: '🧪' },
    deprecated: { label: 'Deprecated', color: 'var(--error)', emoji: '⚠️' }
  };

  const currentStatus = statusConfig[status];

  return (
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ gap: 'var(--gap-xl)', alignItems: 'center' }}>
          {/* Left: Info */}
          <div>
            {/* Category Badge */}
            <div style={{ marginBottom: 'var(--margin-md)' }}>
              <Badge variant="primary" style={{ textTransform: 'uppercase' }}>
                {category}
              </Badge>
            </div>
            <h2 style={{ 
              fontSize: 'var(--text-h2)', 
              fontWeight: 'var(--font-bold)', 
              marginBottom: 'var(--margin-md)',
              color: 'var(--titles)'
            }}>
              {name}
            </h2>
            <p style={{ color: 'var(--muted)', marginBottom: 'var(--margin-md)', lineHeight: 1.6 }}>
              {description}
            </p>
            
            {/* Variants */}
            {variants && variants.length > 0 && (
              <div style={{ marginBottom: 'var(--margin-lg)' }}>
                <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)', fontWeight: 'var(--font-medium)' }}>
                  {variants.length} variant{variants.length > 1 ? 's' : ''} available
                </p>
                <div style={{ display: 'flex', gap: 'var(--gap-xs)', flexWrap: 'wrap' }}>
                  {variants.map((variant, index) => (
                    <Badge key={index} variant="default">
                      {variant}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {/* Status Badges */}
            <div style={{ marginBottom: 'var(--margin-lg)' }}>
              <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)', fontWeight: 'var(--font-medium)' }}>
                Status
              </p>
              <div style={{ display: 'flex', gap: 'var(--gap-sm)', flexWrap: 'wrap', alignItems: 'center' }}>
                <Badge style={{ backgroundColor: currentStatus.color, color: '#0b0b0d' }}>
                  {currentStatus.emoji} {currentStatus.label}
                </Badge>
                
                {browsers.includes('all') ? (
                  <Badge variant="default">
                    🌐 All Browsers
                  </Badge>
                ) : (
                  <Badge variant="default">
                    🌐 {browsers.join(', ')}
                  </Badge>
                )}
                
                <Badge variant="default">
                  ♿ WCAG 2.1 {a11y}
                </Badge>
              </div>
            </div>
            
            <Button variant="outline" size="lg">
              View Full Documentation →
            </Button>
          </div>

          {/* Right: Preview */}
          <Primitives.Box style={{
            padding: 'var(--padding-xl)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border)'
          }}>
            <h3 style={{ marginBottom: 'var(--margin-lg)', fontSize: 'var(--text-small)', fontWeight: 'var(--font-medium)', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Preview</h3>
            {preview}
          </Primitives.Box>
        </div>
      </div>
    </section>
  );
}


export default function NavigationPage() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [activeTab, setActiveTab] = React.useState("overview");
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isPaletteOpen, setIsPaletteOpen] = React.useState(false);

  return (
    <>
      {/* Page Header */}
      <Layout.PageHeader
        title="Navigation Components"
        subtitle="Components for navigation including breadcrumbs, tabs, pagination, and steppers. Built for intuitive user journeys."
      />

      <ComponentSection
        name="Breadcrumbs"
        category="Navigation"
        description="Hierarchical navigation showing the user's location. Helps users understand and navigate the site structure."
        variants={["default", "with-icons", "collapsed"]}
        preview={
          <Navigation.Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Components", href: "/components" },
              { label: "Navigation", href: "/components/navigation" }
            ]}
          />
        }
      />

      <ComponentSection
        name="Tabs"
        category="Navigation"
        description="Tabbed interface for organizing content into separate views. Supports keyboard navigation and accessibility."
        variants={["default", "pills", "underline"]}
        preview={
          <Navigation.Tabs
            tabs={[
              { id: "overview", label: "Overview", content: <p>Overview content</p> },
              { id: "features", label: "Features", content: <p>Features content</p> },
              { id: "pricing", label: "Pricing", content: <p>Pricing content</p> },
              { id: "docs", label: "Documentation", content: <p>Documentation content</p> }
            ]}
            defaultTab="overview"
            onTabChange={(tabId) => setActiveTab(tabId)}
          />
        }
      />

      <ComponentSection
        name="Pagination"
        category="Navigation"
        description="Pagination controls for navigating through pages of content. Includes page numbers, next/previous, and jump to page."
        variants={["default", "simple", "compact"]}
        preview={
          <Navigation.Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={setCurrentPage}
            showFirstLast={true}
          />
        }
      />

      <ComponentSection
        name="Stepper"
        category="Navigation"
        description="Step-by-step progress indicator for multi-step processes. Shows current step, completed steps, and upcoming steps."
        variants={["horizontal", "vertical", "numbered"]}
        preview={
          <div>
            <Navigation.Stepper
              currentStep={currentStep}
              steps={[
                { label: "Account Info", description: "Basic details" },
                { label: "Preferences", description: "Your settings" },
                { label: "Confirmation", description: "Review & submit" }
              ]}
            />
            <div style={{ display: 'flex', gap: 'var(--gap-sm)', marginTop: 'var(--margin-lg)' }}>
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              <Button
                variant="solid"
                onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
                disabled={currentStep === 3}
              >
                Next
              </Button>
            </div>
          </div>
        }
      />

      <ComponentSection
        name="Menu"
        category="Navigation"
        description="Vertical navigation menu with sections and nested items. Perfect for sidebars and navigation panels."
        variants={["default", "collapsible", "with-icons"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)' }}>
            <Button variant="solid">Dashboard</Button>
            <Button variant="ghost">Projects</Button>
            <Button variant="ghost">Assets</Button>
            <Button variant="ghost">Settings</Button>
          </div>
        }
      />

      <ComponentSection
        name="CommandK"
        category="Navigation"
        description="Command palette for quick actions and navigation. Keyboard-first interface with search and shortcuts."
        variants={["default", "with-sections", "with-icons"]}
        preview={
          <div style={{ textAlign: 'center' }}>
            <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-md)' }}>
              Press <kbd style={{ padding: 'var(--padding-xs)', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}>⌘K</kbd> to open
            </p>
            <Button variant="outline">
              Open Command Palette
            </Button>
          </div>
        }
      />

      <ComponentSection
        name="CommandPalette"
        category="Navigation"
        description="Advanced command palette with categories, recent items, and custom actions. Perfect for power users."
        variants={["default", "with-history", "with-shortcuts"]}
        preview={
          <div>
            <Button onClick={() => setIsPaletteOpen(true)}>
              Open Command Palette
            </Button>
            <Navigation.CommandPalette
              open={isPaletteOpen}
              onClose={() => setIsPaletteOpen(false)}
              commands={[
                { id: "new-project", label: "New Project", onExecute: () => console.log('New project') },
                { id: "open-settings", label: "Open Settings", onExecute: () => console.log('Settings') },
                { id: "export-data", label: "Export Data", onExecute: () => console.log('Export') }
              ]}
            />
          </div>
        }
      />

      <ComponentSection
        name="ScrollSpy"
        category="Navigation"
        description="Automatically highlights navigation items based on scroll position. Perfect for documentation and long pages."
        variants={["default", "sticky", "with-progress"]}
        preview={
          <Navigation.ScrollSpy
            items={[
              { id: "intro", label: "Introduction" },
              { id: "features", label: "Features" },
              { id: "installation", label: "Installation" },
              { id: "usage", label: "Usage" }
            ]}
          />
        }
      />
    </>
  );
}
