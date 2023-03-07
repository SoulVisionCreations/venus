import { Story } from '@storybook/react';
import App from '../../../../App';
import { ImplicitObjectProps } from '../../../../types/object3DTypes';
import { getImplicitObjectConfig } from './imlicitObjectConfig';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/3D Components/ImplicitObject',
    component: App,
    argTypes: {
        position: {
            control: 'object',
            description: 'Sets position of the implicit object',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[0, 0, 0]' },
            },
        },
        rotation: {
            control: 'object',
            description: 'Sets rotation of the implicit object',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[0, 0, 0]' },
            },
        },
        scale: {
            control: 'object',
            description: 'Sets scale of the implicit object',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[1, 1, 1]' },
            },
        },
        config: {
            table: {
                disable: true,
            },
        },
    },
    parameters: {
        previewTabs: {
            canvas: {
                hidden: true,
            },
        },
        docs: {
            description: {
                component:
                    'This component is used to add implicit objects to your experience. Implicit objects can either be uploaded, provided a link to or selected from existing implicit options on the config generator UI',
            },
        },
        viewMode: 'docs',
    },
};

const ImplicitObject: Story<ImplicitObjectProps> = ({ ...args }) => {
    const config = getImplicitObjectConfig(args);
    return <App config={{ ...config }} />;
};

export const ImplicitObjectExample = ImplicitObject.bind({});
ImplicitObjectExample.args = {
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, Math.PI],
    scale: [1, 1, 1],
};
