import App from '../App';
import { demoConfig } from '../configs/demoConfig';
// import { textImageExample } from "../configs/textImageExample";

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Animations',
    component: App,
};

export const IntroAnimation = () => {
    return <App config={demoConfig} />;
};
