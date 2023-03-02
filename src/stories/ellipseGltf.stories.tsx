import { ellipseConfig } from '../configs/Animation/Gltf/TimeBased/ellipseAnimation';
import { ellipse2Config } from '../configs/Animation/Gltf/TimeBased/ellipseAnimation2';
import { ellipse3Config } from '../configs/Animation/Gltf/TimeBased/ellipseAnimation3';
import { argTypes, defaultArgs, GltfWrapper } from './GltfWrapper';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Trajectories/Ellipse/Gltf',
    component: GltfWrapper,
    argTypes: argTypes,
};

export const Example1 = GltfWrapper.bind({});

Example1.args = { ...defaultArgs, storyConfig: ellipseConfig };

export const Example2 = GltfWrapper.bind({});

Example2.args = { ...defaultArgs, storyConfig: ellipse2Config };

export const Example3 = GltfWrapper.bind({});

Example3.args = { ...defaultArgs, storyConfig: ellipse3Config };
