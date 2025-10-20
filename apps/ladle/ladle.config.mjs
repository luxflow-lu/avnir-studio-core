export default {
  title: "MUZISYSTEM — Playground",
  viteConfig: {
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
