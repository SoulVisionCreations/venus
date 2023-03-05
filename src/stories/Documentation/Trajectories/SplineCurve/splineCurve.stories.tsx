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
