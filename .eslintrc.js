module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  rules: {
    // ZERO TOLERANCE - Architecture
    'import/no-cycle': 'error',
    'import/no-relative-parent-imports': 'warn',
    '@typescript-eslint/no-explicit-any': 'error', // Re-enabled: no any allowed
    
    // ZERO TOLERANCE - Code Quality
    'no-console': 'error',
    'no-debugger': 'error',
    'no-unused-vars': 'off', // Use TypeScript version only
    '@typescript-eslint/no-unused-vars': 'error', // Re-enabled: strict
    'no-undef': 'warn',
    'no-empty': 'warn',
    'no-redeclare': 'warn',
    '@typescript-eslint/no-empty-object-type': 'error', // Re-enabled: no empty interfaces
    'react/prop-types': 'off', // Not needed with TypeScript (we use TypeScript interfaces)
    'react/no-unescaped-entities': 'error', // Enforce escaped quotes
    'react/display-name': 'off', // Not needed with forwardRef displayName pattern
    
    // ZERO TOLERANCE - Imports
    'import/order': ['error', {
      'groups': [
        'builtin',
        'external', 
        'internal',
        'parent',
        'sibling',
        'index'
      ],
      'newlines-between': 'always'
    }],
    
    // ARCHITECTURE ENFORCEMENT
    'no-restricted-imports': ['error', {
      'patterns': [
        {
          'group': ['../../../*'],
          'message': 'Use package imports (@avnir/*) instead of relative imports across packages'
        },
        {
          'group': ['**/apps/**'],
          'message': 'Packages cannot import from apps'
        }
      ]
    }],
    
    // DESIGN SYSTEM ENFORCEMENT
    'no-restricted-syntax': ['error', {
      'selector': 'JSXAttribute[name.name="style"]',
      'message': 'Inline styles are forbidden. Use CSS classes from design system.'
    }, {
      'selector': 'Literal[value=/#[0-9a-fA-F]{6}/]',
      'message': 'Couleurs hex interdites. Utilise les classes/tokens CSS.'
    }]
  },
  overrides: [
    {
      // Scripts & Utilities - Allow console
      files: ['scripts/**/*.js', '**/scripts/**/*.ts', '**/logger.ts', '**/build.ts'],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-useless-escape': 'warn',
        'no-case-declarations': 'warn',
      }
    },
    {
      // Demo/Test apps - Relax rules (demos are not production code)
      files: ['apps/**/*', '**/test-*.tsx', '**/*-test.tsx'],
      rules: {
        'no-restricted-syntax': 'off', // Allow inline styles and hex colors in demos
        'no-console': 'warn', // Allow console in demos
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn', // Warn instead of error
        'react/no-unescaped-entities': 'warn', // Warn instead of error
        '@typescript-eslint/no-empty-object-type': 'warn', // Warn instead of error
      }
    },
    {
      // Apps rules - STRICT
      files: ['apps/**/*.{ts,tsx}'],
      rules: {
        'no-restricted-imports': ['error', {
          'patterns': [
            {
              'group': ['**/packages/design/**'],
              'message': 'Apps must use @avnir/ui components, not direct design imports'
            }
          ]
        }]
      }
    },
    {
      // UI Package rules - STRICT  
      files: ['packages/ui/**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-empty-object-type': 'warn', // Temporary: allow empty interfaces
        '@typescript-eslint/no-explicit-any': 'warn', // Temporary: allow any
        'react/prop-types': 'off', // Not needed with TypeScript
        'no-restricted-imports': ['error', {
          'patterns': [
            {
              'group': ['**/apps/**'],
              'message': 'UI package cannot import from apps'
            },
            {
              'group': ['**/packages/core/**'],
              'message': 'UI package cannot import business logic from core'
            }
          ]
        }]
      }
    }
  ]
};
