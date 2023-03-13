import { Story } from '@storybook/react';
import App from '../../../../App';
import { TrajectoryTypes } from '../../../../types/enums';
import { MultipleCurve3MetaData } from '../../../../types/trajectoryTypes';
import { getSplineCurveTrajectoryConfig } from './multipleCurveTrajectoryConfig';

// eslint-disable-next-line storybook/story-exports
const multipleCurveTrajectoryAppWrapper: Story<MultipleCurve3MetaData> = (args) => {
    const config = getSplineCurveTrajectoryConfig(args);
    return <App config={{ ...config }} />;
};

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/Trajectories/MultipleCurve',
    component: multipleCurveTrajectoryAppWrapper,
    argTypes: {
        curves: {
            control: { type: 'object' },
            description: 'Sets the curves for the multiple curve trajectory. Each curve can be instance of any other curve discussed(circle, ellipse, straightline, bezier or spline)',
            table: {
                type: { summary: '[curve, curve, ..]' },
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
            description: 'Sets the number of steps taken to complete the multiple curve trajectory',
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
                    'This is used to combine multiple curves to form a custom trajectory. Any combination of other mentiond curves**(circle, ellipse, straightline, bezier or spline)** can be chained together using this trajectory.',
            },
        },
    },
};

export const Example = multipleCurveTrajectoryAppWrapper.bind({});
Example.args = {
    curves: [
        {
            type: TrajectoryTypes.line3D,
            startPoint: [-1, 0, 0],
            endPoint: [1, 0, 0],
        },
        {
            type: TrajectoryTypes.quadracticBezierCurve3,
            points: [
                [1, 0, 0],
                [1, 0.5, 0],
                [0, 0.5, 0],
            ],
        },
    ],
    steps: 100,
    closed: true,
    equiSpacedPoints: true,
};
