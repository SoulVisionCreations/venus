import { introTimeBasedAnimationByRotateAndScaleConfig } from '../configs/Animation/TimeBased/introTimeBasedAnimationByRotateAndScale';
import { AppWrapper, argTypes, defaultArgs } from './AppWrapper';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Animations/Time based',
    component: AppWrapper,
    argTypes: argTypes,
};

export const IntroExample1 = AppWrapper.bind({});

IntroExample1.args = { ...defaultArgs, storyConfig: introTimeBasedAnimationByRotateAndScaleConfig };
