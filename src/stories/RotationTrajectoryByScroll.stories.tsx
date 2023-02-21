import App from "../App";
import { RotationByBezierTrajectoryWithScaleUpConfig } from "../configs/Animation/ScrollBased/Rotation/rotationByBezierTrajectoryWithScaleUp";
import { RotationByLineTrajectoryConfig } from "../configs/Animation/ScrollBased/Rotation/rotationByLineTrajectory";
import { RotationByMultipleBezierTrajectoryWithScaleConfig } from "../configs/Animation/ScrollBased/Rotation/rotationByMultipleBezierTrajectoryWithScale";
import { RotationByMultipleLineTrajectoryConfig } from "../configs/Animation/ScrollBased/Rotation/rotationByMultipleLineTrajectory";
import { RotationByMultipleLineTrajectoryWithScaleConfig } from "../configs/Animation/ScrollBased/Rotation/rotationByMultipleLineTrajectoryWithScale";

// eslint-disable-next-line storybook/story-exports
export default {
    title: "Animations/Scroll based/Rotation by defined trajectory",
    component: App
}

export const Example1LineTrajectory = () => {
    return <App config={RotationByLineTrajectoryConfig} />
}

export const Example2MultipleLineTrajectory = () => {
    return <App config={RotationByMultipleLineTrajectoryConfig} />
}

export const Example3MultipleLineTrajectoryWithScaleUp = () => {
    return <App config={RotationByMultipleLineTrajectoryWithScaleConfig} />
}

export const Example4BezierTrajectoryWithScaleUp = () => {
    return <App config={RotationByBezierTrajectoryWithScaleUpConfig} />
}

export const Example5MultipleBezierTrajectoryWithScaleUp = () => {
    return <App config={RotationByMultipleBezierTrajectoryWithScaleConfig} />
}