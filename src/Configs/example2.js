import { stylingDefaults } from '../Constants/defaults';
import {
    ComponentTypes,
    Alignment,
    ObjectTypes,
    LightTypes,
    SceneControlTypes,
    StandardGeometryTypes,
    MaterialTypes,
    ObjectHtmlTypes,
    Animation,
    TextTypes,
    ImageTypes,
} from '../Types/types';

export const config2 = {
    type: ComponentTypes.Container,
    className: 'rootContainer',
    alignment: Alignment.Vertical,
    style: stylingDefaults.flexColumnContainer,
    assets: [
        // 'REC-jxvfZgVpLiDq9sM/deliverables/DLV-AhYTvfCZEUcLdXeekERqrymJA/
        { assetId: 100001, assetPath: 'data', assetType: 'implicit' },
        { assetId: 10001, assetPath: './1863416.glb', assetType: 'gltf' },
        { assetId: 1001, assetPath: './chair.png', assetType: 'image' },
        { assetId: 101, assetPath: './Inter_Bold.json', assetType: 'font' },
    ],
    children: [
        {
            type: ComponentTypes.Canvas,
            className: 'canvas',
            style: stylingDefaults.fullWidthFullHeightCanvas,
            assetIds: ['100001', '10001', '10001', '101'],
            environment: {
                path: './puresky.hdr',
            },
            camera: {
                position: [0, 0, 2],
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
            sceneControl: {
                type: SceneControlTypes.Orbit,
            },
            objects: [
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '100001',
                    useInstancing: false,
                    position: [0.5, 0.5, 0],
                    // animations: [{type: AnimationTypes.Rotate}],
                    scale: [0.2, 0.2, 0.2],
                    objectHtmls: [
                        {
                            type: ObjectHtmlTypes.PriceTag,
                            price: '$100',
                            rotation: [Math.PI / 2, Math.PI / 4, 0],
                            position: [-3, 0, 0],
                            scale: 1,
                            transform: true,
                        },
                    ],
                },
                {
                    type: ObjectTypes.GltfObject,
                    assetId: '10001',
                    scale: [1, 1, 1],
                    objectHtmls: [
                        {
                            type: ObjectHtmlTypes.PriceTag,
                            price: '$50',
                            position: [0.3, 0.5, 0],
                            scale: 2,
                            transform: true,
                        },
                    ],
                    animations: [
                        {
                            initialPause: 0,
                            type: Animation.type.intro,
                            trajectory: Animation.trajectory.curveDefinedByPoints,
                            trajectoryMetaData: {
                                points: [
                                    [-0.1, -0.3, 0],
                                    [-0.1, -0.2, -0.1],
                                    [-0.3, -0.1, -0.1],
                                ],
                                steps: 100,
                            },
                            config: { duration: 25 },
                        },
                    ],
                },
                {
                    type: ObjectTypes.StandardObject,
                    geometry: { type: StandardGeometryTypes.BoxGeometry, height: 0.1 },
                    material: {
                        type: MaterialTypes.MeshStandardMaterial,
                        color: 'green',
                    },
                },
                {
                    type: ObjectTypes.Text3D,
                    assetId: '101',
                    text: 'Chair',
                    scale: [0.2, 0.2, 0.2],
                    color: 'pink',
                    animations: [
                        {
                            initialPause: 0,
                            type: Animation.type.intro,
                            trajectory: Animation.trajectory.curveDefinedByPoints,
                            trajectoryMetaData: {
                                points: [
                                    [0.1, -0.3, 0],
                                    [0.1, -0.1, -0.1],
                                    [0.3, 0.1, 0.4],
                                ],
                                steps: 100,
                            },
                            config: { duration: 25 },
                        },
                    ],
                },
            ],
            images: [
                {
                    type: ImageTypes.Square,
                    assetId: '1001',
                    position: [-0.5, 0, 0],
                    rotation: [0, 0, 0],
                    scale: 1,
                },
            ],
            texts: [
                {
                    type: TextTypes.Paragraph,
                    text: 'Yellow velvet recliner',
                    position: [0.7, 0, 0],
                    scale: 2,
                    style: { color: 'black' },
                },
                {
                    type: TextTypes.List,
                    title: 'Features of Chair',
                    list: ['Super Light', 'Affordable and Durable'],
                    position: [0.7, -0.2, 0],
                    scale: 1.2,
                    numbered: false,
                    style: { color: 'gray' },
                },
            ],
        },
    ],
};
