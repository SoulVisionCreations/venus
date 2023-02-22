import { RotateOnScrollAlongFixedAxisConfig } from '../configs/Animation/Gltf/ScrollBased/Rotation/rotateOnScrollAlongFixedAxis';
import { GltfWrapper, argTypes, defaultArgs } from './GltfWrapper';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Animations/Scroll based/Rotating on fixed axis/Gltf',
    component: GltfWrapper,
    argTypes: argTypes,
};

export const Example1 = GltfWrapper.bind({});

Example1.args = { ...defaultArgs, storyConfig: RotateOnScrollAlongFixedAxisConfig };
