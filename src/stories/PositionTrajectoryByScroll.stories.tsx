import { PositionByBezierTrajectoryWithScaleAndRotateConfig } from '../configs/Animation/Implicit/ScrollBased/Position/positionByBezierTrajectory';
import { AppWrapper, argTypes, defaultArgs } from './AppWrapper';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Animations/Scroll based/Position by defined trajectory/Implicit',
    component: AppWrapper,
    argTypes: argTypes,
};

export const Example1BezierTrajectoryWithRotationAndScale = AppWrapper.bind({});

Example1BezierTrajectoryWithRotationAndScale.args = { ...defaultArgs, storyConfig: PositionByBezierTrajectoryWithScaleAndRotateConfig };
