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
    // rotationZ?: number;
    // steps?: number;
    // equiSpacedPoints?: boolean;
};
