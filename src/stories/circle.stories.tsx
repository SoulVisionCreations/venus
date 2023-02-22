import App from "../App";
import { circleConfig1 } from "../configs/Animation/TimeBased/circleAnimation1";
import { circleConfig2 } from "../configs/Animation/TimeBased/circleAnimation2";

// eslint-disable-next-line storybook/story-exports
export default {
    title: "Trajectories/Circle",
    component: App
}

export const Example1 = () => {
    return <App config={circleConfig1} />
}

export const Example2 = () => {
    return <App config={circleConfig2} />
}
