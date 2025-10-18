import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: [
    './stories/**/*.stories.@(ts|tsx)',
    '../../packages/ui/src/**/*.stories.@(ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs'
  ],
  docs: { autodocs: true },
  viteFinal: async (config) => {
    return config;
  }
};
export default config;
