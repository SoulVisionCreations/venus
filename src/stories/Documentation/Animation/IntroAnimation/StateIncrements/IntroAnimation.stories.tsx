import { SpringConfig } from '@react-spring/three';
import { Story } from '@storybook/react';
import App from '../../../../../App';
import { VisibilityThreshold } from '../../../../../types/animationTypes';
import { weakObject3DStateofArrays } from '../../../../../types/object3DTypes';
import { getIntroAnimationConfig } from './IntroAnimationConfig';

// eslint-disable-next-line storybook/story-exports
const AppWrapper: Story<{
    initialPause?: number;
    springConfig?: SpringConfig;
    visibilityThreshold?: VisibilityThreshold;
    stateIncrements: Array<weakObject3DStateofArrays>
}> = (args) => {
    const config = getIntroAnimationConfig(args);
    return <App config={{...config}} />;
}

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/Animations/Types/IntroAnimation/Intro animation by manual state Increments',
    component: AppWrapper,
    argTypes: {
        initialPause: {
            control: {type: 'number'},
            description: 'The animation will start after X milliseconds, if initialPause is set to X.',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '0' },
            },
        },
        springConfig: {
            control: {type: 'object'},
            description: 'Decides the nature of spring. Change the spring control to just {duration: 2000} to generate a time based Intro animation. Decrease the duration value for a faster animation and increase for a slower one.',
            table: {
                type: { summary: 'object' },
                defaultValue: { summary: '{ tension: 170, friction: 26 }' },
            },
        },
        stateIncrements: {
            control: {type: 'array'},
            description: 'An array which describes a set of increments which must be applied to the state of the object. ( Object state in defined by its position, rotation and scale ).',
            table: {
                type: { summary: 'array' },
                defaultValue: { summary: `None` },
            },
        }
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
                component: 'Intro animations are for Introducing the given entity by an animation. By defination Intro animation execute only once every time the scene associated with the given entity crosses visibility threshold while scrolling. Checkout visibility threshold documentation to know more about them'
            }
        }
    }
};

export const Example = AppWrapper.bind({});
Example.args = {
    initialPause: 400,
    springConfig: { mass: 4, friction: 17 },
    stateIncrements: [
        {
            rotation: [0, Math.PI * 2, 0],
            scale: [1.5, 1.5, 1.5],
        },
    ],
};





