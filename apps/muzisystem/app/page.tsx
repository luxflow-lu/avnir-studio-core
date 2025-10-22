import { Button } from '@avnir/ui';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-titles mb-8">
          MUZISYSTEM Design System
        </h1>
        <p className="text-lg text-muted mb-8">
          Welcome to the comprehensive design system showcase for AVNIR Studio.
        </p>
        <div className="space-x-4">
          <Button variant="solid">Get Started</Button>
          <Button variant="outline">View Components</Button>
        </div>
      </div>
    </main>
  );
}
