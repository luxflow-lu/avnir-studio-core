# Standards de Déploiement AVNIR - ZERO DOWNTIME

<!-- METADATA -->
<!-- Version: 1.0.0 -->
<!-- Last Updated: 2025-10-24 -->
<!-- Last Validated: 2025-10-24 -->
<!-- Next Review: 2025-11-23 -->
<!-- Dependencies: None -->
<!-- Breaking Changes: None -->
<!-- Status: ACTIVE -->
<!-- /METADATA -->


**Contexte :** Multiples sites/apps en production. Aucune interruption de service tolérée.

---

## 🚫 INTERDICTIONS ABSOLUES - DÉPLOIEMENT

### Production
- ❌ **JAMAIS** de déploiement direct en production
- ❌ **JAMAIS** de déploiement sans tests passés
- ❌ **JAMAIS** de secrets en dur dans le code
- ❌ **JAMAIS** de rollback sans plan documenté
- ❌ **JAMAIS** de déploiement le vendredi après 15h

### Environnements
- ❌ **JAMAIS** de données de prod en dev/staging
- ❌ **JAMAIS** de clés de prod en dev/staging
- ❌ **JAMAIS** de debug activé en production
- ❌ **JAMAIS** de CORS ouvert (*) en production
- ❌ **JAMAIS** de logs sensibles en production

---

## ✅ STANDARDS OBLIGATOIRES

### 1. Environnements (OBLIGATOIRES)
```yaml
# Structure des environnements
environments:
  development:
    url: "http://localhost:3000"
    database: "dev_db"
    debug: true
    
  staging:
    url: "https://staging.avnir.studio"
    database: "staging_db"
    debug: false
    
  production:
    url: "https://avnir.studio"
    database: "prod_db"
    debug: false
    monitoring: true
```

### 2. Pipeline CI/CD (OBLIGATOIRE)
```yaml
# .github/workflows/deploy.yml
name: Deploy Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      # Install & Cache
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'pnpm'
      
      # Quality Gates
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Lint & Type Check
        run: |
          pnpm lint --max-warnings 0
          pnpm typecheck
      
      - name: Unit Tests
        run: pnpm test:unit --coverage
      
      - name: Integration Tests
        run: pnpm test:integration
      
      - name: Security Audit
        run: |
          pnpm audit --audit-level moderate
          node scripts/security-audit.js
      
      - name: Build
        run: pnpm build
      
      - name: E2E Tests
        run: pnpm test:e2e

  deploy-staging:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - name: Deploy to Staging
        run: |
          # Deploy to staging environment
          vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
      
      - name: Smoke Tests
        run: pnpm test:smoke --env staging

  deploy-production:
    needs: [test, deploy-staging]
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: Deploy to Production
        run: |
          # Deploy with blue-green strategy
          vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
      
      - name: Health Check
        run: pnpm test:health --env production
      
      - name: Performance Check
        run: pnpm test:lighthouse --env production
```

### 3. Secrets Management
```bash
# Variables par environnement
# Development (.env.local)
DATABASE_URL="postgresql://localhost:5432/dev_db"
JWT_SECRET="dev_secret_min_32_chars_long"
STRIPE_SECRET_KEY="sk_test_..."

# Staging (.env.staging)
DATABASE_URL="${DATABASE_URL_STAGING}"
JWT_SECRET="${JWT_SECRET_STAGING}"
STRIPE_SECRET_KEY="${STRIPE_SECRET_KEY_STAGING}"

# Production (.env.production)
DATABASE_URL="${DATABASE_URL_PRODUCTION}"
JWT_SECRET="${JWT_SECRET_PRODUCTION}"
STRIPE_SECRET_KEY="${STRIPE_SECRET_KEY_PRODUCTION}"
```

---

## 🚀 DEPLOYMENT STRATEGIES

### 1. Blue-Green Deployment
```yaml
# vercel.json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/api/index.js"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  },
  "functions": {
    "app/api/**/*.js": {
      "maxDuration": 30
    }
  }
}
```

### 2. Feature Flags
```typescript
// Feature flags pour déploiements progressifs
interface FeatureFlags {
  newPaymentFlow: boolean;
  enhancedAuth: boolean;
  betaDashboard: boolean;
}

// Configuration par environnement
const featureFlags: Record<string, FeatureFlags> = {
  development: {
    newPaymentFlow: true,
    enhancedAuth: true,
    betaDashboard: true
  },
  staging: {
    newPaymentFlow: true,
    enhancedAuth: false,
    betaDashboard: true
  },
  production: {
    newPaymentFlow: false,
    enhancedAuth: false,
    betaDashboard: false
  }
};
```

### 3. Database Migrations
```typescript
// Migration strategy obligatoire
interface Migration {
  version: string;
  description: string;
  up: () => Promise<void>;
  down: () => Promise<void>;
}

// Exemple migration
const migration_001: Migration = {
  version: '001',
  description: 'Add user authentication tables',
  up: async () => {
    // Forward migration
    await db.schema.createTable('users', (table) => {
      table.uuid('id').primary();
      table.string('email').unique().notNullable();
      table.string('password_hash').notNullable();
      table.timestamps();
    });
  },
  down: async () => {
    // Rollback migration
    await db.schema.dropTable('users');
  }
};
```

---

## 📊 MONITORING & OBSERVABILITY

### 1. Health Checks (OBLIGATOIRES)
```typescript
// /api/health endpoint obligatoire
export async function GET() {
  const checks = {
    database: await checkDatabase(),
    redis: await checkRedis(),
    external_apis: await checkExternalAPIs(),
    disk_space: await checkDiskSpace(),
    memory: await checkMemoryUsage()
  };
  
  const isHealthy = Object.values(checks).every(check => check.status === 'ok');
  
  return Response.json({
    status: isHealthy ? 'healthy' : 'unhealthy',
    timestamp: new Date().toISOString(),
    checks
  }, {
    status: isHealthy ? 200 : 503
  });
}
```

### 2. Logging Strategy
```typescript
// Structure de logs obligatoire
interface LogEntry {
  timestamp: string;
  level: 'error' | 'warn' | 'info' | 'debug';
  message: string;
  service: string;
  environment: string;
  userId?: string;
  requestId?: string;
  metadata?: Record<string, unknown>;
}

// Logger configuré par environnement
const logger = {
  error: (message: string, metadata?: Record<string, unknown>) => {
    console.error(JSON.stringify({
      timestamp: new Date().toISOString(),
      level: 'error',
      message,
      service: process.env.SERVICE_NAME,
      environment: process.env.NODE_ENV,
      metadata
    }));
  }
  // ... autres niveaux
};
```

### 3. Metrics & Alerts
```typescript
// Métriques à tracker obligatoirement
interface Metrics {
  // Performance
  response_time_p95: number;
  response_time_p99: number;
  requests_per_second: number;
  
  // Erreurs
  error_rate: number;
  error_count_5xx: number;
  error_count_4xx: number;
  
  // Business
  active_users: number;
  successful_payments: number;
  failed_authentications: number;
  
  // Infrastructure
  cpu_usage: number;
  memory_usage: number;
  disk_usage: number;
}

// Alertes automatiques
const ALERT_THRESHOLDS = {
  error_rate: 0.01,        // > 1% = alerte
  response_time_p95: 2000, // > 2s = alerte
  cpu_usage: 0.8,          // > 80% = alerte
  memory_usage: 0.85       // > 85% = alerte
};
```

---

## 🔄 ROLLBACK STRATEGY

### 1. Automated Rollback
```bash
#!/bin/bash
# scripts/rollback.sh

# Rollback automatique si health check fail
if ! curl -f https://api.avnir.studio/health; then
  echo "Health check failed, initiating rollback..."
  
  # Rollback to previous version
  vercel rollback --token $VERCEL_TOKEN
  
  # Verify rollback
  sleep 30
  if curl -f https://api.avnir.studio/health; then
    echo "Rollback successful"
    # Notify team
    curl -X POST $SLACK_WEBHOOK -d '{"text":"🔄 Automatic rollback completed"}'
  else
    echo "Rollback failed - manual intervention required"
    # Alert on-call engineer
    curl -X POST $PAGERDUTY_WEBHOOK -d '{"incident_key":"rollback_failed"}'
  fi
fi
```

### 2. Database Rollback
```typescript
// Rollback de migration obligatoire
async function rollbackMigration(targetVersion: string) {
  const currentVersion = await getCurrentMigrationVersion();
  const migrationsToRollback = getMigrationsToRollback(currentVersion, targetVersion);
  
  for (const migration of migrationsToRollback.reverse()) {
    try {
      await migration.down();
      await updateMigrationVersion(migration.version);
      logger.info(`Rolled back migration ${migration.version}`);
    } catch (error) {
      logger.error(`Failed to rollback migration ${migration.version}`, { error });
      throw error;
    }
  }
}
```

---

## 📋 CHECKLIST DÉPLOIEMENT

### Avant chaque déploiement :
- [ ] Tous les tests passent (unit, integration, e2e)
- [ ] Security audit clean
- [ ] Performance budget respecté
- [ ] Database migrations testées
- [ ] Rollback plan documenté
- [ ] Feature flags configurées
- [ ] Monitoring configuré

### Après chaque déploiement :
- [ ] Health checks passent
- [ ] Smoke tests réussis
- [ ] Métriques dans les seuils
- [ ] Logs sans erreurs critiques
- [ ] Performance validée
- [ ] Rollback testé (si critique)

---

## 🎯 OBJECTIFS DÉPLOIEMENT

### Court terme (1 mois) :
- ✅ Pipeline CI/CD automatisé
- ✅ Blue-green deployment
- ✅ Health checks sur tous services
- ✅ Rollback automatique

### Moyen terme (3 mois) :
- ✅ Canary deployments
- ✅ Feature flags avancées
- ✅ Chaos engineering
- ✅ Multi-region deployment

### Long terme (6 mois) :
- ✅ GitOps avec ArgoCD
- ✅ Infrastructure as Code
- ✅ Automated scaling
- ✅ Disaster recovery

---

**RÈGLE ULTIME DÉPLOIEMENT : "Deploy fast, rollback faster"**
