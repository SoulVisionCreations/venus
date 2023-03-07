import { SpringConfig } from "@react-spring/three";
import { AnimationTrajectory, VisibilityThreshold } from "../../../../../types/animationTypes";
import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes } from "../../../../../types/enums";
import { ContainerNodeProps } from "../../../../../types/types";

export const getIntroAnimationConfig = (props: {
    initialPause?: number;
    springConfig?: SpringConfig;
    visibilityThreshold?: VisibilityThreshold;
    animationTrajectories: AnimationTrajectory; 
    trajectorySteps?: number
}): ContainerNodeProps => {
    return {
        type: ComponentTypes.Container,
        alignment: Alignment.Vertical,
        style: {justifyContent: 'center', alignItems: 'center'},
        assets: [
            { assetId: '101', assetPath: './scene.glb', assetType: AssetTypes.Mesh },
        ],
        children: [
            {
                type: ComponentTypes.Canvas,
                style: {width: '500px', height: '500px'},
                camera: {
                    type: CameraTypes.Perspective,
                    position: [0, 0, 3],
                    far: 50,
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
                        position: [0, -30, -50],
                        rotation: [0, 0, 0],
                        scale: [0.25, 0.25, 0.25],
                        animations: [
                            {
                                type: AnimationTypes.intro,
                                visibilityThreshold: {
                                    sceneTopToScreenBottomRatio: 0.5,
                                    sceneBottomToScreenTopRatio: 0.5,
                                },
                                initialPause: props.initialPause,
                                springConfig: props.springConfig,
                                animationTrajectories: props.animationTrajectories,
                                trajectorySteps: props.trajectorySteps
                            },
                        ],
                    },
                ],
            },
        ],
    };
}
