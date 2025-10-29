"use client";

import React from "react";
import { Auth, Badge, Button, Layout, Primitives } from "@avnir/ui";

// Template de section pour chaque composant
interface ComponentSectionProps {
  name: string;
  category: string;
  description: string;
  variants?: string[];
  preview: React.ReactNode;
  status?: 'stable' | 'beta' | 'deprecated';
  browsers?: string[];
  a11y?: 'AA' | 'AAA';
}

function ComponentSection({ name, category, description, variants, preview, status = 'stable', browsers = ['all'], a11y = 'AA' }: ComponentSectionProps) {
  const statusConfig = {
    stable: { label: 'Stable', color: 'var(--success)', emoji: '✅' },
    beta: { label: 'Beta', color: 'var(--warning)', emoji: '🧪' },
    deprecated: { label: 'Deprecated', color: 'var(--error)', emoji: '⚠️' }
  };

  const currentStatus = statusConfig[status];

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
            
            {/* Status Badges */}
            <div style={{ marginBottom: 'var(--margin-lg)' }}>
              <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)', fontWeight: 'var(--font-medium)' }}>
                Status
              </p>
              <div style={{ display: 'flex', gap: 'var(--gap-sm)', flexWrap: 'wrap', alignItems: 'center' }}>
                <Badge style={{ backgroundColor: currentStatus.color, color: '#0b0b0d' }}>
                  {currentStatus.emoji} {currentStatus.label}
                </Badge>
                
                {browsers.includes('all') ? (
                  <Badge variant="default">
                    🌐 All Browsers
                  </Badge>
                ) : (
                  <Badge variant="default">
                    🌐 {browsers.join(', ')}
                  </Badge>
                )}
                
                <Badge variant="default">
                  ♿ WCAG 2.1 {a11y}
                </Badge>
              </div>
            </div>
            
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


export default function AuthPage() {
  const [otpValue, setOtpValue] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <>
      {/* Page Header */}
      <Layout.PageHeader
        title="Authentication Components"
        subtitle="Secure, accessible authentication components for login, registration, and verification flows. Built with best practices for security and user experience."
      />

      <ComponentSection
        name="LoginForm"
        category="Authentication"
        description="Complete login form with email/password fields, remember me option, and forgot password link. Includes validation and loading states."
        variants={["default", "with-social", "compact"]}
        preview={
          <Auth.LoginForm
            onSubmit={async (data) => {
              console.log('Login:', data);
            }}
            onForgotPassword={() => console.log('Forgot password')}
            onSignUp={() => console.log('Sign up')}
          />
        }
      />

      <ComponentSection
        name="RegisterForm"
        category="Authentication"
        description="Registration form with name, email, and password fields. Includes password strength indicator and terms acceptance."
        variants={["default", "with-social", "minimal"]}
        preview={
          <Auth.RegisterForm
            onSubmit={async (data) => {
              console.log('Register:', data);
            }}
            onSignIn={() => console.log('Sign in')}
          />
        }
      />

      <ComponentSection
        name="OTPInput"
        category="Verification"
        description="One-time password input with auto-focus and paste support. Perfect for 2FA and email verification flows."
        variants={["4-digit", "6-digit", "8-digit"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-lg)', alignItems: 'center' }}>
            <Auth.OTPInput
              length={6}
              value={otpValue}
              onChange={setOtpValue}
            />
            <p className="text-small" style={{ color: 'var(--muted)' }}>
              Enter the 6-digit code
            </p>
          </div>
        }
      />

      <ComponentSection
        name="PasswordStrength"
        category="Validation"
        description="Real-time password strength indicator with visual feedback and requirement checklist. Helps users create secure passwords."
        variants={["with-label", "with-requirements", "minimal"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: 'var(--padding-sm) var(--padding-md)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--surface)',
                color: 'var(--text)',
                fontSize: 'var(--text-body)'
              }}
            />
            <Auth.PasswordStrength
              password={password}
              showLabel={true}
              showRequirements={true}
            />
          </div>
        }
      />

      <ComponentSection
        name="TwoFactorAuth"
        category="Security"
        description="Two-factor authentication component with multiple methods (app, SMS, email). Includes code input and resend functionality."
        variants={["app", "sms", "email"]}
        preview={
          <Auth.TwoFactorAuth
            method="app"
            onVerify={async (code) => {
              console.log('Verify 2FA:', code);
            }}
            onResend={async () => {
              console.log('Resend code');
            }}
          />
        }
      />
    </>
  );
}
