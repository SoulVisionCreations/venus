import { circleConfig1 } from '../configs/Animation/Gltf/TimeBased/circleAnimation1';
import { circleConfig2 } from '../configs/Animation/Gltf/TimeBased/circleAnimation2';
import { GltfWrapper, argTypes, defaultArgs } from './GltfWrapper';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Trajectories/Circle/Gltf',
    component: GltfWrapper,
    argTypes: argTypes,
};

export const Example1 = GltfWrapper.bind({});

Example1.args = { ...defaultArgs, storyConfig: circleConfig1 };

export const Example2 = GltfWrapper.bind({});

Example2.args = { ...defaultArgs, storyConfig: circleConfig2 };
