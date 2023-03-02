import { stylingDefaults } from '../../constants/defaults';
import { Alignment, AnimationTrajectory, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, ObjectTypes, TextTypes } from '../../types/enums';
import { ContainerNodeProps } from '../../types/types';

export const scrollAnimationExample: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [
        { assetId: '101', assetPath: 'data', assetType: AssetTypes.Implicit },
        { assetId: '11', assetPath: './Inter_Bold.json', assetType: AssetTypes.Font },
        { assetId: '1006', assetPath: './avataar.png', assetType: AssetTypes.Image },
    ],
    children: [
        {
            type: ComponentTypes.Canvas,
            className: 'canvas',
            style: stylingDefaults.fullWidthFullHeightCanvas,
            camera: {
                type: CameraTypes.Perspective,
                position: [0, 0, 3],
            },
            assetIds: ['11'],
            objects: [
                {
                    type: ObjectTypes.Text3D,
                    assetId: '11',
                    text: 'Scroll Down',
                    font: './Inter_Bold.json',
                    position: [-2, 0, 0],
                    rotation: [-0.5, 0, 0],
                    scale: [0.5, 0.5, 0.5],
                },
            ],
            texts: [
                {
                    type: TextTypes.Paragraph,
                    text: 'Trusted by everyone around the world !',
                    position: [0, -0.5, 0],
                    scale: [0.5, 0.5, 0.5],
                    rotation: [0.9, 0, 0],
                    color: '#60bcea',
                },
            ],
        },
        {
            type: ComponentTypes.Container,
            alignment: Alignment.Horizontal,
            style: stylingDefaults.fullWidthFullHeightCanvas,
            children: [
                {
                    type: ComponentTypes.Canvas,
                    style: stylingDefaults.fullHeightCanvas,
                    camera: {
                        type: CameraTypes.Perspective,
                        position: [0, 0, 3],
                    },
                    assetIds: ['11'],
                    objects: [
                        {
                            type: ObjectTypes.Text3D,
                            assetId: '11',
                            text: 'Chair Demo',
                            font: './Inter_Bold.json',
                            position: [-1, 0, 0],
                            rotation: [-0.1, 0, 0],
                            scale: [0.3, 0.3, 0.3],
                        },
                    ],
                },
                {
                    type: ComponentTypes.Canvas,
                    style: stylingDefaults.fullHeightCanvas,
                    camera: {
                        type: CameraTypes.Perspective,
                        position: [0, 0, 3],
                    },
                    assetIds: ['11'],
                    objects: [
                        {
                            type: ObjectTypes.ImplicitObject,
                            assetId: '101',
                            position: [0, 0, 0],
                            rotation: [-Math.PI / 2.5, 0, -Math.PI / 4],
                            scale: [1.5, 1.5, 1.5],
                            animations: [
                                {
                                    type: AnimationTypes.scroll,
                                    visibilityThreshold: {
                                        sceneTopToScreenBottomRatio: 0.5,
                                        sceneBottomToScreenTopRatio: -1,
                                    },
                                    rotateOnScroll: {
                                        axis: [0, 0, 1],
                                        velocity: 0.003,
                                    },
                                    springConfig: { mass: 4, tension: 280, friction: 90 },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: ComponentTypes.Container,
            alignment: Alignment.Horizontal,
            children: [
                {
                    type: ComponentTypes.Canvas,
                    className: 'canvas',
                    style: { flexGrow: 1, height: '750px' },
                    camera: {
                        type: CameraTypes.Perspective,
                        position: [0, 0, 3],
                    },
                    assetIds: ['101'],
                    objects: [
                        {
                            type: ObjectTypes.ImplicitObject,
                            assetId: '101',
                            position: [0, 0, -50],
                            rotation: [-Math.PI / 2.5, 0, -Math.PI / 4],
                            scale: [2, 2, 2],
                            animations: [
                                {
                                    type: AnimationTypes.scroll,
                                    visibilityThreshold: {
                                        sceneTopToScreenBottomRatio: 0,
                                        sceneBottomToScreenTopRatio: 0,
                                    },
                                    animationTrajectories: {
                                        rotation: {},
                                    },
                                    trajectory: AnimationTrajectory.curveDefinedByPoints,
                                    trajectoryMetaData: {
                                        points: [
                                            [0, 0, -50],
                                            [0, 0.8, -10],
                                            [0, 1, 0],
                                        ],
                                        speed: 0.001,
                                        rotationTrajectory: {
                                            axis: [0, 0, 1],
                                            frequency: 1,
                                        },
                                        scaleTrajectory: {
                                            scaleRatio: [0.5, 0.5, 0.5],
                                        },
                                    },
                                    config: { mass: 4, tension: 280, friction: 90 },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: ComponentTypes.Canvas,
                    className: 'canvas',
                    style: { flexGrow: 1, height: '750px' },
                    camera: {
                        type: CameraTypes.Perspective,
                        position: [0, 0, 3],
                    },
                    assetIds: ['101'],
                    objects: [
                        {
                            type: ObjectTypes.ImplicitObject,
                            assetId: '101',
                            position: [0, 0, -50],
                            scale: [2, 2, 2],
                            rotation: [-Math.PI / 2.5, 0, -Math.PI / 4],
                            animations: [
                                {
                                    type: AnimationTypes.scroll,
                                    visibilityThreshold: {
                                        top: 0,
                                        bottom: 0,
                                    },
                                    trajectory: AnimationTrajectory.curveDefinedByPoints,
                                    trajectoryMetaData: {
                                        points: [
                                            [0, 0, -50],
                                            [0, 0.8, -10],
                                            [0, 1, 0],
                                        ],
                                        speed: 0.001,
                                        rotationTrajectory: {
                                            axis: [0, 0, 1],
                                            frequency: 1,
                                        },
                                        scaleTrajectory: {
                                            scaleRatio: [0.5, 0.5, 0.5],
                                        },
                                    },
                                    config: { mass: 4, tension: 280, friction: 90 },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: ComponentTypes.Canvas,
            className: 'canvas',
            style: stylingDefaults.fullWidthFullHeightCanvas,
            camera: {
                type: CameraTypes.Perspective,
                position: [0, 0, 3],
            },
            assetIds: ['101', '1006'],
            objects: [
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '101',
                    position: [0.45, -0.4, 0],
                    rotation: [-Math.PI / 2.5, 0, Math.PI / 6],
                    scale: [0.7, 0.7, 0.7],
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            visibilityThreshold: {
                                top: 0.8,
                                bottom: -1,
                            },
                            trajectory: AnimationTrajectory.curveDefinedByPoints,
                            trajectoryMetaData: {
                                points: [
                                    [0.45, -0.4, 0],
                                    [4, 8, -0.2],
                                    [8, -5, -0.4],
                                ],
                                speed: 0.001,
                            },
                            config: { mass: 4, tension: 280, friction: 90 },
                        },
                    ],
                },
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '101',
                    position: [-0.45, -0.4, 0],
                    rotation: [-Math.PI / 2.5, 0, -Math.PI / 6],
                    scale: [0.7, 0.7, 0.7],
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            visibilityThreshold: {
                                top: 0.8,
                                bottom: -1,
                            },
                            trajectory: AnimationTrajectory.curveDefinedByPoints,
                            trajectoryMetaData: {
                                points: [
                                    [-0.45, -0.4, 0],
                                    [-4, 8, -0.2],
                                    [-8, -5, -0.4],
                                ],
                                speed: 0.001,
                            },
                            config: { mass: 4, tension: 280, friction: 90 },
                        },
                    ],
                },
            ],
            images: [
                {
                    assetId: '1006',
                    position: [0, 1, -200],
                    rotation: [0, 0, 0],
                    scale: [0.3, 0.3, 0.3],
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            trajectory: AnimationTrajectory.curveDefinedByPoints,
                            visibilityThreshold: {
                                top: 0.8,
                                bottom: -1,
                            },
                            trajectoryMetaData: {
                                points: [
                                    [0, 1, -200],
                                    [0, 0, -40],
                                    [0, -1, -30],
                                    [0, -2, -20],
                                    [0, -3, -25],
                                    [0, 0, 0],
                                ],
                                speed: 0.05,
                                steps: 1000,
                            },
                            config: { duration: 10 },
                        },
                    ],
                },
            ],
        },
        {
            type: ComponentTypes.Canvas,
            className: 'canvas',
            style: stylingDefaults.fullWidthFullHeightCanvas,
            camera: {
                type: CameraTypes.Perspective,
                position: [0, 0, 3],
            },
        },
    ],
};
