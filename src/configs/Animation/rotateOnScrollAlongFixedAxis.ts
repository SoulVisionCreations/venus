import { stylingDefaults } from "../../constants/defaults";
import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, ObjectTypes } from "../../types/enums";
import { ContainerNodeProps } from "../../types/types";

export const RotateOnScrollConfig : ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [
        { assetId: '101', assetPath: './scene.glb', assetType: AssetTypes.Gltf },
        { assetId: '102', assetPath: 'data', assetType: AssetTypes.Implicit },
    ],
    children: [
        // {
        //     type: ComponentTypes.Canvas,
        //     style: stylingDefaults.fullWidthFullHeightCanvas,
        //     camera: {
        //         type: CameraTypes.Perspective,
        //         position: [0, 0, 3],
        //     },
        //     assetIds: ['101'],
        //     objects: [
        //         {
        //             type: ObjectTypes.GltfObject,
        //             assetId: '101',
        //             position: [0, 0, 0],
        //             rotation: [-Math.PI / 2.5, 0, -Math.PI / 4],
        //             scale: [1.5, 1.5, 1.5],
        //             animations: [
        //                 {
        //                     type: AnimationTypes.scroll,
        //                     visibilityThreshold: {
        //                         sceneTopToScreenBottomRatio: 0.5,
        //                         sceneBottomToScreenTopRatio: 0.5,
        //                     },
        //                     rotateOnScroll: {
        //                         axis: [0, 0, 1],
        //                         velocity: 0.01,
        //                         maxRotation: Math.PI*10,
        //                         minRotation: -Math.PI*10
        //                     },
        //                     springConfig: { mass: 4, tension: 280, friction: 90 },
        //                 },
        //             ],
        //         }
        //     ],
        // },
        {
            type: ComponentTypes.Canvas,
            style: stylingDefaults.fullWidthFullHeightCanvas,
            camera: {
                type: CameraTypes.Perspective,
                position: [0, 0, 3],
            },
            assetIds: ['102'],
            objects: [
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '102',
                    position: [0, 0, 0],
                    rotation: [-Math.PI / 2.5, 0, -Math.PI / 4],
                    scale: [1.5, 1.5, 1.5],
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