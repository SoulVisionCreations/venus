import { stylingDefaults } from '../../constants/defaults';
import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes, SceneControlTypes } from '../../types/enums';
import { ContainerNodeProps } from '../../types/types';

export const GltfinRoomConfig: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [
        { assetId: '101', assetPath: './scene.glb', assetType: AssetTypes.Mesh },
        { assetId: '1122', assetPath: './room.glb', assetType: AssetTypes.Mesh },
    ],
    children: [
        {
            type: ComponentTypes.Canvas,
            style: stylingDefaults.fullWidthFullHeightCanvas,
            camera: {
                type: CameraTypes.Perspective,
                position: [0, 0, 8],
                rotation: [0, 0, 0],
            },
            sceneControl: {
                type: SceneControlTypes.Orbit,
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
                    position: [0, 0.9, 0],
                    rotation: [Math.PI / 15, 0, 0],
                    scale: [1.5, 1.5, 1.5],
                    animations: [
                        {
                            type: AnimationTypes.intro,
                            visibilityThreshold: {
                                sceneTopToScreenBottomRatio: 0.5,
                                sceneBottomToScreenTopRatio: 0.5,
                            },
                            initialPause: 200,
                            springConfig: { duration: 3000 },
                            stateIncrements: [
                                {
                                    rotation: [Math.PI / 15, Math.PI * 2, 0],
                                    scale: [2.5, 2.5, 2.5],
                                },
                            ],
                        },
                    ],
                },
                {
                    type: ObjectTypes.MeshObject,
                    assetId: '1122',
                    position: [0, 0, 0],
                    rotation: [Math.PI / 15, Math.PI / 4, 0],
                    scale: [2, 2, 2],
                },
            ],
        },
    ],
};
