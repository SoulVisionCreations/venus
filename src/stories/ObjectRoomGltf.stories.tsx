import { GltfinRoomConfig } from '../configs/Object/GltfinRoomConfig';
import { argTypes, defaultArgs, GltfWrapper } from './GltfWrapper';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Object in Room/Gltf',
    component: GltfWrapper,
    argTypes: argTypes,
};

export const Example1 = GltfWrapper.bind({});

Example1.args = { ...defaultArgs, storyConfig: GltfinRoomConfig };
