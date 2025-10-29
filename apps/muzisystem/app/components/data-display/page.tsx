"use client";

import React from "react";
import { Badge, Button, Card, DataDisplay, Layout, Primitives } from "@avnir/ui";

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


export default function DataDisplayPage() {
  const [progress, setProgress] = React.useState(65);

  return (
    <>
      {/* Page Header */}
      <Layout.PageHeader
        title="Data Display Components"
        subtitle="Components for displaying and organizing data including tables, badges, avatars, and progress indicators. Built for clarity and usability."
      />

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="grid-4">
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>16</h2>
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
        name="Accordion"
        category="Data Display"
        description="Collapsible content panels for organizing information. Supports single or multiple expanded items with smooth animations."
        variants={["single", "multiple", "bordered", "ghost"]}
        preview={
          <DataDisplay.Accordion>
            <DataDisplay.AccordionItem title="What is AVNIR?" defaultOpen>
              AVNIR is a comprehensive design system built for modern web applications with a focus on accessibility and performance.
            </DataDisplay.AccordionItem>
            <DataDisplay.AccordionItem title="How do I get started?">
              Install the package with npm or pnpm, import the components you need, and start building.
            </DataDisplay.AccordionItem>
            <DataDisplay.AccordionItem title="Is it customizable?">
              Yes! All components support custom styling through CSS variables and className props.
            </DataDisplay.AccordionItem>
          </DataDisplay.Accordion>
        }
      />

      <ComponentSection
        name="Avatar"
        category="Data Display"
        description="User profile images with fallback initials. Supports different sizes and shapes for various use cases."
        variants={["sm", "md", "lg", "xl", "circle", "square"]}
        preview={
          <div style={{ display: 'flex', gap: 'var(--gap-md)', alignItems: 'center', flexWrap: 'wrap' }}>
            <DataDisplay.Avatar size="sm" fallback="JD" />
            <DataDisplay.Avatar size="md" fallback="AS" />
            <DataDisplay.Avatar size="lg" fallback="MZ" />
            <DataDisplay.Avatar size="xl" fallback="AB" />
          </div>
        }
      />

      <ComponentSection
        name="Badge"
        category="Data Display"
        description="Small labels for status, categories, and metadata. Multiple variants for different semantic meanings."
        variants={["default", "primary", "secondary", "success", "warning", "destructive"]}
        preview={
          <div style={{ display: 'flex', gap: 'var(--gap-sm)', flexWrap: 'wrap' }}>
            <DataDisplay.Badge variant="default">Default</DataDisplay.Badge>
            <DataDisplay.Badge variant="primary">Primary</DataDisplay.Badge>
            <DataDisplay.Badge variant="secondary">Secondary</DataDisplay.Badge>
            <DataDisplay.Badge variant="success">Success</DataDisplay.Badge>
            <DataDisplay.Badge variant="warning">Warning</DataDisplay.Badge>
            <DataDisplay.Badge variant="destructive">Destructive</DataDisplay.Badge>
          </div>
        }
      />

      <ComponentSection
        name="EmptyState"
        category="Data Display"
        description="Placeholder for empty data states. Guides users with helpful messages and actions."
        variants={["default", "with-icon", "with-action", "compact"]}
        preview={
          <DataDisplay.EmptyState
            title="No data found"
            description="Get started by creating your first item"
            action={<Button variant="solid" size="sm">Create Item</Button>}
          />
        }
      />

      <ComponentSection
        name="LogoPlaceholder"
        category="Data Display"
        description="Placeholder for brand logos with fallback text. Useful for partner logos and integrations."
        variants={["sm", "md", "lg", "xl"]}
        preview={
          <div style={{ display: 'flex', gap: 'var(--gap-md)', flexWrap: 'wrap', alignItems: 'center' }}>
            <DataDisplay.LogoPlaceholder size="sm">AVNIR</DataDisplay.LogoPlaceholder>
            <DataDisplay.LogoPlaceholder size="md">MUZIDEV</DataDisplay.LogoPlaceholder>
            <DataDisplay.LogoPlaceholder size="lg">MUZIPICS</DataDisplay.LogoPlaceholder>
          </div>
        }
      />

      <ComponentSection
        name="Progress"
        category="Data Display"
        description="Visual indicator for task completion and loading states. Supports determinate and indeterminate modes."
        variants={["linear", "with-label", "sm", "md", "lg"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-lg)' }}>
            <div>
              <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)' }}>Upload progress: {progress}%</p>
              <DataDisplay.Progress value={progress} max={100} showValue />
            </div>
            <div style={{ display: 'flex', gap: 'var(--gap-sm)' }}>
              <Button variant="outline" size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>-10%</Button>
              <Button variant="outline" size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>+10%</Button>
            </div>
          </div>
        }
      />

      <ComponentSection
        name="Skeleton"
        category="Data Display"
        description="Loading placeholder that mimics content structure. Improves perceived performance during data fetching."
        variants={["text", "title", "avatar", "button", "card", "circle"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
            <DataDisplay.Skeleton width="100%" height="20px" />
            <DataDisplay.Skeleton width="80%" height="20px" />
            <DataDisplay.Skeleton width="60%" height="20px" />
            <div style={{ display: 'flex', gap: 'var(--gap-md)', alignItems: 'center' }}>
              <DataDisplay.Skeleton shape="circle" width="40px" height="40px" />
              <div style={{ flex: 1 }}>
                <DataDisplay.Skeleton width="100%" height="16px" />
              </div>
            </div>
          </div>
        }
      />

      <ComponentSection
        name="Spinner"
        category="Data Display"
        description="Animated loading indicator for async operations. Multiple sizes for different contexts."
        variants={["xs", "sm", "md", "lg", "xl", "primary", "secondary"]}
        preview={
          <div style={{ display: 'flex', gap: 'var(--gap-xl)', alignItems: 'center' }}>
            <DataDisplay.Spinner size="sm" />
            <DataDisplay.Spinner size="md" />
            <DataDisplay.Spinner size="lg" />
          </div>
        }
      />

      <ComponentSection
        name="Table"
        category="Data Display"
        description="Structured data display with sorting and filtering. Responsive and accessible."
        variants={["default", "striped", "bordered", "compact"]}
        preview={
          <DataDisplay.Table
            columns={[
              { key: 'name', title: 'Name', sortable: true },
              { key: 'status', title: 'Status', sortable: false },
              { key: 'role', title: 'Role', sortable: true }
            ]}
            data={[
              { name: 'John Doe', status: 'Active', role: 'Admin' },
              { name: 'Jane Smith', status: 'Pending', role: 'User' },
              { name: 'Bob Johnson', status: 'Inactive', role: 'User' }
            ]}
          />
        }
      />

      <ComponentSection
        name="Carousel"
        category="Data Display"
        description="Image and content slider with navigation controls. Supports autoplay and touch gestures."
        variants={["default", "autoplay", "with-indicators"]}
        preview={
          <DataDisplay.Carousel>
            <div style={{ height: '200px', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-md)' }}>
              <p style={{ color: 'var(--bg)', fontSize: 'var(--text-h3)', fontWeight: 'var(--font-bold)' }}>Slide 1</p>
            </div>
            <div style={{ height: '200px', backgroundColor: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-md)' }}>
              <p style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--font-bold)' }}>Slide 2</p>
            </div>
            <div style={{ height: '200px', backgroundColor: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--font-bold)' }}>Slide 3</p>
            </div>
          </DataDisplay.Carousel>
        }
      />

      <ComponentSection
        name="Timeline"
        category="Data Display"
        description="Chronological display of events and activities. Perfect for activity feeds and process steps."
        variants={["vertical", "with-icons", "with-dates"]}
        preview={
          <DataDisplay.Timeline>
            <DataDisplay.TimelineItem title="Project Created" date="2 hours ago" />
            <DataDisplay.TimelineItem title="First Commit" description="Initial setup and configuration" date="1 hour ago" />
            <DataDisplay.TimelineItem title="Deployed to Production" description="Successfully deployed version 1.0" date="30 minutes ago" />
          </DataDisplay.Timeline>
        }
      />

      <ComponentSection
        name="Tree"
        category="Data Display"
        description="Hierarchical data structure with expandable nodes. Ideal for file systems and navigation."
        variants={["default", "with-icons", "selectable"]}
        preview={
          <DataDisplay.Tree
            data={[
              {
                id: '1',
                label: 'src',
                children: [
                  {
                    id: '2',
                    label: 'components',
                    children: [
                      { id: '3', label: 'Button.tsx' },
                      { id: '4', label: 'Input.tsx' }
                    ]
                  },
                  {
                    id: '5',
                    label: 'utils',
                    children: [
                      { id: '6', label: 'helpers.ts' }
                    ]
                  }
                ]
              },
              { id: '7', label: 'package.json' }
            ]}
          />
        }
      />

      <ComponentSection
        name="DataTable"
        category="Data Display"
        description="Advanced table with built-in sorting, filtering, and pagination. Enterprise-grade data management."
        variants={["default", "sortable", "with-actions"]}
        preview={
          <DataDisplay.DataTable
            columns={[
              { key: 'name', label: 'Name', sortable: true },
              { key: 'email', label: 'Email', sortable: true },
              { key: 'role', label: 'Role', sortable: false }
            ]}
            data={[
              { name: 'Alice Brown', email: 'alice@example.com', role: 'Admin' },
              { name: 'Charlie Davis', email: 'charlie@example.com', role: 'User' },
              { name: 'Diana Evans', email: 'diana@example.com', role: 'Editor' }
            ]}
          />
        }
      />

      <ComponentSection
        name="PermissionBadge"
        category="Data Display"
        description="Visual indicator for user permissions and access levels. Color-coded for quick recognition."
        variants={["none", "read", "write", "admin", "owner"]}
        preview={
          <div style={{ display: 'flex', gap: 'var(--gap-sm)', flexWrap: 'wrap' }}>
            <DataDisplay.PermissionBadge level="read" />
            <DataDisplay.PermissionBadge level="write" />
            <DataDisplay.PermissionBadge level="admin" />
            <DataDisplay.PermissionBadge level="owner" />
          </div>
        }
      />

      <ComponentSection
        name="ProjectCard"
        category="Data Display"
        description="Card component for displaying project information. Includes thumbnail, title, and metadata."
        variants={["artiste", "beatmaker", "studio", "producteur"]}
        preview={
          <DataDisplay.ProjectCard
            title="AVNIR Design System"
            description="A comprehensive design system for modern web applications"
            type="studio"
            status="active"
            lastModified={new Date('2024-10-29')}
          />
        }
      />

      <ComponentSection
        name="TypedBadge"
        category="Data Display"
        description="Type-safe badge component with predefined types. Ensures consistency across the application."
        variants={["artist", "studio", "beatmaker", "producer", "draft", "archived"]}
        preview={
          <div style={{ display: 'flex', gap: 'var(--gap-sm)', flexWrap: 'wrap' }}>
            <DataDisplay.TypedBadge type="artist">Artist</DataDisplay.TypedBadge>
            <DataDisplay.TypedBadge type="studio">Studio</DataDisplay.TypedBadge>
            <DataDisplay.TypedBadge type="beatmaker">Beatmaker</DataDisplay.TypedBadge>
            <DataDisplay.TypedBadge type="producer">Producer</DataDisplay.TypedBadge>
          </div>
        }
      />

      {/* Quick Start CTA */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Ready to Display Data?"
            subtitle="Start organizing and presenting information with our comprehensive data display components"
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
