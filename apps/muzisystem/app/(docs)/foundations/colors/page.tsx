"use client";

import { Layout, Content, Card } from "@avnir/ui";

export default function ColorsPage() {
  return (
    <>
      <div className="section">
        <div className="container">
          <Layout.PageHeader
            title="Colors"
            subtitle="MUZISYSTEM's color system supports multiple brands with semantic tokens for consistent theming."
          />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Color Philosophy</h2>
            <p>
              Our color system is built on semantic tokens that adapt to different brands and themes. 
              Instead of using specific color values, we use meaningful names that describe the purpose 
              of the color in the interface.
            </p>
            <p>
              This approach allows us to maintain consistency across multiple brands while giving each 
              brand its unique identity through the primary color.
            </p>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Semantic Color Tokens</h2>
          </Content.Prose>

          <div className="grid-2">
            <Card>
              <h3>Background Colors</h3>
              <ul style={{ fontSize: 'var(--text-small)' }}>
                <li><code>--bg</code> - Main background</li>
                <li><code>--surface</code> - Elevated surfaces</li>
                <li><code>--card</code> - Card backgrounds</li>
              </ul>
            </Card>

            <Card>
              <h3>Text Colors</h3>
              <ul style={{ fontSize: 'var(--text-small)' }}>
                <li><code>--text</code> - Body text</li>
                <li><code>--titles</code> - Headings</li>
                <li><code>--muted</code> - Secondary text</li>
              </ul>
            </Card>

            <Card>
              <h3>Brand Colors</h3>
              <ul style={{ fontSize: 'var(--text-small)' }}>
                <li><code>--primary</code> - Brand color</li>
                <li><code>--primary-hover</code> - Hover state</li>
                <li><code>--primary-active</code> - Active state</li>
              </ul>
            </Card>

            <Card>
              <h3>UI Colors</h3>
              <ul style={{ fontSize: 'var(--text-small)' }}>
                <li><code>--border</code> - Borders & dividers</li>
                <li><code>--ring</code> - Focus rings</li>
                <li><code>--destructive</code> - Error states</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Multi-Brand Support</h2>
            <p>
              Each brand in the AVNIR ecosystem has its own primary color that defines its identity. 
              The system automatically adapts all UI elements to work with any brand color.
            </p>
          </Content.Prose>

          <div className="grid-3" style={{ marginTop: 'var(--gap-xl)' }}>
            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-md)', marginBottom: 'var(--gap-md)' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: 'var(--radius-sm)', 
                  background: '#ededed',
                  border: '1px solid var(--border)'
                }}></div>
                <div>
                  <h4 style={{ margin: 0, fontSize: 'var(--text-h4)' }}>AVNIR Studio</h4>
                  <code style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>#ededed</code>
                </div>
              </div>
              <p style={{ fontSize: 'var(--text-small)', margin: 0 }}>Light gray - Design system hub</p>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-md)', marginBottom: 'var(--gap-md)' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: 'var(--radius-sm)', 
                  background: '#5cb9f2'
                }}></div>
                <div>
                  <h4 style={{ margin: 0, fontSize: 'var(--text-h4)' }}>MUZIDEV</h4>
                  <code style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>#5cb9f2</code>
                </div>
              </div>
              <p style={{ fontSize: 'var(--text-small)', margin: 0 }}>Blue - Development platform</p>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-md)', marginBottom: 'var(--gap-md)' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: 'var(--radius-sm)', 
                  background: '#ff2d55'
                }}></div>
                <div>
                  <h4 style={{ margin: 0, fontSize: 'var(--text-h4)' }}>MUZIPICS</h4>
                  <code style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>#ff2d55</code>
                </div>
              </div>
              <p style={{ fontSize: 'var(--text-small)', margin: 0 }}>Red - Visual content platform</p>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-md)', marginBottom: 'var(--gap-md)' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: 'var(--radius-sm)', 
                  background: '#9802eb'
                }}></div>
                <div>
                  <h4 style={{ margin: 0, fontSize: 'var(--text-h4)' }}>MUZIWEB</h4>
                  <code style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>#9802eb</code>
                </div>
              </div>
              <p style={{ fontSize: 'var(--text-small)', margin: 0 }}>Purple - Web services</p>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-md)', marginBottom: 'var(--gap-md)' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: 'var(--radius-sm)', 
                  background: '#ff9d00'
                }}></div>
                <div>
                  <h4 style={{ margin: 0, fontSize: 'var(--text-h4)' }}>MUZIMERCH</h4>
                  <code style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>#ff9d00</code>
                </div>
              </div>
              <p style={{ fontSize: 'var(--text-small)', margin: 0 }}>Orange - Merchandise platform</p>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-md)', marginBottom: 'var(--gap-md)' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: 'var(--radius-sm)', 
                  background: '#2fad66'
                }}></div>
                <div>
                  <h4 style={{ margin: 0, fontSize: 'var(--text-h4)' }}>MUZIBASE</h4>
                  <code style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>#2fad66</code>
                </div>
              </div>
              <p style={{ fontSize: 'var(--text-small)', margin: 0 }}>Green - Database services</p>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-md)', marginBottom: 'var(--gap-md)' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: 'var(--radius-sm)', 
                  background: '#ededed',
                  border: '1px solid var(--border)'
                }}></div>
                <div>
                  <h4 style={{ margin: 0, fontSize: 'var(--text-h4)' }}>MUZISYSTEM</h4>
                  <code style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>#ededed</code>
                </div>
              </div>
              <p style={{ fontSize: 'var(--text-small)', margin: 0 }}>Light gray - Design system docs</p>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Dark & Light Themes</h2>
            <p>
              MUZISYSTEM supports both dark and light themes. The color tokens automatically adjust 
              to provide optimal contrast and readability in each theme.
            </p>
          </Content.Prose>

          <div className="grid-2" style={{ marginTop: 'var(--gap-xl)' }}>
            <Card>
              <h3>🌙 Dark Theme (Default)</h3>
              <p style={{ fontSize: 'var(--text-small)', marginBottom: 'var(--gap-lg)' }}>
                Our default theme optimized for reduced eye strain and modern aesthetics.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-md)' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: 'var(--radius-sm)', 
                    background: '#0b0b0d',
                    border: '1px solid var(--border)'
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 'var(--text-small)', fontWeight: 'var(--font-medium)' }}>Background</div>
                    <code style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>--bg: #0b0b0d</code>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-md)' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: 'var(--radius-sm)', 
                    background: '#1a1a1d',
                    border: '1px solid var(--border)'
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 'var(--text-small)', fontWeight: 'var(--font-medium)' }}>Surface</div>
                    <code style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>--surface: #1a1a1d</code>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-md)' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: 'var(--radius-sm)', 
                    background: '#ededed',
                    border: '1px solid var(--border)'
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 'var(--text-small)', fontWeight: 'var(--font-medium)' }}>Text</div>
                    <code style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>--text: #ededed</code>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-md)' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: 'var(--radius-sm)', 
                    background: '#0f0f11',
                    border: '1px solid var(--border)'
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 'var(--text-small)', fontWeight: 'var(--font-medium)' }}>Card</div>
                    <code style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>--card: #0f0f11</code>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3>☀️ Light Theme</h3>
              <p style={{ fontSize: 'var(--text-small)', marginBottom: 'var(--gap-lg)' }}>
                Clean and bright theme for well-lit environments and user preference.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-md)' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: 'var(--radius-sm)', 
                    background: '#f8f8f8',
                    border: '1px solid #e5e7eb'
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 'var(--text-small)', fontWeight: 'var(--font-medium)', color: 'var(--titles)' }}>Background</div>
                    <code style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>--bg: #f8f8f8</code>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-md)' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: 'var(--radius-sm)', 
                    background: '#ffffff',
                    border: '1px solid #e5e7eb'
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 'var(--text-small)', fontWeight: 'var(--font-medium)', color: 'var(--titles)' }}>Surface</div>
                    <code style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>--surface: #ffffff</code>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-md)' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: 'var(--radius-sm)', 
                    background: '#1f2937',
                    border: '1px solid #e5e7eb'
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 'var(--text-small)', fontWeight: 'var(--font-medium)', color: 'var(--titles)' }}>Text</div>
                    <code style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>--text: #1f2937</code>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-md)' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: 'var(--radius-sm)', 
                    background: '#ffffff',
                    border: '1px solid #e5e7eb'
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 'var(--text-small)', fontWeight: 'var(--font-medium)', color: 'var(--titles)' }}>Card</div>
                    <code style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>--card: #ffffff</code>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Accessibility</h2>
            <p>
              All color combinations in MUZISYSTEM meet WCAG 2.2 AA standards for contrast ratios:
            </p>
            <ul>
              <li><strong>Normal text</strong> - Minimum 4.5:1 contrast ratio</li>
              <li><strong>Large text</strong> - Minimum 3:1 contrast ratio</li>
              <li><strong>UI components</strong> - Minimum 3:1 contrast ratio</li>
            </ul>
            <p>
              We test all color combinations to ensure they work for users with color vision deficiencies.
            </p>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Usage Guidelines</h2>
            <ul>
              <li><strong>Always use tokens</strong> - Never hard-code color values</li>
              <li><strong>Semantic naming</strong> - Use tokens that describe purpose, not appearance</li>
              <li><strong>Test contrast</strong> - Verify readability in both themes</li>
              <li><strong>Brand consistency</strong> - Use primary color for brand touchpoints</li>
              <li><strong>Accessibility first</strong> - Ensure sufficient contrast for all users</li>
            </ul>
          </Content.Prose>
        </div>
      </div>
    </>
  );
}
