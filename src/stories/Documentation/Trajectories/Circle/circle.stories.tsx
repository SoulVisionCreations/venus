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
            description: 'Sets the axis and angle around which the circle trajectory be created',
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
    // rotationZ?: number;
    // steps?: number;
    // equiSpacedPoints?: boolean;
};
