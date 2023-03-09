import { SpringConfig } from '@react-spring/three';
import { VisibilityThreshold } from '../../../../../types/animationTypes';
import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes } from '../../../../../types/enums';
import { weakObject3DStateofArrays } from '../../../../../types/object3DTypes';
import { ContainerNodeProps } from '../../../../../types/types';

export const getIntroAnimationConfig = (props: {
    initialPause?: number;
    springConfig?: SpringConfig;
    visibilityThreshold?: VisibilityThreshold;
    stateIncrements: Array<weakObject3DStateofArrays>;
}): ContainerNodeProps => {
    return {
        type: ComponentTypes.Container,
        alignment: Alignment.Vertical,
        assets: [{ assetId: '101', assetPath: './assets/glb/scene.glb', assetType: AssetTypes.Mesh }],
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
                                stateIncrements: props.stateIncrements,
                            },
                        ],
                    },
                ],
            },
        ],
    };
};
