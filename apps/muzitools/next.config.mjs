/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@avnir/ui", "@avnir/design", "@avnir/brandkit", "@features/audio-tools"],
  experimental: {
    optimizePackageImports: ["@avnir/ui", "@avnir/brandkit"]
  },
  webpack: (config, { isServer }) => {
    // Essentia.js utilise des modules Node.js qui n'existent pas dans le navigateur
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }
    return config;
  },
};

export default nextConfig;
