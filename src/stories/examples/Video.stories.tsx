import App from '../../App';
import { videoConfig1 } from '../../configs/Video/videoConfig';
import { videoConfig2 } from '../../configs/Video/videoConfig2';
import { videoConfig3 } from '../../configs/Video/videoConfig3';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Video Frames',
    component: App,
};

export const Example1 = () => {
    return <App config={videoConfig1} />;
};

export const Example2 = () => {
    return <App config={videoConfig2} />;
};

export const Example3 = () => {
    return <App config={videoConfig3} />;
};
