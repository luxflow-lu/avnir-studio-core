import '../../packages/design/themes.css';              // tokens + themes (REM)
import './storybook.css';                                 // tailwind layers pour Storybook

export const globalTypes = {
  brand: {
    name: 'Brand',
    description: 'Thème AVNIR brand via data-brand',
    defaultValue: 'avnir-studio',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'avnir-studio', title: 'AVNIR-Studio' },
        { value: 'muzidev', title: 'MUZIDEV' },
        { value: 'muzipics', title: 'MUZIPICS' },
        { value: 'muziweb', title: 'MUZIWEB' },
        { value: 'muzimerch', title: 'MUZIMERCH' },
        { value: 'muzibase', title: 'MUZIBASE' },
        { value: 'muzimanager', title: 'MUZIMANAGER' },
        { value: 'muzitools', title: 'MUZITOOLS' },
        { value: 'promozic', title: 'PROMOZIC' },
        { value: 'paradisebeats', title: 'Paradise Beats' },
        { value: 'lyrix', title: 'LYRIX' }
      ],
      showName: true,
      dynamicTitle: true
    }
  }
};

export const decorators = [
  (Story, context) => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-brand', context.globals.brand || 'avnir-studio');
    }
    return Story();
  }
];

export const parameters = {
  backgrounds: { default: 'bg', values: [{ name: 'bg', value: 'var(--bg)' }] },
  layout: 'centered',
  options: { storySort: { order: ['Intro', 'Tokens', 'UI'] } }
};
