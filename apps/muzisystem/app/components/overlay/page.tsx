"use client";

import React from "react";
import { Badge, Button, Layout, Overlay, Primitives } from "@avnir/ui";

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


export default function OverlayPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isToastVisible, setIsToastVisible] = React.useState(false);

  return (
    <>
      {/* Page Header */}
      <Layout.PageHeader
        title="Overlay Components"
        subtitle="Components for overlays including modals, drawers, tooltips, and popovers. Built for layered interfaces and contextual information."
      />

      <ComponentSection
        name="Modal"
        category="Overlay"
        description="Modal dialog for focused interactions and confirmations. Includes backdrop, close button, and keyboard navigation support."
        variants={["default", "large", "fullscreen"]}
        preview={
          <div>
            <Button onClick={() => setIsModalOpen(true)}>
              Open Modal
            </Button>
            <Overlay.Modal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Confirm Action"
            >
              <p style={{ marginBottom: 'var(--margin-lg)' }}>
                Are you sure you want to proceed with this action? This cannot be undone.
              </p>
              <div style={{ display: 'flex', gap: 'var(--gap-sm)', justifyContent: 'flex-end' }}>
                <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button variant="solid" onClick={() => setIsModalOpen(false)}>
                  Confirm
                </Button>
              </div>
            </Overlay.Modal>
          </div>
        }
      />

      <ComponentSection
        name="Drawer"
        category="Overlay"
        description="Slide-out panel for navigation or additional content. Supports left, right, top, and bottom positions."
        variants={["left", "right", "top", "bottom"]}
        preview={
          <div>
            <Button onClick={() => setIsDrawerOpen(true)}>
              Open Drawer
            </Button>
            <Overlay.Drawer
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              side="right"
              title="Settings"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
                <div>
                  <h4>Preferences</h4>
                  <p className="text-small" style={{ color: 'var(--muted)' }}>
                    Customize your experience
                  </p>
                </div>
                <Button variant="outline" onClick={() => setIsDrawerOpen(false)}>
                  Close
                </Button>
              </div>
            </Overlay.Drawer>
          </div>
        }
      />

      <ComponentSection
        name="Tooltip"
        category="Overlay"
        description="Contextual information on hover or focus. Supports multiple positions and custom delays."
        variants={["top", "bottom", "left", "right"]}
        preview={
          <div style={{ display: 'flex', gap: 'var(--gap-md)', justifyContent: 'center' }}>
            <Overlay.Tooltip content="This is a tooltip" side="top">
              <Button variant="outline">Hover me (top)</Button>
            </Overlay.Tooltip>
            <Overlay.Tooltip content="Bottom tooltip" side="bottom">
              <Button variant="outline">Hover me (bottom)</Button>
            </Overlay.Tooltip>
          </div>
        }
      />

      <ComponentSection
        name="Popover"
        category="Overlay"
        description="Floating content container for menus, forms, or additional information. Click or hover triggered."
        variants={["click", "hover", "focus"]}
        preview={
          <Overlay.Popover
            content={
              <div style={{ padding: 'var(--padding-md)', minWidth: '200px' }}>
                <h4 style={{ marginBottom: 'var(--margin-sm)' }}>Popover Content</h4>
                <p className="text-small" style={{ color: 'var(--muted)' }}>
                  This is a popover with custom content.
                </p>
              </div>
            }
          >
            <Button variant="outline">Open Popover</Button>
          </Overlay.Popover>
        }
      />

      <ComponentSection
        name="DropdownMenu"
        category="Overlay"
        description="Dropdown menu with keyboard navigation and accessibility. Perfect for actions and navigation."
        variants={["default", "with-icons", "with-sections"]}
        preview={
          <Overlay.DropdownMenu trigger={<Button variant="outline">Menu</Button>}>
            <div style={{ padding: 'var(--padding-sm)' }}>
              <Button variant="ghost" style={{ width: '100%', justifyContent: 'flex-start' }}>Edit</Button>
              <Button variant="ghost" style={{ width: '100%', justifyContent: 'flex-start' }}>Duplicate</Button>
              <Button variant="ghost" style={{ width: '100%', justifyContent: 'flex-start' }}>Delete</Button>
            </div>
          </Overlay.DropdownMenu>
        }
      />

      <ComponentSection
        name="Toast"
        category="Overlay"
        description="Temporary notification message for feedback and alerts. Auto-dismisses after a set duration."
        variants={["success", "error", "warning", "info"]}
        preview={
          <div style={{ display: 'flex', gap: 'var(--gap-sm)', flexWrap: 'wrap' }}>
            <Button onClick={() => setIsToastVisible(true)}>
              Show Toast
            </Button>
            <p className="text-small" style={{ color: 'var(--muted)' }}>
              Toast will appear at the top-right corner
            </p>
          </div>
        }
      />
    </>
  );
}
