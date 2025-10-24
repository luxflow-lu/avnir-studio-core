const { join } = require("path");

/**
 * AVNIR-Studio dependency rules - ARCHITECTURE ENFORCEMENT
 * - apps/* may depend on packages/* and node_modules, but NEVER on other apps/*
 * - forbid deep imports into packages/* internals (force public API via index.ts)
 * - prevent circular dependencies anywhere
 * - packages/tokens must be a leaf (no deps on other packages)
 * - packages/security & packages/encryption must NOT depend on UI
 *
 * CI usage:
 *   pnpm architecture:check
 * Graph (needs graphviz):
 *   pnpm architecture:graph
 */
module.exports = {
  extends: "dependency-cruiser/configs/recommended-strict",
  options: {
    // Pointe sur ton tsconfig central pour résoudre les alias (paths)
    tsConfig: {
      fileName: join(__dirname, "tsconfig.json"),
    },
    // Scopes à analyser
    includeOnly: ["^apps/[^/]+/src", "^packages/[^/]+/src"],
    exclude: {
      path: [
        "node_modules",
        "\\.d\\.ts$",
        "\\.(spec|test)\\.(t|j)sx?$",
        "\\.stories\\.(t|j)sx?$",
        "^apps/[^/]+/(.next|dist|out)/",
        "^packages/[^/]+/(dist|build)/",
      ],
    },
    doNotFollow: {
      path: "node_modules",
    },
    reporterOptions: {
      dot: { theme: { graph: { rankdir: "LR" } } },
    },
  },

  forbidden: [
    // 1) No circular deps anywhere
    { 
      name: "no-circular", 
      severity: "error", 
      from: {}, 
      to: { circular: true },
      comment: "Circular dependencies break architecture and cause runtime issues"
    },

    // 2) No app -> app (apps must not import other apps)
    {
      name: "no-app-to-app",
      severity: "error",
      from: { path: "^apps/[^/]+/src" },
      to: { path: "^apps/[^/]+/src" },
      comment: "Apps must be independent - use packages for shared code"
    },

    // 3) Apps may import packages/* but NOT their internals directly (force public API)
    //    -> refuse "deep imports" genre: packages/ui/src/components/Button.tsx
    {
      name: "no-deep-package-internals-from-apps",
      severity: "error",
      from: { path: "^apps/[^/]+/src" },
      to: {
        path: "^packages/[^/]+/src/.+",
        // Autorise l'entrée publique: index.ts(x)? au root de src (ou ré-export via barrel)
        pathNot: "^packages/[^/]+/src/index\\.(t|j)sx?$",
      },
      comment: "Apps must use package public APIs only - import from package root or index"
    },

    // 4) Interdiction des deep imports entre packages eux-mêmes (consommer via leur index)
    {
      name: "no-deep-package-internals-between-packages",
      severity: "error",
      from: { path: "^packages/[^/]+/src" },
      to: {
        path: "^packages/[^/]+/src/.+",
        pathNot: "^packages/[^/]+/src/index\\.(t|j)sx?$",
      },
      comment: "Packages must use other packages' public APIs only"
    },

    // 5) packages/design ou packages/tokens ne dépendent de personne (leaf)
    {
      name: "design-tokens-no-deps",
      severity: "error",
      from: { path: "^packages/(design|tokens)/src" },
      to: {
        path: "^packages/(?!design|tokens)/",
      },
      comment: "Design tokens must be dependency-free (leaf packages)"
    },

    // 6) security & encryption ne tirent PAS sur UI/feature (pas d'inversion de couches)
    {
      name: "security-no-ui",
      severity: "error",
      from: { path: "^packages/(security|encryption)/src" },
      to: { path: "^packages/(ui|components|brandkit)/src" },
      comment: "Security packages must not depend on UI - keep security layer independent"
    },

    // 7) UI ne dépend PAS d'APPs (sens unique strict)
    {
      name: "ui-no-depend-on-apps",
      severity: "error",
      from: { path: "^packages/(ui|components)/src" },
      to: { path: "^apps/[^/]+/src" },
      comment: "UI packages must not depend on apps - maintain unidirectional flow"
    },

    // 8) Pas d'import non résolu (déjà couvert par recommended-strict, doublon volontaire en error)
    { 
      name: "no-unresolved", 
      severity: "error", 
      from: {}, 
      to: { couldNotResolve: true },
      comment: "All imports must be resolvable"
    },

    // 9) Interdiction imports relatifs cross-package (forcer workspace aliases)
    {
      name: "no-relative-cross-package",
      severity: "error",
      from: { path: "^packages/[^/]+/src" },
      to: {
        path: "^\\.\\..*packages/[^/]+/",
        dependencyTypes: ["local"],
      },
      comment: "Use workspace aliases (@avnir/*) instead of relative paths for cross-package imports"
    },

    // 10) Apps ne peuvent pas importer design directement (doivent passer par UI)
    {
      name: "apps-no-direct-design",
      severity: "warn", // Warning car peut être légitime pour themes.css
      from: { path: "^apps/[^/]+/src" },
      to: { path: "^packages/design/src" },
      comment: "Apps should import design through UI package when possible"
    },

    // 11) Interdiction d'importer des fichiers de test/stories
    {
      name: "no-test-imports",
      severity: "error",
      from: { path: "^(apps|packages)/[^/]+/src" },
      to: { path: "\\.(test|spec|stories)\\.(t|j)sx?$" },
      comment: "Test and story files should not be imported in production code"
    }
  ],

  // Règles spécifiques par type de module
  allowed: [
    // Apps peuvent importer packages via workspace aliases
    {
      from: { path: "^apps/[^/]+/src" },
      to: { path: "^packages/[^/]+/src/index\\.(t|j)sx?$" },
      comment: "Apps can import package public APIs"
    },
    
    // Packages peuvent importer d'autres packages via leurs APIs publiques
    {
      from: { path: "^packages/[^/]+/src" },
      to: { path: "^packages/[^/]+/src/index\\.(t|j)sx?$" },
      comment: "Packages can import other packages' public APIs"
    }
  ]
};
