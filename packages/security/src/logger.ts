/**
 * SECURITY LOGGING - GDPR Compliant
 * Hash sensitive data, log security events
 */

import crypto from 'crypto';

export interface SecurityEvent {
  type: string;
  timestamp: string;
  ip?: string;
  userId?: string;
  details?: Record<string, unknown>;
}

/**
 * Hash sensitive data for logging (GDPR compliant)
 */
function hashForLogging(data: string): string {
  return crypto.createHash('sha256').update(data).digest('hex').substring(0, 16);
}

/**
 * Security logger with GDPR compliance
 */
export const securityLogger = {
  /**
   * Log authentication failure
   */
  authFailure: (ip: string, email?: string, reason?: string): void => {
    const event: SecurityEvent = {
      type: 'AUTH_FAILURE',
      timestamp: new Date().toISOString(),
      ip: hashForLogging(ip),
      details: {
        emailHash: email ? hashForLogging(email) : null,
        reason: reason || 'Invalid credentials'
      }
    };
    
    console.log(JSON.stringify(event));
  },

  /**
   * Log successful authentication
   */
  authSuccess: (userId: string, ip: string): void => {
    const event: SecurityEvent = {
      type: 'AUTH_SUCCESS',
      timestamp: new Date().toISOString(),
      ip: hashForLogging(ip),
      userId: hashForLogging(userId)
    };
    
    console.log(JSON.stringify(event));
  },

  /**
   * Log suspicious activity
   */
  suspiciousActivity: (userId: string, activity: string, details?: Record<string, unknown>): void => {
    const event: SecurityEvent = {
      type: 'SUSPICIOUS_ACTIVITY',
      timestamp: new Date().toISOString(),
      userId: hashForLogging(userId),
      details: {
        activity,
        ...details
      }
    };
    
    console.log(JSON.stringify(event));
  },

  /**
   * Log rate limit exceeded
   */
  rateLimitExceeded: (ip: string, endpoint: string): void => {
    const event: SecurityEvent = {
      type: 'RATE_LIMIT_EXCEEDED',
      timestamp: new Date().toISOString(),
      ip: hashForLogging(ip),
      details: {
        endpoint
      }
    };
    
    console.log(JSON.stringify(event));
  },

  /**
   * Log file upload attempt
   */
  fileUpload: (userId: string, filename: string, mimetype: string, size: number): void => {
    const event: SecurityEvent = {
      type: 'FILE_UPLOAD',
      timestamp: new Date().toISOString(),
      userId: hashForLogging(userId),
      details: {
        filename: filename.replace(/[^a-zA-Z0-9.-]/g, '_'), // Sanitize filename
        mimetype,
        size
      }
    };
    
    console.log(JSON.stringify(event));
  },

  /**
   * Log payment attempt
   */
  paymentAttempt: (userId: string, amount: number, currency: string, success: boolean): void => {
    const event: SecurityEvent = {
      type: 'PAYMENT_ATTEMPT',
      timestamp: new Date().toISOString(),
      userId: hashForLogging(userId),
      details: {
        amount,
        currency,
        success
      }
    };
    
    console.log(JSON.stringify(event));
  },

  /**
   * Log data breach attempt
   */
  dataBreachAttempt: (ip: string, attempt: string): void => {
    const event: SecurityEvent = {
      type: 'DATA_BREACH_ATTEMPT',
      timestamp: new Date().toISOString(),
      ip: hashForLogging(ip),
      details: {
        attempt
      }
    };
    
    console.error(JSON.stringify(event));
    
    // TODO: Send immediate alert to security team
    // alertSecurityTeam(event);
  },

  /**
   * Log admin action
   */
  adminAction: (adminId: string, action: string, targetId?: string): void => {
    const event: SecurityEvent = {
      type: 'ADMIN_ACTION',
      timestamp: new Date().toISOString(),
      userId: hashForLogging(adminId),
      details: {
        action,
        targetId: targetId ? hashForLogging(targetId) : null
      }
    };
    
    console.log(JSON.stringify(event));
  }
};
