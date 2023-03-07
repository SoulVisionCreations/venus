import { stylingDefaults } from '../../../../constants/defaults';
import { Alignment, AssetTypes, CameraTypes, ComponentTypes, ObjectTypes } from '../../../../types/enums';
import { ImplicitObjectProps } from '../../../../types/object3DTypes';

export const getImplicitObjectConfig = ({ position, rotation, scale }: ImplicitObjectProps) => {
    return {
        type: ComponentTypes.Container,
        alignment: Alignment.Vertical,
        assets: [{ assetId: '102', assetPath: './assets/implicit/data2', assetType: AssetTypes.Implicit }],
        children: [
            {
                type: ComponentTypes.Canvas,
                style: stylingDefaults.fullWidthFullHeightCanvas,
                camera: {
                    type: CameraTypes.Perspective,
                    position: [0, 0, 3],
                    far: 30,
                },
                assetIds: ['102'],
                objects: [
                    {
                        assetId: '102',
                        type: ObjectTypes.ImplicitObject,
                        position,
                        rotation,
                        scale,
                    },
                ],
            },
        ],
    };
};
