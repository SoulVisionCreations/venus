import { stylingDefaults } from '../../../../../constants/defaults';
import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes } from '../../../../../types/enums';
import { ContainerNodeProps } from '../../../../../types/types';

export const RotateOnScrollAlongFixedAxisConfig: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [{ assetId: '101', assetPath: './assets/obj/objexp/', assetType: AssetTypes.Mesh }],
    children: [
        {
            type: ComponentTypes.Canvas,
            style: stylingDefaults.fullWidthFullHeightCanvas,
            camera: {
                type: CameraTypes.Perspective,
                position: [0, 0, 3],
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
                    position: [0, 0, 0],
                    rotation: [Math.PI / 16, 0, 0],
                    scale: [2, 2, 2],
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            visibilityThreshold: {
                                sceneTopToScreenBottomRatio: 0.5,
                                sceneBottomToScreenTopRatio: 0.5,
                            },
                            rotateOnScroll: {
                                axis: [0, 1, 0],
                                velocity: 0.01,
                                maxRotation: Math.PI * 10,
                                minRotation: -Math.PI * 10,
                            },
                            springConfig: { mass: 4, tension: 280, friction: 90 },
                        },
                    ],
                },
            ],
        },
    ],
};
