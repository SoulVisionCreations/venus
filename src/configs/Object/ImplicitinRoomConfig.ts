// import { stylingDefaults } from '../../constants/defaults';
import { Alignment, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes, SceneControlTypes } from '../../types/enums';
import { ContainerNodeProps } from '../../types/types';

export const ImplicitinRoomConfig: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [{ assetId: '102', assetPath: 'data2', assetType: AssetTypes.Implicit }],
    children: [
        {
            type: ComponentTypes.Canvas,
            // style: stylingDefaults.fullWidthFullHeightCanvas,
            style: { width: '70%', height: '100%', position: 'fixed', left: '5%' },
            camera: {
                type: CameraTypes.Perspective,
                position: [0, 1, 8],
            },
            environment: {
                files: 'brown_photostudio_02_2k.hdr',
                ground: {
                    height: 32,
                    radius: 120,
                },
            },
            sceneControl: {
                type: SceneControlTypes.Orbit,
                minPolarAngle: 0,
                maxPolarAngle: Math.PI / 2.15,
                autoRotate: true,
                autoRotateSpeed: 0.5,
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
            assetIds: ['102'],
            objects: [
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '102',
                    position: [0, 0, 0],
                    rotation: [-Math.PI / 2, 0, Math.PI],
                    scale: [5, 5, 5],
                },
            ],
        },
    ],
};
