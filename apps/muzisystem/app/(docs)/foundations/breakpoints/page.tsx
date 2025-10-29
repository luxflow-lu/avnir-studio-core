"use client";

import { Card, Content, Layout } from "@avnir/ui";

export default function BreakpointsPage() {
  const breakpoints = [
    { 
      name: "Mobile", 
      token: "sm", 
      value: "640px",
      range: "0px - 639px",
      usage: "Smartphones, portrait tablets"
    },
    { 
      name: "Tablet", 
      token: "md", 
      value: "768px",
      range: "640px - 767px",
      usage: "Tablets, small laptops"
    },
    { 
      name: "Desktop", 
      token: "lg", 
      value: "1024px",
      range: "768px - 1023px",
      usage: "Laptops, desktops"
    },
    { 
      name: "Large Desktop", 
      token: "xl", 
      value: "1280px",
      range: "1024px - 1279px",
      usage: "Large screens, wide monitors"
    },
    { 
      name: "Extra Large", 
      token: "2xl", 
      value: "1536px",
      range: "1280px+",
      usage: "Ultra-wide monitors, 4K displays"
    },
  ];

  return (
    <>
      <Layout.PageHeader
        title="Breakpoints"
        subtitle="Responsive design breakpoints for all screen sizes"
      />

      <section className="section">
        <div className="container">
          <Content.Prose>
            <h2>Mobile-First Approach</h2>
            <p>
              MUZISYSTEM follows a mobile-first responsive design approach. This means we design 
              for small screens first, then progressively enhance the experience for larger screens 
              using media queries.
            </p>
            <p>
              Our breakpoint system is based on common device sizes and ensures consistent layouts 
              across all screen sizes, from smartphones to ultra-wide monitors.
            </p>
          </Content.Prose>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Breakpoint Scale"
            subtitle="5 responsive breakpoints"
            align="left"
          />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-lg)' }}>
            {breakpoints.map((bp) => (
              <Card key={bp.token}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--gap-lg)' }}>
                  <div style={{ flex: '0 0 200px' }}>
                    <h3 style={{ marginBottom: 'var(--margin-xs)' }}>{bp.name}</h3>
                    <code style={{ fontSize: 'var(--text-small)', color: 'var(--primary)' }}>
                      {bp.token}
                    </code>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', marginTop: 'var(--margin-xs)' }}>
                      ≥ {bp.value}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      fontSize: 'var(--text-small)', 
                      marginBottom: 'var(--margin-sm)',
                      fontWeight: 'var(--font-medium)'
                    }}>
                      {bp.range}
                    </div>
                    <div style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>
                      {bp.usage}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Common Patterns"
            subtitle="Responsive layout strategies"
            align="left"
          />
          
          <div className="grid-2">
            <Card>
              <h3>Grid Layouts</h3>
              <ul style={{ lineHeight: 1.8, fontSize: 'var(--text-small)' }}>
                <li><strong>Mobile (sm)</strong> - 1 column</li>
                <li><strong>Tablet (md)</strong> - 2 columns</li>
                <li><strong>Desktop (lg)</strong> - 3-4 columns</li>
                <li><strong>Large (xl)</strong> - 4-6 columns</li>
              </ul>
            </Card>

            <Card>
              <h3>Typography</h3>
              <ul style={{ lineHeight: 1.8, fontSize: 'var(--text-small)' }}>
                <li><strong>Mobile</strong> - Smaller font sizes</li>
                <li><strong>Tablet</strong> - Medium font sizes</li>
                <li><strong>Desktop</strong> - Larger font sizes</li>
                <li><strong>Use clamp()</strong> - Fluid typography</li>
              </ul>
            </Card>

            <Card>
              <h3>Spacing</h3>
              <ul style={{ lineHeight: 1.8, fontSize: 'var(--text-small)' }}>
                <li><strong>Mobile</strong> - Compact spacing</li>
                <li><strong>Tablet</strong> - Medium spacing</li>
                <li><strong>Desktop</strong> - Generous spacing</li>
                <li><strong>Adjust padding</strong> - Scale with screen size</li>
              </ul>
            </Card>

            <Card>
              <h3>Navigation</h3>
              <ul style={{ lineHeight: 1.8, fontSize: 'var(--text-small)' }}>
                <li><strong>Mobile</strong> - Hamburger menu</li>
                <li><strong>Tablet</strong> - Collapsed menu</li>
                <li><strong>Desktop</strong> - Full horizontal menu</li>
                <li><strong>Sticky</strong> - Fixed on scroll</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Code Examples"
            subtitle="How to use breakpoints in CSS"
            align="left"
          />

          <Card>
            <pre style={{ 
              backgroundColor: 'var(--surface)', 
              padding: 'var(--padding-lg)', 
              borderRadius: 'var(--radius-md)',
              overflow: 'auto',
              fontSize: 'var(--text-small)',
              lineHeight: 1.6
            }}>
{`/* Mobile-first approach */
.container {
  padding: 16px; /* Mobile */
}

@media (min-width: 640px) { /* sm */
  .container {
    padding: 24px; /* Tablet */
  }
}

@media (min-width: 1024px) { /* lg */
  .container {
    padding: 32px; /* Desktop */
  }
}

/* Grid example */
.grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile: 1 column */
  gap: 16px;
}

@media (min-width: 768px) { /* md */
  .grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
  }
}

@media (min-width: 1024px) { /* lg */
  .grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns */
  }
}`}
            </pre>
          </Card>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Content.Prose>
            <h2>Best Practices</h2>
            <ul>
              <li><strong>Mobile-first</strong> - Start with mobile styles, enhance for larger screens</li>
              <li><strong>Content-based</strong> - Let content dictate breakpoints, not devices</li>
              <li><strong>Test thoroughly</strong> - Check all breakpoints in real devices</li>
              <li><strong>Fluid layouts</strong> - Use relative units (%, rem, em) when possible</li>
              <li><strong>Touch targets</strong> - Ensure 44x44px minimum on mobile</li>
              <li><strong>Performance</strong> - Optimize images and assets for each breakpoint</li>
            </ul>
          </Content.Prose>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Testing Devices"
            subtitle="Common devices to test"
            align="left"
          />
          
          <div className="grid-3">
            <Card>
              <h3>📱 Mobile</h3>
              <ul style={{ fontSize: 'var(--text-small)', lineHeight: 1.8 }}>
                <li>iPhone SE (375px)</li>
                <li>iPhone 14 Pro (393px)</li>
                <li>Samsung Galaxy (360px)</li>
              </ul>
            </Card>

            <Card>
              <h3>📱 Tablet</h3>
              <ul style={{ fontSize: 'var(--text-small)', lineHeight: 1.8 }}>
                <li>iPad (768px)</li>
                <li>iPad Pro (1024px)</li>
                <li>Surface Pro (912px)</li>
              </ul>
            </Card>

            <Card>
              <h3>💻 Desktop</h3>
              <ul style={{ fontSize: 'var(--text-small)', lineHeight: 1.8 }}>
                <li>MacBook (1280px)</li>
                <li>Desktop HD (1920px)</li>
                <li>4K Display (3840px)</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
