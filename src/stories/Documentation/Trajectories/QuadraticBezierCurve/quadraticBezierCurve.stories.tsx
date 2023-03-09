import { Story } from '@storybook/react';
import App from '../../../../App';
import { QuadraticBezierCurve3MetaData } from '../../../../types/trajectoryTypes';
import { getQuadraticBezierCurveTrajectoryConfig } from './quadraticBezierCurveTrajectoryConfig';

// eslint-disable-next-line storybook/story-exports
const quadraticBezierCurveTrajectoryAppWrapper: Story<QuadraticBezierCurve3MetaData> = (args) => {
    const config = getQuadraticBezierCurveTrajectoryConfig(args);
    return <App config={{ ...config }} />;
};

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/Trajectories/QuadraticBezierCurve',
    component: quadraticBezierCurveTrajectoryAppWrapper,
    argTypes: {
        points: {
            control: { type: 'object' },
            description: 'Sets the three points to create the quadratic bezier curve',
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
        steps: {
            control: { type: 'number' },
            description: 'Sets the number of steps taken to complete the quadratic bezier curve trajectory',
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
                    'This is used to apply quadratic bezier curve trajectory animation to any object. For quadratic bezier curve, refer to [this](https://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif).',
            },
        },
    },
};

export const Example = quadraticBezierCurveTrajectoryAppWrapper.bind({});
Example.args = {
    points: [
        [-1, -0.5, 0],
        [1, -0.5, 0],
        [1, 0.5, 0],
    ],
    steps: 100,
    closed: true,
    equiSpacedPoints: false,
};
