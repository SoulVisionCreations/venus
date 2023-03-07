import { Story } from '@storybook/react';
import App from '../../../../App';
import { HtmlTemplateTypes } from '../../../../types/enums';
import { HtmlTemplateProps } from '../../../../types/types';
import { getHtmlTemplatesConfig } from './htmlTemplatesConfig';

const HtmlTemplate: Story<HtmlTemplateProps> = (args) => {
    const config = getHtmlTemplatesConfig(args);
    return <App config={{ ...config }} />;
};

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/2D Components/HtmlTemplates',
    component: HtmlTemplate,
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
        boxStyle: {
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
    parameters: {
        previewTabs: {
            canvas: {
                hidden: true,
            },
        },
        docs: {
            description: {
                component:
                    'This component is used to add HTML templates to your experience. Custom styles can also be provided for each HTML template. Currently, there are three types of HTML templates supported: Paragraph, Numbered List with Title, and Bulleted List with Title. **Animations cannot be applied to HTML templates**',
            },
        },
        viewMode: 'docs',
    },
};

export const ParagraphBox = HtmlTemplate.bind({});
ParagraphBox.args = {
    type: HtmlTemplateTypes.ParagraphBox,
    title: 'Benefits of using AR',
    data: '81% of shoppers feel more confident in their purchase as a result of using AR. Provide customers with a sense of how products would look and fit in their environment. Increase shopper confidence, order volume, and sales.',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
    boxStyle: { background: 'white', width: '500px', borderRadius: '10px', border: '3px solid black', padding: '20px' },
    titleStyle: { fontSize: '36px', color: 'black', padding: '2px', margin: '0px', marginBottom: '20px' },
    dataStyle: { fontSize: '18px', padding: '2px', margin: '0px' },
};

export const NumberedListBox = HtmlTemplate.bind({});
NumberedListBox.args = {
    type: HtmlTemplateTypes.NumberedListBox,
    title: 'Benefits of using AR',
    data: [
        '81% of shoppers feel more confident in their purchase as a result of using AR.',
        'Provide customers with a sense of how products would look and fit in their environment.',
        'Increase shopper confidence, order volume, and sales.',
    ],
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
    boxStyle: { background: 'white', width: '500px', borderRadius: '10px', border: '3px solid black', padding: '20px' },
    titleStyle: { fontSize: '36px', color: 'black', padding: '2px', margin: '0px', marginBottom: '20px' },
    dataStyle: { fontSize: '18px', padding: '2px', margin: '0px' },
};

export const BulletedListBox = HtmlTemplate.bind({});
BulletedListBox.args = {
    type: HtmlTemplateTypes.BulletedListBox,
    title: 'Benefits of using AR',
    data: [
        '81% of shoppers feel more confident in their purchase as a result of using AR.',
        'Provide customers with a sense of how products would look and fit in their environment.',
        'Increase shopper confidence, order volume, and sales.',
    ],
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
    boxStyle: { background: 'white', width: '500px', borderRadius: '10px', border: '3px solid black', padding: '20px' },
    titleStyle: { fontSize: '36px', color: 'black', padding: '2px', margin: '0px', marginBottom: '20px' },
    dataStyle: { fontSize: '18px', padding: '2px', margin: '0px' },
};
