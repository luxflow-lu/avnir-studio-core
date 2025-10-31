/**
 * Welcome Email Template
 * Sent when a user signs up
 */

import { Text, Button, Heading } from "@react-email/components";
import { BaseEmail } from "./BaseEmail";

interface WelcomeEmailProps {
  name: string;
  brand?: string;
  ctaUrl?: string;
}

export function WelcomeEmail({
  name,
  brand = "AVNIR",
  ctaUrl = "https://avnir-studio.com",
}: WelcomeEmailProps) {
  return (
    <BaseEmail preview={`Welcome to ${brand}!`} brand={brand}>
      <Heading style={h1}>Welcome to {brand}! 🎉</Heading>
      
      <Text style={text}>Hi {name},</Text>
      
      <Text style={text}>
        We're thrilled to have you on board! You've just joined a community of creators
        who are building amazing things.
      </Text>
      
      <Text style={text}>
        Here's what you can do next:
      </Text>
      
      <ul style={list}>
        <li style={listItem}>Complete your profile</li>
        <li style={listItem}>Explore our features</li>
        <li style={listItem}>Join our community</li>
      </ul>
      
      <Button href={ctaUrl} style={button}>
        Get Started
      </Button>
      
      <Text style={text}>
        If you have any questions, feel free to reach out. We're here to help!
      </Text>
      
      <Text style={signature}>
        Best regards,
        <br />
        The {brand} Team
      </Text>
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

const text = {
  fontSize: "16px",
  color: "#374151",
  lineHeight: "24px",
  margin: "0 0 16px",
};

const list = {
  margin: "0 0 16px",
  paddingLeft: "20px",
};

const listItem = {
  fontSize: "16px",
  color: "#374151",
  lineHeight: "24px",
  margin: "0 0 8px",
};

const button = {
  backgroundColor: "#ffd700",
  color: "#0b0b0d",
  padding: "12px 24px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "600",
  display: "inline-block",
  margin: "16px 0",
};

const signature = {
  fontSize: "16px",
  color: "#374151",
  lineHeight: "24px",
  margin: "24px 0 0",
};
