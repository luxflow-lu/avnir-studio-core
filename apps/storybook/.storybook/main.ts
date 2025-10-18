import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: [
    '../stories/**/*.stories.@(ts|tsx)',
    '../../../packages/ui/src/**/*.stories.@(ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs'
  ],
  docs: { autodocs: true },
  viteFinal: async (config) => {
    // Allow importing files outside of the app root (monorepo packages)
    const srv: any = (config.server = config.server || {});
    const fs: any = (srv.fs = srv.fs || {});
    fs.allow = [
      ...(fs.allow || []),
      path.resolve(__dirname, '..'), // apps/storybook
      path.resolve(__dirname, '..', '..'), // apps
      path.resolve(__dirname, '..', '..', '..'), // repo root
    ];
    return config;
  }
};
export default config;
