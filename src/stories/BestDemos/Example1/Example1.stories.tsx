import App from '../../../App';
import { example1Config } from './example1Config';


// eslint-disable-next-line storybook/story-exports
export default {
    title: 'BestDemos/Example1',
    component: App,
};

export const Example1 = () => {
    return <App config={example1Config} />
}