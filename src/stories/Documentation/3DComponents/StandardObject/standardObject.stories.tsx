import { Story } from '@storybook/react';
import App from '../../../../App';
import { MaterialTypes, StandardGeometryTypes } from '../../../../types/enums';
import { StandardObjectProps } from '../../../../types/object3DTypes';
import { getStandardObjectConfig } from './standardObjectConfig';

const StandardObject: Story<StandardObjectProps> = (args) => {
    const config = getStandardObjectConfig(args);
    return <App config={{ ...config }} />;
};

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/3D Components/Standard Object',
    component: StandardObject,
    argTypes: {
        position: {
            control: 'object',
            description: 'Sets position of the standard object',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[0, 0, 0]' },
            },
        },
        rotation: {
            control: 'object',
            description: 'Sets rotation of the standard object',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[0, 0, 0]' },
            },
        },
        scale: {
            control: 'object',
            description: 'Sets scale of the standard object',
            table: {
                type: { summary: '[number, number, number]' },
                defaultValue: { summary: '[1, 1, 1]' },
            },
        },
        geometry: {
            control: 'object',
            descrption: 'Sets the geometry of the standard object',
            table: {
                type: { summary: '{type, otherGeometryProps(refer to https://threejs.org))}' },
            },
        },
        material: {
            control: 'object',
            descrption: 'Sets the material of the standard object',
            table: {
                type: { summary: '{type, otherMaterialProps(refer to https://threejs.org)}' },
            },
        },
        type: {
            table: {
                disable: true,
            },
        },
        assetPath: {
            table: {
                disable: true,
            },
        },
        config: {
            table: {
                disable: true,
            },
        },
        componentType: {
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
                    'This component is used to add standard THREE objects to your experience. The geometry and material can be selected from already existing THREE geometries and materials. Specific properties and their default values for each geometry and material can be found on [three.js docs](https://threejs.org/docs/). **Animations can be applied to Standard Objects**',
            },
        },
        viewMode: 'docs',
    },
};

export const StandardObjectExample = StandardObject.bind({});
StandardObjectExample.args = {
    position: [0, 0, 0],
    rotation: [Math.PI / 5, Math.PI / 5, 0],
    scale: [1, 1, 1],
    geometry: {
        type: StandardGeometryTypes.BoxGeometry,
    },
    material: {
        type: MaterialTypes.MeshStandardMaterial,
        color: 'pink',
    },
};
