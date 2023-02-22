import App from "../App";
import { introTimeBasedAnimationByRotateAndScaleConfig } from "../configs/Animation/TimeBased/introTimeBasedAnimationByRotateAndScale";

// eslint-disable-next-line storybook/story-exports
export default {
    title: "Animations/Time based",
    component: App
}

export const IntroExample1 = () => {
    return <App config={introTimeBasedAnimationByRotateAndScaleConfig} />
}
