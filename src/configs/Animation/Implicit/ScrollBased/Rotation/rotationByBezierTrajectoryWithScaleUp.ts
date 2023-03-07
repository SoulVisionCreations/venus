import { stylingDefaults } from '../../../../../constants/defaults';
import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes, Trajectory } from '../../../../../types/enums';
import { ContainerNodeProps } from '../../../../../types/types';

export const RotationByBezierTrajectoryWithScaleUpConfig: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [{ assetId: '102', assetPath: './assets/implicit/data2', assetType: AssetTypes.Implicit }],
    children: [
        {
            type: ComponentTypes.Canvas,
            style: { ...stylingDefaults.fullWidthFullHeightCanvas, height: '600px' },
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
            assetIds: ['102'],
            objects: [
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '102',
                    position: [0, 0, 0],
                    rotation: [0, 0, Math.PI],
                    scale: [2, 2, 2],
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            visibilityThreshold: {
                                sceneTopToScreenBottomRatio: 0.5,
                                sceneBottomToScreenTopRatio: 0.5,
                            },
                            animationTrajectories: {
                                rotation: {
                                    trajectoryMetaData: {
                                        type: Trajectory.quadracticBezierCurve3,
                                        points: [
                                            [0, 0, Math.PI],
                                            [-Math.PI / 2, 0, Math.PI],
                                            [-Math.PI / 2, 0, (3 * Math.PI) / 2],
                                        ],
                                        equiSpacedPoints: false,
                                        closed: true,
                                    },
                                    speed: 0.00025,
                                },
                            },
                            scaleOnScroll: {
                                scaleRatio: [1, 1, 1],
                                velocity: 0.00025,
                                maxScale: [3, 3, 3],
                                minScale: [2, 2, 2],
                            },
                            springConfig: { mass: 4, tension: 280, friction: 90 },
                        },
                    ],
                },
            ],
        },
    ],
};
