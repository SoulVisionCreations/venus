import { Story } from '@storybook/react';
import App from '../../../../App';
import { MaterialTypes, StandardGeometryTypes } from '../../../../types/enums';
import { StandardObjectProps } from '../../../../types/object3DTypes';
import { getStandardObjectConfig } from './standardObjectConfig';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Documentation/3D Components/Standard Object',
    component: App,
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
                type: { summary: '{type, otherGeometryProps}' },
            },
        },
        material: {
            control: 'object',
            descrption: 'Sets the material of the standard object',
            table: {
                type: { summary: '{type, otherMaterialProps}' },
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
        viewMode: 'docs',
    },
};

const StandardObject: Story<StandardObjectProps> = ({ ...args }) => {
    const config = getStandardObjectConfig(args);
    return <App config={{ ...config }} />;
};

export const StandardObjectExample = StandardObject.bind({});
StandardObjectExample.args = {
    position: [0, 0, 0],
    rotation: [Math.PI/5, Math.PI/5, 0],
    scale: [1, 1, 1],
    geometry: {
        type: StandardGeometryTypes.BoxGeometry
    },
    material: {
        type: MaterialTypes.MeshStandardMaterial,
        color: 'pink',
    }
};
