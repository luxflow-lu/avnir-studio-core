import { Button } from "@avnir/ui";

export function ContentSplitSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-titles mb-4">
              Built for Developers, Designed for Users
            </h2>
            <p className="text-lg text-muted mb-6">
              MUZISYSTEM bridges the gap between design and development with a comprehensive
              component library that's both beautiful and functional. Every component is crafted
              with attention to detail and built with modern web standards.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>TypeScript-first development experience</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Comprehensive Storybook documentation</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Automated testing and quality assurance</span>
              </li>
            </ul>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-border p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-titles mb-2">Quality Assured</h3>
                <p className="text-sm text-muted">Every component tested and validated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContentSplitSectionReversed() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-surface/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative md:order-1">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-border p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-titles mb-2">Design Excellence</h3>
                <p className="text-sm text-muted">Pixel-perfect components</p>
              </div>
            </div>
          </div>
          <div className="md:order-2">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-titles mb-4">
              Consistent Design Language
            </h2>
            <p className="text-lg text-muted mb-6">
              Maintain visual consistency across your entire application with our carefully crafted
              design tokens and component variants. From buttons to complex layouts, everything
              works together seamlessly.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Unified color palette and typography</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Responsive design patterns</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Dark and light theme support</span>
              </li>
            </ul>
            <Button variant="outline" size="lg">
              View Design Tokens
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
