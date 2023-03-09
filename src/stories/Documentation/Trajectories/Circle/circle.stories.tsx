import { Story } from '@storybook/react';
import App from '../../../../App';
import { CircleMetaData } from '../../../../types/trajectoryTypes';
import { getCircleTrajectoryConfig } from './circleTrajectoryConfig';

// eslint-disable-next-line storybook/story-exports
const circleTrajectoryAppWrapper: Story<CircleMetaData> = (args) => {
    const config = getCircleTrajectoryConfig(args);
    return <App config={{ ...config }} />;
};

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/Trajectories/Circle',
    component: circleTrajectoryAppWrapper,
    argTypes: {
        clockwise: {
            control: { type: 'boolean' },
            description: 'Decides direction of generated points to be clockwise/anti-clockwise',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
        },
        center: {
            control: { type: 'object' },
            description: 'Sets center of the circle',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[0, 0, 0]' },
            },
        },
        radius: {
            control: { type: 'number' },
            description: 'Sets radius of the circle',
            table: {
                type: { summary: 'number' },
            },
        },
        rotateCurve: {
            control: { type: 'object' },
            description: 'Sets the axis and angle in radians around which the circle trajectory be created',
            table: {
                type: { summary: 'object' },
            },
        },
        rotationZ: {
            control: { type: 'number' },
            description: 'Sets the rotation angle of the circle in radians, counterclockwise from the positive X axis',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0 },
            },
        },
        steps: {
            control: { type: 'number' },
            description: 'Sets the number of steps taken to complete the circle trajectory',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 100 },
            },
        },
        equiSpacedPoints: {
            control: { type: 'boolean' },
            description: 'Sets whether the trajectory points should be equidistant',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: true },
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
                component: 'This is used to apply circle trajectory animation to any object.',
            },
        },
        viewMode: 'docs',
    },
};

export const Example = circleTrajectoryAppWrapper.bind({});
Example.args = {
    clockwise: true,
    center: [0, 0, 0],
    radius: 0.5,
    rotateCurve: [
        {
            axis: [1, 0, 0],
            angle: 0,
        },
    ],
    rotationZ: 0,
    steps: 100,
    equiSpacedPoints: true,
};
