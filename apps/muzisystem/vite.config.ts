import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@avnir/tokens": path.resolve(__dirname, "../../packages/tokens/dist"),
      "@avnir/ui": path.resolve(__dirname, "../../packages/ui/dist"),
    }
  },
  server: {
    port: 5173,
    fs: {
      allow: ["../.."]
    }
  }
});
