import { Story } from '@storybook/react';
import StoryBookApp from '../../../components/StoryBookApp';
import { HtmlTemplateTypes } from '../../../types/enums';
import { HtmlTemplateProps } from '../../../types/types';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/2D Components/HtmlTemplates',
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
            description: 'Sets position of the HTML template',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[0, 0, 0]' },
            },
        },
        rotation: {
            control: 'object',
            description: 'Sets rotation of the HTML template',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[0, 0, 0]' },
            },
        },
        scale: {
            control: { type: 'number', step: 1 },
            description: 'Sets scale of the HTML template',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 1 },
            },
        },
        divStyle: {
            control: 'object',
            description: 'Sets style for the outer div element of the HTML template. All CSS properties for &lt;div&gt; element are supported.',
            table: {
                type: { summary: 'object' },
            },
        },
        titleStyle: {
            control: 'object',
            description: 'Sets style for the title element of the HTML template. All CSS properties for &lt;p&gt; element are supported.',
            table: {
                type: { summary: 'object' },
            },
        },
        dataStyle: {
            control: 'object',
            description: 'Sets style for the data element of the HTML template. All CSS properties for &lt;p&gt; element are supported.',
            table: {
                type: { summary: 'object' },
            },
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
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
    divStyle: { background: 'white', width: '500px', borderRadius: '10px', border: '3px solid black', padding: '20px' },
    titleStyle: { fontSize: '36px', color: 'black', padding: '2px', margin: '0px', marginBottom: '20px' },
    dataStyle: { fontSize: '18px', padding: '2px', margin: '0px' },
};
