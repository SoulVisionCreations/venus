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
