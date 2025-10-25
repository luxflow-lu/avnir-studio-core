/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@avnir/ui", "@avnir/design", "@avnir/brandkit", "@features/audio-tools"],
  experimental: {
    optimizePackageImports: ["@avnir/ui", "@avnir/brandkit"]
  }
};

export default nextConfig;
