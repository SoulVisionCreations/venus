import { stylingDefaults } from '../../../../constants/defaults';
import { Alignment, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes } from '../../../../types/enums';
import { MeshObjectProps } from '../../../../types/object3DTypes';

export const getMeshObjectConfig = ({ assetId, position, rotation, scale }: MeshObjectProps) => {
    return {
        type: ComponentTypes.Container,
        alignment: Alignment.Vertical,
        assets: [
            { assetId: '101', assetPath: 'scene.glb', assetType: AssetTypes.Mesh },
            { assetId: '103', assetPath: 'objexp/', assetType: AssetTypes.Mesh },
        ],
        children: [
            {
                type: ComponentTypes.Canvas,
                style: stylingDefaults.fullWidthFullHeightCanvas,
                camera: {
                    type: CameraTypes.Perspective,
                    position: [0, 0, 3],
                    far: 30,
                },
                lights: [
                    {
                        type: LightTypes.Ambient,
                        intensity: 1,
                    },
                    {
                        type: LightTypes.Directional,
                        intensity: 2,
                    },
                ],
                environment: {
                    files: 'puresky.hdr',
                },
                assetIds: ['101', '103'],
                objects: [
                    {
                        assetId,
                        type: ObjectTypes.MeshObject,
                        position,
                        rotation,
                        scale,
                    },
                ],
            },
        ],
    };
};
