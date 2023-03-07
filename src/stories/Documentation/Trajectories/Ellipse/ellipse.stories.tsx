import { Story } from '@storybook/react';
import App from '../../../../App';
import { EllipseMetaData } from '../../../../types/trajectoryTypes';
import { getEllipseTrajectoryConfig } from './ellipseTrajectoryConfig';

// eslint-disable-next-line storybook/story-exports
const ellipseTrajectoryAppWrapper: Story<EllipseMetaData> = (args) => {
    const config = getEllipseTrajectoryConfig(args);
    return <App config={{ ...config }} />;
};

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/Trajectories/Ellipse',
    component: ellipseTrajectoryAppWrapper,
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
            description: 'Sets center of the ellipse',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[0, 0, 0]' },
            },
        },
        height: {
            control: { type: 'number' },
            description: 'Sets the height of the ellipse',
            table: {
                type: { summary: 'number' },
            },
        },
        width: {
            control: { type: 'number' },
            description: 'Sets the width of the ellipse',
            table: {
                type: { summary: 'number' },
            },
        },
        rotateCurve: {
            control: { type: 'object' },
            description: 'Sets the axis and angle around which the ellipse trajectory be created',
            table: {
                type: { summary: 'object' },
                defaultValue: { summary: '{ axis: [1,0,0], angle: 0 }' },
            },
        },
        rotationZ: {
            control: { type: 'number' },
            description: 'Sets the rotation angle of the ellipse in radians, counterclockwise from the positive X axis',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0 },
            },
        },
        steps: {
            control: { type: 'number' },
            description: 'Sets the number of steps taken to complete the ellipse trajectory',
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
        viewMode: 'docs',
        docs: {
            description: {
                component: 'This is used to apply ellipse trajectory animation to any object.',
            },
        },
    },
};

export const Example = ellipseTrajectoryAppWrapper.bind({});
Example.args = {
    clockwise: true,
    center: [0, 0, 0],
    rotateCurve: [
        {
            axis: [1, 0, 0],
            angle: 0,
        },
    ],
    height: 0.75,
    width: 2,
    rotationZ: 0,
    steps: 100,
    equiSpacedPoints: true,
};
