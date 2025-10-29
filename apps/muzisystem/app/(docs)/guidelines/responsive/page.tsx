"use client";

import { Card, Content, Layout } from "@avnir/ui";

export default function ResponsivePage() {
  return (
    <>
      <Layout.PageHeader
        title="Responsive Design"
        subtitle="Mobile-first approach for all screen sizes"
      />

      <section className="section">
        <div className="container">
          <Content.Prose>
            <h2>Mobile-First Philosophy</h2>
            <p>
              MUZISYSTEM follows a mobile-first approach. We design for small screens first, 
              then progressively enhance the experience for larger screens. This ensures optimal 
              performance and usability across all devices.
            </p>
          </Content.Prose>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Breakpoints"
            subtitle="Consistent breakpoints across the design system"
            align="left"
          />
          <div className="grid-2">
            <Card>
              <h3>📱 Mobile</h3>
              <code style={{ display: 'block', marginBottom: 'var(--margin-sm)' }}>0px - 639px</code>
              <p style={{ color: 'var(--muted)', fontSize: 'var(--text-small)' }}>
                Base styles, single column layouts, touch-optimized interactions
              </p>
            </Card>
            <Card>
              <h3>📱 Tablet</h3>
              <code style={{ display: 'block', marginBottom: 'var(--margin-sm)' }}>640px - 1023px</code>
              <p style={{ color: 'var(--muted)', fontSize: 'var(--text-small)' }}>
                Two-column layouts, larger touch targets, optimized for portrait/landscape
              </p>
            </Card>
            <Card>
              <h3>💻 Desktop</h3>
              <code style={{ display: 'block', marginBottom: 'var(--margin-sm)' }}>1024px - 1279px</code>
              <p style={{ color: 'var(--muted)', fontSize: 'var(--text-small)' }}>
                Multi-column layouts, hover states, keyboard shortcuts
              </p>
            </Card>
            <Card>
              <h3>🖥️ Large Desktop</h3>
              <code style={{ display: 'block', marginBottom: 'var(--margin-sm)' }}>1280px+</code>
              <p style={{ color: 'var(--muted)', fontSize: 'var(--text-small)' }}>
                Wide layouts, max-width containers, enhanced spacing
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Grid System"
            subtitle="Flexible grid for responsive layouts"
            align="left"
          />
          <Content.Prose>
            <h3>CSS Grid Classes</h3>
            <ul>
              <li><code>.grid-2</code> - 2 columns on desktop, 1 on mobile</li>
              <li><code>.grid-3</code> - 3 columns on desktop, 1 on mobile</li>
              <li><code>.grid-4</code> - 4 columns on desktop, 2 on tablet, 1 on mobile</li>
            </ul>

            <h3>Container</h3>
            <p>
              The <code>.container</code> class provides consistent max-width and padding:
            </p>
            <ul>
              <li>Mobile: 100% width with 16px padding</li>
              <li>Tablet: 100% width with 24px padding</li>
              <li>Desktop: max-width 1280px with 32px padding</li>
            </ul>
          </Content.Prose>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Touch Targets"
            subtitle="Minimum sizes for interactive elements"
            align="left"
          />
          <div className="grid-3">
            <Card>
              <h3>Buttons</h3>
              <p style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)' }}>
                Minimum 44x44px touch target
              </p>
              <ul style={{ fontSize: 'var(--text-small)', lineHeight: 1.8 }}>
                <li>Small: 44px height</li>
                <li>Medium: 48px height</li>
                <li>Large: 56px height</li>
              </ul>
            </Card>
            <Card>
              <h3>Form Inputs</h3>
              <p style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)' }}>
                Minimum 48px height on mobile
              </p>
              <ul style={{ fontSize: 'var(--text-small)', lineHeight: 1.8 }}>
                <li>Text inputs: 48px</li>
                <li>Checkboxes: 24x24px</li>
                <li>Radio buttons: 24x24px</li>
              </ul>
            </Card>
            <Card>
              <h3>Links</h3>
              <p style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)' }}>
                Adequate spacing between links
              </p>
              <ul style={{ fontSize: 'var(--text-small)', lineHeight: 1.8 }}>
                <li>Minimum 8px vertical spacing</li>
                <li>Underline on hover/focus</li>
                <li>Clear visual distinction</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Typography Scaling"
            subtitle="Responsive font sizes for optimal readability"
            align="left"
          />
          <Content.Prose>
            <h3>Fluid Typography</h3>
            <p>
              Font sizes scale smoothly between breakpoints using CSS clamp():
            </p>
            <ul>
              <li><strong>Display</strong> - 48px mobile → 72px desktop</li>
              <li><strong>H1</strong> - 32px mobile → 48px desktop</li>
              <li><strong>H2</strong> - 24px mobile → 36px desktop</li>
              <li><strong>Body</strong> - 16px (consistent across devices)</li>
              <li><strong>Small</strong> - 14px (consistent across devices)</li>
            </ul>

            <h3>Line Height</h3>
            <ul>
              <li>Headings: 1.2 - 1.3</li>
              <li>Body text: 1.5 - 1.6</li>
              <li>Small text: 1.4</li>
            </ul>
          </Content.Prose>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Images & Media"
            subtitle="Responsive images and video"
            align="left"
          />
          <Content.Prose>
            <h3>Best Practices</h3>
            <ul>
              <li><strong>Responsive images</strong> - Use srcset and sizes attributes</li>
              <li><strong>Lazy loading</strong> - Load images as they enter viewport</li>
              <li><strong>WebP format</strong> - Modern format with fallbacks</li>
              <li><strong>Aspect ratio</strong> - Reserve space to prevent layout shift</li>
              <li><strong>Alt text</strong> - Descriptive alternative text for accessibility</li>
            </ul>

            <h3>Video</h3>
            <ul>
              <li>Responsive container with aspect ratio</li>
              <li>Autoplay only when muted</li>
              <li>Provide controls and captions</li>
              <li>Optimize for mobile bandwidth</li>
            </ul>
          </Content.Prose>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Testing Checklist"
            subtitle="Ensure responsive design works across devices"
            align="left"
          />
          <Card>
            <Content.Prose>
              <h3>Devices to Test</h3>
              <ul>
                <li>✅ iPhone SE (375px)</li>
                <li>✅ iPhone 14 Pro (393px)</li>
                <li>✅ iPad (768px)</li>
                <li>✅ iPad Pro (1024px)</li>
                <li>✅ Desktop 1280px</li>
                <li>✅ Desktop 1920px</li>
              </ul>

              <h3>Orientations</h3>
              <ul>
                <li>✅ Portrait mode</li>
                <li>✅ Landscape mode</li>
              </ul>

              <h3>Browser Testing</h3>
              <ul>
                <li>✅ Chrome DevTools responsive mode</li>
                <li>✅ Safari on iOS</li>
                <li>✅ Chrome on Android</li>
                <li>✅ Firefox responsive design mode</li>
              </ul>
            </Content.Prose>
          </Card>
        </div>
      </section>
    </>
  );
}
