import '../packages/design/themes.css';
import '../apps/avnir-studio/app/globals.css';

export const globalTypes = {
  brand: {
    name: 'Brand',
    defaultValue: 'muzipics', // change librement
    toolbar: {
      icon: 'paintbrush',
      items: ['avnir-studio','muzidev','muzipics','muziweb','muzimerch','muzibase','muzimanager','muzitools','promozic','paradisebeats','lyrix']
    }
  }
};

function setBrandAttr(brand: string) {
  // Canvas (preview iframe)
  document.documentElement.setAttribute('data-brand', brand);
  // Docs mode : certains wrappers utilisent #storybook-root
  const root = document.getElementById('storybook-root');
  if (root) {
    const html = root.ownerDocument?.documentElement;
    html?.setAttribute('data-brand', brand);
  }
}

export const decorators = [
  (Story, ctx) => {
    const brand = ctx.globals.brand || 'avnir-studio';
    setBrandAttr(brand);
    return Story();
  }
];

export const parameters = {
  backgrounds: { default: 'bg', values: [{ name: 'bg', value: 'var(--bg)' }] },
  layout: 'padded'
};
