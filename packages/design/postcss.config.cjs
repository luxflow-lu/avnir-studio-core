module.exports = {
  plugins: [
    // Import resolution
    require('postcss-import')({
      path: ['src']
    }),
    
    // Nested CSS support
    require('postcss-nested'),
    
    // Custom properties fallback
    require('postcss-custom-properties')({
      preserve: true
    }),
    
    // Autoprefixer for browser compatibility
    require('autoprefixer'),
    
    // Production optimizations
    ...(process.env.NODE_ENV === 'production' ? [
      // CSS minification
      require('cssnano')({
        preset: ['default', {
          // Remove all comments
          discardComments: { removeAll: true },
          
          // Normalize whitespace
          normalizeWhitespace: true,
          
          // Minify selectors
          minifySelectors: true,
          
          // Merge rules
          mergeRules: true,
          
          // Optimize calc() expressions
          calc: true,
          
          // Convert colors to shorter formats
          colormin: true,
          
          // Remove unused font weights
          discardUnused: true,
          
          // Optimize z-index values
          zindex: false, // Keep our z-index scale intact
          
          // Reduce transform functions
          reduceTransforms: true,
          
          // Optimize animations
          reduceIdents: false // Keep our animation names intact
        }]
      }),
      
      // Remove unused CSS (PurgeCSS)
      require('@fullhuman/postcss-purgecss')({
        content: [
          './src/**/*.{js,jsx,ts,tsx}',
          '../ui/src/**/*.{js,jsx,ts,tsx}',
          '../../apps/*/src/**/*.{js,jsx,ts,tsx}'
        ],
        
        // Safelist - classes to never remove
        safelist: [
          // Base HTML elements
          'html', 'body',
          
          // Theme and brand attributes
          /^\[data-theme/,
          /^\[data-brand/,
          
          // Animation classes (keep all keyframes)
          /^@keyframes/,
          
          // Dynamic classes that might be added via JS
          /^is-/,
          /^has-/,
          /--visible$/,
          /--active$/,
          /--selected$/,
          /--disabled$/,
          /--loading$/,
          
          // Component state classes
          /^.*--sm$/,
          /^.*--md$/,
          /^.*--lg$/,
          /^.*--xl$/,
          
          // Status classes
          /--success$/,
          /--warning$/,
          /--error$/,
          /--info$/,
          
          // Utility classes that might be used dynamically
          'flex-center',
          'flex-between',
          'text-truncate',
          'spinner',
          'overlay'
        ],
        
        // Default extractors
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        
        // Custom extractors for different file types
        extractors: [
          {
            extractor: content => {
              // Extract class names from className props
              const classNames = content.match(/className[=:]\s*["'`]([^"'`]*)["'`]/g) || [];
              const classes = classNames.map(match => 
                match.replace(/className[=:]\s*["'`]([^"'`]*)["'`]/, '$1')
              ).join(' ');
              
              // Extract cx() calls
              const cxCalls = content.match(/cx\s*\(\s*["'`]([^"'`]*)["'`]/g) || [];
              const cxClasses = cxCalls.map(match =>
                match.replace(/cx\s*\(\s*["'`]([^"'`]*)["'`]/, '$1')
              ).join(' ');
              
              return (classes + ' ' + cxClasses).match(/[\w-/:]+(?<!:)/g) || [];
            },
            extensions: ['js', 'jsx', 'ts', 'tsx']
          }
        ]
      })
    ] : [])
  ]
};
