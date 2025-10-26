"use client";

import { Layout, Content, Card, Button } from "@avnir/ui";

export default function PatternsPage() {
  return (
    <>
      <div className="section">
        <div className="container">
          <Layout.PageHeader
            title="Patterns"
            subtitle="Common UI patterns and workflows for building consistent, user-friendly experiences."
          />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>What are Patterns?</h2>
            <p>
              Patterns are reusable solutions to common design problems. They combine multiple components 
              and interactions to create complete user flows that have been tested and refined.
            </p>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Available Patterns</h2>
          </Content.Prose>

          <div className="grid-2">
            <Card>
              <h3>🔐 Authentication</h3>
              <p>Secure authentication flows including login, signup, password reset, and 2FA.</p>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/patterns/authentication'}
              >
                View Pattern
              </Button>
            </Card>

            <Card>
              <h3>📤 Upload</h3>
              <p>File upload workflows with progress tracking, validation, and error handling.</p>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/patterns/upload'}
              >
                View Pattern
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
