import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes, TrajectoryTypes } from '../../../../types/enums';
import { ContainerNodeProps } from '../../../../types/types';

export const ellipse2Config: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [{ assetId: '102', assetPath: './assets/implicit/data2', assetType: AssetTypes.Implicit }],
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
            assetIds: ['102'],
            objects: [
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '102',
                    position: [0, 0, 0],
                    rotation: [-Math.PI / 2, 0, Math.PI],
                    scale: [0.4, 0.4, 0.4],
                    animations: [
                        {
                            type: AnimationTypes.chained,
                            visibilityThreshold: {
                                sceneTopToScreenBottomRatio: 0,
                                sceneBottomToScreenTopRatio: 0,
                            },
                            initialPause: 0,
                            repeat: true,
                            interval: 0,
                            springConfig: { duration: 50 },
                            childAnimations: [
                                {
                                    animationTrajectories: {
                                        position: {
                                            trajectoryMetaData: {
                                                type: TrajectoryTypes.ellipse,
                                                center: [0, 0, 0],
                                                height: 0.75,
                                                width: 2.5,
                                                rotateCurve: [
                                                    {
                                                        axis: [1, 0, 0],
                                                        angle: -Math.PI / 2 + Math.PI / 8,
                                                    },
                                                ],
                                            },
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
