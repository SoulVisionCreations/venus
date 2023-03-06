import { Story } from '@storybook/react';
import App from '../../../../App';
import { SplineCurve3MetaData } from '../../../../types/trajectoryTypes';
import { getSplineCurveTrajectoryConfig } from './splineCurveTrajectoryConfig';

// eslint-disable-next-line storybook/story-exports
const splineCurveTrajectoryAppWrapper: Story<SplineCurve3MetaData> = (args) => {
    const config = getSplineCurveTrajectoryConfig(args);
    return <App config={{ ...config }} />;
};

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/Trajectories/SplineCurve',
    component: splineCurveTrajectoryAppWrapper,
    argTypes: {
        points: {
            control: { type: 'object' },
            description: 'Sets the three points to create the spline curve',
            table: {
                type: { summary: '[[number, number, number], [number, number, number], [number, number, number]]' },
            },
        },
        closed: {
            control: { type: 'boolean' },
            description: 'Sets whether the trajectory points form a closed loop(start Point = end Point)',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        },
        equiSpacedPoints: {
            control: { type: 'boolean' },
            description: 'Sets whether the trajectory points should be equidistant',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
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

export const Example = splineCurveTrajectoryAppWrapper.bind({});
Example.args = {
    points: [
        [-1, -0.5, 0],
        [1, -0.5, 0],
        [1, 0.5, 0],
    ],
    // steps?: number;
    closed: false,
    equiSpacedPoints: false,
};
