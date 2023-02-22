import { stylingDefaults } from '../../../../constants/defaults';
import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes } from '../../../../types/enums';
import { ContainerNodeProps } from '../../../../types/types';

export const introSpringAnimationByRotateAndScaleConfig: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [
        { assetId: '11', assetPath: './Inter_Bold.json', assetType: AssetTypes.Font },
        { assetId: '101', assetPath: './scene.glb', assetType: AssetTypes.Gltf },
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
                    position: [0, 0, 0],
                    rotation: [0, 0, 0],
                    scale: [0.25, 0.25, 0.25],
                    animations: [
                        {
                            type: AnimationTypes.intro,
                            visibilityThreshold: {
                                sceneTopToScreenBottomRatio: 0.5,
                                sceneBottomToScreenTopRatio: 0.5,
                            },
                            initialPause: 200,
                            springConfig: { mass: 4, friction: 17 },
                            stateIncrements: [
                                {
                                    rotation: [0, Math.PI * 2, 0],
                                    scale: [1.5, 1.5, 1.5],
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
