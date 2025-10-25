"use client";

import { Button, Card, Layout, Marketing } from "@avnir/ui";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Marketing.Hero
        title="MUZISYSTEM Official Design System"
        subtitle="Production-ready components and design tokens for building consistent, accessible, and scalable user interfaces."
        layout="center"
        actions={
          <>
            <Button variant="solid" size="lg">Get Started</Button>
            <Button variant="outline" size="lg">View Components</Button>
          </>
        }
      />

        {/* Stats Section */}
        <section className="section--md">
          <div className="container">
            <div className="grid-4" data-debug="stats-grid">
              <Card>
                <h3>150+</h3>
                <p>Components</p>
              </Card>
              <Card>
                <h3>8</h3>
                <p>Brand Themes</p>
              </Card>
              <Card>
                <h3>100%</h3>
                <p>TypeScript</p>
              </Card>
              <Card>
                <h3>WCAG 2.1</h3>
                <p>AA Compliant</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="section--md">
          <div className="container">
            <Layout.SectionHeader 
              title="Design Principles" 
              subtitle="Our core principles guide every design decision"
              align="center"
            />
            <div className="grid-3">
              <Card>
                <h3>🎯 Consistency</h3>
                <p>Unified visual language and interaction patterns</p>
              </Card>
              <Card>
                <h3>♿ Accessibility</h3>
                <p>WCAG 2.1 AA compliant, inclusive for everyone</p>
              </Card>
              <Card>
                <h3>⚡ Performance</h3>
                <p>Optimized components with minimal bundle size</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Component Categories */}
        <section className="section--md">
          <div className="container">
            <Layout.SectionHeader 
              title="Component Library" 
              subtitle="Comprehensive collection of production-ready components"
              align="center"
            />
            <div className="grid-2">
              <Card>
                <h3>Foundation</h3>
                <p>Core building blocks including typography, colors, spacing, and layout primitives</p>
                <Button variant="solid" size="sm">Button</Button>
                <Button variant="outline" size="sm">Secondary</Button>
              </Card>

              <Card>
                <h3>Form Components</h3>
                <p>Input fields, selectors, validation, and form layout components</p>
              </Card>
              <Card>
                <h3>Data Display</h3>
                <p>Tables, lists, cards, and data visualization components</p>
              </Card>
              <Card>
                <h3>Navigation</h3>
                <p>Menus, breadcrumbs, pagination, and navigation patterns</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Design Tokens */}
        <section className="section--md">
          <div className="container">
            <Layout.SectionHeader 
              title="Design Tokens" 
              subtitle="Consistent design decisions codified as data"
              align="center"
            />
            <div className="grid-3">
              <Card>
                <h3>Colors</h3>
                <p>8 brand themes with semantic color scales</p>
              </Card>
              <Card>
                <h3>Typography</h3>
                <p>Responsive scale with perfect readability</p>
              </Card>
              <Card>
                <h3>Spacing</h3>
                <p>Consistent spacing system for layouts</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Developer Experience */}
        <section className="section--md">
          <div className="container">
            <Layout.SectionHeader 
              title="Developer Experience" 
              subtitle="Built for developers, by developers"
              align="center"
            />
            <div className="grid-2">
              <Card>
                <h3>TypeScript First</h3>
                <p>Full type safety with IntelliSense support and comprehensive prop definitions</p>
              </Card>
              <Card>
                <h3>Easy Integration</h3>
                <p>Simple installation and setup with comprehensive documentation</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section--md">
          <div className="container">
            <Layout.SectionHeader 
              title="Start Building Today" 
              subtitle="Join hundreds of teams using MUZISYSTEM to build consistent, accessible interfaces"
              align="center"
            />
            <Button variant="solid" size="lg">View All Components</Button>
            <Button variant="outline" size="lg">Read Documentation</Button>
          </div>
        </section>
    </>
  );
}
