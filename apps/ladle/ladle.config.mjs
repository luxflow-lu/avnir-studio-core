export default {
  title: "AVNIR UI — Playground",
  viteConfig: {
    resolve: {
      alias: {
        "@avnir/tokens": "../../packages/tokens/dist",
        "@avnir/ui": "../../packages/ui/dist/index.js"
      }
    },
    server: {
      fs: {
        allow: ['..', '../..']
      }
    },
    css: {
      preprocessorOptions: {
        css: {
          charset: false
        }
      }
    }
  }
};
