import App from "../App";
import { RotateOnScrollAlongFixedAxisConfig } from "../configs/Animation/ScrollBased/Rotation/rotateOnScrollAlongFixedAxis";

// eslint-disable-next-line storybook/story-exports
export default {
    title: "Animations/Scroll based/Rotating on fixed axis",
    component: App
}

export const Example1 = () => {
    return <App config={RotateOnScrollAlongFixedAxisConfig} />
}
