"use client";

import { Content, Layout } from "@avnir/ui";

export default function PrivacyPage() {
  return (
    <>
      <Layout.PageHeader
        title="Privacy Policy"
        subtitle="Last updated: October 29, 2025"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <Content.Prose>
            <h2>Introduction</h2>
            <p>
              AVNIR Studio ("we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information 
              when you use MUZISYSTEM and related services.
            </p>

            <h2>Information We Collect</h2>
            
            <h3>Information You Provide</h3>
            <ul>
              <li><strong>Account Information</strong> - Name, email address, password</li>
              <li><strong>Profile Information</strong> - Optional profile details, avatar</li>
              <li><strong>Content</strong> - Projects, files, and data you create</li>
              <li><strong>Communications</strong> - Messages, support requests, feedback</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <ul>
              <li><strong>Usage Data</strong> - Pages visited, features used, time spent</li>
              <li><strong>Device Information</strong> - Browser type, OS, screen resolution</li>
              <li><strong>Log Data</strong> - IP address, timestamps, error logs</li>
              <li><strong>Cookies</strong> - Session cookies, preference cookies</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li><strong>Provide Services</strong> - Operate and maintain MUZISYSTEM</li>
              <li><strong>Improve Services</strong> - Analyze usage and fix bugs</li>
              <li><strong>Communication</strong> - Send updates, security alerts, support</li>
              <li><strong>Security</strong> - Detect and prevent fraud, abuse</li>
              <li><strong>Legal Compliance</strong> - Comply with legal obligations</li>
            </ul>

            <h2>Data Sharing</h2>
            <p>We do not sell your personal information. We may share data with:</p>
            <ul>
              <li><strong>Service Providers</strong> - Hosting, analytics, email services</li>
              <li><strong>Legal Requirements</strong> - When required by law</li>
              <li><strong>Business Transfers</strong> - In case of merger or acquisition</li>
              <li><strong>With Your Consent</strong> - When you explicitly agree</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data:
            </p>
            <ul>
              <li>Encryption in transit (HTTPS/TLS)</li>
              <li>Encryption at rest (AES-256)</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication</li>
              <li>Secure backup procedures</li>
            </ul>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access</strong> - Request a copy of your data</li>
              <li><strong>Correction</strong> - Update inaccurate information</li>
              <li><strong>Deletion</strong> - Request deletion of your data</li>
              <li><strong>Export</strong> - Download your data in portable format</li>
              <li><strong>Opt-out</strong> - Unsubscribe from marketing emails</li>
            </ul>

            <h2>Cookies</h2>
            <p>We use cookies for:</p>
            <ul>
              <li><strong>Essential</strong> - Authentication, security (required)</li>
              <li><strong>Functional</strong> - Remember preferences, settings</li>
              <li><strong>Analytics</strong> - Understand usage patterns (optional)</li>
            </ul>
            <p>
              You can control cookies through your browser settings. Disabling essential 
              cookies may affect functionality.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your data as long as your account is active or as needed to provide services. 
              After account deletion, we may retain some data for legal compliance (typically 30-90 days).
            </p>

            <h2>Children's Privacy</h2>
            <p>
              MUZISYSTEM is not intended for users under 13 years old. We do not knowingly 
              collect information from children. If you believe we have collected data from 
              a child, please contact us immediately.
            </p>

            <h2>International Data Transfers</h2>
            <p>
              Your data may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your data in compliance 
              with GDPR and other regulations.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of significant 
              changes via email or prominent notice on our website. Continued use after changes 
              constitutes acceptance.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or your data, contact us at:
            </p>
            <ul>
              <li><strong>Email</strong> - privacy@avnir.studio</li>
              <li><strong>Address</strong> - AVNIR Studio, [Address]</li>
            </ul>

            <h2>GDPR Compliance</h2>
            <p>
              For users in the European Union, we comply with GDPR requirements:
            </p>
            <ul>
              <li>Lawful basis for processing (consent, contract, legitimate interest)</li>
              <li>Data Protection Officer contact: dpo@avnir.studio</li>
              <li>Right to lodge complaint with supervisory authority</li>
              <li>Data portability in machine-readable format</li>
            </ul>
          </Content.Prose>
        </div>
      </section>
    </>
  );
}
