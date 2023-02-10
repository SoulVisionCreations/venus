import { stylingDefaults } from '../constants/defaults';
import { Alignment, AnimationTrajectory, AnimationTypes, AssetTypes, ComponentTypes, ImageTypes, LightTypes, ObjectHtmlTypes, ObjectTypes, SceneControlTypes, TextTypes } from '../types/enums';
import { ContainerNodeProps } from '../types/types';

export const textImageExample: ContainerNodeProps = {
    type: ComponentTypes.Container,
    className: 'rootContainer',
    alignment: Alignment.Vertical,
    style: stylingDefaults.flexColumnContainer,
    assets: [
        // 'REC-jxvfZgVpLiDq9sM/deliverables/DLV-AhYTvfCZEUcLdXeekERqrymJA/
        { assetId: '100001', assetPath: 'data2', assetType: AssetTypes.Implicit },
        // { assetId: '1001', assetPath: './chair.png', assetType: AssetTypes.Image },
        { assetId: '1002', assetPath: './impnerf.png', assetType: AssetTypes.Image },
        { assetId: '1003', assetPath: './nrf.jpeg', assetType: AssetTypes.Image },
        { assetId: '1004', assetPath: './demo.jpeg', assetType: AssetTypes.Image },
        { assetId: '101', assetPath: './Inter_Bold.json', assetType: AssetTypes.Font },
        { assetId: '1005', assetPath: './product.gif', assetType: AssetTypes.Image },
        { assetId: '1006', assetPath: './avataar.png', assetType: AssetTypes.Image },
    ],
    children: [
        {
            type: ComponentTypes.Canvas,
            className: 'canvas',
            style: stylingDefaults.fullWidthLargeHeightCanvas,
            assetIds: ['100001', '1002', '1003', '1004', '101'],
            environment: { files: './puresky.hdr' },
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
                    position: [0, 0.7, 0],
                    rotation: [2, Math.PI, 1],
                    scale: [1.2, 1.2, 1.2],
                    objectHtmls: [
                        {
                            type: ObjectHtmlTypes.PriceTag,
                            price: 'IMPLICIT',
                            rotation: [Math.PI / 2, (3 * Math.PI) / 4, 0],
                            position: [0.2, 0, 0.3],
                            scale: 1.5,
                        },
                    ],
                },
                {
                    type: ObjectTypes.Text3D,
                    assetId: '101',
                    text: '3D',
                    position: [-2, 0.4, 0],
                    scale: [0.6, 0.6, 0.6],
                    color: '#60bcea',
                },
                {
                    type: ObjectTypes.Text3D,
                    assetId: '101',
                    text: 'AR',
                    position: [1, 0.4, 0],
                    scale: [0.5, 0.5, 0.5],
                    color: '#4d4d4d',
                },
            ],
            images: [
                {
                    // type: ImageTypes.Rounded,
                    assetId: '1002',
                    position: [-1.5, -0.5, 0],
                    rotation: [0, 0.5, 0],
                    scale: [0.07, 0.07, 0.07],
                },
                {
                    // type: ImageTypes.Rounded,
                    assetId: '1003',
                    position: [0, -0.5, -0.25],
                    rotation: [0, 0, 0],
                    scale: [0.015, 0.015, 0.015],
                },
                {
                    // type: ImageTypes.Rounded,
                    assetId: '1004',
                    position: [1.5, -0.5, 0],
                    rotation: [0, -0.5, 0],
                    scale: [0.07, 0.07, 0.07],
                },
            ],
        },
        {
            type: ComponentTypes.Canvas,
            className: 'canvas',
            style: stylingDefaults.fullWidthFullHeightCanvas,
            assetIds: ['1005', '1006'],
            environment: { files: './puresky.hdr' },
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
            images: [
                {
                    // type: ImageTypes.Square,
                    assetId: '1005',
                    position: [0, 0.5, 0],
                    rotation: [0, 0, 0],
                    scale: [0.1, 0.1, 0.1],
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            visibilityThreshold: {
                                top: 0.6,
                                bottom: -1,
                            },
                            trajectory: AnimationTrajectory.curveDefinedByPoints,
                            trajectoryMetaData: {
                                points: [
                                    [0, 0.5, 0],
                                    [-2, 0.5, 0],
                                    [-4, 0.5, 0],
                                ],
                                speed: 0.0005,
                            },
                            config: { mass: 4, tension: 280, friction: 90 },
                        },
                    ],
                },
                {
                    type: ImageTypes.Icon,
                    assetId: '1006',
                    position: [-2, -0.8, 0],
                    rotation: [0, 0, 0],
                    scale: [0.5, 0.5, 0.5],
                },
            ],
            texts: [
                {
                    type: TextTypes.Paragraph,
                    text: 'Trusted by everyone around the world !',
                    position: [0, -1.4, 0],
                    scale: [0.2, 0.2, 0.2],
                    style: { color: '#60bcea' },
                },
                {
                    type: TextTypes.List,
                    title: 'Why add 3D & AR to your store?',
                    list: [
                        '81% of shoppers feel more confident in their purchase as a result of using AR.',
                        'Provide customers with a sense of how products would look and fit in their environment.',
                        'Increase shopper confidence, order volume, and sales.',
                    ],
                    position: [0, -0.8, 0],
                    scale: [0.2, 0.2, 0.2],
                    numbered: false,
                    style: { color: 'black', alignText: 'center' },
                },
            ],
        },
    ],
};
