import { introSpringAnimationByRotateAndScaleConfig } from '../../configs/Animation/Gltf/SpringBased/introSpringAnimationByRotateAndScale';
import { argTypes, defaultArgs, GltfWrapper } from './utils/GltfWrapper';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Animations/Spring based/Gltf',
    component: GltfWrapper,
    argTypes: argTypes,
};

export const IntroExample1 = GltfWrapper.bind({});

IntroExample1.args = { ...defaultArgs, storyConfig: introSpringAnimationByRotateAndScaleConfig };
