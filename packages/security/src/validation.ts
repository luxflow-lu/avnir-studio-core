import { z } from 'zod';

/**
 * VALIDATION SCHEMAS - SECURITY FIRST
 * All user inputs must be validated and sanitized
 */

// Common validation patterns
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
const NAME_REGEX = /^[a-zA-ZÀ-ÿ\s'-]{1,100}$/;
const PHONE_REGEX = /^\+?[1-9]\d{1,14}$/;

/**
 * User Registration Schema
 */
export const UserRegistrationSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .max(255, 'Email too long')
    .regex(EMAIL_REGEX, 'Invalid email format')
    .toLowerCase()
    .trim(),
    
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(128, 'Password too long')
    .regex(PASSWORD_REGEX, 'Password must contain uppercase, lowercase, number and special character'),
    
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name too long')
    .regex(NAME_REGEX, 'Invalid name format')
    .trim(),
    
  acceptTerms: z
    .boolean()
    .refine(val => val === true, 'You must accept the terms and conditions')
});

/**
 * User Login Schema
 */
export const UserLoginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .max(255, 'Email too long')
    .regex(EMAIL_REGEX, 'Invalid email format')
    .toLowerCase()
    .trim(),
    
  password: z
    .string()
    .min(1, 'Password is required')
    .max(128, 'Password too long'),
    
  rememberMe: z.boolean().optional()
});

/**
 * Password Reset Schema
 */
export const PasswordResetSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .max(255, 'Email too long')
    .regex(EMAIL_REGEX, 'Invalid email format')
    .toLowerCase()
    .trim()
});

/**
 * Password Change Schema
 */
export const PasswordChangeSchema = z.object({
  currentPassword: z
    .string()
    .min(1, 'Current password is required')
    .max(128, 'Password too long'),
    
  newPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(128, 'Password too long')
    .regex(PASSWORD_REGEX, 'Password must contain uppercase, lowercase, number and special character'),
    
  confirmPassword: z
    .string()
    .min(1, 'Password confirmation is required')
}).refine(data => data.newPassword === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
});

/**
 * Profile Update Schema
 */
export const ProfileUpdateSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name too long')
    .regex(NAME_REGEX, 'Invalid name format')
    .trim(),
    
  phone: z
    .string()
    .regex(PHONE_REGEX, 'Invalid phone format')
    .optional()
    .or(z.literal('')),
    
  bio: z
    .string()
    .max(500, 'Bio too long')
    .optional()
});

/**
 * Payment Schema (for Stripe integration)
 */
export const PaymentSchema = z.object({
  amount: z
    .number()
    .min(0.5, 'Minimum amount is 0.50€')
    .max(10000, 'Maximum amount is 10,000€'),
    
  currency: z
    .enum(['eur', 'usd'])
    .default('eur'),
    
  description: z
    .string()
    .min(1, 'Description is required')
    .max(200, 'Description too long')
    .trim(),
    
  metadata: z
    .record(z.string())
    .optional()
});

/**
 * File Upload Schema
 */
export const FileUploadSchema = z.object({
  filename: z
    .string()
    .min(1, 'Filename is required')
    .max(255, 'Filename too long')
    .regex(/^[a-zA-Z0-9._-]+$/, 'Invalid filename characters'),
    
  mimetype: z
    .enum([
      'image/jpeg',
      'image/png', 
      'image/webp',
      'image/gif',
      'application/pdf',
      'text/csv',
      'application/json'
    ], { errorMap: () => ({ message: 'File type not allowed' }) }),
    
  size: z
    .number()
    .min(1, 'File cannot be empty')
    .max(10 * 1024 * 1024, 'File too large (max 10MB)')
});

/**
 * Contact Form Schema
 */
export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name too long')
    .regex(NAME_REGEX, 'Invalid name format')
    .trim(),
    
  email: z
    .string()
    .min(1, 'Email is required')
    .max(255, 'Email too long')
    .regex(EMAIL_REGEX, 'Invalid email format')
    .toLowerCase()
    .trim(),
    
  subject: z
    .string()
    .min(1, 'Subject is required')
    .max(200, 'Subject too long')
    .trim(),
    
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message too long')
    .trim(),
    
  honeypot: z
    .string()
    .max(0, 'Bot detected')
    .optional()
});

/**
 * API Key Schema (for admin)
 */
export const APIKeySchema = z.object({
  name: z
    .string()
    .min(1, 'API key name is required')
    .max(100, 'Name too long')
    .regex(/^[a-zA-Z0-9\s-_]+$/, 'Invalid characters in name')
    .trim(),
    
  permissions: z
    .array(z.enum(['read', 'write', 'admin']))
    .min(1, 'At least one permission required'),
    
  expiresAt: z
    .date()
    .min(new Date(), 'Expiry date must be in the future')
    .optional()
});

/**
 * Sanitize HTML input to prevent XSS
 */
export function sanitizeHTML(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validate and sanitize user input
 */
export function validateAndSanitize<T>(
  schema: z.ZodSchema<T>, 
  data: unknown
): { success: true; data: T } | { success: false; errors: string[] } {
  try {
    const validated = schema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map(err => 
        `${err.path.join('.')}: ${err.message}`
      );
      return { success: false, errors };
    }
    return { success: false, errors: ['Validation failed'] };
  }
}

/**
 * Rate limiting validation
 */
export const RateLimitConfig = {
  auth: { windowMs: 15 * 60 * 1000, max: 5 },        // 5 attempts per 15min
  api: { windowMs: 60 * 1000, max: 100 },            // 100 requests per minute
  payment: { windowMs: 60 * 1000, max: 3 },          // 3 payments per minute
  upload: { windowMs: 60 * 1000, max: 10 },          // 10 uploads per minute
  contact: { windowMs: 60 * 1000, max: 2 }           // 2 contact forms per minute
} as const;

export type RateLimitType = keyof typeof RateLimitConfig;
