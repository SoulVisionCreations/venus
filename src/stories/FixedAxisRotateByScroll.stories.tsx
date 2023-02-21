import { RotateOnScrollAlongFixedAxisConfig } from '../configs/Animation/ScrollBased/Rotation/rotateOnScrollAlongFixedAxis';
import { AppWrapper, argTypes, defaultArgs } from './AppWrapper';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Animations/Scroll based/Rotating on fixed axis',
    component: AppWrapper,
    argTypes: argTypes,
};

export const Example1 = AppWrapper.bind({});

Example1.args = { ...defaultArgs, storyConfig: RotateOnScrollAlongFixedAxisConfig };
