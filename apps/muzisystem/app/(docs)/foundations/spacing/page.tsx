"use client";

import { Card, Content, Layout } from "@avnir/ui";

export default function SpacingPage() {
  const spacingScale = [
    { token: "--space-0", value: "0px", usage: "No spacing" },
    { token: "--space-1", value: "4px", usage: "Minimal spacing, tight layouts" },
    { token: "--space-2", value: "8px", usage: "Small gaps, compact components" },
    { token: "--space-3", value: "12px", usage: "Default gaps, standard spacing" },
    { token: "--space-4", value: "16px", usage: "Medium spacing, section padding" },
    { token: "--space-6", value: "24px", usage: "Large spacing, component separation" },
    { token: "--space-8", value: "32px", usage: "Extra large spacing, major sections" },
    { token: "--space-12", value: "48px", usage: "Section headers, major breaks" },
    { token: "--space-16", value: "64px", usage: "Page sections, hero spacing" },
  ];

  return (
    <>
      <Layout.PageHeader
        title="Spacing System"
        subtitle="Consistent spacing scale for margins, padding, and gaps"
      />

      <section className="section">
        <div className="container">
          <Content.Prose>
            <h2>Spacing Philosophy</h2>
            <p>
              MUZISYSTEM uses a consistent spacing scale based on a 4px base unit. This creates 
              visual rhythm and hierarchy while maintaining flexibility for different layouts and 
              component sizes.
            </p>
            <p>
              All spacing values are defined as CSS variables and should be used instead of 
              hard-coded pixel values to ensure consistency across the design system.
            </p>
          </Content.Prose>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Spacing Scale"
            subtitle="Base unit: 4px"
            align="left"
          />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
            {spacingScale.map((item) => (
              <Card key={item.token}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-lg)' }}>
                  <div style={{ flex: '0 0 200px' }}>
                    <code style={{ fontSize: 'var(--text-small)', fontWeight: 'var(--font-medium)' }}>
                      {item.token}
                    </code>
                    <div style={{ color: 'var(--muted)', fontSize: 'var(--text-xs)', marginTop: 'var(--margin-xs)' }}>
                      {item.value}
                    </div>
                  </div>
                  <div 
                    style={{ 
                      width: item.value,
                      height: '40px',
                      backgroundColor: 'var(--primary)',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'all 0.2s'
                    }}
                  />
                  <div style={{ flex: 1, fontSize: 'var(--text-small)', color: 'var(--muted)' }}>
                    {item.usage}
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
            subtitle="When to use each spacing value"
            align="left"
          />
          
          <div className="grid-2">
            <Card>
              <h3>Padding</h3>
              <ul style={{ lineHeight: 1.8, fontSize: 'var(--text-small)' }}>
                <li><code>--space-2</code> - Buttons, badges, chips</li>
                <li><code>--space-3</code> - Inputs, small cards</li>
                <li><code>--space-4</code> - Cards, modals</li>
                <li><code>--space-6</code> - Large cards, sections</li>
                <li><code>--space-8</code> - Page containers</li>
              </ul>
            </Card>

            <Card>
              <h3>Margins & Gaps</h3>
              <ul style={{ lineHeight: 1.8, fontSize: 'var(--text-small)' }}>
                <li><code>--space-1</code> - Icon spacing, tight lists</li>
                <li><code>--space-2</code> - Form field spacing</li>
                <li><code>--space-3</code> - Default gaps</li>
                <li><code>--space-4</code> - Component spacing</li>
                <li><code>--space-6</code> - Section spacing</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Code Examples"
            subtitle="How to use spacing tokens in your code"
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
  padding: var(--space-4);
  margin-bottom: var(--space-6);
  gap: var(--space-3);
}

/* React/JSX */
<div style={{ 
  padding: 'var(--space-4)',
  marginBottom: 'var(--space-6)',
  gap: 'var(--space-3)'
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
              <li><strong>Use tokens</strong> - Always use spacing tokens instead of hard-coded values</li>
              <li><strong>Be consistent</strong> - Use the same spacing values for similar elements</li>
              <li><strong>Follow the scale</strong> - Don't create custom spacing values outside the scale</li>
              <li><strong>Responsive spacing</strong> - Adjust spacing for different screen sizes when needed</li>
              <li><strong>Visual hierarchy</strong> - Use larger spacing to separate major sections</li>
            </ul>
          </Content.Prose>
        </div>
      </section>
    </>
  );
}
