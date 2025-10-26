"use client";

import { Layout, Content, Card } from "@avnir/ui";

export default function TypographyPage() {
  return (
    <>
      <div className="section">
        <div className="container">
          <Layout.PageHeader
            title="Typography"
            subtitle="A consistent type scale and hierarchy for clear communication across all AVNIR products."
          />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Type Scale</h2>
            <p>
              MUZISYSTEM uses a modular type scale that provides a harmonious hierarchy from display 
              titles to small captions. All sizes are defined as tokens for consistency.
            </p>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Font Families</h2>
          </Content.Prose>

          <div className="grid-2">
            <Card>
              <h3>Sans-Serif (Primary)</h3>
              <p><code>--font-sans</code></p>
              <p style={{ fontSize: 'var(--text-small)', marginTop: 'var(--gap-md)' }}>
                Inter is our primary typeface, used for all UI text, headings, and body copy. 
                It provides excellent readability at all sizes.
              </p>
            </Card>

            <Card>
              <h3>Monospace (Code)</h3>
              <p><code>--font-mono</code></p>
              <p style={{ fontSize: 'var(--text-small)', marginTop: 'var(--gap-md)' }}>
                System monospace fonts are used for code snippets, technical content, and data displays 
                where fixed-width characters are beneficial.
              </p>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Heading Scale</h2>
            <p>Six heading levels provide clear hierarchy for content structure:</p>
          </Content.Prose>

          <div style={{ marginTop: 'var(--gap-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--gap-lg)' }}>
            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <h1 style={{ margin: 0, fontSize: 'var(--text-h1)', lineHeight: 'var(--leading-tight)' }}>Heading 1</h1>
                </div>
                <div style={{ minWidth: '200px', textAlign: 'right' }}>
                  <div style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>--text-h1</div>
                  <code style={{ fontSize: 'var(--text-xs)' }}>3.5rem (56px)</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ margin: 0, fontSize: 'var(--text-h2)', lineHeight: 'var(--leading-tight)' }}>Heading 2</h2>
                </div>
                <div style={{ minWidth: '200px', textAlign: 'right' }}>
                  <div style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>--text-h2</div>
                  <code style={{ fontSize: 'var(--text-xs)' }}>3rem (48px)</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, fontSize: 'var(--text-h3)', lineHeight: 'var(--leading-tight)' }}>Heading 3</h3>
                </div>
                <div style={{ minWidth: '200px', textAlign: 'right' }}>
                  <div style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>--text-h3</div>
                  <code style={{ fontSize: 'var(--text-xs)' }}>1.5rem (24px)</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: 'var(--text-h4)', lineHeight: 'var(--leading-tight)' }}>Heading 4</h4>
                </div>
                <div style={{ minWidth: '200px', textAlign: 'right' }}>
                  <div style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>--text-h4</div>
                  <code style={{ fontSize: 'var(--text-xs)' }}>1.25rem (20px)</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <h5 style={{ margin: 0, fontSize: 'var(--text-h5)', lineHeight: 'var(--leading-tight)' }}>Heading 5</h5>
                </div>
                <div style={{ minWidth: '200px', textAlign: 'right' }}>
                  <div style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>--text-h5</div>
                  <code style={{ fontSize: 'var(--text-xs)' }}>1.125rem (18px)</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <h6 style={{ margin: 0, fontSize: 'var(--text-h6)', lineHeight: 'var(--leading-tight)' }}>Heading 6</h6>
                </div>
                <div style={{ minWidth: '200px', textAlign: 'right' }}>
                  <div style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>--text-h6</div>
                  <code style={{ fontSize: 'var(--text-xs)' }}>1rem (16px)</code>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Display Scale</h2>
            <p>Extra-large sizes for hero sections and marketing content:</p>
          </Content.Prose>

          <div style={{ marginTop: 'var(--gap-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--gap-lg)' }}>
            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ margin: 0, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--leading-none)', fontWeight: 'var(--font-bold)' }}>Display</div>
                </div>
                <div style={{ minWidth: '200px', textAlign: 'right' }}>
                  <div style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>--text-display-lg</div>
                  <code style={{ fontSize: 'var(--text-xs)' }}>6rem (96px)</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ margin: 0, fontSize: 'var(--text-display-md)', lineHeight: 'var(--leading-none)', fontWeight: 'var(--font-bold)' }}>Display</div>
                </div>
                <div style={{ minWidth: '200px', textAlign: 'right' }}>
                  <div style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>--text-display-md</div>
                  <code style={{ fontSize: 'var(--text-xs)' }}>4.5rem (72px)</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ margin: 0, fontSize: 'var(--text-display-sm)', lineHeight: 'var(--leading-none)', fontWeight: 'var(--font-bold)' }}>Display</div>
                </div>
                <div style={{ minWidth: '200px', textAlign: 'right' }}>
                  <div style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>--text-display-sm</div>
                  <code style={{ fontSize: 'var(--text-xs)' }}>3.75rem (60px)</code>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Body Text</h2>
            <p>Three body text sizes for different contexts:</p>
          </Content.Prose>

          <div style={{ marginTop: 'var(--gap-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--gap-lg)' }}>
            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-relaxed)' }}>
                    The quick brown fox jumps over the lazy dog. This is large body text for emphasis and readability.
                  </p>
                </div>
                <div style={{ minWidth: '200px', textAlign: 'right' }}>
                  <div style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>--text-body-lg</div>
                  <code style={{ fontSize: 'var(--text-xs)' }}>1.5rem (24px)</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body)', lineHeight: 'var(--leading-normal)' }}>
                    The quick brown fox jumps over the lazy dog. This is default body text used throughout the interface.
                  </p>
                </div>
                <div style={{ minWidth: '200px', textAlign: 'right' }}>
                  <div style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>--text-body</div>
                  <code style={{ fontSize: 'var(--text-xs)' }}>1rem (16px)</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body-sm)', lineHeight: 'var(--leading-normal)' }}>
                    The quick brown fox jumps over the lazy dog. This is small body text for secondary content and captions.
                  </p>
                </div>
                <div style={{ minWidth: '200px', textAlign: 'right' }}>
                  <div style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>--text-body-sm</div>
                  <code style={{ fontSize: 'var(--text-xs)' }}>0.875rem (14px)</code>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Utility Sizes</h2>
            <p>Additional sizes for specific use cases:</p>
          </Content.Prose>

          <div style={{ marginTop: 'var(--gap-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--gap-lg)' }}>
            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-small)', lineHeight: 'var(--leading-normal)' }}>
                    Small text for captions, labels, and secondary information.
                  </p>
                </div>
                <div style={{ minWidth: '200px', textAlign: 'right' }}>
                  <div style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>--text-small</div>
                  <code style={{ fontSize: 'var(--text-xs)' }}>0.875rem (14px)</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-xs)', lineHeight: 'var(--leading-normal)' }}>
                    Extra small text for micro content, badges, and timestamps.
                  </p>
                </div>
                <div style={{ minWidth: '200px', textAlign: 'right' }}>
                  <div style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>--text-xs</div>
                  <code style={{ fontSize: 'var(--text-xs)' }}>0.75rem (12px)</code>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Font Weights</h2>
            <p>Five weight options for emphasis and hierarchy:</p>
          </Content.Prose>

          <div style={{ marginTop: 'var(--gap-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--gap-lg)' }}>
            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body)', fontWeight: 'var(--font-light)' }}>
                    Light weight (300) - Subtle, elegant text for special emphasis.
                  </p>
                </div>
                <div style={{ minWidth: '150px', textAlign: 'right' }}>
                  <code style={{ fontSize: 'var(--text-xs)' }}>--font-light</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body)', fontWeight: 'var(--font-normal)' }}>
                    Normal weight (400) - Default for body text and paragraphs.
                  </p>
                </div>
                <div style={{ minWidth: '150px', textAlign: 'right' }}>
                  <code style={{ fontSize: 'var(--text-xs)' }}>--font-normal</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body)', fontWeight: 'var(--font-medium)' }}>
                    Medium weight (500) - Subtle emphasis for important content.
                  </p>
                </div>
                <div style={{ minWidth: '150px', textAlign: 'right' }}>
                  <code style={{ fontSize: 'var(--text-xs)' }}>--font-medium</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body)', fontWeight: 'var(--font-semibold)' }}>
                    Semibold weight (600) - Headings and strong emphasis.
                  </p>
                </div>
                <div style={{ minWidth: '150px', textAlign: 'right' }}>
                  <code style={{ fontSize: 'var(--text-xs)' }}>--font-semibold</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body)', fontWeight: 'var(--font-bold)' }}>
                    Bold weight (700) - Extra emphasis for critical information.
                  </p>
                </div>
                <div style={{ minWidth: '150px', textAlign: 'right' }}>
                  <code style={{ fontSize: 'var(--text-xs)' }}>--font-bold</code>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Line Height</h2>
            <p>Optimized line heights for readability:</p>
          </Content.Prose>

          <div style={{ marginTop: 'var(--gap-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--gap-lg)' }}>
            <Card>
              <div style={{ display: 'flex', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body)', lineHeight: 'var(--leading-none)' }}>
                    Line height none (1.0) - Tight spacing for display text and headlines where vertical space is limited.
                  </p>
                </div>
                <div style={{ minWidth: '150px', textAlign: 'right' }}>
                  <code style={{ fontSize: 'var(--text-xs)' }}>--leading-none</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body)', lineHeight: 'var(--leading-tight)' }}>
                    Line height tight (1.25) - Compact spacing for headings and titles where readability is still important.
                  </p>
                </div>
                <div style={{ minWidth: '150px', textAlign: 'right' }}>
                  <code style={{ fontSize: 'var(--text-xs)' }}>--leading-tight</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body)', lineHeight: 'var(--leading-normal)' }}>
                    Line height normal (1.5) - Standard spacing for body text and most content. Provides good balance between density and readability.
                  </p>
                </div>
                <div style={{ minWidth: '150px', textAlign: 'right' }}>
                  <code style={{ fontSize: 'var(--text-xs)' }}>--leading-normal</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)' }}>
                    Line height relaxed (1.625) - Comfortable spacing for long-form content and articles. Enhances readability for extended reading sessions.
                  </p>
                </div>
                <div style={{ minWidth: '150px', textAlign: 'right' }}>
                  <code style={{ fontSize: 'var(--text-xs)' }}>--leading-relaxed</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body)', lineHeight: 'var(--leading-loose)' }}>
                    Line height loose (2.0) - Extra spacing for maximum readability. Best used for accessibility or special emphasis contexts.
                  </p>
                </div>
                <div style={{ minWidth: '150px', textAlign: 'right' }}>
                  <code style={{ fontSize: 'var(--text-xs)' }}>--leading-loose</code>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Letter Spacing</h2>
            <p>Tracking adjustments for different contexts:</p>
          </Content.Prose>

          <div style={{ marginTop: 'var(--gap-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--gap-lg)' }}>
            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body)', letterSpacing: 'var(--tracking-tighter)' }}>
                    Tighter tracking (-0.05em) - Condensed spacing for large display text.
                  </p>
                </div>
                <div style={{ minWidth: '180px', textAlign: 'right' }}>
                  <code style={{ fontSize: 'var(--text-xs)' }}>--tracking-tighter</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body)', letterSpacing: 'var(--tracking-tight)' }}>
                    Tight tracking (-0.025em) - Slightly condensed for headings.
                  </p>
                </div>
                <div style={{ minWidth: '180px', textAlign: 'right' }}>
                  <code style={{ fontSize: 'var(--text-xs)' }}>--tracking-tight</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body)', letterSpacing: 'var(--tracking-normal)' }}>
                    Normal tracking (0) - Default spacing for body text and most content.
                  </p>
                </div>
                <div style={{ minWidth: '180px', textAlign: 'right' }}>
                  <code style={{ fontSize: 'var(--text-xs)' }}>--tracking-normal</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body)', letterSpacing: 'var(--tracking-wide)' }}>
                    Wide tracking (0.025em) - Slightly expanded for emphasis.
                  </p>
                </div>
                <div style={{ minWidth: '180px', textAlign: 'right' }}>
                  <code style={{ fontSize: 'var(--text-xs)' }}>--tracking-wide</code>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-lg)' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-body)', letterSpacing: 'var(--tracking-wider)' }}>
                    Wider tracking (0.05em) - Expanded spacing for uppercase text and labels.
                  </p>
                </div>
                <div style={{ minWidth: '180px', textAlign: 'right' }}>
                  <code style={{ fontSize: 'var(--text-xs)' }}>--tracking-wider</code>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Usage Guidelines</h2>
            <ul>
              <li><strong>Hierarchy</strong> - Use heading levels semantically (h1 → h2 → h3)</li>
              <li><strong>Readability</strong> - Keep line length between 50-75 characters</li>
              <li><strong>Contrast</strong> - Ensure sufficient contrast for all text sizes</li>
              <li><strong>Responsive</strong> - Consider reducing sizes on mobile devices</li>
              <li><strong>Consistency</strong> - Always use tokens, never hard-code sizes</li>
            </ul>
          </Content.Prose>
        </div>
      </div>
    </>
  );
}
