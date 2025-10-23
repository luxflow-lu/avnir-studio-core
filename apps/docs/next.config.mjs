import nextra from "nextra";
const withNextra = nextra({ theme: "nextra-theme-docs", themeConfig: "./theme.config.jsx" });
export default withNextra({
  transpilePackages: ["@avnir/ui", "@avnir/design", "@avnir/tokens"],
  eslint: {
    ignoreDuringBuilds: true,
  },
});
