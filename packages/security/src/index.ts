/**
 * @avnir/security - Security utilities and middleware
 * 
 * ZERO TOLERANCE for security vulnerabilities
 * All exports must be security-first
 */

// Authentication utilities
export {
  hashPassword,
  verifyPassword,
  generateTokens,
  verifyToken,
  generateSecureToken,
  hashSensitiveData,
  generateCSRFToken,
  verifyCSRFToken,
  checkRateLimit,
  cleanupRateLimit,
  type User,
  type TokenPair
} from './auth';

// Validation schemas and utilities
export {
  UserRegistrationSchema,
  UserLoginSchema,
  PasswordResetSchema,
  PasswordChangeSchema,
  ProfileUpdateSchema,
  PaymentSchema,
  FileUploadSchema,
  ContactFormSchema,
  APIKeySchema,
  sanitizeHTML,
  validateAndSanitize,
  RateLimitConfig,
  type RateLimitType
} from './validation';

// Security middleware (will be added)
export { securityHeaders, rateLimitMiddleware } from './middleware';

// Security logger
export { securityLogger } from './logger';
