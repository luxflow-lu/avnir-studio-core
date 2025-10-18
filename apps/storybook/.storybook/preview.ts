import '../../packages/design/themes.css';
import '../../apps/avnir-studio/app/globals.css';

export const globalTypes = {
  brand: {
    name: 'Brand',
    defaultValue: 'avnir-studio',
    toolbar: {
      icon: 'paintbrush',
      items: [
        'avnir-studio','muzidev','muzipics','muziweb','muzimerch',
        'muzibase','muzimanager','muzitools','promozic','paradisebeats','lyrix'
      ],
      showName: true,
      dynamicTitle: true
    }
  }
};

const applyBrand = (brand: string) => {
  document.documentElement.setAttribute('data-brand', brand);
  const root = document.getElementById('storybook-root');
  root?.ownerDocument?.documentElement?.setAttribute('data-brand', brand);
};

export const decorators = [
  (Story, ctx) => { applyBrand(ctx.globals.brand || 'avnir-studio'); return Story(); }
];

export const parameters = {
  backgrounds: { default: 'bg', values: [{ name: 'bg', value: 'var(--bg)' }] },
  layout: 'padded'
};
