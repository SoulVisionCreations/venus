import { SpringConfig } from '@react-spring/three';
import { Story } from '@storybook/react';
import App from '../../../../../App';
import { AnimationTrajectory, VisibilityThreshold } from '../../../../../types/animationTypes';
import { Trajectory } from '../../../../../types/enums';
import { getIntroAnimationConfig } from './IntroAnimationConfig';

// eslint-disable-next-line storybook/story-exports
const AppWrapper: Story<{
    initialPause?: number;
    springConfig?: SpringConfig;
    visibilityThreshold?: VisibilityThreshold;
    animationTrajectories: AnimationTrajectory;
    trajectorySteps?: number
}> = (args) => {
    const config = getIntroAnimationConfig(args);
    return <App config={{...config}} />;
}

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/Animations/Types/IntroAnimation/Intro animation by trajectory',
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
            description: 'Decides the nature of spring. For trajectory based intro animations, you can only use duration based springs. The total animation time is duration*trajectorySteps.',
            table: {
                type: { summary: 'object' },
                defaultValue: { summary: '{ duration: 20 }' },
            },
        },
        animationTrajectories: {
            control: {type: 'object'},
            description: 'An object which describes the trajectory to be traversed. Trajectory can be applied to any or all of state properties, which are - ( Position, Rotation and Scale ). Checkout trajectory documentation to understand more about trajectories.',
            table: {
                type: { summary: 'object' },
                defaultValue: { summary: `None` },
            },
        },
        trajectorySteps: {
            control: {type: 'number'},
            description: 'The number of steps each trajectory should be divided into.',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '100' },
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
    initialPause: 0,
    springConfig: { duration: 20 },
    animationTrajectories: {
        position: {
            trajectoryMetaData: {
                type: Trajectory.quadracticBezierCurve3,
                points: [
                    [0, -30, -50],
                    [0, 10, -15],
                    [0, 0, 0],
                ],
                equiSpacedPoints: true,
            },
        },
        rotation: {
            trajectoryMetaData: {
                type: Trajectory.line3,
                startPoint: [0, 0, 0],
                endPoint: [Math.PI/12, 4*Math.PI, 0]
            }
        },
        scale: {
            trajectoryMetaData: {
                type: Trajectory.line3,
                startPoint: [0.25, 0.25, 0.25],
                endPoint: [1.25, 1.25, 1.25]
            }
        }
    },
    trajectorySteps: 100
};

