import { Story } from '@storybook/react';
import App from '../../../../App';
import { TextTypes } from '../../../../types/enums';
import { TextProps } from '../../../../types/types';
import { getTextsConfig } from './textsConfig';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/2D Components/Texts',
    component: App,
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
        color: {
            control: { type: 'color' },
            description: 'Sets color of the text',
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: '"none"' },
            },
        },
        fontSize: {
            control: { type: 'number', step: 0.1 },
            description: 'Sets font size of the text. Expressed in em units',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0.1 },
            },
        },
        maxWidth: {
            control: { type: 'number', step: 0.1 },
            description: 'Sets maximum width of the text. Useful for creating multi-line text',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 2 },
            },
        },
        position: {
            control: 'object',
            description: 'Sets position of the text',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[0, 0, 0]' },
            },
        },
        rotation: {
            control: 'object',
            description: 'Sets rotation of the text',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[0, 0, 0]' },
            },
        },
        lineHeight: {
            control: { type: 'number', step: 0.1 },
            description: 'Sets height of a line in the text',
            table: {
                type: { summary: '"normal" | number' },
                defaultValue: { summary: '"normal"' },
            },
        },
        letterSpacing: {
            control: { type: 'number', step: 0.1 },
            description: 'Sets space between characters in the text',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0 },
            },
        },
        textAlign: {
            control: 'radio',
            options: ['center', 'left', 'right', 'justify'],
            description: 'Sets the horizontal alignment of text. Can be chosen from the following options',
            table: {
                type: { summary: '"center" | "left" | "right" | "justify"' },
                defaultValue: { summary: '"left"' },
            },
        },
        anchorX: {
            control: 'radio',
            options: ['center', 'left', 'right'],
            description:
                'Sets the horizontal position in the text block that should line up with the local origin. Can be chosen from the following options or provided a string percentage of the total text block width e.g. 25%',
            table: {
                type: { summary: '"center" | "left" | "right" | string' },
                defaultValue: { summary: 0 },
            },
        },
        anchorY: {
            control: 'radio',
            options: ['bottom', 'top', 'middle', 'top-baseline', 'bottom-baseline'],
            description:
                'Sets the vertical position in the text block that should line up with the local origin. Can be chosen from the following options or provided a string percentage of the total text block height e.g. 25%',
            table: {
                type: { summary: '"bottom" | "top" | "middle" | "top-baseline" | "bottom-baseline" | string' },
                defaultValue: { summary: 0 },
            },
        },
        overflowWrap: {
            control: 'radio',
            options: ['normal', 'break-word'],
            description: 'Sets how the text wraps if the whiteSpace property is "normal"',
            table: {
                type: { summary: '"normal" | "break-word"' },
                defaultValue: { summary: '"normal"' },
            },
        },
        whiteSpace: {
            control: 'radio',
            options: ['normal', 'overflowWrap'],
            description: 'Sets whether the text should wrap when a line reaches the maxWidth',
            table: {
                type: { summary: '"normal" | "overflowWrap"' },
                defaultValue: { summary: '"normal"' },
            },
        },
        outlineWidth: {
            control: { type: 'number', step: 0.01 },
            description: 'Sets the width of an outline around the text',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0 },
            },
        },
        outlineOffsetX: {
            control: { type: 'number', step: 0.01 },
            description: 'Sets the horizontal offset of the text outline',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0 },
            },
        },
        outlineOffsetY: {
            control: { type: 'number', step: 0.01 },
            description: 'Sets the vertical offset of the text outline',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0 },
            },
        },
        outlineBlur: {
            control: { type: 'number', step: 0.01 },
            description: 'Sets a blur radius applied to the outer edge of the text',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0 },
            },
        },
        outlineColor: {
            control: { type: 'color' },
            description: 'Sets the outline color of the text',
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: '"black"' },
            },
        },
        outlineOpacity: {
            control: { type: 'number', step: 0.1 },
            description: 'Sets the outline opacity of the text',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 1 },
            },
        },
        fillOpacity: {
            control: { type: 'number', step: 0.1 },
            description: 'Sets the fill opacity of the text',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 1 },
            },
        },
        curveRadius: {
            control: { type: 'number', step: 0.01 },
            description: 'Sets a cylindrical radius along which the text plane will be curved',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0 },
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
        viewMode: 'docs',
    },
};

const Text: Story<TextProps> = ({ ...args }) => {
    const config = getTextsConfig(args);
    return <App config={{ ...config }} />;
};

export const TextParagraph = Text.bind({});
TextParagraph.args = {
    title: 'Benefits of using AR',
    data: '81% of shoppers feel more confident in their purchase as a result of using AR. Provide customers with a sense of how products would look and fit in their environment. Increase shopper confidence, order volume, and sales.',
    color: 'black',
    fontSize: 0.1,
    maxWidth: 2,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    type: TextTypes.Paragraph,
    // font: any;
    lineHeight: 1.15,
    letterSpacing: 0,
    textAlign: 'justify',
    anchorX: 'center',
    anchorY: 'middle',
    overflowWrap: 'normal',
    whiteSpace: 'normal',
    outlineWidth: 0,
    outlineOffsetX: 0,
    outlineOffsetY: 0,
    outlineBlur: 0,
    outlineColor: 'black',
    outlineOpacity: 0,
    fillOpacity: 1,
    curveRadius: 0,
    // material?: Material;
};

export const TextList = Text.bind({});
TextList.args = {
    numbered: false,
    ...TextParagraph.args,
    data: [
        '81% of shoppers feel more confident in their purchase as a result of using AR.',
        'Provide customers with a sense of how products would look and fit in their environment.',
        'Increase shopper confidence, order volume, and sales.',
    ],
    type: TextTypes.List,
};
