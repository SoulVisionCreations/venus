import { stylingDefaults } from '../../constants/defaults';
import { Alignment, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes, SceneControlTypes } from '../../types/enums';
import { ContainerNodeProps } from '../../types/types';

export const GltfinRoomConfig: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [{ assetId: '101', assetPath: './assets/glb/scene.glb', assetType: AssetTypes.Mesh }],
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
                files: './assets/hdri/brown_photostudio_02_2k.hdr',
                ground: {
                    height: 32,
                    radius: 130,
                },
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
            assetIds: ['101'],
            objects: [
                {
                    type: ObjectTypes.MeshObject,
                    assetId: '101',
                    position: [0, 10, 0],
                    rotation: [Math.PI / 15, 0, 0],
                    scale: [20, 20, 20],
                },
            ],
        },
    ],
};
