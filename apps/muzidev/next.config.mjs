export default {
  transpilePackages: ["@avnir/ui", "@avnir/design", "@avnir/tokens"],
  eslint: {
    ignoreDuringBuilds: false,
  },
  webpack: (config, { isServer }) => {
    // Ignore essentia.js and audio tools dependencies for MUZIDEV (not needed)
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }
    
    // Ignore essentia.js module completely
    config.externals = config.externals || [];
    config.externals.push({
      'essentia.js': 'essentia.js',
    });
    
    return config;
  },
};
