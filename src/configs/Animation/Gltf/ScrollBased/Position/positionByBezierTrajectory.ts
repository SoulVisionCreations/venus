import { stylingDefaults } from '../../../../../constants/defaults';
import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes, TrajectoryTypes } from '../../../../../types/enums';
import { ContainerNodeProps } from '../../../../../types/types';

export const PositionByBezierTrajectoryWithScaleAndRotateConfig: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [
        { assetId: '11', assetPath: './assets/font/Inter_Bold.json', assetType: AssetTypes.Font },
        { assetId: '101', assetPath: './assets/glb/scene.glb', assetType: AssetTypes.Mesh },
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
                    font: './assets/font/Inter_Bold.json',
                    position: [0, 0, 0],
                    rotation: [-0.5, 0, 0],
                    scale: [0.2, 0.2, 0.2],
                },
            ],
        },
        {
            type: ComponentTypes.Container,
            alignment: Alignment.Horizontal,
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
                            position: [0, -10, -50],
                            rotation: [0, 0, 0],
                            scale: [2, 2, 2],
                            animations: [
                                {
                                    type: AnimationTypes.scroll,
                                    visibilityThreshold: {
                                        sceneTopToScreenBottomRatio: 0.6,
                                        sceneBottomToScreenTopRatio: 2,
                                    },
                                    animationTrajectories: {
                                        position: {
                                            trajectoryMetaData: {
                                                type: TrajectoryTypes.quadracticBezierCurve3,
                                                points: [
                                                    [0, -10, -50],
                                                    [0, 0.5, -10],
                                                    [0, -0.5, 0],
                                                ],
                                                equiSpacedPoints: false,
                                            },
                                            speed: 0.005,
                                        },
                                    },
                                    rotateOnScroll: {
                                        axis: [0, 1, 0],
                                        velocity: 0.01,
                                        maxRotation: Math.PI * 2,
                                        minRotation: 0,
                                    },
                                    springConfig: { mass: 4, tension: 280, friction: 90 },
                                },
                            ],
                        },
                    ],
                },
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
                            position: [0, -10, -50],
                            rotation: [0, 0, 0],
                            scale: [2, 2, 2],
                            animations: [
                                {
                                    type: AnimationTypes.scroll,
                                    visibilityThreshold: {
                                        sceneTopToScreenBottomRatio: 0.6,
                                        sceneBottomToScreenTopRatio: 2,
                                    },
                                    animationTrajectories: {
                                        position: {
                                            trajectoryMetaData: {
                                                type: TrajectoryTypes.quadracticBezierCurve3,
                                                points: [
                                                    [0, -10, -50],
                                                    [0, 0.5, -10],
                                                    [0, -0.5, 0],
                                                ],
                                                equiSpacedPoints: false,
                                            },
                                            speed: 0.005,
                                        },
                                    },
                                    rotateOnScroll: {
                                        axis: [0, 1, 0],
                                        velocity: 0.01,
                                        maxRotation: Math.PI * 2,
                                        minRotation: 0,
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
                    text: 'Scroll up',
                    font: './assets/font/Inter_Bold.json',
                    position: [0, 0, 0],
                    rotation: [-0.5, 0, 0],
                    scale: [0.2, 0.2, 0.2],
                },
            ],
        },
    ],
};
