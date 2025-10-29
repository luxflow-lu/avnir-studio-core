"use client";

import React from "react";
import { Badge, Button, Card, Layout, Primitives, System } from "@avnir/ui";

// Template de section pour chaque composant
interface ComponentSectionProps {
  name: string;
  category: string;
  description: string;
  variants?: string[];
  preview: React.ReactNode;
}

function ComponentSection({ name, category, description, variants, preview }: ComponentSectionProps) {
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


export default function SystemPage() {

  return (
    <>
      {/* Page Header */}
      <Layout.PageHeader
        title="System Components"
        subtitle="Error pages, theme controls, feature flags, and system utilities. Essential infrastructure components."
      />

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="grid-4">
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>11</h2>
              <p className="text-small" style={{ color: 'var(--muted)' }}>Total Components</p>
            </Card>
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>100%</h2>
              <p className="text-small" style={{ color: 'var(--muted)' }}>TypeScript</p>
            </Card>
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>AA</h2>
              <p className="text-small" style={{ color: 'var(--muted)' }}>Accessible</p>
            </Card>
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>Stable</h2>
              <p className="text-small" style={{ color: 'var(--muted)' }}>Production Ready</p>
            </Card>
          </div>
        </div>
      </section>

      <ComponentSection
        name="ErrorBoundary"
        category="System"
        description="React error boundary for catching and handling errors gracefully. Prevents app crashes."
        variants={["default", "custom-fallback", "with-logging"]}
        preview={
          <div style={{ backgroundColor: 'var(--bg)', padding: 'var(--padding-lg)', borderRadius: 'var(--radius-md)' }}>
            <p className="text-small" style={{ color: 'var(--muted)', textAlign: 'center' }}>
              Error Boundary preview - Wraps components to catch errors and show fallback UI
            </p>
          </div>
        }
      />

      <ComponentSection
        name="LoadingBoundary"
        category="System"
        description="Loading state wrapper with customizable fallback. Shows spinner while content loads."
        variants={["default", "custom-fallback", "with-text"]}
        preview={
          <System.LoadingBoundary loading={true}>
            <p>This content is loading...</p>
          </System.LoadingBoundary>
        }
      />

      <ComponentSection
        name="NotFound404"
        category="System"
        description="404 error page with illustration, description, and navigation buttons."
        variants={["default", "custom-illustration", "no-button"]}
        preview={
          <div style={{ backgroundColor: 'var(--surface)', padding: 'var(--padding-xl)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <h1 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>404</h1>
            <p className="text-small" style={{ color: 'var(--muted)' }}>Page not found</p>
            <Button variant="solid" size="sm" style={{ marginTop: 'var(--margin-md)' }}>Go Home</Button>
          </div>
        }
      />

      <ComponentSection
        name="ServerError500"
        category="System"
        description="500 server error page with error ID, retry button, and report option."
        variants={["default", "with-error-id", "with-report"]}
        preview={
          <div style={{ backgroundColor: 'var(--surface)', padding: 'var(--padding-xl)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <h1 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--error)', marginBottom: 'var(--margin-sm)' }}>500</h1>
            <p className="text-small" style={{ color: 'var(--muted)' }}>Server Error</p>
            <div style={{ display: 'flex', gap: 'var(--gap-sm)', justifyContent: 'center', marginTop: 'var(--margin-md)' }}>
              <Button variant="solid" size="sm">Try Again</Button>
              <Button variant="outline" size="sm">Report</Button>
            </div>
          </div>
        }
      />

      <ComponentSection
        name="BrandSelector"
        category="System"
        description="Brand selector dropdown. Changes the active brand by updating data-brand attribute on HTML."
        variants={["default"]}
        preview={
          <System.BrandSelector />
        }
      />

      <ComponentSection
        name="ThemeToggle"
        category="System"
        description="Theme toggle button with icons. Switches between dark and light modes by updating data-theme attribute on HTML."
        variants={["dark", "light"]}
        preview={
          <System.ThemeToggle />
        }
      />

      <ComponentSection
        name="BrandThemeSelector"
        category="System"
        description="Combined brand and theme selector with two dropdowns. Updates both data-brand and data-theme attributes on HTML."
        variants={["default"]}
        preview={
          <System.BrandThemeSelector />
        }
      />

      <ComponentSection
        name="FeatureFlag"
        category="System"
        description="Conditional rendering based on feature flags. Shows children if flag is enabled."
        variants={["enabled", "disabled", "with-fallback"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
            <System.FeatureFlag flag="new-feature" enabled={true}>
              <Badge variant="success">Feature Enabled</Badge>
            </System.FeatureFlag>
            <System.FeatureFlag flag="beta-feature" enabled={false} fallback={<Badge variant="default">Feature Disabled</Badge>}>
              <Badge variant="success">This won't show</Badge>
            </System.FeatureFlag>
          </div>
        }
      />

      <ComponentSection
        name="PermissionGate"
        category="System"
        description="Permission-based rendering. Shows children only if user has required permissions."
        variants={["single-permission", "multiple-permissions", "require-all"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
            <System.PermissionGate
              permissions={['read', 'write']}
              requiredPermissions="read"
            >
              <Badge variant="success">Has Read Permission</Badge>
            </System.PermissionGate>
            <System.PermissionGate
              permissions={['read']}
              requiredPermissions="admin"
              fallback={<Badge variant="default">No Admin Permission</Badge>}
            >
              <Badge variant="success">This won't show</Badge>
            </System.PermissionGate>
          </div>
        }
      />

      <ComponentSection
        name="ColorSwatch"
        category="System"
        description="Color display component for design system documentation. Shows color with optional label."
        variants={["sm", "md", "lg", "with-label"]}
        preview={
          <div style={{ display: 'flex', gap: 'var(--gap-md)', alignItems: 'flex-start' }}>
            <System.ColorSwatch color="var(--primary)" size="md" label="Primary" />
            <System.ColorSwatch color="var(--success)" size="md" label="Success" />
            <System.ColorSwatch color="var(--error)" size="md" label="Error" />
          </div>
        }
      />

      <ComponentSection
        name="BrandSwatch"
        category="System"
        description="Brand color display with name and description. Used for brand guidelines."
        variants={["default", "with-description"]}
        preview={
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--gap-md)' }}>
            <System.BrandSwatch
              color="var(--primary)"
              name="AVNIR"
              description="Main brand color"
            />
            <System.BrandSwatch
              color="#5cb9f2"
              name="MUZIDEV"
              description="Development brand"
            />
          </div>
        }
      />

      {/* Quick Start CTA */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Ready to Build Robust Systems?"
            subtitle="Start building reliable applications with our system components"
            align="center"
          />
          <div className="section-actions">
            <Button variant="solid" size="lg">Get Started</Button>
            <Button variant="outline" size="lg">View All Components</Button>
          </div>
        </div>
      </section>
    </>
  );
}
