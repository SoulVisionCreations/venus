import App from "../App";
import { PositionByBezierTrajectoryWithScaleAndRotateConfig } from "../configs/Animation/ScrollBased/Position/positionByBezierTrajectory";

// eslint-disable-next-line storybook/story-exports
export default {
    title: "Animations/Scroll based/Position by defined trajectory",
    component: App
}

export const Example1BezierTrajectoryWithRotationAndScale = () => {
    return <App config={PositionByBezierTrajectoryWithScaleAndRotateConfig} />
}
