import { CtaSection as CtaSectionComponent } from "@avnir/ui";
import { Button } from "@avnir/ui";

export function CtaSection() {
  return (
    <CtaSectionComponent
      title="Ready to Build Something Amazing?"
      subtitle="Join thousands of developers using MUZISYSTEM to create beautiful, accessible user interfaces"
      className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5"
      actions={
        <>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started Now
          </Button>
          <Button variant="outline" size="lg">
            View on GitHub
          </Button>
        </>
      }
      image={
        <div className="relative mx-auto max-w-lg">
          <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-sm text-muted">Start Building Today</p>
            </div>
          </div>
        </div>
      }
    />
  );
}
