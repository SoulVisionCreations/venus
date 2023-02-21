import { Story } from '@storybook/react';
import StoryBookApp from '../components/StoryBookApp';
import { ImageProps } from '../types/types';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Images',
    component: StoryBookApp,
    argTypes: {
        position: {
            control: 'object',
        },
        rotation: {
            control: 'object',
        },
        scale: {
            control: 'object',
        },
        zoom: {
            control: { type: 'number', step: 0.1 },
        },
        color: {
            control: { type: 'color' },
        },
        grayscale: {
            control: { type: 'number', step: 0.1 },
        },
        transparent: {
            control: 'boolean',
        },
        opacity: {
            control: { type: 'number', step: 0.1 },
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
