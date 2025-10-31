# @avnir/emails

Centralized email templates for all AVNIR sites using React Email.

## Features

- ✅ React Email components
- ✅ Responsive email templates
- ✅ Brand-specific styling
- ✅ Type-safe with TypeScript
- ✅ Preview in development

## Installation

```bash
pnpm add @avnir/emails
```

## Templates

### WelcomeEmail
Sent when a user signs up.

```typescript
import { WelcomeEmail } from "@avnir/emails";
import { render } from "@react-email/components";

const html = render(
  <WelcomeEmail
    name="John Doe"
    brand="MUZIDEV"
    ctaUrl="https://muzidev.com/dashboard"
  />
);
```

### ContactFormEmail
Sent when someone submits a contact form.

```typescript
import { ContactFormEmail } from "@avnir/emails";
import { render } from "@react-email/components";

const html = render(
  <ContactFormEmail
    name="John Doe"
    email="john@example.com"
    subject="Question about pricing"
    message="I'd like to know more about your pricing plans."
    brand="MUZIDEV"
  />
);
```

## Usage with Nodemailer

```typescript
import nodemailer from "nodemailer";
import { render } from "@react-email/components";
import { WelcomeEmail } from "@avnir/emails";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const html = render(<WelcomeEmail name="John" brand="MUZIDEV" />);

await transporter.sendMail({
  from: process.env.GMAIL_USER,
  to: "user@example.com",
  subject: "Welcome to MUZIDEV!",
  html,
});
```

## Development

Preview emails in development:

```bash
cd packages/emails
pnpm dev
```

This will start the React Email dev server at `http://localhost:3000`.

## Creating New Templates

1. Create a new file in `src/templates/`
2. Use `BaseEmail` as wrapper
3. Export from `src/index.ts`

Example:

```tsx
// src/templates/PasswordResetEmail.tsx
import { Text, Button, Heading } from "@react-email/components";
import { BaseEmail } from "./BaseEmail";

interface PasswordResetEmailProps {
  name: string;
  resetUrl: string;
  brand?: string;
}

export function PasswordResetEmail({
  name,
  resetUrl,
  brand = "AVNIR",
}: PasswordResetEmailProps) {
  return (
    <BaseEmail preview="Reset your password" brand={brand}>
      <Heading>Reset Your Password</Heading>
      <Text>Hi {name},</Text>
      <Text>Click the button below to reset your password:</Text>
      <Button href={resetUrl}>Reset Password</Button>
    </BaseEmail>
  );
}
```

## Best Practices

1. **Keep it simple** - Email clients have limited CSS support
2. **Use tables for layout** - React Email handles this automatically
3. **Test in multiple clients** - Gmail, Outlook, Apple Mail, etc.
4. **Inline styles** - React Email inlines styles automatically
5. **Alt text for images** - Always provide alt text
6. **Plain text version** - Consider providing a plain text version

## Email Client Support

Templates are tested and work in:
- ✅ Gmail (Web, iOS, Android)
- ✅ Outlook (Web, Desktop)
- ✅ Apple Mail (macOS, iOS)
- ✅ Yahoo Mail
- ✅ ProtonMail

## Styling

All templates use AVNIR design system colors and spacing, but adapted for email clients:

- Primary color: `#ffd700` (AVNIR yellow)
- Text color: `#0b0b0d` (Dark)
- Background: `#f6f9fc` (Light gray)
- Border: `#e5e7eb` (Gray)

## Future Templates

- Password reset
- Email verification
- Invoice/receipt
- Newsletter
- Notification digest
- Account deletion confirmation
