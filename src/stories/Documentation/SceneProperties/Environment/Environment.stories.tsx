import { Story } from '@storybook/react';
import App from '../../../../App';
import { EnvironmentProps } from '../../../../types/types';
import { getEnvironmentConfig } from './EnvironmentConfig';

const Environment: Story<EnvironmentProps> = (args) => {
    const config = getEnvironmentConfig(args);
    return <App config={{ ...config }} />;
};

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/Scene Properties/Environment',
    component: Environment,
    argTypes: {
        files: {
            control: 'radio',
            options: [
                'brown_photostudio_02_2k.hdr',
                'old_depot_2k.hdr',
                'vestibule_2k.hdr',
                'modern_buildings_2_2k.hdr',
                'christmas_photo_studio_06_2k.hdr',
                'christmas_photo_studio_07_2k.hdr',
                'scythian_tombs_2_2k.hdr',
                'limpopo_golf_course_2k.hdr',
                'forgotten_miniland_2k.hdr',
                'lake_pier_2k.hdr',
                'dam_wall_2k.hdr',
            ],
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

export const EnvironmentExample = Environment.bind({});
EnvironmentExample.args = {
    files: 'old_depot_2k.hdr',
    ground: {
        height: 50,
        radius: 130,
    },
    background: false,
};
