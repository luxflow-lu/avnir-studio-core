"use client";

import { Layout, Content, Card } from "@avnir/ui";

export default function AuthenticationPatternPage() {
  return (
    <>
      <div className="section">
        <div className="container">
          <Layout.PageHeader
            title="Authentication Patterns"
            subtitle="Secure and user-friendly authentication flows for login, signup, and password management."
          />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Overview</h2>
            <p>
              Authentication is a critical part of any application. MUZISYSTEM provides battle-tested 
              patterns for common authentication flows that prioritize both security and user experience.
            </p>
            <p>
              These patterns are designed to work with modern authentication systems including JWT, 
              OAuth, and social login providers.
            </p>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Authentication Flows</h2>
          </Content.Prose>

          <div className="grid-2">
            <Card>
              <h3>🔐 Login</h3>
              <p style={{ fontSize: 'var(--text-small)', marginBottom: 'var(--gap-md)' }}>
                Standard email/password login with remember me option and error handling.
              </p>
              <ul style={{ fontSize: 'var(--text-small)' }}>
                <li>Email validation</li>
                <li>Password visibility toggle</li>
                <li>Remember me checkbox</li>
                <li>Forgot password link</li>
                <li>Social login options</li>
              </ul>
            </Card>

            <Card>
              <h3>✍️ Signup</h3>
              <p style={{ fontSize: 'var(--text-small)', marginBottom: 'var(--gap-md)' }}>
                User registration with validation and password strength indicator.
              </p>
              <ul style={{ fontSize: 'var(--text-small)' }}>
                <li>Real-time validation</li>
                <li>Password strength meter</li>
                <li>Terms acceptance</li>
                <li>Email verification</li>
                <li>Social signup options</li>
              </ul>
            </Card>

            <Card>
              <h3>🔑 Password Reset</h3>
              <p style={{ fontSize: 'var(--text-small)', marginBottom: 'var(--gap-md)' }}>
                Secure password recovery flow with email verification.
              </p>
              <ul style={{ fontSize: 'var(--text-small)' }}>
                <li>Email verification</li>
                <li>Secure token generation</li>
                <li>Password confirmation</li>
                <li>Success confirmation</li>
                <li>Expiration handling</li>
              </ul>
            </Card>

            <Card>
              <h3>🔒 Two-Factor Auth</h3>
              <p style={{ fontSize: 'var(--text-small)', marginBottom: 'var(--gap-md)' }}>
                Additional security layer with TOTP or SMS verification.
              </p>
              <ul style={{ fontSize: 'var(--text-small)' }}>
                <li>QR code setup</li>
                <li>Backup codes</li>
                <li>SMS fallback</li>
                <li>Recovery options</li>
                <li>Device trust</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Security Best Practices</h2>
            <ul>
              <li><strong>Password Requirements</strong> - Minimum 8 characters, mix of letters, numbers, and symbols</li>
              <li><strong>Rate Limiting</strong> - Prevent brute force attacks with exponential backoff</li>
              <li><strong>HTTPS Only</strong> - All authentication requests must use secure connections</li>
              <li><strong>Token Expiration</strong> - Short-lived access tokens (15min) with refresh tokens</li>
              <li><strong>Session Management</strong> - Secure cookie handling with HttpOnly and SameSite flags</li>
              <li><strong>CSRF Protection</strong> - Token-based protection for all state-changing operations</li>
            </ul>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Social Login Integration</h2>
            <p>Support for popular OAuth providers:</p>
            <ul>
              <li><strong>Google</strong> - OAuth 2.0 with profile access</li>
              <li><strong>GitHub</strong> - OAuth with email verification</li>
              <li><strong>Apple</strong> - Sign in with Apple (iOS requirement)</li>
              <li><strong>Microsoft</strong> - Azure AD integration</li>
            </ul>
            <p>
              Social login reduces friction for users while maintaining security through trusted providers.
            </p>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Error Handling</h2>
            <p>Clear and actionable error messages:</p>
            <ul>
              <li><strong>Invalid Credentials</strong> - "Email or password is incorrect"</li>
              <li><strong>Account Locked</strong> - "Too many failed attempts. Try again in X minutes"</li>
              <li><strong>Email Not Verified</strong> - "Please verify your email before logging in"</li>
              <li><strong>Session Expired</strong> - "Your session has expired. Please log in again"</li>
            </ul>
            <p>
              Avoid revealing whether an email exists in the system to prevent enumeration attacks.
            </p>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Accessibility</h2>
            <ul>
              <li><strong>Keyboard Navigation</strong> - Full keyboard support for all forms</li>
              <li><strong>Screen Reader</strong> - Proper labels and ARIA attributes</li>
              <li><strong>Error Announcement</strong> - Errors announced to screen readers</li>
              <li><strong>Focus Management</strong> - Focus moved to errors when validation fails</li>
              <li><strong>Password Visibility</strong> - Toggle announced to assistive technology</li>
            </ul>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Implementation Guidelines</h2>
            <ul>
              <li><strong>Client-Side Validation</strong> - Immediate feedback for better UX</li>
              <li><strong>Server-Side Validation</strong> - Always validate on the server (never trust client)</li>
              <li><strong>Loading States</strong> - Show spinners during authentication requests</li>
              <li><strong>Success Feedback</strong> - Confirm successful actions before redirecting</li>
              <li><strong>Redirect Logic</strong> - Return users to their intended destination after login</li>
            </ul>
          </Content.Prose>
        </div>
      </div>
    </>
  );
}
