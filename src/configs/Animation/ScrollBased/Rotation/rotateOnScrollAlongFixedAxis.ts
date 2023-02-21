import { stylingDefaults } from "../../../../constants/defaults";
import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes } from "../../../../types/enums";
import { ContainerNodeProps } from "../../../../types/types";

export const RotateOnScrollAlongFixedAxisConfig : ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Horizontal,
    assets: [
        { assetId: '101', assetPath: './scene.glb', assetType: AssetTypes.Gltf },
        { assetId: '102', assetPath: 'data2', assetType: AssetTypes.Implicit },
    ],
    children: [
        {
            type: ComponentTypes.Canvas,
            style: {...stylingDefaults.fullWidthSmallHeightCanvas, ...stylingDefaults.flexGrow1, height: '600px'},
            camera: {
                type: CameraTypes.Perspective,
                position: [0, 0, 3],
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
                    type: ObjectTypes.GltfObject,
                    assetId: '101',
                    position: [0, 0, 0],
                    rotation: [Math.PI/16, 0 , 0],
                    scale: [1.5, 1.5, 1.5],
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            visibilityThreshold: {
                                sceneTopToScreenBottomRatio: 0.5,
                                sceneBottomToScreenTopRatio: 0.5,
                            },
                            rotateOnScroll: {
                                axis: [0, 1, 0],
                                velocity: 0.01,
                                maxRotation: Math.PI*10,
                                minRotation: -Math.PI*10
                            },
                            springConfig: { mass: 4, tension: 280, friction: 90 },
                        },
                    ],
                }
            ],
        },
        {
            type: ComponentTypes.Canvas,
            style: {...stylingDefaults.fullWidthSmallHeightCanvas, ...stylingDefaults.flexGrow1, height: '600px'},
            camera: {
                type: CameraTypes.Perspective,
                position: [0, 0, 3],
            },
            assetIds: ['102'],
            objects: [
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '102',
                    position: [0, 0, -1],
                    rotation: [-Math.PI / 2.5, 0, 0],
                    scale: [1.3, 1.3, 1.3],
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            visibilityThreshold: {
                                sceneTopToScreenBottomRatio: 0.5,
                                sceneBottomToScreenTopRatio: 0.5,
                            },
                            rotateOnScroll: {
                                axis: [0, 0, 1],
                                velocity: 0.01,
                                maxRotation: Math.PI*10,
                                minRotation: -Math.PI*10
                            },
                            springConfig: { mass: 4, tension: 280, friction: 90 },
                        },
                    ],
                }
            ],
        },
    ]
}