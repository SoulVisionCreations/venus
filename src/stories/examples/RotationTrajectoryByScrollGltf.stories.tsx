import { RotationByBezierTrajectoryWithScaleUpConfig } from '../../configs/Animation/Gltf/ScrollBased/Rotation/rotationByBezierTrajectoryWithScaleUp';
import { RotationByLineTrajectoryConfig } from '../../configs/Animation/Gltf/ScrollBased/Rotation/rotationByLineTrajectory';
import { RotationByMultipleBezierTrajectoryWithScaleConfig } from '../../configs/Animation/Gltf/ScrollBased/Rotation/rotationByMultipleBezierTrajectoryWithScale';
import { RotationByMultipleLineTrajectoryConfig } from '../../configs/Animation/Gltf/ScrollBased/Rotation/rotationByMultipleLineTrajectory';
import { RotationByMultipleLineTrajectoryWithScaleConfig } from '../../configs/Animation/Gltf/ScrollBased/Rotation/rotationByMultipleLineTrajectoryWithScale';
import { argTypes, defaultArgs, GltfWrapper } from './utils/GltfWrapper';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Animations/Scroll based/Rotation by defined trajectory/Gltf',
    component: GltfWrapper,
    argTypes: argTypes,
};

export const Example1LineTrajectory = GltfWrapper.bind({});
Example1LineTrajectory.args = { ...defaultArgs, storyConfig: RotationByBezierTrajectoryWithScaleUpConfig };

export const Example2MultipleLineTrajectory = GltfWrapper.bind({});
Example2MultipleLineTrajectory.args = { ...defaultArgs, storyConfig: RotationByLineTrajectoryConfig };

export const Example3MultipleLineTrajectoryWithScaleUp = GltfWrapper.bind({});
Example3MultipleLineTrajectoryWithScaleUp.args = { ...defaultArgs, storyConfig: RotationByMultipleBezierTrajectoryWithScaleConfig };

export const Example4BezierTrajectoryWithScaleUp = GltfWrapper.bind({});
Example4BezierTrajectoryWithScaleUp.args = { ...defaultArgs, storyConfig: RotationByMultipleLineTrajectoryConfig };

export const Example5MultipleBezierTrajectoryWithScaleUp = GltfWrapper.bind({});
Example5MultipleBezierTrajectoryWithScaleUp.args = { ...defaultArgs, storyConfig: RotationByMultipleLineTrajectoryWithScaleConfig };
