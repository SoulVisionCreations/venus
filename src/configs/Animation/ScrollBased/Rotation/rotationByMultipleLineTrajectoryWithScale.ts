import { stylingDefaults } from "../../../../constants/defaults";
import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes, TextTypes, Trajectory } from "../../../../types/enums";
import { ContainerNodeProps } from "../../../../types/types";

export const RotationByMultipleLineTrajectoryWithScaleConfig : ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [
        { assetId: '101', assetPath: './scene.glb', assetType: AssetTypes.Gltf },
    ],
    children: [
        {
            type: ComponentTypes.Canvas,
            style: {...stylingDefaults.fullWidthFullHeightCanvas, height: '600px'},
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
                    rotation: [Math.PI/2, 0 , 0],
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
                                        type: Trajectory.multipleCurvePath,
                                        curves: [
                                            {
                                                type: Trajectory.line3,
                                                startPoint: [Math.PI/2, 0, 0],
                                                endPoint: [0, 0, 0],
                                                closed: false
                                            },
                                            {
                                                type: Trajectory.line3,
                                                startPoint: [0, 0, 0],
                                                endPoint: [0, Math.PI/2, 0],
                                                closed: false
                                            },
                                            {
                                                type: Trajectory.line3,
                                                startPoint: [0, Math.PI/2, 0],
                                                endPoint: [0, Math.PI/4, 0],
                                                closed: false
                                            },
                                            {
                                                type: Trajectory.line3,
                                                startPoint: [0, Math.PI/4, 0],
                                                endPoint: [Math.PI/4, Math.PI/4, 0],
                                                closed: false
                                            }
                                        ],
                                        equiSpacedPoints: true
                                    },
                                    speed: 0.00025
                                },
                            },
                            scaleOnScroll: {
                                scaleRatio: [1, 1, 1],
                                velocity: 0.00035,
                                maxScale: [3, 3, 3],
                                minScale: [2, 2, 2]
                            },
                            springConfig: { mass: 4, tension: 280, friction: 90 },
                        },
                    ],
                }
            ],
            texts: [
                {
                    type: TextTypes.Paragraph,
                    text: 'Doris Armchair',
                    position: [0, 0.15, 1],
                    scale: [3, 3, 3],
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
                                        startPoint: [0, 0.15, 1],
                                        endPoint: [0, 10, 1]
                                    },
                                    speed: 0.00025
                                },
                            }
                        }
                    ]
                },
                {
                    type: TextTypes.Paragraph,
                    text: 'Before they sold out salvia aesthetic, hexagon disrupts sustainable vaporware crucifix succulents kale chips. Selvage knausguard scenester.',
                    position: [0, -0.15, 1],
                    scale: [0.5, 0.5, 0.5],
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
                                        startPoint: [0, -0.15, 1],
                                        endPoint: [0, 10, 1]
                                    },
                                    speed: 0.00025
                                },
                            }
                        }
                    ]
                },
                {
                    type: TextTypes.Paragraph,
                    text: 'Smooth design',
                    position: [0.82, -1, 1],
                    scale: [0.2, 0.2, 0.2],
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
                                        startPoint: [0.82, -1, 1],
                                        endPoint: [0.82, 3, 1]
                                    },
                                    speed: 0.00025
                                },
                            }
                        }
                    ]
                },
                {
                    type: TextTypes.Paragraph,
                    text: 'Humblebrag pickled listicle yes plz williamsburg shoreditch tumblr, put a bird on it cred knausgaard snackwave scenester. Before they sold out salvia aesthetic.',
                    position: [1, -1.2, 1],
                    scale: [0.2, 0.2, 0.2],
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
                                        startPoint: [1, -1.3, 1],
                                        endPoint: [1, 2.8, 1]
                                    },
                                    speed: 0.00025
                                },
                            }
                        }
                    ]
                },
                {
                    type: TextTypes.Paragraph,
                    text: 'Softness of the upholstery',
                    position: [-1.125, -4.2, 1],
                    scale: [0.2, 0.2, 0.2],
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
                                        startPoint: [-1.125, -4.2, 1],
                                        endPoint: [-1.125, 2.75, 1]
                                    },
                                    speed: 0.0002
                                },
                            }
                        }
                    ]
                },
                {
                    type: TextTypes.Paragraph,
                    text: 'Humblebrag pickled listicle yes plz williamsburg shoreditch tumblr, put a bird on it cred knausgaard snackwave scenester. Before they sold out salvia aesthetic.',
                    position: [-1.2, -4.5, 0],
                    scale: [0.2, 0.2, 0.2],
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
                                        startPoint: [-1.2, -4.5, 1],
                                        endPoint: [-1.2, 2.5, 1]
                                    },
                                    speed: 0.0002
                                },
                            }
                        }
                    ]
                },
            ],
        },
    ]
}