import { stylingDefaults } from '../constants/defaults';
import { Alignment, AnimationTrajectory, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectHtmlTypes, ObjectTypes, TextTypes } from '../types/enums';
import { ContainerNodeProps } from '../types/types';

export const DemoExample: ContainerNodeProps = {
    type: ComponentTypes.Container,
    className: 'rootContainer',
    alignment: Alignment.Vertical,
    style: stylingDefaults.flexColumnContainer,
    assets: [
        // 'REC-jxvfZgVpLiDq9sM/deliverables/DLV-AhYTvfCZEUcLdXeekERqrymJA/
        { assetId: '100001', assetPath: './scene.glb', assetType: AssetTypes.Gltf },
        { assetId: '101', assetPath: './Inter_Bold.json', assetType: AssetTypes.Font },
    ],
    children: [
        {
            type: ComponentTypes.Canvas,
            className: 'canvas',
            style: stylingDefaults.fullWidthFullHeightCanvas,
            environment: { files: './puresky.hdr' },
            showDimensions: true,
            assetIds: ['100001', '101'],
            camera: {
                type: CameraTypes.Perspective,
                position: [0, 0, 5],
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
            objects: [
                {
                    type: ObjectTypes.GltfObject,
                    assetId: '100001',
                    position: [0, 0, 0],
                    rotation: [Math.PI / 2, 0, 0],
                    scale: [2, 2, 2],
                    objectHtmls: [
                        {
                            type: ObjectHtmlTypes.PriceTag,
                            price: '$100',
                            rotation: [-Math.PI / 2, 0, 0],
                            position: [0.3, 0, -0.2],
                            scale: 1.5,
                        },
                    ],
                    animations: [
                        {
                            initialPause: 500,
                            type: AnimationTypes.intro,
                            trajectory: AnimationTrajectory.manual,
                            stateIncrements: [
                                {
                                    scale: [1, 1, 1],
                                },
                            ],
                            config: { mass: 4, friction: 17 },
                        },
                        {
                            initialPause: 500,
                            type: AnimationTypes.scroll,
                            trajectory: AnimationTrajectory.curveDefinedByPoints,
                            trajectoryMetaData: {
                                points: [
                                    [0, 0, 0],
                                    [2.5, 1, 0],
                                    [2.5, 0, 0],
                                ],
                                steps: 200,
                            },
                            config: { duration: 50 },
                        },
                    ],
                },
                {
                    type: ObjectTypes.Text3D,
                    assetId: '101',
                    text: 'Doris Armchair',
                    position: [0, 0, 0],
                    scale: [0, 0, 0],
                    color: 'black',
                    animations: [
                        {
                            initialPause: 500,
                            type: AnimationTypes.intro,
                            trajectory: AnimationTrajectory.manual,
                            stateIncrements: [
                                {
                                    position: [0, 0, 1],
                                    scale: [0.4, 0.4, 0.4],
                                },
                            ],
                            config: { mass: 4, friction: 17 },
                        },
                        {
                            initialPause: 500,
                            type: AnimationTypes.scroll,
                            trajectory: AnimationTrajectory.curveDefinedByPoints,
                            trajectoryMetaData: {
                                points: [
                                    [0, 0, 1],
                                    [0, 4, 1],
                                    [0, 8, 1],
                                ],
                                steps: 200,
                            },
                            config: { duration: 50 },
                        },
                    ],
                },
            ],
            texts: [
                {
                    type: TextTypes.Paragraph,
                    data: 'Before they sold out salvia aesthetic, hexagon disrupts sustainable vaporware crucifix succulents kale chips. Selvage knausguard scenester.',
                    position: [0, -0.8, 1],
                    scale: [1, 1, 1],
                    maxWidth: 4,
                    textAlign: 'center',
                    numbered: true,
                    fontSize: 0.1,
                    color: 'black',
                    animations: [
                        {
                            initialPause: 500,
                            type: AnimationTypes.scroll,
                            trajectory: AnimationTrajectory.curveDefinedByPoints,
                            trajectoryMetaData: {
                                points: [
                                    [0, -0.8, 1],
                                    [0, 3.2, 1],
                                    [0, 5.2, 1],
                                ],
                                steps: 200,
                            },
                            config: { duration: 50 },
                        },
                    ],
                },
                {
                    type: TextTypes.Paragraph,
                    data: 'Smooth design',
                    position: [0.95, -4, 0],
                    scale: [0.4, 0.4, 0.4],
                    color: 'black',
                    textAlign: 'left',
                    fontSize: 0.5,
                    animations: [
                        {
                            initialPause: 500,
                            type: AnimationTypes.scroll,
                            trajectory: AnimationTrajectory.curveDefinedByPoints,
                            trajectoryMetaData: {
                                points: [
                                    [0.95, -4, 1],
                                    [0.95, 0, 1],
                                    [0.95, 4, 1],
                                ],
                                steps: 200,
                            },
                            config: { duration: 50 },
                        },
                    ],
                },
                {
                    type: TextTypes.Paragraph,
                    data: 'Humblebrag pickled listicle yes plz williamsburg shoreditch tumblr, put a bird on it cred knausgaard snackwave scenester. Before they sold out salvia aesthetic.',
                    position: [1.2, -4.6, 0],
                    scale: [1, 1, 1],
                    maxWidth: 1.8,
                    textAlign: 'left',
                    fontSize: 0.1,
                    color: 'black',
                    animations: [
                        {
                            initialPause: 500,
                            type: AnimationTypes.scroll,
                            trajectory: AnimationTrajectory.curveDefinedByPoints,
                            trajectoryMetaData: {
                                points: [
                                    [1.2, -4.6, 1],
                                    [1.2, -0.6, 1],
                                    [1.2, 3.4, 1],
                                ],
                                steps: 100,
                            },
                            config: { duration: 25 },
                        },
                    ],
                },
                {
                    type: TextTypes.Paragraph,
                    data: 'Softness of the upholstery',
                    position: [-0.95, -7.4, 0],
                    scale: [0.4, 0.4, 0.4],
                    color: 'black',
                    textAlign: 'left',
                    fontSize: 0.5,
                    animations: [
                        {
                            initialPause: 500,
                            type: AnimationTypes.scroll,
                            trajectory: AnimationTrajectory.curveDefinedByPoints,
                            trajectoryMetaData: {
                                points: [
                                    [-0.95, -7.4, 1],
                                    [-0.95, -3.4, 1],
                                    [-0.95, 0.6, 1],
                                ],
                                steps: 100,
                            },
                            config: { duration: 25 },
                        },
                    ],
                },
                {
                    type: TextTypes.Paragraph,
                    data: 'Humblebrag pickled listicle yes plz williamsburg shoreditch tumblr, put a bird on it cred knausgaard snackwave scenester. Before they sold out salvia aesthetic.',
                    position: [-1.2, -8, 0],
                    scale: [1, 1, 1],
                    maxWidth: 1.8,
                    textAlign: 'left',
                    fontSize: 0.1,
                    color: 'black',
                    animations: [
                        {
                            initialPause: 500,
                            type: AnimationTypes.scroll,
                            trajectory: AnimationTrajectory.curveDefinedByPoints,
                            trajectoryMetaData: {
                                points: [
                                    [-1.2, -8, 1],
                                    [-1.2, -4, 1],
                                    [-1.2, -0, 1],
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
