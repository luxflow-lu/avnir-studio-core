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


export default function PrimitivesPage() {
  return (
    <>
      <Layout.PageHeader
        title="Primitives"
        subtitle="Low-level building blocks for creating complex UI components. These primitives provide the foundation for your design system."
      />

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="grid-4">
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>21</h2>
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
        name="AspectRatio"
        category="Layout"
        description="Maintain consistent aspect ratios for media content. Perfect for images, videos, and embedded content that needs to preserve its dimensions across different screen sizes."
        variants={['16:9', '4:3', '1:1', '21:9']}
        preview={
          <div style={{ display: 'flex', gap: 'var(--gap-md)', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 200px' }}>
              <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)' }}>16:9 Ratio</p>
              <Primitives.AspectRatio ratio="16/9">
                <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-sm)' }}>
                  <span className="text-small" style={{ color: '#0b0b0d', fontWeight: 'var(--font-semibold)' }}>16:9</span>
                </div>
              </Primitives.AspectRatio>
            </div>
            <div style={{ flex: '0 1 150px' }}>
              <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)' }}>1:1 Ratio</p>
              <Primitives.AspectRatio ratio="1/1">
                <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-sm)' }}>
                  <span className="text-small" style={{ color: '#0b0b0d', fontWeight: 'var(--font-semibold)' }}>1:1</span>
                </div>
              </Primitives.AspectRatio>
            </div>
          </div>
        }
      />

      <ComponentSection
        name="Blockquote"
        category="Typography"
        description="Display quoted text with proper styling and attribution. Perfect for testimonials, citations, and highlighted quotes."
        preview={
          <Primitives.Blockquote>
            "Stay hungry, stay foolish." — Steve Jobs
          </Primitives.Blockquote>
        }
      />

      <ComponentSection
        name="Box"
        category="Layout"
        description="Polymorphic container component for flexible layouts. Can render as any HTML element while maintaining consistent styling."
        variants={['div', 'article', 'section', 'main', 'aside']}
        preview={
          <div style={{ display: 'flex', gap: 'var(--gap-md)', flexWrap: 'wrap' }}>
            <Primitives.Box as="div" style={{ padding: 'var(--padding-md)', backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-sm)', color: '#0b0b0d' }}>Box as div</Primitives.Box>
            <Primitives.Box as="article" style={{ padding: 'var(--padding-md)', backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-sm)', color: '#0b0b0d' }}>Box as article</Primitives.Box>
          </div>
        }
      />

      <ComponentSection
        name="Card"
        category="Layout"
        description="Container for grouping related content with elevation. Perfect for displaying structured information."
        preview={
          <Primitives.Card style={{ padding: 'var(--padding-md)', backgroundColor: 'var(--surface)' }}>
            <h4>Card Title</h4>
            <p className="text-small" style={{ color: 'var(--muted)' }}>Card content goes here with proper spacing and styling.</p>
          </Primitives.Card>
        }
      />

      <ComponentSection
        name="Center"
        category="Layout"
        description="Center content horizontally and vertically. Useful for centering elements within a container."
        preview={
          <div style={{ height: '200px', border: '1px dashed var(--border)', borderRadius: 'var(--radius-sm)' }}>
            <Primitives.Center>
              <div style={{ padding: 'var(--padding-sm)', backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-sm)', color: '#0b0b0d' }}>Centered</div>
            </Primitives.Center>
          </div>
        }
      />

      <ComponentSection
        name="Code"
        category="Typography"
        description="Display inline code snippets with monospace font. Perfect for technical documentation."
        preview={
          <p>Install with <Primitives.Code>npm install @avnir/ui</Primitives.Code> to get started.</p>
        }
      />

      <ComponentSection
        name="Container"
        category="Layout"
        description="Responsive container with max-width constraints. Centers content and adds horizontal padding."
        preview={
          <div style={{ border: '1px dashed var(--border)', padding: 'var(--padding-sm)', borderRadius: 'var(--radius-sm)' }}>
            <Primitives.Container style={{ backgroundColor: 'var(--primary)', padding: 'var(--padding-md)', borderRadius: 'var(--radius-sm)', color: '#0b0b0d' }}>
              Container content
            </Primitives.Container>
          </div>
        }
      />

      <ComponentSection
        name="Divider"
        category="Layout"
        description="Visual separator between content sections. Helps organize and structure your layout."
        preview={
          <div>
            <p>Content above</p>
            <Primitives.Divider />
            <p>Content below</p>
          </div>
        }
      />

      <ComponentSection
        name="Flex"
        category="Layout"
        description="Flexbox container with alignment utilities. Simplifies complex layouts with intuitive props."
        variants={['justify: start/center/end/between/around', 'align: start/center/end/stretch']}
        preview={
          <Primitives.Flex gap="md" justify="between">
            <div style={{ padding: 'var(--padding-sm)', backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-sm)', color: '#0b0b0d' }}>Item 1</div>
            <div style={{ padding: 'var(--padding-sm)', backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-sm)', color: '#0b0b0d' }}>Item 2</div>
            <div style={{ padding: 'var(--padding-sm)', backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-sm)', color: '#0b0b0d' }}>Item 3</div>
          </Primitives.Flex>
        }
      />

      <ComponentSection
        name="Heading"
        category="Typography"
        description="Semantic heading component with size variants. Maintains proper hierarchy and accessibility."
        variants={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']}
        preview={
          <div style={{ display: 'grid', gap: 'var(--gap-sm)' }}>
            <Primitives.Heading as="h1">Heading H1</Primitives.Heading>
            <Primitives.Heading as="h2">Heading H2</Primitives.Heading>
            <Primitives.Heading as="h3">Heading H3</Primitives.Heading>
          </div>
        }
      />

      <ComponentSection
        name="Icon"
        category="Media"
        description="SVG icon wrapper with size and color props. Integrates with @avnir/icons library."
        variants={['sm', 'md', 'lg']}
        preview={
          <div style={{ display: 'flex', gap: 'var(--gap-md)', alignItems: 'center' }}>
            <Primitives.Icon size="sm" style={{ color: 'var(--primary)' }}>🎨</Primitives.Icon>
            <Primitives.Icon size="md" style={{ color: 'var(--primary)' }}>🚀</Primitives.Icon>
            <Primitives.Icon size="lg" style={{ color: 'var(--primary)' }}>⭐</Primitives.Icon>
          </div>
        }
      />

      <ComponentSection
        name="Image"
        category="Media"
        description="Optimized image component with lazy loading. Supports aspect ratios and responsive sizing."
        preview={
          <Primitives.Image
            src="https://via.placeholder.com/300x200"
            alt="Placeholder"
            style={{ borderRadius: 'var(--radius-sm)', maxWidth: '100%', width: '300px' }}
          />
        }
      />

      <ComponentSection
        name="Kbd"
        category="Typography"
        description="Display keyboard shortcuts and key combinations. Perfect for documentation and tutorials."
        preview={
          <p>Press <Primitives.Kbd>Ctrl</Primitives.Kbd> + <Primitives.Kbd>C</Primitives.Kbd> to copy</p>
        }
      />

      <ComponentSection
        name="Link"
        category="Navigation"
        description="Accessible link component with hover states. Supports external and internal navigation."
        variants={['internal', 'external']}
        preview={
          <div style={{ display: 'grid', gap: 'var(--gap-md)' }}>
            <div>
              <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)' }}>Internal Link</p>
              <Primitives.Link href="/components">Go to Components</Primitives.Link>
            </div>
            <div>
              <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)' }}>External Link</p>
              <Primitives.Link href="https://avnir.studio" external>Visit AVNIR Studio →</Primitives.Link>
            </div>
            <div>
              <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)' }}>Hover Effect</p>
              <Primitives.Link href="/components">Link with Hover</Primitives.Link>
            </div>
          </div>
        }
      />

      <ComponentSection
        name="List"
        category="Typography"
        description="Ordered and unordered list components. Maintains consistent spacing and styling."
        variants={['bulleted', 'numbered', 'sm', 'md', 'lg']}
        preview={
          <div style={{ display: 'grid', gap: 'var(--gap-lg)' }}>
            <div>
              <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)' }}>Bulleted List</p>
              <Primitives.List>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
              </Primitives.List>
            </div>
            <div>
              <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)' }}>Numbered List</p>
              <Primitives.List variant="numbered">
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
              </Primitives.List>
            </div>
          </div>
        }
      />

      <ComponentSection
        name="Separator"
        category="Layout"
        description="Horizontal or vertical divider with variants. More flexible than Divider component."
        preview={
          <div>
            <p>Section 1</p>
            <Primitives.Separator />
            <p>Section 2</p>
          </div>
        }
      />

      <ComponentSection
        name="Spacer"
        category="Layout"
        description="Flexible spacing component for layouts. Pushes elements apart in flex containers."
        preview={
          <Primitives.Flex>
            <div style={{ padding: 'var(--padding-sm)', backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-sm)', color: '#0b0b0d' }}>Left</div>
            <Primitives.Spacer />
            <div style={{ padding: 'var(--padding-sm)', backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-sm)', color: '#0b0b0d' }}>Right</div>
          </Primitives.Flex>
        }
      />

      <ComponentSection
        name="Stack"
        category="Layout"
        description="Vertical or horizontal stack with consistent spacing. Simplifies layout creation."
        variants={['vertical', 'horizontal', 'gap: xs/sm/md/lg/xl']}
        preview={
          <Primitives.Stack gap="md">
            <div style={{ padding: 'var(--padding-sm)', backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-sm)', color: '#0b0b0d' }}>Item 1</div>
            <div style={{ padding: 'var(--padding-sm)', backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-sm)', color: '#0b0b0d' }}>Item 2</div>
            <div style={{ padding: 'var(--padding-sm)', backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-sm)', color: '#0b0b0d' }}>Item 3</div>
          </Primitives.Stack>
        }
      />

      <ComponentSection
        name="StatusDot"
        category="Feedback"
        description="Visual indicator for status and state. Supports multiple color variants."
        variants={['online', 'away', 'busy', 'offline']}
        preview={
          <div style={{ display: 'grid', gap: 'var(--gap-md)' }}>
            <div style={{ display: 'flex', gap: 'var(--gap-sm)', alignItems: 'center' }}>
              <Primitives.StatusDot status="online" />
              <span className="text-small">Online</span>
            </div>
            <div style={{ display: 'flex', gap: 'var(--gap-sm)', alignItems: 'center' }}>
              <Primitives.StatusDot status="away" />
              <span className="text-small">Away</span>
            </div>
            <div style={{ display: 'flex', gap: 'var(--gap-sm)', alignItems: 'center' }}>
              <Primitives.StatusDot status="busy" />
              <span className="text-small">Busy</span>
            </div>
            <div style={{ display: 'flex', gap: 'var(--gap-sm)', alignItems: 'center' }}>
              <Primitives.StatusDot status="offline" />
              <span className="text-small">Offline</span>
            </div>
          </div>
        }
      />

      <ComponentSection
        name="Text"
        category="Typography"
        description="Semantic text component with size and weight variants. Maintains consistent typography."
        variants={['xs', 'sm', 'md', 'lg', 'xl', 'normal', 'medium', 'bold']}
        preview={
          <div style={{ display: 'grid', gap: 'var(--gap-sm)' }}>
            <Primitives.Text size="lg" weight="bold">Large Bold Text</Primitives.Text>
            <Primitives.Text size="md" weight="medium">Medium Text</Primitives.Text>
            <Primitives.Text size="sm" weight="normal" style={{ color: 'var(--muted)' }}>Small Muted Text</Primitives.Text>
          </div>
        }
      />

      <ComponentSection
        name="Video"
        category="Media"
        description="Responsive video player with controls. Supports multiple video formats."
        preview={
          <div style={{ maxWidth: '100%', width: '400px' }}>
            <Primitives.Video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
              style={{ borderRadius: 'var(--radius-sm)' }}
            />
          </div>
        }
      />

      {/* Quick Start CTA */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Ready to Use Primitives?"
            subtitle="Start building with our foundational components"
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
