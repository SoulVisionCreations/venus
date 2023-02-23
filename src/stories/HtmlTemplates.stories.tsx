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
        background: {
            control: { type: 'color' },
        },
        borderRadius: {
            control: { type: 'number', step: 1 },
        },
        width: {
            control: { type: 'number', step: 50 },
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
        color: {
            control: { type: 'color' },
        },
        padding: {
            control: { type: 'number', step: 1 },
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
    background: 'white',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
    width: '500px',
    color: 'black',
    padding: '10px 20px',
    borderRadius: 0,
    border: '3px solid black',
};
