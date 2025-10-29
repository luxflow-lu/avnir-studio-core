"use client";

import { Card, Content, Layout } from "@avnir/ui";

export default function AccessibilityPage() {
  return (
    <>
      <Layout.PageHeader
        title="Accessibility Guidelines"
        subtitle="WCAG 2.1 AA standards and best practices for inclusive design"
      />

      <section className="section">
        <div className="container">
          <Content.Prose>
            <h2>Our Commitment</h2>
            <p>
              MUZISYSTEM is built with accessibility as a core principle. All components meet 
              WCAG 2.1 Level AA standards, ensuring our design system is usable by everyone, 
              regardless of their abilities or the technologies they use.
            </p>
          </Content.Prose>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Color Contrast"
            subtitle="Ensuring readability for all users"
            align="left"
          />
          <div className="grid-2">
            <Card>
              <h3>✅ Requirements</h3>
              <ul style={{ lineHeight: 1.8 }}>
                <li><strong>Normal text</strong> - Minimum 4.5:1 contrast ratio</li>
                <li><strong>Large text (18px+)</strong> - Minimum 3:1 contrast ratio</li>
                <li><strong>UI components</strong> - Minimum 3:1 contrast ratio</li>
                <li><strong>Focus indicators</strong> - Minimum 3:1 contrast ratio</li>
              </ul>
            </Card>
            <Card>
              <h3>🎨 Testing</h3>
              <p style={{ marginBottom: 'var(--margin-md)', color: 'var(--muted)' }}>
                All color combinations are tested with:
              </p>
              <ul style={{ lineHeight: 1.8 }}>
                <li>Chrome DevTools Lighthouse</li>
                <li>axe DevTools</li>
                <li>Contrast ratio calculators</li>
                <li>Color blindness simulators</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Keyboard Navigation"
            subtitle="Full keyboard accessibility for all interactive elements"
            align="left"
          />
          <Content.Prose>
            <h3>Focus Management</h3>
            <ul>
              <li><strong>Visible focus indicators</strong> - All interactive elements have clear focus states</li>
              <li><strong>Logical tab order</strong> - Tab navigation follows visual layout</li>
              <li><strong>Skip links</strong> - Allow users to skip repetitive content</li>
              <li><strong>Focus trapping</strong> - Modals and dialogs trap focus appropriately</li>
            </ul>

            <h3>Keyboard Shortcuts</h3>
            <ul>
              <li><kbd>Tab</kbd> - Navigate forward</li>
              <li><kbd>Shift + Tab</kbd> - Navigate backward</li>
              <li><kbd>Enter</kbd> / <kbd>Space</kbd> - Activate buttons and links</li>
              <li><kbd>Esc</kbd> - Close modals and dropdowns</li>
              <li><kbd>Arrow keys</kbd> - Navigate within components (tabs, menus)</li>
            </ul>
          </Content.Prose>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Screen Readers"
            subtitle="Semantic HTML and ARIA for assistive technologies"
            align="left"
          />
          <div className="grid-2">
            <Card>
              <h3>Semantic HTML</h3>
              <ul style={{ lineHeight: 1.8 }}>
                <li>Proper heading hierarchy (h1-h6)</li>
                <li>Semantic landmarks (nav, main, aside)</li>
                <li>Lists for grouped content</li>
                <li>Buttons for actions, links for navigation</li>
              </ul>
            </Card>
            <Card>
              <h3>ARIA Attributes</h3>
              <ul style={{ lineHeight: 1.8 }}>
                <li><code>aria-label</code> for icon buttons</li>
                <li><code>aria-describedby</code> for form hints</li>
                <li><code>aria-live</code> for dynamic content</li>
                <li><code>role</code> when semantic HTML isn't enough</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Forms & Inputs"
            subtitle="Accessible form design and validation"
            align="left"
          />
          <Content.Prose>
            <h3>Best Practices</h3>
            <ul>
              <li><strong>Labels</strong> - Every input has an associated label</li>
              <li><strong>Error messages</strong> - Clear, specific, and announced to screen readers</li>
              <li><strong>Required fields</strong> - Marked with both visual and programmatic indicators</li>
              <li><strong>Autocomplete</strong> - Appropriate autocomplete attributes for common fields</li>
              <li><strong>Input types</strong> - Use semantic input types (email, tel, number)</li>
            </ul>
          </Content.Prose>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Testing Checklist"
            subtitle="Ensure your implementation is accessible"
            align="left"
          />
          <Card>
            <Content.Prose>
              <h3>Manual Testing</h3>
              <ul>
                <li>✅ Navigate entire page using only keyboard</li>
                <li>✅ Test with screen reader (NVDA, JAWS, VoiceOver)</li>
                <li>✅ Verify focus indicators are visible</li>
                <li>✅ Check color contrast with DevTools</li>
                <li>✅ Test with browser zoom at 200%</li>
                <li>✅ Verify text can be resized without breaking layout</li>
              </ul>

              <h3>Automated Testing</h3>
              <ul>
                <li>✅ Run axe DevTools audit</li>
                <li>✅ Check Lighthouse accessibility score (≥95)</li>
                <li>✅ Validate HTML with W3C validator</li>
                <li>✅ Test with Pa11y or similar tools</li>
              </ul>
            </Content.Prose>
          </Card>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Content.Prose>
            <h2>Resources</h2>
            <ul>
              <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener">WCAG 2.1 Quick Reference</a></li>
              <li><a href="https://www.a11yproject.com/" target="_blank" rel="noopener">The A11Y Project</a></li>
              <li><a href="https://webaim.org/" target="_blank" rel="noopener">WebAIM</a></li>
              <li><a href="https://www.deque.com/axe/" target="_blank" rel="noopener">axe DevTools</a></li>
            </ul>
          </Content.Prose>
        </div>
      </section>
    </>
  );
}
