import App from "../App";
import { ellipseConfig } from "../configs/Animation/TimeBased/ellipseAnimation";
import { ellipse2Config } from "../configs/Animation/TimeBased/ellipseAnimation2";
import { ellipse3Config } from "../configs/Animation/TimeBased/ellipseAnimation3";

// eslint-disable-next-line storybook/story-exports
export default {
    title: "Trajectories/Ellipse",
    component: App
}

export const Example1 = () => {
    return <App config={ellipseConfig} />
}

export const Example2RotatedEllipse = () => {
    return <App config={ellipse2Config} />
}

export const Example3RotatingAndScalingObject = () => {
    return <App config={ellipse3Config} />
}
