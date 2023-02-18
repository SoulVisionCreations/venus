import App from "../App";
import { RotateOnScrollConfig } from "../configs/Animation/rotateOnScrollAlongFixedAxis";

// eslint-disable-next-line storybook/story-exports
export default {
    title: "Scroll Based Animations",
    component: App
}

export const RotatingOnFixedAxisOnScroll = () => {
    return <App config={RotateOnScrollConfig} />
}
