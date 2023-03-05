import { Story } from '@storybook/react';
import App from '../../../../App';
import { Text3DObjectProps } from '../../../../types/object3DTypes';
import { getText3DObjectConfig } from './text3DObjectConfig';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/3D Components/Text3DObject',
    component: App,
    argTypes: {
        position: {
            control: 'object',
            description: 'Sets position of the 3D Text object',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[0, 0, 0]' },
            },
        },
        rotation: {
            control: 'object',
            description: 'Sets rotation of the 3D Text object',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[0, 0, 0]' },
            },
        },
        scale: {
            control: 'object',
            description: 'Sets scale of the 3D Text object',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[1, 1, 1]' },
            },
        },
        color: {
            control: { type: 'color' },
            description: 'Sets the color of the 3D Text object',
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: '"white"' },
            },
        },
        type: {
            table: {
                disable: true,
            },
        },
        assetPath: {
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

const Text3DObject: Story<Text3DObjectProps> = ({ ...args }) => {
    const config = getText3DObjectConfig(args);
    return <App config={{ ...config }} />;
};

export const Text3DObjectExample = Text3DObject.bind({});
Text3DObjectExample.args = {
    text: 'Avataar',
    position: [0, 0, 0],
    rotation: [Math.PI / 10, Math.PI / 10, 0],
    scale: [0.5, 0.5, 0.5],
    color: 'white',
};
