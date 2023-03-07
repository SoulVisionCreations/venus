import { ChainedAnimation } from "../../../../types/animationTypes";
import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes } from "../../../../types/enums";
import { ContainerNodeProps } from "../../../../types/types";

export const getChainedAnimationConfig = (props: ChainedAnimation): ContainerNodeProps => {
    return {
        type: ComponentTypes.Container,
        alignment: Alignment.Vertical,
        assets: [
            { assetId: '101', assetPath: './scene.glb', assetType: AssetTypes.Mesh },
        ],
        children: [
            {
                type: ComponentTypes.Canvas,
                style: { height: '500px', flexGrow: 1 },
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
                assetIds: ['101'],
                objects: [
                    {
                        type: ObjectTypes.MeshObject,
                        assetId: '101',
                        position: [0, 0, 0],
                        rotation: [Math.PI/2, 0, 0],
                        scale: [1, 1, 1],
                        animations: [
                            {
                                type: AnimationTypes.chained,
                                visibilityThreshold: {
                                    sceneTopToScreenBottomRatio: 0,
                                    sceneBottomToScreenTopRatio: 0,
                                },
                                initialPause: props.initialPause,
                                repeat: props.repeat,
                                interval: props.interval,
                                springConfig: props.springConfig,
                                childAnimations: props.childAnimations
                            },
                        ],
                    },
                ],
            },
        ],
    };
}
