// import { stylingDefaults } from '../../constants/defaults';
import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes, SceneControlTypes } from '../../types/enums';
import { ContainerNodeProps } from '../../types/types';

export const ImplicitinRoomConfig: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [
        { assetId: '102', assetPath: 'data2', assetType: AssetTypes.Implicit },
        { assetId: '1122', assetPath: './room.glb', assetType: AssetTypes.Mesh },
    ],
    children: [
        {
            type: ComponentTypes.Canvas,
            // style: stylingDefaults.fullWidthFullHeightCanvas,
            style: { width: '70%', height: '100%', position: 'fixed', left: '5%' },
            camera: {
                type: CameraTypes.Perspective,
                position: [0, 1, 8],
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
            assetIds: ['102'],
            objects: [
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '102',
                    position: [0, 0.8, 0],
                    rotation: [(-13 * Math.PI) / 30, 0, Math.PI],
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
                                    rotation: [(-13 * Math.PI) / 30, 0, Math.PI * 3],
                                    scale: [2.5, 2.5, 2.5],
                                },
                            ],
                        },
                    ],
                },
                // {
                //     type: ObjectTypes.MeshObject,
                //     assetId: '1122',
                //     position: [0, 0, 0],
                //     rotation: [Math.PI / 15, Math.PI / 4, 0],
                //     scale: [2, 2, 2],
                // },
            ],
        },
    ],
};
