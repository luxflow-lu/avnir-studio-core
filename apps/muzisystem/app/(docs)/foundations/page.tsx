"use client";

import { Layout, Content, Card, Button } from "@avnir/ui";

export default function FoundationsPage() {
  return (
    <>
      <div className="section">
        <div className="container">
          <Layout.PageHeader
            title="Foundations"
            subtitle="Design tokens, color systems, typography, and core visual elements that form the foundation of MUZISYSTEM."
          />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>What are Foundations?</h2>
            <p>
              Foundations are the core design decisions that define the visual language of MUZISYSTEM. 
              They include color palettes, typography scales, spacing systems, and other fundamental 
              elements that ensure consistency across all components and applications.
            </p>

            <p>
              These tokens are brand-agnostic and adapt automatically to different brands and themes, 
              providing a unified experience while maintaining each brand's unique identity.
            </p>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Available Foundations</h2>
          </Content.Prose>

          <div className="grid-2">
            <Card>
              <h3>🎨 Colors</h3>
              <p>Semantic color system with support for multiple brands and dark/light themes. All combinations meet WCAG 2.1 AA standards.</p>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/foundations/colors'}
              >
                View Colors
              </Button>
            </Card>

            <Card>
              <h3>✍️ Typography</h3>
              <p>Type scale, font families, line heights, and text styles for optimal readability across all devices.</p>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/foundations/typography'}
              >
                View Typography
              </Button>
            </Card>

            <Card>
              <h3>🔧 Tokens</h3>
              <p>Design tokens for spacing, sizing, borders, shadows, and other visual properties.</p>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/foundations/tokens'}
              >
                View Tokens
              </Button>
            </Card>

            <Card>
              <h3>📐 Spacing</h3>
              <p>Consistent spacing scale from 0 to 16 for margins, padding, and gaps.</p>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/foundations/spacing'}
              >
                View Spacing
              </Button>
            </Card>

            <Card>
              <h3>💎 Shadows</h3>
              <p>Elevation system with 5 shadow levels for depth and visual hierarchy.</p>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/foundations/shadows'}
              >
                View Shadows
              </Button>
            </Card>

            <Card>
              <h3>📱 Breakpoints</h3>
              <p>Responsive design breakpoints for mobile-first layouts across all devices.</p>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/foundations/breakpoints'}
              >
                View Breakpoints
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Using Foundations</h2>
            <p>
              All foundations are available as CSS variables and can be used directly in your styles:
            </p>
          </Content.Prose>

          <Card style={{ marginTop: 'var(--margin-lg)' }}>
            <pre style={{ 
              backgroundColor: 'var(--surface)', 
              padding: 'var(--padding-md)', 
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--text-small)',
              overflow: 'auto'
            }}>
{`/* CSS */
.button {
  background-color: var(--primary);
  color: var(--on-primary);
  padding: var(--padding-md);
  border-radius: var(--radius-sm);
  font-size: var(--text-base);
}

/* React/JSX */
<div style={{ 
  backgroundColor: 'var(--surface)',
  padding: 'var(--padding-lg)',
  color: 'var(--text)'
}}>
  Content
</div>`}
            </pre>
          </Card>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Best Practices</h2>
            <ul>
              <li><strong>Always use tokens</strong> - Never hard-code values like colors or spacing</li>
              <li><strong>Semantic naming</strong> - Use tokens that describe purpose, not appearance</li>
              <li><strong>Consistency</strong> - Stick to the defined scales and systems</li>
              <li><strong>Accessibility</strong> - Ensure sufficient contrast and touch targets</li>
              <li><strong>Responsive</strong> - Use relative units and fluid scales</li>
            </ul>
          </Content.Prose>
        </div>
      </div>
    </>
  );
}
