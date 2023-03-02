import { Story } from '@storybook/react';
import App from '../../../../App';
import { getCircleTrajectoryConfig } from './circleTrajectoryConfig';

// eslint-disable-next-line storybook/story-exports
const circleTrajectoryAppWrapper: Story<{clockwise: boolean, center: number[]}> = (args) => {
    const config = getCircleTrajectoryConfig(args.clockwise, args.center);
    return <App config={{...config}} />;
}

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/Trajectories/Circle',
    component: circleTrajectoryAppWrapper,
    argTypes: {
        clockwise: {
            control: {type: 'boolean'},
            description: 'Decides direction of generated points to be clockwise/anti-clockwise',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
        },
        center: {
            control: {type: 'object'},
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
    }
};

export const Example = circleTrajectoryAppWrapper.bind({});
Example.args = {
    clockwise: true,
    center: [0, 0, 0]
};

