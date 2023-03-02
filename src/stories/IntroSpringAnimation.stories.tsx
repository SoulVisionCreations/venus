import { introSpringAnimationByRotateAndScaleConfig } from '../configs/Animation/Implicit/SpringBased/introSpringAnimationByRotateAndScale';
import { AppWrapper, argTypes, defaultArgs } from './AppWrapper';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Animations/Spring based/Implicit',
    component: AppWrapper,
    argTypes: argTypes,
};

export const IntroExample1 = AppWrapper.bind({});

IntroExample1.args = { ...defaultArgs, storyConfig: introSpringAnimationByRotateAndScaleConfig };
