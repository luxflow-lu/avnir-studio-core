"use client";

import { Layout, Content, Card } from "@avnir/ui";

export default function PrinciplesPage() {
  return (
    <>
      <div className="section">
        <div className="container">
          <Layout.PageHeader
            title="Design Principles"
            subtitle="The core principles that guide every design decision in MUZISYSTEM"
          />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <p>
              These principles serve as our north star, helping us make consistent decisions 
              and create experiences that are intuitive, accessible, and delightful.
            </p>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid-2">
            <Card>
              <h3>🎯 Consistency</h3>
              <h4>Unified Visual Language</h4>
              <p>
                Maintain consistent patterns, behaviors, and visual styles across all products. 
                Users should feel at home regardless of which AVNIR product they're using.
              </p>
              <ul style={{ fontSize: 'var(--text-small)', marginTop: 'var(--gap-md)' }}>
                <li>Same components behave the same way</li>
                <li>Predictable interaction patterns</li>
                <li>Coherent visual hierarchy</li>
                <li>Unified terminology</li>
              </ul>
            </Card>

            <Card>
              <h3>♿ Accessibility</h3>
              <h4>Inclusive by Default</h4>
              <p>
                Design for everyone, regardless of ability. Accessibility is not optional—it's 
                a fundamental requirement that makes our products better for all users.
              </p>
              <ul style={{ fontSize: 'var(--text-small)', marginTop: 'var(--gap-md)' }}>
                <li>WCAG 2.2 AA compliance minimum</li>
                <li>Keyboard navigation support</li>
                <li>Screen reader optimization</li>
                <li>Sufficient color contrast</li>
              </ul>
            </Card>

            <Card>
              <h3>⚡ Performance</h3>
              <h4>Fast by Design</h4>
              <p>
                Speed is a feature. Every component and pattern is optimized for performance, 
                ensuring smooth experiences even on slower devices and networks.
              </p>
              <ul style={{ fontSize: 'var(--text-small)', marginTop: 'var(--gap-md)' }}>
                <li>Minimal bundle size</li>
                <li>Optimized rendering</li>
                <li>Lazy loading where appropriate</li>
                <li>Efficient animations</li>
              </ul>
            </Card>

            <Card>
              <h3>🎨 Flexibility</h3>
              <h4>Adaptable to Context</h4>
              <p>
                Support multiple brands, themes, and use cases without compromising consistency. 
                The system adapts to different contexts while maintaining core principles.
              </p>
              <ul style={{ fontSize: 'var(--text-small)', marginTop: 'var(--gap-md)' }}>
                <li>Multi-brand theming</li>
                <li>Light and dark modes</li>
                <li>Responsive by default</li>
                <li>Customizable tokens</li>
              </ul>
            </Card>

            <Card>
              <h3>👨‍💻 Developer Experience</h3>
              <h4>Joy to Use</h4>
              <p>
                Make it easy for developers to build great products. Clear documentation, 
                intuitive APIs, and helpful tooling reduce friction and increase productivity.
              </p>
              <ul style={{ fontSize: 'var(--text-small)', marginTop: 'var(--gap-md)' }}>
                <li>TypeScript-first approach</li>
                <li>Comprehensive documentation</li>
                <li>Clear error messages</li>
                <li>Interactive examples</li>
              </ul>
            </Card>

            <Card>
              <h3>🎵 Music-Centric</h3>
              <h4>Built for Audio</h4>
              <p>
                Specialized for music and audio workflows. Components and patterns designed 
                specifically for the unique needs of music creation and distribution.
              </p>
              <ul style={{ fontSize: 'var(--text-small)', marginTop: 'var(--gap-md)' }}>
                <li>Audio player components</li>
                <li>Waveform visualizations</li>
                <li>Metadata displays</li>
                <li>Upload workflows</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>How We Apply These Principles</h2>

            <h3>In Component Design</h3>
            <ul>
              <li><strong>Start with accessibility</strong> - Build semantic HTML and ARIA from the start</li>
              <li><strong>Design for flexibility</strong> - Use variants and props for different contexts</li>
              <li><strong>Optimize for performance</strong> - Minimize re-renders and bundle size</li>
              <li><strong>Maintain consistency</strong> - Follow established patterns and behaviors</li>
            </ul>

            <h3>In Pattern Development</h3>
            <ul>
              <li><strong>Solve real problems</strong> - Patterns emerge from actual product needs</li>
              <li><strong>Document thoroughly</strong> - Explain when and how to use each pattern</li>
              <li><strong>Provide examples</strong> - Show patterns in context with real data</li>
              <li><strong>Iterate based on feedback</strong> - Continuously improve based on usage</li>
            </ul>

            <h3>In Documentation</h3>
            <ul>
              <li><strong>Clear and concise</strong> - Get to the point quickly</li>
              <li><strong>Show, don't just tell</strong> - Use interactive examples</li>
              <li><strong>Progressive disclosure</strong> - Start simple, reveal complexity gradually</li>
              <li><strong>Keep it current</strong> - Update docs with every change</li>
            </ul>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Measuring Success</h2>
            <p>We measure how well we're following these principles through:</p>
            <ul>
              <li><strong>Accessibility audits</strong> - Regular WCAG compliance checks</li>
              <li><strong>Performance metrics</strong> - Lighthouse scores, bundle size tracking</li>
              <li><strong>Developer surveys</strong> - Feedback on DX and documentation</li>
              <li><strong>Usage analytics</strong> - Which components and patterns are most used</li>
              <li><strong>User testing</strong> - Real users interacting with our products</li>
            </ul>
          </Content.Prose>
        </div>
      </div>
    </>
  );
}
