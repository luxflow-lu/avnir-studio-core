import { Marketing } from "@avnir/ui";

export default function HomePage() {
  return (
    <main>
      <Marketing.Hero
        title="MUZISYSTEM"
        subtitle="A comprehensive design system built for modern web applications. Consistent, accessible, and beautiful components for your next project."
        actions={
          <div className="hero-actions">
            <a href="/components" className="btn btn-primary btn--lg">
              Explore Components
            </a>
            <a href="/guidelines" className="btn btn-secondary btn--lg">
              View Documentation
            </a>
          </div>
        }
      />
      
      <section className="section">
        <div className="container">
          <Marketing.FeatureGrid
            title="Design System Features"
            subtitle="Everything you need to build consistent, accessible interfaces"
            items={[
              {
                title: "Consistent Design",
                description: "Unified visual language across all components and applications"
              },
              {
                title: "Accessibility First",
                description: "WCAG 2.1 AA compliant components with proper ARIA support"
              },
              {
                title: "Developer Experience",
                description: "TypeScript support, comprehensive documentation, and easy integration"
              },
              {
                title: "Customizable",
                description: "Theme system with CSS variables for easy brand customization"
              }
            ]}
            columns={4}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Marketing.CtaSection
            title="Ready to get started?"
            subtitle="Explore our comprehensive component library and start building amazing interfaces today."
            actions={
              <a href="/components" className="btn btn-primary btn--lg">
                Browse Components
              </a>
            }
          />
        </div>
      </section>
    </main>
  );
}
