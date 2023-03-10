import { stylingDefaults } from '../../../../../constants/defaults';
import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes, TextTypes, Trajectory } from '../../../../../types/enums';
import { ContainerNodeProps } from '../../../../../types/types';

export const RotationByMultipleBezierTrajectoryWithScaleConfig: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [
        { assetId: '101', assetPath: './assets/glb/scene.glb', assetType: AssetTypes.Mesh },
        // { assetId: '11', assetPath: './assets/font/Inter_Bold.json', assetType: AssetTypes.Font },
    ],
    children: [
        {
            type: ComponentTypes.Canvas,
            style: stylingDefaults.fullWidthFullHeightCanvas,
            disablePageScrollForScrollAnimation: true,
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
                    type: ObjectTypes.MeshObject,
                    assetId: '101',
                    position: [0, 0, 0],
                    rotation: [Math.PI / 2, 0, 0],
                    scale: [2, 2, 2],
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            visibilityThreshold: {
                                sceneTopToScreenBottomRatio: 0.5,
                                sceneBottomToScreenTopRatio: 0.5,
                            },
                            disablePageScroll: true,
                            animationTrajectories: {
                                rotation: {
                                    trajectoryMetaData: {
                                        type: Trajectory.multipleCurvePath,
                                        curves: [
                                            {
                                                type: Trajectory.quadracticBezierCurve3,
                                                points: [
                                                    [Math.PI / 2, 0, 0],
                                                    [0, 0, 0],
                                                    [0, Math.PI / 2, 0],
                                                ],
                                            },
                                            {
                                                type: Trajectory.quadracticBezierCurve3,
                                                points: [
                                                    [0, Math.PI / 2, 0],
                                                    [0, Math.PI / 4, 0],
                                                    [Math.PI / 4, Math.PI / 4, 0],
                                                ],
                                            },
                                        ],
                                        equiSpacedPoints: true,
                                    },
                                    speed: 0.00025,
                                },
                                scale: {
                                    trajectoryMetaData: {
                                        type: Trajectory.line3D,
                                        startPoint: [2, 2, 2],
                                        endPoint: [2.5, 2.5, 2.5],
                                    },
                                    speed: 0.00025,
                                },
                            },
                            springConfig: { mass: 4, tension: 280, friction: 90 },
                        },
                    ],
                },
                // {
                //     type: ObjectTypes.Text3D,
                //     assetId: '11',
                //     text: 'Scroll Down',
                //     font: './assets/font/Inter_Bold.json',
                //     position: [0, 0, 0],
                //     rotation: [0, 0, 0],
                //     scale: [0.5, 0.5, 0.5],
                //     color: 'black'
                // },
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
                                        type: Trajectory.line3D,
                                        startPoint: [0, 0.075, 2],
                                        endPoint: [0, 2, 2],
                                    },
                                    speed: 0.00025,
                                },
                                opacity: {
                                    trajectoryMetaData: {
                                        type: Trajectory.line1D,
                                        startPoint: 1,
                                        endPoint: 0,
                                    },
                                    speed: 0.0025,
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
                                        type: Trajectory.line3D,
                                        startPoint: [0, -0.075, 2],
                                        endPoint: [0, 1.85, 2],
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
                                        type: Trajectory.line3D,
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
                                        type: Trajectory.line3D,
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
                                        type: Trajectory.line3D,
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
                                        type: Trajectory.line3D,
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
