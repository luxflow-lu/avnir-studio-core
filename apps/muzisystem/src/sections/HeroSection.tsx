import { Hero } from "@avnir/ui";
import { Button } from "@avnir/ui";

export function HeroSection() {
  return (
    <Hero
      eyebrow="Design System Showcase"
      title="MUZISYSTEM"
      subtitle="A comprehensive design system built for modern web applications. Consistent, accessible, and beautiful components for your next project."
      layout="center"
      maxWidth="2xl"
      className="py-12 md:py-16 lg:py-24 min-h-[80vh] flex items-center"
      actions={
        <>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Explore Components
          </Button>
          <Button variant="outline" size="lg">
            View Documentation
          </Button>
        </>
      }
      image={
        <div className="relative mx-auto max-w-2xl">
          <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <p className="text-sm text-muted">Interactive Component Preview</p>
            </div>
          </div>
        </div>
      }
    />
  );
}
