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
        },
        background: {
            control: 'boolean',
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
