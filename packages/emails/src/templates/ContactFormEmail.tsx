/**
 * Contact Form Email Template
 * Sent when someone submits a contact form
 */

import { Text, Heading, Hr } from "@react-email/components";
import { BaseEmail } from "./BaseEmail";

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  brand?: string;
}

export function ContactFormEmail({
  name,
  email,
  subject,
  message,
  brand = "AVNIR",
}: ContactFormEmailProps) {
  return (
    <BaseEmail preview={`New contact form submission from ${name}`} brand={brand}>
      <Heading style={h1}>New Contact Form Submission</Heading>
      
      <Text style={label}>From:</Text>
      <Text style={value}>{name}</Text>
      
      <Text style={label}>Email:</Text>
      <Text style={value}>{email}</Text>
      
      <Text style={label}>Subject:</Text>
      <Text style={value}>{subject}</Text>
      
      <Hr style={hr} />
      
      <Text style={label}>Message:</Text>
      <Text style={messageText}>{message}</Text>
    </BaseEmail>
  );
}

// Styles
const h1 = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#0b0b0d",
  margin: "0 0 24px",
};

const label = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#6b7280",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "16px 0 4px",
};

const value = {
  fontSize: "16px",
  color: "#0b0b0d",
  margin: "0 0 8px",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const messageText = {
  fontSize: "16px",
  color: "#374151",
  lineHeight: "24px",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};
