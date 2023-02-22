import { Story } from '@storybook/react';
import StoryBookApp from '../components/StoryBookApp';
import { TextTypes } from '../types/enums';
import { TextProps } from '../types/types';

// eslint-disable-next-line storybook/story-exports
export default {
    title: '2D Components/Texts',
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
        color: {
            control: { type: 'color' },
        },
        fontSize: {
            control: { type: 'number', step: 0.1 },
        },
        maxWidth: {
            control: { type: 'number', step: 0.1 },
        },
        position: {
            control: 'object',
        },
        rotation: {
            control: 'object',
        },
        lineHeight: {
            control: { type: 'number', step: 0.1 },
        },
        letterSpacing: {
            control: { type: 'number', step: 0.1 },
        },
        textAlign: {
            control: 'radio',
            options: ['center', 'left', 'right', 'justify'],
        },
        anchorX: {
            control: 'radio',
            options: ['center', 'left', 'right'],
        },
        anchorY: {
            control: 'radio',
            options: ['bottom', 'top', 'middle', 'top-baseline', 'bottom-baseline'],
        },
        depthOffset: {
            control: { type: 'number', step: 0.1 },
        },
        overflowWrap: {
            control: 'radio',
            options: ['normal', 'break-word'],
        },
        whiteSpace: {
            control: 'radio',
            options: ['normal', 'overflowWrap'],
        },
        outlineWidth: {
            control: { type: 'number', step: 0.01 },
        },
        outlineOffsetX: {
            control: { type: 'number', step: 0.01 },
        },
        outlineOffsetY: {
            control: { type: 'number', step: 0.01 },
        },
        outlineBlur: {
            control: { type: 'number', step: 0.01 },
        },
        outlineColor: {
            control: { type: 'color' },
        },
        outlineOpacity: {
            control: { type: 'number', step: 0.1 },
        },
        fillOpacity: {
            control: { type: 'number', step: 0.1 },
        },
        curveRadius: {
            control: { type: 'number', step: 0.01 },
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

const Text: Story<TextProps> = ({ ...args }) => {
    return <StoryBookApp config={{ ...args }} componentType="text" />;
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
    depthOffset: 0,
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
