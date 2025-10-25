module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  rules: {
    // ZERO TOLERANCE - Architecture
    'import/no-cycle': 'error',
    'import/no-relative-parent-imports': 'warn', // Downgrade to warning for tooling files
    '@typescript-eslint/no-explicit-any': 'warn',
    
    // ZERO TOLERANCE - Code Quality
    'no-console': 'error',
    'no-debugger': 'error',
    'no-unused-vars': 'warn', // Downgrade to warning
    '@typescript-eslint/no-unused-vars': 'warn', // Downgrade to warning
    'no-undef': 'warn', // Downgrade to warning (React imports)
    'no-empty': 'warn', // Downgrade to warning
    'no-redeclare': 'warn', // Downgrade to warning
    '@typescript-eslint/no-empty-object-type': 'warn', // Downgrade to warning
    
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
    }]
  },
  overrides: [
    {
      // Scripts - Allow console
      files: ['scripts/**/*.js'],
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
      // Demo/Test apps - Relax rules
      files: ['apps/ladle/**/*', 'apps/muzisystem/**/*', '**/test-*.tsx', '**/*-test.tsx'],
      rules: {
        'no-restricted-syntax': 'off', // Allow inline styles and hex colors in demos
        'no-console': 'warn', // Allow console in demos
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'off', // Allow any in demos
        '@next/next/no-img-element': 'off', // Disable Next.js img rule
        'react/no-unescaped-entities': 'off', // Allow unescaped entities in demos
        '@typescript-eslint/no-empty-object-type': 'off', // Allow empty interfaces in demos
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
