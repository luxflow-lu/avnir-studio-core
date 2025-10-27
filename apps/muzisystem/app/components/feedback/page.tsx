"use client";

import React from "react";
import { Badge, Button, Feedback, Layout, Primitives } from "@avnir/ui";

// Template de section pour chaque composant
interface ComponentSectionProps {
  name: string;
  category: string;
  description: string;
  variants?: string[];
  preview: React.ReactNode;
}

function ComponentSection({ name, category, description, variants, preview }: ComponentSectionProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ gap: 'var(--gap-xl)', alignItems: 'center' }}>
          {/* Left: Info */}
          <div>
            {/* Category Badge */}
            <div style={{ marginBottom: 'var(--margin-md)' }}>
              <Badge variant="primary" style={{ textTransform: 'uppercase' }}>
                {category}
              </Badge>
            </div>
            <h2 style={{ 
              fontSize: 'var(--text-h2)', 
              fontWeight: 'var(--font-bold)', 
              marginBottom: 'var(--margin-md)',
              color: 'var(--titles)'
            }}>
              {name}
            </h2>
            <p style={{ color: 'var(--muted)', marginBottom: 'var(--margin-md)', lineHeight: 1.6 }}>
              {description}
            </p>
            
            {/* Variants */}
            {variants && variants.length > 0 && (
              <div style={{ marginBottom: 'var(--margin-lg)' }}>
                <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)', fontWeight: 'var(--font-medium)' }}>
                  {variants.length} variant{variants.length > 1 ? 's' : ''} available
                </p>
                <div style={{ display: 'flex', gap: 'var(--gap-xs)', flexWrap: 'wrap' }}>
                  {variants.map((variant, index) => (
                    <Badge key={index} variant="default">
                      {variant}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            <Button variant="outline" size="lg">
              View Full Documentation →
            </Button>
          </div>

          {/* Right: Preview */}
          <Primitives.Box style={{
            padding: 'var(--padding-xl)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border)'
          }}>
            <h3 style={{ marginBottom: 'var(--margin-lg)', fontSize: 'var(--text-small)', fontWeight: 'var(--font-medium)', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Preview</h3>
            {preview}
          </Primitives.Box>
        </div>
      </div>
    </section>
  );
}


export default function FeedbackPage() {
  const [showDialog, setShowDialog] = React.useState(false);
  const [showSnackbar, setShowSnackbar] = React.useState(false);

  return (
    <>
      {/* Page Header */}
      <Layout.PageHeader
        title="Feedback Components"
        subtitle="Components for user feedback including alerts, notifications, loading states, and dialogs. Built for clear communication and user guidance."
      />

      <ComponentSection
        name="Alert"
        category="Feedback"
        description="Alert messages for important information, warnings, and errors. Supports multiple severity levels and optional actions."
        variants={["info", "success", "warning", "error"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
            <Feedback.Alert variant="info" title="Information">
              This is an informational alert message.
            </Feedback.Alert>
            <Feedback.Alert variant="success" title="Success">
              Your changes have been saved successfully.
            </Feedback.Alert>
            <Feedback.Alert variant="warning" title="Warning">
              Please review your settings before continuing.
            </Feedback.Alert>
            <Feedback.Alert variant="error" title="Error">
              An error occurred. Please try again.
            </Feedback.Alert>
          </div>
        }
      />

      <ComponentSection
        name="Notification"
        category="Feedback"
        description="Toast-style notifications for temporary feedback. Auto-dismisses after a set duration with optional actions."
        variants={["default", "success", "warning", "error"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)' }}>
            <Feedback.Notification title="New message received">
              You have a new message from John Doe
            </Feedback.Notification>
            <Feedback.Notification title="Upload complete" variant="success">
              Your file has been uploaded successfully
            </Feedback.Notification>
          </div>
        }
      />

      <ComponentSection
        name="Dialog"
        category="Feedback"
        description="Simple dialog for confirmations and user input. Includes title, content, and action buttons."
        variants={["default", "destructive"]}
        preview={
          <div>
            <Button onClick={() => setShowDialog(true)}>
              Open Dialog
            </Button>
            <Feedback.Dialog
              open={showDialog}
              onClose={() => setShowDialog(false)}
              title="Confirm Action"
            >
              <p style={{ marginBottom: 'var(--margin-lg)' }}>
                Are you sure you want to proceed? This action cannot be undone.
              </p>
              <div style={{ display: 'flex', gap: 'var(--gap-sm)', justifyContent: 'flex-end' }}>
                <Button variant="ghost" onClick={() => setShowDialog(false)}>
                  Cancel
                </Button>
                <Button variant="solid" onClick={() => setShowDialog(false)}>
                  Confirm
                </Button>
              </div>
            </Feedback.Dialog>
          </div>
        }
      />

      <ComponentSection
        name="ConfirmDialog"
        category="Feedback"
        description="Specialized confirmation dialog with preset actions. Perfect for destructive actions and important decisions."
        variants={["default", "destructive"]}
        preview={
          <Button variant="outline">
            Open Confirm Dialog
          </Button>
        }
      />

      <ComponentSection
        name="Snackbar"
        category="Feedback"
        description="Bottom-anchored notification for brief messages. Auto-dismisses with optional action button."
        variants={["default", "with-action"]}
        preview={
          <div>
            <Button onClick={() => setShowSnackbar(true)}>
              Show Snackbar
            </Button>
            {showSnackbar && (
              <Feedback.Snackbar
                message="Item added to cart"
                action={{ label: "Undo", onClick: () => console.log('Undo') }}
                onClose={() => setShowSnackbar(false)}
              />
            )}
          </div>
        }
      />

      <ComponentSection
        name="LoadingOverlay"
        category="Feedback"
        description="Full-screen loading overlay with spinner. Blocks interaction while content is loading."
        variants={["default", "with-message"]}
        preview={
          <div style={{ position: 'relative', height: '200px', border: '1px dashed var(--border)', borderRadius: 'var(--radius-sm)' }}>
            <Feedback.LoadingOverlay visible={true} message="Loading content..." />
          </div>
        }
      />

      <ComponentSection
        name="LoadingDots"
        category="Feedback"
        description="Animated loading dots indicator. Lightweight alternative to spinners for inline loading states."
        variants={["default", "small", "large"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)', alignItems: 'center' }}>
            <Feedback.LoadingDots />
            <p className="text-small" style={{ color: 'var(--muted)' }}>Loading...</p>
          </div>
        }
      />

      <ComponentSection
        name="ProgressCircle"
        category="Feedback"
        description="Circular progress indicator with percentage. Shows determinate progress for uploads and processes."
        variants={["default", "with-label", "small", "large"]}
        preview={
          <div style={{ display: 'flex', gap: 'var(--gap-xl)', justifyContent: 'center' }}>
            <Feedback.ProgressCircle value={25} size="md" />
            <Feedback.ProgressCircle value={50} size="md" />
            <Feedback.ProgressCircle value={75} size="md" />
            <Feedback.ProgressCircle value={100} size="md" />
          </div>
        }
      />

      <ComponentSection
        name="RenderStatus"
        category="Feedback"
        description="Status indicator for render jobs and async processes. Shows queued, processing, completed, and error states."
        variants={["queued", "processing", "completed", "failed", "cancelled"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
            <Feedback.RenderStatus
              job={{
                id: "1",
                name: "Beat Render",
                type: "audio",
                status: "processing",
                progress: 45,
                startTime: new Date(),
                modelUsed: "Audio Gen v2"
              }}
            />
            <Feedback.RenderStatus
              job={{
                id: "2",
                name: "Vocal Separation",
                type: "audio",
                status: "completed",
                progress: 100,
                startTime: new Date(),
                endTime: new Date(),
                modelUsed: "Vocal Separator"
              }}
            />
          </div>
        }
      />
    </>
  );
}
