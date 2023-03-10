import { introTimeBasedAnimationByRotateAndScaleConfig } from '../../configs/Animation/Gltf/TimeBased/introTimeBasedAnimationByRotateAndScale';
import { argTypes, defaultArgs, GltfWrapper } from './utils/GltfWrapper';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Animations/Time based',
    component: GltfWrapper,
    argTypes: argTypes,
};

export const IntroExample1 = GltfWrapper.bind({});

IntroExample1.args = { ...defaultArgs, storyConfig: introTimeBasedAnimationByRotateAndScaleConfig };
