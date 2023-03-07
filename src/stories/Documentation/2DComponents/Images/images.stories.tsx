import { Story } from '@storybook/react';
import App from '../../../../App';
import { ImageProps } from '../../../../types/types';
import { getImagesConfig } from './imagesConfig';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/2D Components/Images',
    component: App,
    argTypes: {
        position: {
            control: 'object',
            description: 'Sets position of the image',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[0, 0, 0]' },
            },
        },
        rotation: {
            control: 'object',
            description: 'Sets rotation of the image',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[0, 0, 0]' },
            },
        },
        scale: {
            control: 'object',
            description: 'Sets scale of the image',
            table: {
                type: { summary: '[number, number]' },
                defaultValue: { summary: 'Default resolution of the image, for example, here scale is [1.6, 1]' },
            },
        },
        zoom: {
            control: { type: 'number', step: 0.1 },
            description: 'Sets zoom in for fixed scale of the image',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 1 },
            },
        },
        color: {
            control: { type: 'color' },
            description: 'Sets the color of the image',
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: '"white"' },
            },
        },
        grayscale: {
            control: { type: 'number', step: 0.1 },
            description: 'Sets the grayscale value of the image',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0 },
            },
        },
        transparent: {
            control: 'boolean',
            description: 'Sets the image material to be transparent',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: false },
            },
        },
        opacity: {
            control: { type: 'number', step: 0.1 },
            description: 'Sets the opacity of the image',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 1 },
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
                component: 'This component is used to add images to your experience. Images can either be uploaded on the experience config generator UI or the source path must be provided.',
            },
        },
        viewMode: 'docs',
    },
};

const Image: Story<ImageProps> = ({ ...args }) => {
    const config = getImagesConfig(args);
    return <App config={{ ...config }} />;
};

export const ImageExample = Image.bind({});
ImageExample.args = {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1.6, 1],
    zoom: 1,
    color: 'white',
    grayscale: 0,
    transparent: false,
    opacity: 1,
};
