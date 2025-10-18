import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  framework: '@storybook/nextjs',
  stories: [
    '../../packages/ui/src/**/*.stories.@(ts|tsx|mdx)',
    './tokens/ColorsTypography.stories.tsx'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs'
  ],
  docs: { autodocs: true },
  typescript: { check: false },
  webpackFinal: async (cfg) => {
    cfg.devtool = false;
    return cfg;
  }
};
export default config;
