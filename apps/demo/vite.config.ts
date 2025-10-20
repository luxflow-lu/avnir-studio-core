import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  root: path.resolve(__dirname),
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@avnir/ui": path.resolve(__dirname, "../../packages/ui/dist"),
      "@avnir/tokens": path.resolve(__dirname, "../../packages/tokens/dist"),
    },
  },
  server: {
    port: 5173,
    fs: {
      // Autorise les imports depuis le monorepo (packages, apps/ladle/src pour composants)
      allow: [
        path.resolve(__dirname, "."),
        path.resolve(__dirname, "..", ".."),
      ],
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "@avnir/ui", "@avnir/tokens"],
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true },
  },
});
