import { Story } from '@storybook/react';
import App from '../../../../App';
import { MeshObjectProps } from '../../../../types/object3DTypes';
import { getMeshObjectConfig } from './meshObjectConfig';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/3D Components/MeshObject',
    component: App,
    argTypes: {
        position: {
            control: 'object',
            description: 'Sets position of the mesh object',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[0, 0, 0]' },
            },
        },
        rotation: {
            control: 'object',
            description: 'Sets rotation of the mesh object',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[0, 0, 0]' },
            },
        },
        scale: {
            control: 'object',
            description: 'Sets scale of the mesh object',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[1, 1, 1]' },
            },
        },
        type: {
            table: {
                disable: true,
            },
        },
        assetId: {
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
                    'This component is used to add mesh(gltf, glb, obj) objects to your experience. Mesh objects can either be uploaded, provided a link to or selected from existing mesh options on the config generator UI',
            },
        },
        viewMode: 'docs',
    },
};

const MeshObject: Story<MeshObjectProps> = ({ ...args }) => {
    const config = getMeshObjectConfig(args);
    return <App config={{ ...config }} />;
};

export const GltfMeshObject = MeshObject.bind({});
GltfMeshObject.args = {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    assetId: '101',
};

export const ObjMeshObject = MeshObject.bind({});
ObjMeshObject.args = {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    assetId: '103',
};
