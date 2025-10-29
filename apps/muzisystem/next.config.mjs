export default {
  transpilePackages: ["@avnir/ui", "@avnir/design", "@avnir/tokens"],
  eslint: {
    ignoreDuringBuilds: false,
  },
  async redirects() {
    return [
      {
        source: '/colors',
        destination: '/foundations/colors',
        permanent: true,
      },
    ];
  },
};
