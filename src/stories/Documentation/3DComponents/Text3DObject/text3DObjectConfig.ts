import { stylingDefaults } from '../../../../constants/defaults';
import { Alignment, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes } from '../../../../types/enums';
import { Text3DObjectProps } from '../../../../types/object3DTypes';

export const getText3DObjectConfig = ({ text, position, rotation, scale, color }: Text3DObjectProps) => {
    return {
        type: ComponentTypes.Container,
        alignment: Alignment.Vertical,
        assets: [{ assetId: '104', assetPath: './assets/font/Inter_Bold.json', assetType: AssetTypes.Font }],
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
                assetIds: ['104'],
                objects: [
                    {
                        assetId: '104',
                        text,
                        color,
                        type: ObjectTypes.Text3D,
                        position,
                        rotation,
                        scale,
                    },
                ],
            },
        ],
    };
};
