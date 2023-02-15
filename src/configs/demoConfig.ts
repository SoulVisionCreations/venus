import { stylingDefaults } from '../constants/defaults';
import { Alignment, AnimationTrajectory, AnimationTypes, AssetTypes, ComponentTypes, ImageTypes, LightTypes, ObjectHtmlTypes, ObjectTypes, TextTypes } from '../types/enums';
import { ContainerNodeProps } from '../types/types';

export const demoConfig: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [
        { assetId: '101', assetPath: 'data2', assetType: AssetTypes.Implicit },
        { assetId: '105', assetPath: './Inter_Bold.json', assetType: AssetTypes.Font },
        { assetId: '106', assetPath: 'data', assetType: AssetTypes.Implicit },
    ],
    children: [
        {
            type: ComponentTypes.Canvas,
            className: 'canvas',
            style: stylingDefaults.fullWidthFullHeightCanvas,
            assetIds: ['101'],
            camera: {
                position: [0, 0, 2],
            },
            objects: [
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '101',
                    position: [0, 0, 0],
                    rotation: [Math.PI/2, Math.PI, Math.PI/4],
                    scale: [0.25, 0.25, 0.25],
                    objectHtmls: [
                        {
                            type: ObjectHtmlTypes.PriceTag,
                            price: '$ 100000',
                            rotation: [Math.PI / 2, (3 * Math.PI) / 4, 0],
                            position: [0.2, 0, 0.3],
                            scale: 1.5,
                        },
                    ],
                    animations: [
                        {
                            type: AnimationTypes.intro,
                            initialPause: 400,
                            trajectory: AnimationTrajectory.manual,
                            stateIncrements: [
                                {
                                    rotation: [0, 0, Math.PI*2],
                                    scale: [1.5, 1.5, 1.5]
                                }
                            ],
                            config: {duration: 2000}
                        }
                    ]
                },
            ],
        },
        {
            type: ComponentTypes.Container,
            alignment: Alignment.Horizontal,
            style: stylingDefaults.fullWidthFullHeightCanvas,
            children:[
                {
                    type: ComponentTypes.Canvas,
                    style: stylingDefaults.fullHeightCanvas,
                    camera: {
                        position: [0, -0.2, 3],
                    },
                    assetIds: ['105'],
                    texts: [
                        {
                            type: TextTypes.List,
                            list: [
                                '81% of shoppers feel more confident',
                                'Provide customers with a sense',
                            ],
                            position: [0, 0, 0],
                            scale: [0.4, 0.4, 0.4],
                            numbered: false,
                            style: { color: 'black', alignText: 'center' },
                        },
                    ],
                },
                {
                    type: ComponentTypes.Canvas,
                    style: stylingDefaults.fullHeightCanvas,
                    camera: {
                        position: [0, 0, 3],
                    },
                    assetIds: ['106'],
                    objects: [
                        {
                            type: ObjectTypes.ImplicitObject,
                            assetId: '106',
                            position: [-0.2, 0.2, 0],
                            rotation: [-Math.PI / 2.2, 0, -Math.PI / 4],
                            scale: [2, 2, 2],
                            animations: [
                                {
                                    type: AnimationTypes.scroll,
                                    visibilityThreshold: {
                                        top: 0.5,
                                        bottom: -0.5,
                                    },
                                    rotationMetaData: {
                                        axis: [0, 0, 1],
                                        velocity: 0.004
                                    },
                                    config: { mass: 4, tension: 280, friction: 90 },
                                },
                            ],
                        }
                    ]
                }
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
    ],
};
