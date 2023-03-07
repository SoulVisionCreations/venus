import { RotationByBezierTrajectoryWithScaleUpConfig } from '../../configs/Animation/Implicit/ScrollBased/Rotation/rotationByBezierTrajectoryWithScaleUp';
import { RotationByLineTrajectoryConfig } from '../../configs/Animation/Implicit/ScrollBased/Rotation/rotationByLineTrajectory';
import { RotationByMultipleBezierTrajectoryWithScaleConfig } from '../../configs/Animation/Implicit/ScrollBased/Rotation/rotationByMultipleBezierTrajectoryWithScale';
import { RotationByMultipleLineTrajectoryConfig } from '../../configs/Animation/Implicit/ScrollBased/Rotation/rotationByMultipleLineTrajectory';
import { RotationByMultipleLineTrajectoryWithScaleConfig } from '../../configs/Animation/Implicit/ScrollBased/Rotation/rotationByMultipleLineTrajectoryWithScale';
import { AppWrapper, argTypes, defaultArgs } from './utils/AppWrapper';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Animations/Scroll based/Rotation by defined trajectory/Implicit',
    component: AppWrapper,
    argTypes: argTypes,
};

export const Example1LineTrajectory = AppWrapper.bind({});
Example1LineTrajectory.args = { ...defaultArgs, storyConfig: RotationByBezierTrajectoryWithScaleUpConfig };

export const Example2MultipleLineTrajectory = AppWrapper.bind({});
Example2MultipleLineTrajectory.args = { ...defaultArgs, storyConfig: RotationByLineTrajectoryConfig };

export const Example3MultipleLineTrajectoryWithScaleUp = AppWrapper.bind({});
Example3MultipleLineTrajectoryWithScaleUp.args = { ...defaultArgs, storyConfig: RotationByMultipleBezierTrajectoryWithScaleConfig };

export const Example4BezierTrajectoryWithScaleUp = AppWrapper.bind({});
Example4BezierTrajectoryWithScaleUp.args = { ...defaultArgs, storyConfig: RotationByMultipleLineTrajectoryConfig };

export const Example5MultipleBezierTrajectoryWithScaleUp = AppWrapper.bind({});
Example5MultipleBezierTrajectoryWithScaleUp.args = { ...defaultArgs, storyConfig: RotationByMultipleLineTrajectoryWithScaleConfig };
