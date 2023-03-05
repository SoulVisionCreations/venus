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

export const Example = quadraticBezierCurveTrajectoryAppWrapper.bind({});
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
