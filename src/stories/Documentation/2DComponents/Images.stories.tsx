import { Story } from '@storybook/react';
import StoryBookApp from '../../../components/StoryBookApp';
import { ImageProps } from '../../../types/types';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/2D Components/Images',
    component: StoryBookApp,
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
                defaultValue: { summary: '[1, 1]' },
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
};

const Image: Story<ImageProps> = ({ ...args }) => {
    return <StoryBookApp config={{ ...args }} componentType="image" />;
};

export const ImageStory = Image.bind({});
ImageStory.args = {
    src: './storyimage.jpeg',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1],
    zoom: 1,
    color: 'white',
    grayscale: 0,
    transparent: false,
    opacity: 1,
};
