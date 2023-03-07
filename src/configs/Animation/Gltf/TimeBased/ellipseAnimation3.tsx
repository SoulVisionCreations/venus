import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes, Trajectory } from '../../../../types/enums';
import { ContainerNodeProps } from '../../../../types/types';

export const ellipse3Config: ContainerNodeProps = {
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
                    rotation: [Math.PI / 4, 0, 0],
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
                            springConfig: { duration: 75 },
                            childAnimations: [
                                {
                                    animationTrajectories: {
                                        position: {
                                            trajectoryMetaData: {
                                                type: Trajectory.ellipse,
                                                center: [0, 0, 0],
                                                height: 1,
                                                width: 2.5,
                                                clockwise: true,
                                                rotateCurve: [
                                                    {
                                                        axis: [1, 0, 0],
                                                        angle: Math.PI / 4 + Math.PI / 8,
                                                    },
                                                ],
                                            },
                                        },
                                        rotation: {
                                            trajectoryMetaData: {
                                                type: Trajectory.quadracticBezierCurve3,
                                                points: [
                                                    [Math.PI / 4, 0, 0],
                                                    [Math.PI / 2, 2 * Math.PI, 0],
                                                    [Math.PI / 4, 0, 0],
                                                ],
                                            },
                                        },
                                        scale: {
                                            trajectoryMetaData: {
                                                type: Trajectory.quadracticBezierCurve3,
                                                points: [
                                                    [0.4, 0.4, 0.4],
                                                    [1, 1, 1],
                                                    [0.4, 0.4, 0.4],
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
