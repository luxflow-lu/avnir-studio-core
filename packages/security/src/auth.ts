import crypto from 'crypto';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/**
 * AUTHENTICATION UTILITIES - SECURITY FIRST
 * Zero tolerance for security vulnerabilities
 */

// Constants
const BCRYPT_ROUNDS = 12; // Minimum security standard
const JWT_EXPIRY = '15m'; // Short-lived access tokens
const REFRESH_EXPIRY = '7d'; // Refresh token expiry

export interface User {
  id: string;
  email: string;
  roles: string[];
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

/**
 * Hash password with bcrypt (12 rounds minimum)
 */
export async function hashPassword(password: string): Promise<string> {
  if (!password || password.length < 8) {
    throw new Error('Password must be at least 8 characters');
  }
  
  if (password.length > 128) {
    throw new Error('Password too long (max 128 characters)');
  }
  
  return await bcrypt.hash(password, BCRYPT_ROUNDS);
}

/**
 * Verify password against hash
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  if (!password || !hash) {
    return false;
  }
  
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    console.error('Password verification error:', error);
    return false;
  }
}

/**
 * Generate secure JWT token pair
 */
export function generateTokens(user: User): TokenPair {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error('JWT_SECRET environment variable is required');
  }
  
  if (jwtSecret.length < 32) {
    throw new Error('JWT_SECRET must be at least 32 characters');
  }
  
  const payload = {
    userId: user.id,
    email: user.email,
    roles: user.roles
  };
  
  const accessToken = jwt.sign(payload, jwtSecret, {
    expiresIn: JWT_EXPIRY,
    issuer: 'avnir-platform',
    audience: 'avnir-users'
  });
  
  const refreshToken = jwt.sign(
    { userId: user.id, type: 'refresh' },
    jwtSecret,
    {
      expiresIn: REFRESH_EXPIRY,
      issuer: 'avnir-platform',
      audience: 'avnir-users'
    }
  );
  
  return { accessToken, refreshToken };
}

/**
 * Verify JWT token
 */
export function verifyToken(token: string): User | null {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error('JWT_SECRET environment variable is required');
  }
  
  try {
    const decoded = jwt.verify(token, jwtSecret, {
      issuer: 'avnir-platform',
      audience: 'avnir-users'
    }) as any;
    
    return {
      id: decoded.userId,
      email: decoded.email,
      roles: decoded.roles || []
    };
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

/**
 * Generate secure random token (for password reset, etc.)
 */
export function generateSecureToken(length: number = 32): string {
  return crypto.randomBytes(length).toString('hex');
}

/**
 * Hash sensitive data (for logging, etc.)
 */
export function hashSensitiveData(data: string): string {
  return crypto.createHash('sha256').update(data).digest('hex');
}

/**
 * Generate CSRF token
 */
export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString('base64');
}

/**
 * Verify CSRF token
 */
export function verifyCSRFToken(token: string, sessionToken: string): boolean {
  if (!token || !sessionToken) {
    return false;
  }
  
  return crypto.timingSafeEqual(
    Buffer.from(token, 'base64'),
    Buffer.from(sessionToken, 'base64')
  );
}

/**
 * Rate limiting helper - track attempts
 */
const attemptStore = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  key: string, 
  maxAttempts: number, 
  windowMs: number
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const record = attemptStore.get(key);
  
  if (!record || now > record.resetTime) {
    // Reset window
    attemptStore.set(key, { count: 1, resetTime: now + windowMs });
    return { allowed: true, remaining: maxAttempts - 1, resetTime: now + windowMs };
  }
  
  if (record.count >= maxAttempts) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }
  
  record.count++;
  return { 
    allowed: true, 
    remaining: maxAttempts - record.count, 
    resetTime: record.resetTime 
  };
}

/**
 * Clean expired rate limit records
 */
export function cleanupRateLimit(): void {
  const now = Date.now();
  for (const [key, record] of attemptStore.entries()) {
    if (now > record.resetTime) {
      attemptStore.delete(key);
    }
  }
}

// Cleanup every 5 minutes
setInterval(cleanupRateLimit, 5 * 60 * 1000);
