import { Story } from '@storybook/react';
import StoryBookApp from '../components/StoryBookApp';
import { HtmlTemplateTypes } from '../types/enums';
import { HtmlTemplateProps } from '../types/types';

// eslint-disable-next-line storybook/story-exports
export default {
    title: '2D Components/HtmlTemplates',
    component: StoryBookApp,
    argTypes: {
        title: {
            table: {
                disable: true,
            },
        },
        data: {
            table: {
                disable: true,
            },
        },
        position: {
            control: 'object',
        },
        rotation: {
            control: 'object',
        },
        scale: {
            control: { type: 'number', step: 1 },
        },
        divStyle: {
            control: 'object',
        },
        titleStyle: {
            control: 'object',
        },
        dataStyle: {
            control: 'object',
        },
        type: {
            table: {
                disable: true,
            },
        },
        config: {
            table: {
                disable: true,
            },
        },
        componentType: {
            table: {
                disable: true,
            },
        },
    },
};

const HtmlTemplate: Story<HtmlTemplateProps> = ({ ...args }) => {
    return <StoryBookApp config={{ ...args }} componentType="htmltemplate" />;
};

export const TextBox = HtmlTemplate.bind({});
TextBox.args = {
    type: HtmlTemplateTypes.ParagraphBox,
    title: 'Benefits of using AR',
    data: '81% of shoppers feel more confident in their purchase as a result of using AR. Provide customers with a sense of how products would look and fit in their environment. Increase shopper confidence, order volume, and sales.',
    divStyle: { background: 'white', width: '500px', borderRadius: '10px', border: '3px solid black', padding: '20px' },
    titleStyle: { fontSize: '36px', color: 'black', padding: '2px', margin: '0px', marginBottom: '20px' },
    dataStyle: { fontSize: '18px', padding: '2px', margin: '0px' },
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
};
