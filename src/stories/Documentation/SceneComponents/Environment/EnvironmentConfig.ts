import { stylingDefaults } from '../../../../constants/defaults';
import { Alignment, AssetTypes, CameraTypes, ComponentTypes, ObjectTypes, SceneControlTypes } from '../../../../types/enums';
import { EnvironmentProps } from '../../../../types/types';

export const getEnvironmentConfig = ({ files, background, ground }: EnvironmentProps) => {
    return {
        type: ComponentTypes.Container,
        alignment: Alignment.Vertical,
        assets: [{ assetId: '102', assetPath: 'data2', assetType: AssetTypes.Implicit }],
        children: [
            {
                type: ComponentTypes.Canvas,
                style: stylingDefaults.fullWidthFullHeightCanvas,
                camera: {
                    type: CameraTypes.Perspective,
                    position: [0, 10, 130],
                    fov: 35,
                },
                environment: {
                    files,
                    background,
                    ground,
                },
                sceneControl: {
                    type: SceneControlTypes.Orbit,
                    minPolarAngle: 0,
                    maxPolarAngle: Math.PI / 2.15,
                    autoRotate: true,
                    autoRotateSpeed: 0.5,
                    enableZoom: false,
                    enablePan: false,
                },
                assetIds: ['102'],
                objects: [
                    {
                        type: ObjectTypes.ImplicitObject,
                        assetId: '102',
                        position: [0, 22.2, 0],
                        rotation: [-Math.PI / 2, 0, Math.PI],
                        scale: [40, 40, 40],
                    },
                ],
            },
        ],
    };
};
