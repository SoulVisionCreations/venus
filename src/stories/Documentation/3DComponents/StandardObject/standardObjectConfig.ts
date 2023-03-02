import { stylingDefaults } from '../../../../constants/defaults';
import { Alignment, CameraTypes, ComponentTypes, LightTypes, ObjectTypes } from '../../../../types/enums';
import { StandardObjectProps } from '../../../../types/object3DTypes';

export const getStandardObjectConfig = ({ position, rotation, scale, geometry, material }: StandardObjectProps) => {
    return {
        type: ComponentTypes.Container,
        alignment: Alignment.Vertical,
        children: [
            {
                type: ComponentTypes.Canvas,
                style: stylingDefaults.fullWidthFullHeightCanvas,
                camera: {
                    type: CameraTypes.Perspective,
                    position: [0, 0, 3],
                    far: 30,
                },
                environment: {
                    files: 'puresky.hdr',
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
                objects: [
                    {
                        type: ObjectTypes.StandardObject,
                        position,
                        rotation,
                        scale,
                        geometry,
                        material,
                    },
                ],
            },
        ],
    };
};
