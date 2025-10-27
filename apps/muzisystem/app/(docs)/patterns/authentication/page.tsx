"use client";

import { Layout, Content, Marketing, Feedback, DataDisplay, Primitives } from "@avnir/ui";

export default function AuthenticationPatternPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <Layout.PageHeader
            title="Authentication Patterns"
            subtitle="Secure and user-friendly authentication flows for login, signup, and password management."
          />
        </div>
      </section>

      <section className="section">
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
      </section>

      <section className="section">
        <div className="container">
          <Feedback.Alert variant="warning" title="Security First">
            All authentication patterns follow OWASP best practices and include built-in protection against common attacks (brute force, CSRF, XSS).
          </Feedback.Alert>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Content.Prose>
            <h2>Authentication Flows</h2>
          </Content.Prose>
          
          <Marketing.FeatureGrid>
            <Marketing.FeatureGridItem
              icon="🔐"
              title="Login"
              description="Standard email/password login with remember me option and error handling. Includes email validation, password visibility toggle, and social login options."
            />
            <Marketing.FeatureGridItem
              icon="✍️"
              title="Signup"
              description="User registration with real-time validation and password strength indicator. Features terms acceptance, email verification, and social signup options."
            />
            <Marketing.FeatureGridItem
              icon="🔑"
              title="Password Reset"
              description="Secure password recovery flow with email verification, token generation, and expiration handling. Includes password confirmation and success feedback."
            />
            <Marketing.FeatureGridItem
              icon="🔒"
              title="Two-Factor Auth"
              description="Additional security layer with TOTP or SMS verification. Supports QR code setup, backup codes, SMS fallback, and device trust."
            />
          </Marketing.FeatureGrid>
        </div>
      </section>

      <section className="section">
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
      </section>

      <section className="section">
        <div className="container">
          <Content.Prose>
            <h2>Social Login Integration</h2>
            <p>Support for popular OAuth providers:</p>
          </Content.Prose>
          
          <Layout.Grid cols={4} gap="lg">
            <Primitives.Card interactive>
              <Primitives.CardHeader>
                <DataDisplay.LogoPlaceholder>G</DataDisplay.LogoPlaceholder>
                <Primitives.CardTitle>Google</Primitives.CardTitle>
              </Primitives.CardHeader>
              <Primitives.CardContent>
                <p>OAuth 2.0 authentication with Google accounts. Most widely used provider with high trust.</p>
              </Primitives.CardContent>
            </Primitives.Card>

            <Primitives.Card interactive>
              <Primitives.CardHeader>
                <DataDisplay.LogoPlaceholder>GH</DataDisplay.LogoPlaceholder>
                <Primitives.CardTitle>GitHub</Primitives.CardTitle>
              </Primitives.CardHeader>
              <Primitives.CardContent>
                <p>Perfect for developer-focused applications. Provides access to user repositories and profile.</p>
              </Primitives.CardContent>
            </Primitives.Card>

            <Primitives.Card interactive>
              <Primitives.CardHeader>
                <DataDisplay.LogoPlaceholder>A</DataDisplay.LogoPlaceholder>
                <Primitives.CardTitle>Apple</Primitives.CardTitle>
              </Primitives.CardHeader>
              <Primitives.CardContent>
                <p>Privacy-focused authentication with email relay option. Required for iOS apps.</p>
              </Primitives.CardContent>
            </Primitives.Card>

            <Primitives.Card interactive>
              <Primitives.CardHeader>
                <DataDisplay.LogoPlaceholder>MS</DataDisplay.LogoPlaceholder>
                <Primitives.CardTitle>Microsoft</Primitives.CardTitle>
              </Primitives.CardHeader>
              <Primitives.CardContent>
                <p>Enterprise-grade authentication with Azure AD integration. Ideal for B2B applications.</p>
              </Primitives.CardContent>
            </Primitives.Card>
          </Layout.Grid>
          
          <Content.Prose>
            <p className="text-center mt-24">
              Social login reduces friction for users while maintaining security through trusted providers.
            </p>
          </Content.Prose>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Content.Prose>
            <h2>Authentication Flow</h2>
            <p>Step-by-step process from login to session:</p>
          </Content.Prose>
          
          <DataDisplay.Timeline>
            <DataDisplay.TimelineItem
              title="User Input"
              description="User enters credentials (email/password or social login)"
              date="Step 1"
            />
            <DataDisplay.TimelineItem
              title="Client Validation"
              description="Immediate feedback on format and required fields"
              date="Step 2"
            />
            <DataDisplay.TimelineItem
              title="Server Authentication"
              description="Secure verification against database with rate limiting"
              date="Step 3"
            />
            <DataDisplay.TimelineItem
              title="Token Generation"
              description="JWT access token (15min) + refresh token (7 days)"
              date="Step 4"
            />
            <DataDisplay.TimelineItem
              title="Session Created"
              description="User authenticated and redirected to dashboard"
              date="Step 5"
            />
          </DataDisplay.Timeline>
        </div>
      </section>

      <section className="section">
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
      </section>

      <section className="section">
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
      </section>

      <section className="section">
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
      </section>
    </>
  );
}
