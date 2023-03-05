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

export const Example = cubicBezierCurveTrajectoryAppWrapper.bind({});
Example.args = {
    points: [
        [-1, -0.5, 0],
        [1, -0.5, 0],
        [1, 0.5, 0],
        [-1, 0.5, 0],
    ],
    // steps?: number;
    closed: false,
    equiSpacedPoints: false,
};
