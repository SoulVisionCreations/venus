import { stylingDefaults } from '../../../../../constants/defaults';
import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes, TextTypes, Trajectory } from '../../../../../types/enums';
import { ContainerNodeProps } from '../../../../../types/types';

export const RotationByMultipleLineTrajectoryWithScaleConfig: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [{ assetId: '102', assetPath: 'data2', assetType: AssetTypes.Implicit }],
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
                    rotation: [Math.PI / 18, 0, Math.PI - Math.PI / 90],
                    scale: [1, 1, 1],
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
                                        type: Trajectory.multipleCurvePath,
                                        curves: [
                                            {
                                                type: Trajectory.line3,
                                                startPoint: [0, 0, Math.PI],
                                                endPoint: [-Math.PI / 2, 0, Math.PI],
                                                closed: false,
                                            },
                                            {
                                                type: Trajectory.line3,
                                                startPoint: [-Math.PI / 2, 0, Math.PI],
                                                endPoint: [-Math.PI / 2, 0, (3 * Math.PI) / 2],
                                                closed: false,
                                            },
                                            {
                                                type: Trajectory.line3,
                                                startPoint: [-Math.PI / 2, 0, (3 * Math.PI) / 2],
                                                endPoint: [-Math.PI / 2, 0, (5 * Math.PI) / 4],
                                                closed: false,
                                            },
                                            {
                                                type: Trajectory.line3,
                                                startPoint: [-Math.PI / 2, 0, (5 * Math.PI) / 4],
                                                endPoint: [-Math.PI / 4, 0, (5 * Math.PI) / 4],
                                                closed: false,
                                            },
                                        ],
                                        equiSpacedPoints: true,
                                    },
                                    speed: 0.00025,
                                },
                            },
                            scaleOnScroll: {
                                scaleRatio: [1, 1, 1],
                                velocity: 0.00035,
                                maxScale: [2, 2, 2],
                                minScale: [1, 1, 1],
                            },
                            springConfig: { mass: 4, tension: 280, friction: 90 },
                        },
                    ],
                },
            ],
            texts: [
                {
                    type: TextTypes.Paragraph,
                    data: 'Doris Armchair',
                    position: [0, 0.075, 2],
                    scale: [1.5, 1.5, 1.5],
                    color: 'black',
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            visibilityThreshold: {
                                sceneTopToScreenBottomRatio: 0.5,
                                sceneBottomToScreenTopRatio: 0.5,
                            },
                            animationTrajectories: {
                                position: {
                                    trajectoryMetaData: {
                                        type: Trajectory.line3,
                                        startPoint: [0, 0.075, 2],
                                        endPoint: [0, 10, 2],
                                    },
                                    speed: 0.00025,
                                },
                            },
                        },
                    ],
                },
                {
                    type: TextTypes.Paragraph,
                    data: 'Before they sold out salvia aesthetic, hexagon disrupts sustainable vaporware crucifix succulents kale chips. Selvage knausguard scenester.',
                    position: [0, -0.075, 2],
                    scale: [0.25, 0.25, 0.25],
                    maxWidth: 4.25,
                    textAlign: 'center',
                    numbered: true,
                    fontSize: 0.1,
                    color: 'grey',
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            visibilityThreshold: {
                                sceneTopToScreenBottomRatio: 0.5,
                                sceneBottomToScreenTopRatio: 0.5,
                            },
                            animationTrajectories: {
                                position: {
                                    trajectoryMetaData: {
                                        type: Trajectory.line3,
                                        startPoint: [0, -0.075, 2],
                                        endPoint: [0, 10, 2],
                                    },
                                    speed: 0.00025,
                                },
                            },
                        },
                    ],
                },
                {
                    type: TextTypes.Paragraph,
                    data: 'Smooth design',
                    position: [0.415, -0.5, 2],
                    scale: [0.1, 0.1, 0.1],
                    color: 'black',
                    textAlign: 'left',
                    fontSize: 0.5,
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            visibilityThreshold: {
                                sceneTopToScreenBottomRatio: 0.5,
                                sceneBottomToScreenTopRatio: 0.5,
                            },
                            animationTrajectories: {
                                position: {
                                    trajectoryMetaData: {
                                        type: Trajectory.line3,
                                        startPoint: [0.415, -0.5, 2],
                                        endPoint: [0.415, 1.5, 2],
                                    },
                                    speed: 0.00025,
                                },
                            },
                        },
                    ],
                },
                {
                    type: TextTypes.Paragraph,
                    data: 'Humblebrag pickled listicle yes plz williamsburg shoreditch tumblr, put a bird on it cred knausgaard snackwave scenester. Before they sold out salvia aesthetic.',
                    position: [0.5, -0.6, 2],
                    scale: [0.1, 0.1, 0.1],
                    maxWidth: 5,
                    textAlign: 'left',
                    fontSize: 0.3,
                    color: 'grey',
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            visibilityThreshold: {
                                sceneTopToScreenBottomRatio: 0.5,
                                sceneBottomToScreenTopRatio: 0.5,
                            },
                            animationTrajectories: {
                                position: {
                                    trajectoryMetaData: {
                                        type: Trajectory.line3,
                                        startPoint: [0.5, -0.65, 2],
                                        endPoint: [0.5, 1.4, 2],
                                    },
                                    speed: 0.00025,
                                },
                            },
                        },
                    ],
                },
                {
                    type: TextTypes.Paragraph,
                    data: 'Softness of the upholstery',
                    position: [-0.555, -2.1, 2],
                    scale: [0.1, 0.1, 0.1],
                    color: 'black',
                    textAlign: 'left',
                    fontSize: 0.5,
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            visibilityThreshold: {
                                sceneTopToScreenBottomRatio: 0.5,
                                sceneBottomToScreenTopRatio: 0.5,
                            },
                            animationTrajectories: {
                                position: {
                                    trajectoryMetaData: {
                                        type: Trajectory.line3,
                                        startPoint: [-0.555, -2.1, 2],
                                        endPoint: [-0.555, 1.375, 2],
                                    },
                                    speed: 0.0002,
                                },
                            },
                        },
                    ],
                },
                {
                    type: TextTypes.Paragraph,
                    data: 'Humblebrag pickled listicle yes plz williamsburg shoreditch tumblr, put a bird on it cred knausgaard snackwave scenester. Before they sold out salvia aesthetic.',
                    position: [-0.6, -2.25, 2],
                    scale: [0.1, 0.1, 0.1],
                    maxWidth: 5,
                    textAlign: 'left',
                    fontSize: 0.3,
                    color: 'grey',
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            visibilityThreshold: {
                                sceneTopToScreenBottomRatio: 0.5,
                                sceneBottomToScreenTopRatio: 0.5,
                            },
                            animationTrajectories: {
                                position: {
                                    trajectoryMetaData: {
                                        type: Trajectory.line3,
                                        startPoint: [-0.6, -2.25, 2],
                                        endPoint: [-0.6, 1.25, 2],
                                    },
                                    speed: 0.0002,
                                },
                            },
                        },
                    ],
                },
            ],
        },
    ],
};
