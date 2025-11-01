import nextra from "nextra";
const withNextra = nextra({ theme: "nextra-theme-docs", themeConfig: "./theme.config.jsx" });
export default withNextra({
  transpilePackages: ["@avnir/ui", "@avnir/design", "@avnir/tokens"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // Ignore essentia.js and audio tools dependencies (not needed in this app)
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }
    
    config.externals = config.externals || [];
    config.externals.push({
      'essentia.js': 'essentia.js',
    });
    
    return config;
  },
});
