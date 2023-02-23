import { ImplicitinRoomConfig } from '../configs/Object/ImplicitinRoomConfig';
import { AppWrapper, argTypes, defaultArgs } from './AppWrapper';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Object in Room/Implicit',
    component: AppWrapper,
    argTypes: argTypes,
};

export const Example1 = AppWrapper.bind({});

Example1.args = { ...defaultArgs, storyConfig: ImplicitinRoomConfig };
