import { stylingDefaults } from '../constants/defaults';
import { Alignment, AnimationTrajectory, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, ImageTypes, LightTypes, ObjectHtmlTypes, ObjectTypes, TextTypes } from '../types/enums';
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
                    type: ObjectTypes.ImplicitObject,
                    assetId: '100001',
                    useInstancing: false,
                    position: [0, 0.7, 0],
                    rotation: [2, Math.PI, 1],
                    scale: [0.5, 0.5, 0.5],
                    objectHtmls: [
                        {
                            type: ObjectHtmlTypes.PriceTag,
                            price: 'IMPLICIT',
                            rotation: [Math.PI / 2, (3 * Math.PI) / 4, 0],
                            position: [0.2, 0, 0.3],
                            scale: 1.5,
                        },
                    ],
                    animations: [
                        {
                            type: AnimationTypes.intro,
                            initialPause: 200,
                            trajectory: AnimationTrajectory.manual,
                            stateIncrements: [
                                {
                                    rotation: [0, 0, Math.PI * 2],
                                    scale: [0.5, 0.5, 0.5],
                                },
                            ],
                            config: { duration: 1000 },
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
                    scale: [0.7, 0.7, 0.7],
                },
                {
                    // type: ImageTypes.Rounded,
                    assetId: '1003',
                    position: [0, -0.5, -0.25],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                },
                {
                    // type: ImageTypes.Rounded,
                    assetId: '1004',
                    position: [1.5, -0.5, 0],
                    rotation: [0, -0.5, 0],
                    scale: [0.7, 0.7, 0.7],
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
                type: CameraTypes.Perspective,
                position: [0, 0, 4],
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
                    assetId: '1005',
                    position: [0, 0.5, 0],
                    rotation: [0, 0, 0],
                    scale: [0.5, 0.5, 0.5],
                    animations: [
                        {
                            initialPause: 1000,
                            type: AnimationTypes.intro,
                            trajectory: AnimationTrajectory.manual,
                            stateIncrements: [
                                {
                                    rotation: [0, 0, 2 * Math.PI],
                                    scale: [1, 1, 1],
                                },
                            ],
                            config: { mass: 4, friction: 17 },
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
                    scale: [0.5, 0.5, 0.5],
                    color: '#60bcea',
                    animations: [
                        {
                            initialPause: 1000,
                            type: AnimationTypes.intro,
                            trajectory: AnimationTrajectory.manual,
                            stateIncrements: [
                                {
                                    rotation: [0, 0, 2 * Math.PI],
                                    scale: [1, 1, 1],
                                },
                            ],
                            config: { mass: 4, friction: 17 },
                        },
                    ],
                },
                {
                    type: TextTypes.List,
                    title: 'Why add 3D & AR to your store?',
                    list: [
                        '81% of shoppers feel more confident in their purchase as a result of using AR.',
                        'Provide customers with a sense of how products would look and fit in their environment.',
                        'Increase shopper confidence, order volume, and sales.',
                    ],
                    position: [0.2, -0.8, 0],
                    scale: [0.8, 0.8, 0.8],
                    numbered: true,
                    color: 'black',
                },
            ],
        },
    ],
};
