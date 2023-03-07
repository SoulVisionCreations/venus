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
            description: 'Sets the points to create the spline curve',
            table: {
                type: { summary: '[[number, number, number], [number, number, number], ..]' },
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
        steps: {
            control: { type: 'number' },
            description: 'Sets the number of steps taken to complete the spline curve trajectory',
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
        docs: {
            description: {
                component:
                    'This is used to apply spline curve trajectory animation to any object. For spline curve, refer to [this](https://en.wikipedia.org/wiki/Spline_%28mathematics%29#/media/File:Parametic_Cubic_Spline.svg).',
            },
        },
    },
};

export const Example = splineCurveTrajectoryAppWrapper.bind({});
Example.args = {
    points: [
        [-1, -0.5, 0],
        [0, -0.5, 0],
        [1, 0, 0],
        [1, 0.5, 0],
    ],
    steps: 100,
    closed: false,
    equiSpacedPoints: false,
};
