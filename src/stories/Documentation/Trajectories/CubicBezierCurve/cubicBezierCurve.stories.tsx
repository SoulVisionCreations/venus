import { Story } from '@storybook/react';
import App from '../../../../App';
import { CubicBezierCurve3MetaData } from '../../../../types/trajectoryTypes';
import { getCubicBezierCurveTrajectoryConfig } from './cubicBezierCurveTrajectoryConfig';

// eslint-disable-next-line storybook/story-exports
const cubicBezierCurveTrajectoryAppWrapper: Story<CubicBezierCurve3MetaData> = (args) => {
    const config = getCubicBezierCurveTrajectoryConfig(args);
    return <App config={{ ...config }} />;
};

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/Trajectories/CubicBezierCurve',
    component: cubicBezierCurveTrajectoryAppWrapper,
    argTypes: {
        points: {
            control: { type: 'object' },
            description: 'Sets the four points to create the cubic bezier curve',
            table: {
                type: { summary: '[[number, number, number], [number, number, number], [number, number, number], [number, number, number]]' },
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
            description: 'Sets the number of steps taken to complete the cubic bezier curve trajectory',
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
                    'This is used to apply cubic bezier curve trajectory animation to any object. For cubic bezier curve, refer to [this](https://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg).',
            },
        },
    },
};

export const Example = cubicBezierCurveTrajectoryAppWrapper.bind({});
Example.args = {
    points: [
        [-1, -0.5, 0],
        [1, -0.5, 0],
        [1, 0.5, 0],
        [-1, 0.5, 0],
    ],
    steps: 100,
    closed: true,
    equiSpacedPoints: false,
};
