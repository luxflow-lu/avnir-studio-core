/**
 * Base Email Template
 * Foundation for all AVNIR emails
 */

import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Link,
  Img,
} from "@react-email/components";

interface BaseEmailProps {
  preview: string;
  children: React.ReactNode;
  brand?: string;
  footerText?: string;
}

export function BaseEmail({
  preview,
  children,
  brand = "AVNIR",
  footerText = "© 2025 AVNIR Studio. All rights reserved.",
}: BaseEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={logo}>{brand}</Text>
          </Section>

          {/* Content */}
          <Section style={content}>{children}</Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerTextStyle}>{footerText}</Text>
            <Text style={footerLinks}>
              <Link href="https://avnir-studio.com/legal/privacy" style={link}>
                Privacy Policy
              </Link>
              {" • "}
              <Link href="https://avnir-studio.com/legal/terms" style={link}>
                Terms of Service
              </Link>
              {" • "}
              <Link href="https://avnir-studio.com/contact" style={link}>
                Contact
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const header = {
  padding: "32px 48px",
  borderBottom: "1px solid #e5e7eb",
};

const logo = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#0b0b0d",
  margin: "0",
};

const content = {
  padding: "32px 48px",
};

const footer = {
  padding: "32px 48px",
  borderTop: "1px solid #e5e7eb",
};

const footerTextStyle = {
  fontSize: "12px",
  color: "#6b7280",
  lineHeight: "16px",
  margin: "0 0 8px",
};

const footerLinks = {
  fontSize: "12px",
  color: "#6b7280",
  lineHeight: "16px",
  margin: "0",
};

const link = {
  color: "#3b82f6",
  textDecoration: "none",
};
