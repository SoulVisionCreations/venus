import { PositionByBezierTrajectoryWithScaleAndRotateConfig } from '../configs/Animation/Gltf/ScrollBased/Position/positionByBezierTrajectory';
import { argTypes, defaultArgs, GltfWrapper } from './GltfWrapper';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Animations/Scroll based/Position by defined trajectory/Gltf',
    component: GltfWrapper,
    argTypes: argTypes,
};

export const Example1BezierTrajectoryWithRotationAndScale = GltfWrapper.bind({});

Example1BezierTrajectoryWithRotationAndScale.args = { ...defaultArgs, storyConfig: PositionByBezierTrajectoryWithScaleAndRotateConfig };
