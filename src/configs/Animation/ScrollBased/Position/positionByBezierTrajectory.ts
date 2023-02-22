import { stylingDefaults } from '../../../../constants/defaults';
import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes, Trajectory } from '../../../../types/enums';
import { ContainerNodeProps } from '../../../../types/types';

export const PositionByBezierTrajectoryWithScaleAndRotateConfig: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [
        { assetId: '11', assetPath: './Inter_Bold.json', assetType: AssetTypes.Font },
        { assetId: '101', assetPath: './scene.glb', assetType: AssetTypes.Gltf },
        { assetId: '102', assetPath: 'data2', assetType: AssetTypes.Implicit },
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
                    assetIds: ['102'],
                    objects: [
                        {
                            type: ObjectTypes.ImplicitObject,
                            assetId: '102',
                            position: [0, -10, -40],
                            rotation: [-Math.PI / 2, 0, 0],
                            scale: [1, 1, 1],
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
                                                type: Trajectory.quadracticBezierCurve3,
                                                points: [
                                                    [0, -10, -40],
                                                    [0, 0.5, -5],
                                                    [0, -0.5, 0],
                                                ],
                                                equiSpacedPoints: false,
                                            },
                                            speed: 0.005,
                                        },
                                    },
                                    rotateOnScroll: {
                                        axis: [0, 0, 1],
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
                            type: ObjectTypes.GltfObject,
                            assetId: '101',
                            position: [0, -10, -50],
                            rotation: [0, 0, 0],
                            scale: [1.5, 1.5, 1.5],
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
                                                type: Trajectory.quadracticBezierCurve3,
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
                    font: './Inter_Bold.json',
                    position: [0, 0, 0],
                    rotation: [-0.5, 0, 0],
                    scale: [0.2, 0.2, 0.2],
                },
            ],
        },
    ],
};
