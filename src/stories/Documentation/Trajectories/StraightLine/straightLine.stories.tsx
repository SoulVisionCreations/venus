import { Story } from '@storybook/react';
import App from '../../../../App';
import { lineCurve3MetaData } from '../../../../types/trajectoryTypes';
import { getStraightLineTrajectoryConfig } from './straightLineTrajectoryConfig';

// eslint-disable-next-line storybook/story-exports
const straightLineTrajectoryAppWrapper: Story<lineCurve3MetaData> = (args) => {
    const config = getStraightLineTrajectoryConfig(args);
    return <App config={{ ...config }} />;
};

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/Trajectories/StraightLine',
    component: straightLineTrajectoryAppWrapper,
    argTypes: {
        startPoint: {
            control: { type: 'object' },
            description: 'Sets start point of the straight line',
            table: {
                type: { summary: '[number, number, number]' },
            },
        },
        endPoint: {
            control: { type: 'object' },
            description: 'Sets end point of the straight line',
            table: {
                type: { summary: '[number, number, number]' },
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

export const Example = straightLineTrajectoryAppWrapper.bind({});
Example.args = {
    startPoint: [-1, 0, 0],
    endPoint: [1, 0, 0],
    // steps?: number;
    // equiSpacedPoints?: boolean;
};
