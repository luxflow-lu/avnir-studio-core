import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  framework: '@storybook/nextjs',
  stories: [
    './stories/**/*.stories.@(ts|tsx|mdx)',
    '../packages/ui/src/**/*.stories.@(ts|tsx|mdx)'
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  docs: { autodocs: true }
};
export default config;
