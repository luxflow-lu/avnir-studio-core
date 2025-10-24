#!/usr/bin/env node

/**
 * SECURITY AUDIT SCRIPT
 * Comprehensive security validation for AVNIR platform
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ERRORS = [];
const WARNINGS = [];
const INFO = [];

// Color codes
const colors = {
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function error(message) {
  ERRORS.push(message);
  console.log(`${colors.red}🚨 SECURITY ERROR: ${message}${colors.reset}`);
}

function warning(message) {
  WARNINGS.push(message);
  console.log(`${colors.yellow}⚠️  SECURITY WARNING: ${message}${colors.reset}`);
}

function info(message) {
  INFO.push(message);
  console.log(`${colors.blue}ℹ️  ${message}${colors.reset}`);
}

function success(message) {
  console.log(`${colors.green}✅ ${message}${colors.reset}`);
}

// 1. CHECK FOR SECRETS IN CODE
function checkForSecrets() {
  info('Scanning for hardcoded secrets...');
  
  const sensitivePatterns = [
    /password\s*=\s*["'][^"']+["']/gi,
    /api[_-]?key\s*=\s*["'][^"']+["']/gi,
    /secret\s*=\s*["'][^"']+["']/gi,
    /token\s*=\s*["'][^"']+["']/gi,
    /sk_live_[a-zA-Z0-9]+/g, // Stripe live keys
    /pk_live_[a-zA-Z0-9]+/g, // Stripe public keys
    /AKIA[0-9A-Z]{16}/g,     // AWS Access Keys
    /-----BEGIN PRIVATE KEY-----/g,
    /-----BEGIN RSA PRIVATE KEY-----/g
  ];
  
  const files = execSync('find . -type f -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v .git')
    .toString()
    .split('\n')
    .filter(Boolean);
  
  files.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      sensitivePatterns.forEach((pattern, index) => {
        const matches = content.match(pattern);
        if (matches) {
          error(`Potential secret found in ${file}: ${matches[0].substring(0, 50)}...`);
        }
      });
    } catch (err) {
      // File might not exist or be readable
    }
  });
}

// 2. CHECK ENVIRONMENT VARIABLES
function checkEnvironmentVariables() {
  info('Checking environment variable configuration...');
  
  const requiredEnvVars = [
    'JWT_SECRET',
    'DATABASE_URL',
    'NEXTAUTH_SECRET'
  ];
  
  // Check .env.example exists
  if (!fs.existsSync('.env.example')) {
    error('.env.example file missing - required for documentation');
  } else {
    const envExample = fs.readFileSync('.env.example', 'utf8');
    
    requiredEnvVars.forEach(envVar => {
      if (!envExample.includes(envVar)) {
        warning(`${envVar} not documented in .env.example`);
      }
    });
  }
  
  // Check for .env files in git
  try {
    const gitFiles = execSync('git ls-files').toString();
    if (gitFiles.includes('.env') || gitFiles.includes('.env.local')) {
      error('.env files should not be committed to git');
    }
  } catch (err) {
    // Not a git repository
  }
}

// 3. CHECK DEPENDENCIES FOR VULNERABILITIES
function checkDependencies() {
  info('Auditing npm dependencies for vulnerabilities...');
  
  try {
    execSync('npm audit --audit-level=moderate', { stdio: 'pipe' });
    success('No moderate or high severity vulnerabilities found');
  } catch (err) {
    const output = err.stdout?.toString() || err.stderr?.toString() || '';
    if (output.includes('vulnerabilities')) {
      error('npm audit found vulnerabilities - run "npm audit fix" to resolve');
    }
  }
}

// 4. CHECK FILE PERMISSIONS
function checkFilePermissions() {
  info('Checking sensitive file permissions...');
  
  const sensitiveFiles = [
    '.env',
    '.env.local',
    '.env.production',
    'private.key',
    'server.key'
  ];
  
  sensitiveFiles.forEach(file => {
    if (fs.existsSync(file)) {
      const stats = fs.statSync(file);
      const mode = (stats.mode & parseInt('777', 8)).toString(8);
      
      if (mode !== '600' && mode !== '644') {
        warning(`${file} has permissive permissions (${mode}) - should be 600 or 644`);
      }
    }
  });
}

// 5. CHECK SECURITY HEADERS
function checkSecurityHeaders() {
  info('Validating security headers configuration...');
  
  // Check if security middleware is properly configured
  const nextConfigPath = 'next.config.js';
  if (fs.existsSync(nextConfigPath)) {
    const nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
    
    const requiredHeaders = [
      'X-Frame-Options',
      'X-Content-Type-Options',
      'Referrer-Policy',
      'Content-Security-Policy'
    ];
    
    requiredHeaders.forEach(header => {
      if (!nextConfig.includes(header)) {
        warning(`Security header ${header} not configured in next.config.js`);
      }
    });
  }
}

// 6. CHECK DATABASE SECURITY
function checkDatabaseSecurity() {
  info('Checking database security configuration...');
  
  // Check for SQL injection patterns
  const files = execSync('find . -type f -name "*.ts" -o -name "*.js" | grep -v node_modules')
    .toString()
    .split('\n')
    .filter(Boolean);
  
  files.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      // Look for potential SQL injection vulnerabilities
      const sqlPatterns = [
        /query\s*\(\s*["'`][^"'`]*\$\{[^}]*\}[^"'`]*["'`]/g, // Template literals in queries
        /execute\s*\(\s*["'`][^"'`]*\+[^"'`]*["'`]/g,        // String concatenation
        /SELECT.*FROM.*WHERE.*=.*\+/gi                        // Direct concatenation
      ];
      
      sqlPatterns.forEach(pattern => {
        if (pattern.test(content)) {
          error(`Potential SQL injection vulnerability in ${file}`);
        }
      });
    } catch (err) {
      // File might not exist
    }
  });
}

// 7. CHECK AUTHENTICATION IMPLEMENTATION
function checkAuthentication() {
  info('Validating authentication implementation...');
  
  // Check if JWT secrets are properly configured
  if (process.env.JWT_SECRET && process.env.JWT_SECRET.length < 32) {
    error('JWT_SECRET is too short - minimum 32 characters required');
  }
  
  // Check for proper password hashing
  const files = execSync('find . -type f -name "*.ts" -o -name "*.js" | grep -v node_modules')
    .toString()
    .split('\n')
    .filter(Boolean);
  
  let bcryptFound = false;
  let plaintextPassword = false;
  
  files.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      if (content.includes('bcrypt') || content.includes('argon2')) {
        bcryptFound = true;
      }
      
      if (content.includes('password') && content.includes('===') && !content.includes('hash')) {
        plaintextPassword = true;
      }
    } catch (err) {
      // File might not exist
    }
  });
  
  if (!bcryptFound) {
    warning('No secure password hashing library found (bcrypt/argon2)');
  }
  
  if (plaintextPassword) {
    error('Potential plaintext password comparison found');
  }
}

// 8. CHECK CORS CONFIGURATION
function checkCORS() {
  info('Checking CORS configuration...');
  
  const files = execSync('find . -type f -name "*.ts" -o -name "*.js" | grep -v node_modules')
    .toString()
    .split('\n')
    .filter(Boolean);
  
  files.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      if (content.includes('Access-Control-Allow-Origin') && content.includes('*')) {
        error(`Wildcard CORS origin found in ${file} - security risk`);
      }
    } catch (err) {
      // File might not exist
    }
  });
}

// MAIN EXECUTION
function main() {
  console.log(`${colors.blue}🔒 AVNIR SECURITY AUDIT${colors.reset}\n`);
  
  checkForSecrets();
  checkEnvironmentVariables();
  checkDependencies();
  checkFilePermissions();
  checkSecurityHeaders();
  checkDatabaseSecurity();
  checkAuthentication();
  checkCORS();
  
  console.log('\n' + '='.repeat(60));
  
  if (ERRORS.length > 0) {
    console.log(`${colors.red}🚨 SECURITY AUDIT FAILED${colors.reset}`);
    console.log(`${colors.red}Critical Issues: ${ERRORS.length}${colors.reset}`);
    console.log(`${colors.yellow}Warnings: ${WARNINGS.length}${colors.reset}`);
    console.log(`${colors.blue}Info: ${INFO.length}${colors.reset}`);
    
    console.log(`\n${colors.red}CRITICAL ISSUES MUST BE FIXED BEFORE DEPLOYMENT!${colors.reset}`);
    process.exit(1);
  } else if (WARNINGS.length > 0) {
    console.log(`${colors.yellow}⚠️  SECURITY AUDIT PASSED WITH WARNINGS${colors.reset}`);
    console.log(`${colors.yellow}Warnings: ${WARNINGS.length}${colors.reset}`);
    console.log(`${colors.blue}Info: ${INFO.length}${colors.reset}`);
    
    console.log(`\n${colors.yellow}Please review warnings before production deployment${colors.reset}`);
    process.exit(0);
  } else {
    console.log(`${colors.green}✅ SECURITY AUDIT PASSED${colors.reset}`);
    console.log(`${colors.green}No security issues detected - Ready for deployment!${colors.reset}`);
    process.exit(0);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
