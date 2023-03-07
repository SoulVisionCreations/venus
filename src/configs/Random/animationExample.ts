import { stylingDefaults } from '../../constants/defaults';
import { Alignment, AnimationTrajectory, AnimationTypes, AssetTypes, ComponentTypes, ObjectTypes } from '../../types/enums';
import { ContainerNodeProps } from '../../types/types';

export const animationExample: ContainerNodeProps = {
    type: ComponentTypes.Container,
    className: 'rootContainer',
    alignment: Alignment.Vertical,
    assets: [{ assetId: '101', assetPath: './assets/implicit/data', assetType: AssetTypes.Implicit }],
    children: [
        {
            type: ComponentTypes.Canvas,
            className: 'canvas',
            style: stylingDefaults.fullWidthFullHeightCanvas,
            assetIds: ['101'],
            camera: {
                position: [0, 0, 3],
            },
            objects: [
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '101',
                    position: [0, 0, 0],
                    rotation: [-Math.PI / 2.5, 0, -Math.PI / 4],
                    scale: [0.15, 0.15, 0.15],
                    animations: [
                        {
                            initialPause: 100,
                            type: AnimationTypes.intro,
                            trajectory: AnimationTrajectory.manual,
                            stateIncrements: [
                                {
                                    rotation: [0, 0, 2 * Math.PI],
                                    scale: [0.3, 0.3, 0.3],
                                },
                            ],
                            config: { mass: 4, friction: 17 },
                        },
                        {
                            initialPause: 0,
                            type: AnimationTypes.chained,
                            repeat: true,
                            interval: 100,
                            childAnimations: [
                                {
                                    trajectory: AnimationTrajectory.manual,
                                    stateIncrements: [
                                        {
                                            rotation: [0, 0, Math.PI],
                                        },
                                        {
                                            rotation: [0, 0, -Math.PI],
                                        },
                                    ],
                                    config: { mass: 4, friction: 17 },
                                },
                                {
                                    trajectory: AnimationTrajectory.manual,
                                    stateIncrements: [
                                        {
                                            position: [0.7, 0, 0],
                                        },
                                        {
                                            position: [0, 0.7, 0],
                                        },
                                    ],
                                    config: { duration: 1000 },
                                },
                                {
                                    trajectory: AnimationTrajectory.manual,
                                    stateIncrements: [
                                        {
                                            position: [-0.7, -0.7, 0],
                                        },
                                    ],
                                    config: { mass: 4, friction: 17 },
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
            assetIds: ['101'],
            style: stylingDefaults.fullWidthFullHeightCanvas,
            camera: {
                position: [0, 0, 3],
            },
            objects: [
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '101',
                    useInstancing: false,
                    position: [-0.5, 0, 0],
                    rotation: [-Math.PI / 2.5, 0, -Math.PI / 4],
                    scale: [0.2, 0.2, 0.2],
                    animations: [
                        {
                            initialPause: 0,
                            type: AnimationTypes.chained,
                            repeat: true,
                            interval: 100,
                            childAnimations: [
                                {
                                    trajectory: AnimationTrajectory.ellipse,
                                    trajectoryMetaData: {
                                        center: [0, 0, 0],
                                        height: 0.5,
                                        width: 1.5,
                                        steps: 100,
                                        rotateCurve: [
                                            {
                                                axis: [1, 0, 0],
                                                angle: -Math.PI / 4,
                                            },
                                        ],
                                    },
                                    config: { duration: 100 },
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
            assetIds: ['101'],
            style: stylingDefaults.fullWidthFullHeightCanvas,
            camera: {
                position: [0, 0, 3],
            },
            objects: [
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '101',
                    position: [0.3, -0.4, 0],
                    rotation: [-Math.PI / 2.5, 0, 0],
                    scale: [0.4, 0.4, 0.4],
                    animations: [
                        {
                            initialPause: 0,
                            type: AnimationTypes.intro,
                            trajectory: AnimationTrajectory.curveDefinedByPoints,
                            trajectoryMetaData: {
                                points: [
                                    [0.3, -0.4, 0],
                                    [0.5, 0.6, -0.2],
                                    [2.5, 1, -0.4],
                                ],
                                steps: 100,
                            },
                            config: { duration: 25 },
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
                            initialPause: 0,
                            type: AnimationTypes.intro,
                            trajectory: AnimationTrajectory.curveDefinedByPoints,
                            trajectoryMetaData: {
                                points: [
                                    [-0.3, -0.4, 0],
                                    [-0.5, 0.6, -0.2],
                                    [-2.5, 1, -0.4],
                                ],
                                steps: 100,
                            },
                            config: { duration: 25 },
                        },
                    ],
                },
            ],
        },
    ],
};
