import { config } from '@react-spring/three';
import { Story } from '@storybook/react';
import App from '../../../../App';
import { ChainedAnimation } from '../../../../types/animationTypes';
import { TrajectoryTypes } from '../../../../types/enums';
import { getChainedAnimationConfig } from './ChainedAnimationConfig';

// eslint-disable-next-line storybook/story-exports
const AppWrapper: Story<ChainedAnimation> = (args) => {
    const config = getChainedAnimationConfig(args);
    return <App config={{ ...config }} />;
};

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/Animations/Types/Chained Animation',
    component: AppWrapper,
    argTypes: {
        initialPause: {
            control: { type: 'number' },
            description: 'The animation will start after X milliseconds, if initialPause is set to X.',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '0' },
            },
        },
        interval: {
            control: { type: 'number' },
            description: 'If repeat is set to true, the chained animation will repeat itself with specified interval.',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '0' },
            },
        },
        springConfig: {
            control: { type: 'object' },
            description: `A common spring config for each animation in animation chain. If any animation in animation chain dosen't have a spring config specified, this config will be used.`,
            table: {
                type: { summary: 'object' },
                defaultValue: { summary: '{ tension: 170, friction: 26 }' },
            },
        },
        repeat: {
            control: { type: 'boolean' },
            description: 'If repeat is set to true, the chained animation will repeat itself with specified interval.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        childAnimations: {
            control: { type: 'object' },
            description: `An array of animations, where each animation can be defined by trajectory for each or any of state properties or through manual state increments for each or any of state properties. Checkout intro animation docs to better understand how to define a single animation. Each animation can have it's own initial Pause ( defaults to 0 ), the initial Pause defines the time interval between previous and current animation within a given animation chain. Each animation can also have a spring config defined, fallsback to common spring config if not specified.`,
            table: {
                type: { summary: 'object' },
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
        docs: {
            description: {
                component: `Chained animation is a set of animations executed one after another. Every animation in the chain can have it's own springConfig and initialPause. The chain can keep repeating itself if repeat prop is set to true, the time interval between consecutive chains can also be choosen through interval prop which defaults to zero. A object can have a introAnimation as well as chainedAnimation, in this case the intro animation will be executed first and the chianed animation will kick in after it's completion.`,
            },
        },
    },
};

export const Example = AppWrapper.bind({});
Example.args = {
    initialPause: 400,
    springConfig: config.default,
    interval: 0,
    repeat: true,
    childAnimations: [
        {
            stateIncrements: [
                {
                    scale: [1, 1, 1],
                },
            ],
        },
        {
            animationTrajectories: {
                rotation: {
                    trajectoryMetaData: {
                        type: TrajectoryTypes.line3D,
                        startPoint: [Math.PI / 2, 0, 0],
                        endPoint: [Math.PI / 4, Math.PI / 4, 0],
                        closed: false,
                    },
                },
            },
            springConfig: { duration: 20 },
        },
        {
            initialPause: 500,
            stateIncrements: [
                {
                    scale: [-1, -1, -1],
                    rotation: [Math.PI / 4, -Math.PI / 4, 0],
                },
            ],
            springConfig: { mass: 4, friction: 17 },
        },
    ],
};

export const SingleRepeatingAnimation = AppWrapper.bind({});
SingleRepeatingAnimation.args = {
    initialPause: 400,
    springConfig: { duration: 2000 },
    interval: 0,
    repeat: true,
    childAnimations: [
        {
            stateIncrements: [
                {
                    rotation: [0, Math.PI * 2, 0],
                },
            ],
        },
    ],
};
