"use client";

import React from "react";
import { Badge, Button, Card, Layout, Primitives } from "@avnir/ui";

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


export default function LayoutPage() {
  return (
    <>
      {/* Page Header */}
      <Layout.PageHeader
        title="Layout Components"
        subtitle="Structural components for organizing page content including headers, footers, grids, and navigation. Built for flexibility and consistency."
      />

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="grid-4">
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>10</h2>
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
        name="PageHeader"
        category="Layout"
        description="Page-level header with title and subtitle. Supports different alignments for various page types."
        variants={["left", "center", "right"]}
        preview={
          <Layout.PageHeader
            title="Welcome to AVNIR"
            subtitle="Build better products faster with our design system"
            align="center"
          />
        }
      />

      <ComponentSection
        name="SectionHeader"
        category="Layout"
        description="Section-level header for organizing content blocks. Includes optional actions slot."
        variants={["left", "center", "right", "with-actions"]}
        preview={
          <Layout.SectionHeader
            title="Featured Components"
            subtitle="Explore our most popular components"
            align="center"
            actions={<Button variant="outline" size="sm">View All</Button>}
          />
        }
      />

      <ComponentSection
        name="Navbar"
        category="Layout"
        description="Top navigation bar with logo, links, and actions. Responsive with mobile menu support."
        variants={["default", "with-logo", "with-actions", "mobile-menu"]}
        preview={
          <Layout.Navbar
            logo={<div style={{ fontWeight: 'var(--font-bold)', fontSize: 'var(--text-h4)' }}>AVNIR</div>}
            links={[
              { label: 'Home', href: '/', active: true },
              { label: 'Components', href: '/components' },
              { label: 'Docs', href: '/docs' }
            ]}
            actions={<Button variant="solid" size="sm">Get Started</Button>}
          />
        }
      />

      <ComponentSection
        name="Footer"
        category="Layout"
        description="Page footer with composition pattern. Build custom footers with sub-components."
        variants={["simple", "with-newsletter", "with-sections", "full"]}
        preview={
          <div style={{ backgroundColor: 'var(--surface)', padding: 'var(--padding-lg)', borderRadius: 'var(--radius-md)' }}>
            <p className="text-small" style={{ color: 'var(--muted)', textAlign: 'center' }}>
              Footer preview - Composition pattern with Logo, Newsletter, Sections, and Bottom components
            </p>
          </div>
        }
      />

      <ComponentSection
        name="Sidebar"
        category="Layout"
        description="Collapsible sidebar navigation with nested items. Perfect for documentation and admin layouts."
        variants={["default", "collapsed", "with-icons", "nested"]}
        preview={
          <Layout.Sidebar
            items={[
              { id: '1', label: 'Getting Started', active: true },
              { id: '2', label: 'Components', children: [
                { id: '2-1', label: 'Primitives' },
                { id: '2-2', label: 'Form' }
              ]},
              { id: '3', label: 'Guides' }
            ]}
          />
        }
      />

      <ComponentSection
        name="DocLayout"
        category="Layout"
        description="Documentation layout with sidebar and content area. Optimized for reading experience."
        variants={["with-sidebar", "full-width"]}
        preview={
          <div style={{ height: '200px', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <Layout.DocLayout
              sidebar={
                <div style={{ padding: 'var(--padding-md)', backgroundColor: 'var(--surface)' }}>
                  <p className="text-small" style={{ color: 'var(--muted)' }}>Sidebar</p>
                </div>
              }
            >
              <div style={{ padding: 'var(--padding-md)' }}>
                <p className="text-small" style={{ color: 'var(--muted)' }}>Main Content</p>
              </div>
            </Layout.DocLayout>
          </div>
        }
      />

      <ComponentSection
        name="Grid"
        category="Layout"
        description="Flexible grid system with responsive columns and gap options. Includes GridItem for spanning."
        variants={["1-col", "2-col", "3-col", "4-col", "6-col", "12-col"]}
        preview={
          <Layout.Grid cols={3} gap="md">
            <Layout.GridItem>
              <div style={{ padding: 'var(--padding-md)', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                <p className="text-small">Item 1</p>
              </div>
            </Layout.GridItem>
            <Layout.GridItem>
              <div style={{ padding: 'var(--padding-md)', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                <p className="text-small">Item 2</p>
              </div>
            </Layout.GridItem>
            <Layout.GridItem>
              <div style={{ padding: 'var(--padding-md)', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                <p className="text-small">Item 3</p>
              </div>
            </Layout.GridItem>
          </Layout.Grid>
        }
      />

      <ComponentSection
        name="Masonry"
        category="Layout"
        description="Pinterest-style masonry layout for dynamic content heights. Responsive column count."
        variants={["2-col", "3-col", "4-col", "sm-gap", "md-gap", "lg-gap"]}
        preview={
          <Layout.Masonry columns={3} gap="md">
            <div style={{ padding: 'var(--padding-md)', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-sm)', height: '100px' }}>
              <p className="text-small">Item 1</p>
            </div>
            <div style={{ padding: 'var(--padding-md)', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-sm)', height: '150px' }}>
              <p className="text-small">Item 2</p>
            </div>
            <div style={{ padding: 'var(--padding-md)', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-sm)', height: '120px' }}>
              <p className="text-small">Item 3</p>
            </div>
          </Layout.Masonry>
        }
      />

      <ComponentSection
        name="Split"
        category="Layout"
        description="Two-column split layout with configurable ratios. Supports horizontal and vertical directions."
        variants={["1:1", "1:2", "2:1", "1:3", "3:1", "horizontal", "vertical"]}
        preview={
          <Layout.Split
            ratio="1:1"
            direction="horizontal"
            left={
              <div style={{ padding: 'var(--padding-md)', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-sm)', height: '150px' }}>
                <p className="text-small" style={{ color: 'var(--muted)' }}>Left Content</p>
              </div>
            }
            right={
              <div style={{ padding: 'var(--padding-md)', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-sm)', height: '150px' }}>
                <p className="text-small" style={{ color: 'var(--muted)' }}>Right Content</p>
              </div>
            }
          />
        }
      />

      <ComponentSection
        name="ProjectHeader"
        category="Layout"
        description="Specialized header for project pages with type, status, and action buttons."
        variants={["artiste", "beatmaker", "studio", "producteur", "draft", "active", "archived"]}
        preview={
          <Layout.ProjectHeader
            title="My Music Project"
            type="studio"
            description="A comprehensive music production project"
            status="active"
            lastModified={new Date('2024-10-29')}
            collaborators={3}
          />
        }
      />

      {/* Quick Start CTA */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Ready to Build Layouts?"
            subtitle="Start organizing your pages with our flexible layout components"
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
