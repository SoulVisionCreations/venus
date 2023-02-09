import { stylingDefaults } from '../Constants/defaults';
import { Alignment, AnimationTrajectory, AnimationTypes, AssetTypes, ComponentTypes, ObjectTypes } from '../Types/enums';
import { ContainerNodeProps } from '../Types/types';

export const scrollAnimationExample: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [
        { assetId: '101', assetPath: 'data', assetType: AssetTypes.Implicit },
        { assetId: '11', assetPath: './Inter_Bold.json', assetType: AssetTypes.Font },
    ],
    children: [
        {
            type: ComponentTypes.Canvas,
            className: 'canvas',
            style: stylingDefaults.fullWidthFullHeightCanvas,
            camera: {
                position: [0, 0, 3],
            },
            assetIds: ['11'],
            objects: [
                {
                    type: ObjectTypes.Text3D,
                    assetId: '11',
                    text: 'Scroll Down',
                    font: './Inter_Bold.json',
                    position: [-0.7, 0, 0],
                    rotation: [-0.5, 0, 0],
                    scale: [0.2, 0, 0],
                },
            ],
        },
        {
            type: ComponentTypes.Container,
            className: 'rootContainer',
            alignment: Alignment.Horizontal,
            assets: [
                { assetId: '101', assetPath: 'data', assetType: AssetTypes.Implicit },
                { assetId: '11', assetPath: './Inter_Bold.json', assetType: AssetTypes.Font },
            ],
            children: [
                {
                    type: ComponentTypes.Canvas,
                    className: 'canvas',
                    style: { flexGrow: 1, height: '750px' },
                    camera: {
                        position: [0, 0, 3],
                    },
                    assetIds: ['101'],
                    objects: [
                        {
                            type: ObjectTypes.ImplicitObject,
                            assetId: '101',
                            position: [0, 0, -50],
                            rotation: [-Math.PI / 2.5, 0, Math.PI / 4],
                            scale: [0.5, 0.5, 0.5],
                            animations: [
                                {
                                    type: AnimationTypes.scroll,
                                    visibilityThreshold: {
                                        top: 0.3,
                                        bottom: 0.3,
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
                        position: [0, 0, 3],
                    },
                    assetIds: ['101'],
                    objects: [
                        {
                            type: ObjectTypes.ImplicitObject,
                            assetId: '101',
                            position: [0, 0, -50],
                            rotation: [-Math.PI / 2.5, 0, Math.PI / 4],
                            scale: [0.5, 0.5, 0.5],
                            animations: [
                                {
                                    type: AnimationTypes.scroll,
                                    visibilityThreshold: {
                                        top: 0.3,
                                        bottom: 0.3,
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
                position: [0, 0, 3],
            },
            assetIds: ['101', '11'],
            objects: [
                // {
                //   type: ObjectTypes.Text3D,
                //   assetId: '11',
                //   text: 'Scroll Down',
                //   font: "./Inter_Bold.json",
                //   position: [-0.1,-0.5,-50],
                //   rotation: [-0.5, 0, 0],
                //   scale: 0.2,
                //   animations: [{
                //     type: Animation.type.scroll,
                //     visibilityThreshold: {
                //       top: 0.6,
                //       bottom: -0.5
                //     },
                //     trajectory: Animation.trajectory.curveDefinedByPoints,
                //     trajectoryMetaData: {
                //       points: [[-0.1,-0.5,-50], [-0.3, -0.25, -20], [-0.7, 0, 0]],
                //       speed: 0.0005
                //     },
                //     config: { mass: 4, tension: 280, friction: 90 }
                //   }],
                // },
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '101',
                    position: [0.3, -0.4, 0],
                    rotation: [-Math.PI / 2.5, 0, Math.PI / 4],
                    scale: [0.4, 0.4, 0.4],
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            visibilityThreshold: {
                                top: 0.6,
                                bottom: -0.5,
                            },
                            trajectory: AnimationTrajectory.curveDefinedByPoints,
                            trajectoryMetaData: {
                                points: [
                                    [0.3, -0.4, 0],
                                    [0.5, 1, -0.2],
                                    [3.5, 1, -0.4],
                                ],
                                speed: 0.0005,
                            },
                            config: { mass: 4, tension: 280, friction: 90 },
                        },
                    ],
                },
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '101',
                    position: [-0.3, -0.4, 0],
                    rotation: [-Math.PI / 2.5, 0, -Math.PI / 4],
                    scale: [0.4, 0.4, 0.4],
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            visibilityThreshold: {
                                top: 0.6,
                                bottom: -0.5,
                            },
                            trajectory: AnimationTrajectory.curveDefinedByPoints,
                            trajectoryMetaData: {
                                points: [
                                    [-0.3, -0.4, 0],
                                    [-0.5, 1, -0.2],
                                    [-3.5, 1, -0.4],
                                ],
                                speed: 0.0005,
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
            style: stylingDefaults.fullWidthFullHeightCanvas,
            camera: {
                position: [0, 0, 3],
            },
        },
    ],
};
