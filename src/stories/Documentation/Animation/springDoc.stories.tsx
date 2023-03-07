const NullComponent = () => {
    return <div></div>;
}

export default {
  title: 'Documentation/Animations',
  component: NullComponent,
  parameters: {
    previewTabs: {
        canvas: {
            hidden: true,
        },
    },
    viewMode: 'docs',
    docs: {
      inlineStories: false,
      description: {
        component: `Some component _markdown_`,
      },
    },
  },    
};

export const Springs = NullComponent.bind({});
Springs.parameters = {
  docs: {
    description: {
      component: 'Some story **markdown**',
    },
  },
};

export const Springs2 = NullComponent.bind({});
Springs2.parameters = {
  docs: {
    description: {
      component: 'Some story **markdown**',
    },
  },
};