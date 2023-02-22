import { circleConfig1 } from '../configs/Animation/Implicit/TimeBased/circleAnimation1';
import { circleConfig2 } from '../configs/Animation/Implicit/TimeBased/circleAnimation2';
import { AppWrapper, argTypes, defaultArgs } from './AppWrapper';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Trajectories/Circle/Implicit',
    component: AppWrapper,
    argTypes: argTypes,
};

export const Example1 = AppWrapper.bind({});

Example1.args = { ...defaultArgs, storyConfig: circleConfig1 };

export const Example2 = AppWrapper.bind({});

Example2.args = { ...defaultArgs, storyConfig: circleConfig2 };
