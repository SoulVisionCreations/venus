import { ellipseConfig } from '../configs/Animation/TimeBased/ellipseAnimation';
import { ellipse2Config } from '../configs/Animation/TimeBased/ellipseAnimation2';
import { ellipse3Config } from '../configs/Animation/TimeBased/ellipseAnimation3';
import { AppWrapper, argTypes, defaultArgs } from './AppWrapper';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Trajectories/Ellipse',
    component: AppWrapper,
    argTypes: argTypes,
};

export const Example1 = AppWrapper.bind({});

Example1.args = { ...defaultArgs, storyConfig: ellipseConfig };

export const Example2 = AppWrapper.bind({});

Example2.args = { ...defaultArgs, storyConfig: ellipse2Config };

export const Example3 = AppWrapper.bind({});

Example3.args = { ...defaultArgs, storyConfig: ellipse3Config };
