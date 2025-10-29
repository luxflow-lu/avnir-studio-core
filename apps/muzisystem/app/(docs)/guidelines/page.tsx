"use client";

import { Layout, Content, Card, Button } from "@avnir/ui";

export default function GuidelinesPage() {
  return (
    <>
      <div className="section">
        <div className="container">
          <Layout.PageHeader
            title="Guidelines"
            subtitle="Best practices, standards, and principles for building with MUZISYSTEM."
          />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>What are Guidelines?</h2>
            <p>
              Guidelines provide the principles and best practices for using MUZISYSTEM effectively. 
              They cover accessibility standards, responsive design patterns, and content writing 
              conventions to ensure consistency and quality across all implementations.
            </p>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Available Guidelines</h2>
          </Content.Prose>

          <div className="grid-2">
            <Card>
              <h3>♿ Accessibility</h3>
              <p>WCAG 2.1 AA standards, keyboard navigation, screen readers, and inclusive design principles.</p>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/guidelines/accessibility'}
              >
                View Guidelines
              </Button>
            </Card>

            <Card>
              <h3>📱 Responsive</h3>
              <p>Mobile-first approach, breakpoints, touch targets, and responsive design patterns.</p>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/guidelines/responsive'}
              >
                View Guidelines
              </Button>
            </Card>

            <Card>
              <h3>✍️ Writing</h3>
              <p>Tone of voice, microcopy, error messages, and content writing best practices.</p>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/guidelines/writing'}
              >
                View Guidelines
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
