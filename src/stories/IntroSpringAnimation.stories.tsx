import App from "../App";
import { introSpringAnimationByRotateAndScaleConfig } from "../configs/Animation/SpringBased/introSpringAnimationByRotateAndScale";

// eslint-disable-next-line storybook/story-exports
export default {
    title: "Animations/Spring based",
    component: App
}

export const IntroExample1 = () => {
    return <App config={introSpringAnimationByRotateAndScaleConfig} />
}
