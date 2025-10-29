"use client";

import { Card, Content, Layout } from "@avnir/ui";

export default function ShadowsPage() {
  const shadows = [
    { 
      name: "None", 
      token: "--shadow-none", 
      value: "none",
      usage: "Flat elements, no elevation"
    },
    { 
      name: "Small", 
      token: "--shadow-sm", 
      value: "0 1px 2px rgba(0,0,0,0.05)",
      usage: "Subtle elevation, hover states"
    },
    { 
      name: "Medium", 
      token: "--shadow-md", 
      value: "0 4px 6px rgba(0,0,0,0.1)",
      usage: "Cards, dropdowns, tooltips"
    },
    { 
      name: "Large", 
      token: "--shadow-lg", 
      value: "0 10px 15px rgba(0,0,0,0.1)",
      usage: "Modals, popovers, elevated cards"
    },
    { 
      name: "Extra Large", 
      token: "--shadow-xl", 
      value: "0 20px 25px rgba(0,0,0,0.15)",
      usage: "Dialogs, major overlays"
    },
  ];

  return (
    <>
      <Layout.PageHeader
        title="Shadows & Elevation"
        subtitle="Depth and hierarchy through shadow system"
      />

      <section className="section">
        <div className="container">
          <Content.Prose>
            <h2>Shadow Philosophy</h2>
            <p>
              Shadows create depth and visual hierarchy in the interface. MUZISYSTEM uses a 
              consistent shadow system with 5 levels of elevation, from subtle to prominent.
            </p>
            <p>
              Shadows should be used purposefully to indicate interactive elements, elevated 
              surfaces, and focus states. Overuse can make the interface feel cluttered.
            </p>
          </Content.Prose>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Shadow Scale"
            subtitle="5 levels of elevation"
            align="left"
          />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-xl)' }}>
            {shadows.map((shadow) => (
              <Card key={shadow.token}>
                <div style={{ marginBottom: 'var(--margin-lg)' }}>
                  <h3 style={{ marginBottom: 'var(--margin-xs)' }}>{shadow.name}</h3>
                  <code style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>
                    {shadow.token}
                  </code>
                  <p style={{ fontSize: 'var(--text-small)', color: 'var(--muted)', marginTop: 'var(--margin-sm)' }}>
                    {shadow.usage}
                  </p>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  gap: 'var(--gap-lg)', 
                  padding: 'var(--padding-xl)',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius-md)'
                }}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    backgroundColor: 'var(--bg)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: shadow.value,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--text-small)',
                    color: 'var(--muted)'
                  }}>
                    Preview
                  </div>
                  <div style={{ flex: 1 }}>
                    <pre style={{ 
                      fontSize: 'var(--text-xs)', 
                      color: 'var(--muted)',
                      margin: 0,
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-all'
                    }}>
                      {shadow.value}
                    </pre>
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
            title="Usage Guidelines"
            subtitle="When to use each shadow level"
            align="left"
          />
          
          <div className="grid-2">
            <Card>
              <h3>Interactive Elements</h3>
              <ul style={{ lineHeight: 1.8, fontSize: 'var(--text-small)' }}>
                <li><strong>Hover states</strong> - Increase shadow on hover</li>
                <li><strong>Active states</strong> - Reduce shadow when pressed</li>
                <li><strong>Focus states</strong> - Add subtle shadow for focus</li>
                <li><strong>Disabled states</strong> - Remove shadow</li>
              </ul>
            </Card>

            <Card>
              <h3>Component Types</h3>
              <ul style={{ lineHeight: 1.8, fontSize: 'var(--text-small)' }}>
                <li><strong>Cards</strong> - shadow-sm or shadow-md</li>
                <li><strong>Dropdowns</strong> - shadow-md or shadow-lg</li>
                <li><strong>Modals</strong> - shadow-lg or shadow-xl</li>
                <li><strong>Tooltips</strong> - shadow-sm</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Code Examples"
            subtitle="How to use shadow tokens"
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
{`/* CSS */
.card {
  box-shadow: var(--shadow-md);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}

/* React/JSX */
<div style={{ 
  boxShadow: 'var(--shadow-md)'
}}>
  Content
</div>`}
            </pre>
          </Card>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Content.Prose>
            <h2>Best Practices</h2>
            <ul>
              <li><strong>Use sparingly</strong> - Too many shadows create visual noise</li>
              <li><strong>Consistent elevation</strong> - Similar elements should have similar shadows</li>
              <li><strong>Interactive feedback</strong> - Change shadow on hover/active states</li>
              <li><strong>Dark mode</strong> - Shadows are less visible in dark mode, adjust accordingly</li>
              <li><strong>Performance</strong> - Shadows can impact performance, use wisely</li>
            </ul>
          </Content.Prose>
        </div>
      </section>
    </>
  );
}
