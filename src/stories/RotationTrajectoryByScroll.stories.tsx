import { RotationByBezierTrajectoryWithScaleUpConfig } from '../configs/Animation/ScrollBased/Rotation/rotationByBezierTrajectoryWithScaleUp';
import { RotationByLineTrajectoryConfig } from '../configs/Animation/ScrollBased/Rotation/rotationByLineTrajectory';
import { RotationByMultipleBezierTrajectoryWithScaleConfig } from '../configs/Animation/ScrollBased/Rotation/rotationByMultipleBezierTrajectoryWithScale';
import { RotationByMultipleLineTrajectoryConfig } from '../configs/Animation/ScrollBased/Rotation/rotationByMultipleLineTrajectory';
import { RotationByMultipleLineTrajectoryWithScaleConfig } from '../configs/Animation/ScrollBased/Rotation/rotationByMultipleLineTrajectoryWithScale';
import { AppWrapper, argTypes, defaultArgs } from './AppWrapper';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Animations/Scroll based/Rotation by defined trajectory',
    component: AppWrapper,
    argTypes: argTypes,
};

export const Example1LineTrajectory = AppWrapper.bind({});
Example1LineTrajectory.args = { ...defaultArgs, storyConfig: RotationByLineTrajectoryConfig };

export const Example2MultipleLineTrajectory = AppWrapper.bind({});
Example2MultipleLineTrajectory.args = { ...defaultArgs, storyConfig: RotationByMultipleLineTrajectoryConfig };

export const Example3MultipleLineTrajectoryWithScaleUp = AppWrapper.bind({});
Example3MultipleLineTrajectoryWithScaleUp.args = { ...defaultArgs, storyConfig: RotationByMultipleLineTrajectoryWithScaleConfig };

export const Example4BezierTrajectoryWithScaleUp = AppWrapper.bind({});
Example4BezierTrajectoryWithScaleUp.args = { ...defaultArgs, storyConfig: RotationByBezierTrajectoryWithScaleUpConfig };

export const Example5MultipleBezierTrajectoryWithScaleUp = AppWrapper.bind({});
Example5MultipleBezierTrajectoryWithScaleUp.args = { ...defaultArgs, storyConfig: RotationByMultipleBezierTrajectoryWithScaleConfig };
