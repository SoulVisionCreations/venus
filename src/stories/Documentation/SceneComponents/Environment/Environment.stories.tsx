import { Story } from '@storybook/react';
import App from '../../../../App';
import { EnvironmentProps } from '../../../../types/types';
import { getEnvironmentConfig } from './EnvironmentConfig';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/Scene Components/Environment',
    component: App,
    argTypes: {
        files: {
            control: 'radio',
            options: ['brown_photostudio_02_2k.hdr', 'old_depot_2k.hdr'],
            description: 'Sets the environment file(s) path(HDRI or cubemap)',
            table: {
                type: { summary: 'text' },
                defaultValue: { summary: '"none"' },
            },
        },
        ground: {
            control: 'object',
            description: 'Sets whether the object should be placed on ground of an enironment map applied as a sphere. It has two properties: ground and radius',
            table: {
                type: { summary: 'object' },
                defaultValue: { summary: '"none"' },
            },
        },
        background: {
            control: 'boolean',
            description: 'Sets whether the enironment map be applied to the background of the scene',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
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
                component: 'This component is used to add environment maps to your experience. Environment maps can be applied as background, ground or just environment lights.',
            },
        },
    },
};

const Environment: Story<EnvironmentProps> = ({ ...args }) => {
    const config = getEnvironmentConfig(args);
    return <App config={{ ...config }} />;
};

export const EnvironmentExample = Environment.bind({});
EnvironmentExample.args = {
    files: 'old_depot_2k.hdr',
    ground: {
        height: 50,
        radius: 130,
    },
    background: false,
};
