import { Marketing, Layout, Button, Card } from "@avnir/ui";

export default function HomePage() {
  return (
    <>
      <main>
        {/* Hero Section - Enterprise Grade */}
        <Layout.PageHeader
          title="MUZISYSTEM Design System"
          subtitle="Production-ready components and design tokens for building consistent, accessible, and scalable user interfaces across your entire product ecosystem."
        />

        {/* Stats Section */}
        <section>
          <div className="padding-global">
            <div className="container-large padding-section-large">
              <div className="grid-4 gap-6">
                <div className="stats-card">
                  <div className="stats-number">150+</div>
                  <div className="stats-label">Components</div>
                </div>
                <div className="stats-card">
                  <div className="stats-number">8</div>
                  <div className="stats-label">Brand Themes</div>
                </div>
                <div className="stats-card">
                  <div className="stats-number">100%</div>
                  <div className="stats-label">TypeScript</div>
                </div>
                <div className="stats-card">
                  <div className="stats-number">WCAG 2.1</div>
                  <div className="stats-label">AA Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Design Principles */}
      <section className="section section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Design Principles"
            subtitle="Our core principles guide every design decision and component creation"
          />
          <div className="grid-3 gap-8">
            <div className="principle-card">
              <div className="principle-icon">🎯</div>
              <h3 className="content-subtitle">Consistency</h3>
              <p className="text-body">Unified visual language and interaction patterns across all touchpoints</p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">♿</div>
              <h3 className="content-subtitle">Accessibility</h3>
              <p className="text-body">Inclusive design that works for everyone, meeting WCAG 2.1 AA standards</p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">⚡</div>
              <h3 className="content-subtitle">Performance</h3>
              <p className="text-body">Optimized components with minimal bundle size and maximum efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Component Categories */}
      <section className="section section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Component Library"
            subtitle="Comprehensive collection of production-ready components"
          />
          <div className="grid-2 gap-8">
            <Card className="component-category-card">
              <div className="component-category-header">
                <h3 className="content-subtitle">Foundation</h3>
                <span className="component-count">12 components</span>
              </div>
              <p className="text-body mb-4">Core building blocks including typography, colors, spacing, and layout primitives</p>
              <div className="component-preview">
                <Button variant="solid" size="sm">Button</Button>
                <Button variant="outline" size="sm">Secondary</Button>
                <span className="badge badge--success">Badge</span>
              </div>
              <Button variant="ghost" className="w-full mt-4">
                <a href="/foundations" className="text-body">Explore Foundation →</a>
              </Button>
            </Card>

            <Card className="component-category-card">
              <div className="component-category-header">
                <h3 className="content-subtitle">Form Components</h3>
                <span className="component-count">18 components</span>
              </div>
              <p className="text-body mb-4">Input fields, selectors, validation, and form layout components</p>
              <div className="component-preview">
                <input className="input input--sm" placeholder="Input field" />
                <select className="select select--sm">
                  <option>Select option</option>
                </select>
              </div>
              <Button variant="ghost" className="w-full mt-4">
                <a href="/components" className="text-body">Explore Forms →</a>
              </Button>
            </Card>

            <Card className="component-category-card">
              <div className="component-category-header">
                <h3 className="content-subtitle">Data Display</h3>
                <span className="component-count">24 components</span>
              </div>
              <p className="text-body mb-4">Tables, lists, cards, and data visualization components</p>
              <div className="component-preview">
                <div className="avatar avatar--sm">JD</div>
                <div className="progress" style={{width: '80px', height: '4px'}}>
                  <div className="progress-bar" style={{width: '60%'}}></div>
                </div>
              </div>
              <Button variant="ghost" className="w-full mt-4">
                <a href="/components" className="text-body">Explore Data →</a>
              </Button>
            </Card>

            <Card className="component-category-card">
              <div className="component-category-header">
                <h3 className="content-subtitle">Navigation</h3>
                <span className="component-count">16 components</span>
              </div>
              <p className="text-body mb-4">Menus, breadcrumbs, pagination, and navigation patterns</p>
              <div className="component-preview">
                <nav className="breadcrumb breadcrumb--sm">
                  <span>Home</span>
                  <span className="breadcrumb-separator">/</span>
                  <span>Components</span>
                </nav>
              </div>
              <Button variant="ghost" className="w-full mt-4">
                <a href="/components" className="text-body">Explore Navigation →</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Tokens Showcase */}
      <section className="section section--lg">
        <div className="container">
          <Layout.SectionHeader
            title="Design Tokens"
            subtitle="Consistent design decisions codified as data"
          />
          <div className="grid-3 gap-8">
            <div className="token-showcase">
              <h3 className="content-subtitle">Colors</h3>
              <div className="color-palette">
                <div className="color-swatch" style={{backgroundColor: 'var(--primary)'}} title="Primary"></div>
                <div className="color-swatch" style={{backgroundColor: 'var(--success)'}} title="Success"></div>
                <div className="color-swatch" style={{backgroundColor: 'var(--warning)'}} title="Warning"></div>
                <div className="color-swatch" style={{backgroundColor: 'var(--error)'}} title="Error"></div>
              </div>
              <p className="text-small text-muted">8 brand themes with semantic color scales</p>
            </div>
            <div className="token-showcase">
              <h3 className="content-subtitle">Typography</h3>
              <div className="typography-scale">
                <div className="text-large">Large Text</div>
                <div className="text-body">Body Text</div>
                <div className="text-small">Small Text</div>
              </div>
              <p className="text-small text-muted">Responsive scale with perfect readability</p>
            </div>
            <div className="token-showcase">
              <h3 className="content-subtitle">Spacing</h3>
              <div className="spacing-scale">
                <div className="spacing-demo" style={{width: 'var(--space-8)', height: 'var(--space-8)'}}></div>
                <div className="spacing-demo" style={{width: 'var(--space-16)', height: 'var(--space-16)'}}></div>
                <div className="spacing-demo" style={{width: 'var(--space-24)', height: 'var(--space-24)'}}></div>
                <div className="spacing-demo" style={{width: 'var(--space-32)', height: 'var(--space-32)'}}></div>
              </div>
              <p className="text-small text-muted">Consistent spacing system for layouts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Experience */}
      <section className="section section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Developer Experience"
            subtitle="Built for developers, by developers"
          />
          <div className="grid-2 gap-8">
            <div className="dx-feature">
              <h3 className="content-subtitle">TypeScript First</h3>
              <p className="text-body mb-4">Full type safety with IntelliSense support and comprehensive prop definitions</p>
              <div className="code-preview">
                <pre className="code-block">
{`<Button
  variant="solid" // ✓ Type-safe
  size="lg"      // ✓ Autocomplete
  loading={true} // ✓ IntelliSense
>
  Click me
</Button>`}
                </pre>
              </div>
            </div>
            <div className="dx-feature">
              <h3 className="content-subtitle">Easy Integration</h3>
              <p className="text-body mb-4">Simple installation and setup with comprehensive documentation</p>
              <div className="code-preview">
                <pre className="code-block">
{`npm install @avnir/ui @avnir/design

import { Button } from "@avnir/ui"
import "@avnir/ui/styles.css"

// Ready to use!`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--xl">
        <div className="container">
          <div className="cta-final">
            <h2 className="section-title">Start Building Today</h2>
            <p className="text-large text-center mb-8">Join hundreds of teams using MUZISYSTEM to build consistent, accessible interfaces</p>
            <div className="flex gap-4 justify-center">
              <Button variant="solid" size="lg">
                <a href="/all-components" className="text-body">View All Components</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="/guidelines" className="text-body">Read Documentation</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <Layout.Footer
        sections={[
          {
            title: "Product",
            links: [
              { label: "Components", href: "/all-components" },
              { label: "Foundations", href: "/foundations" },
              { label: "Guidelines", href: "/guidelines" },
              { label: "Tokens", href: "/tokens" }
            ]
          },
          {
            title: "Resources",
            links: [
              { label: "Documentation", href: "/docs" },
              { label: "Changelog", href: "/changelog" },
              { label: "GitHub", href: "https://github.com/avnir/design-system" },
              { label: "Figma Kit", href: "/figma" }
            ]
          },
          {
            title: "Community",
            links: [
              { label: "Discord", href: "/discord" },
              { label: "Twitter", href: "/twitter" },
              { label: "Blog", href: "/blog" },
              { label: "Support", href: "/support" }
            ]
          },
          {
            title: "Company",
            links: [
              { label: "About AVNIR", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" }
            ]
          }
        ]}
        bottomContent={
          <div className="footer-bottom">
            <p className="text-small text-muted">
              © 2024 AVNIR Studio. Built with MUZISYSTEM Design System.
            </p>
            <div className="footer-badges">
              <span className="badge badge--outline">v2.1.0</span>
              <span className="badge badge--outline">MIT License</span>
            </div>
          </div>
        }
      />
    </>
  );
}
