import { stylingDefaults } from '../../../../constants/defaults';
import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes, Trajectory } from '../../../../types/enums';
import { ContainerNodeProps } from '../../../../types/types';

export const RotationByLineTrajectoryConfig: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [
        {
            assetId: '101',
            assetPath: 'https://d2vy8yj9b7o26m.cloudfront.net/RnD_Datasets/ObjCap_out/prod_dev/avataar/sku_2022-12-07_14-17-28/implicit/sku_2022-12-07_14-17-28/base_high',
            assetType: AssetTypes.Implicit,
        },
    ],
    children: [
        {
            type: ComponentTypes.Canvas,
            style: { ...stylingDefaults.fullWidthFullHeightCanvas, height: '600px' },
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
                    type: ObjectTypes.ImplicitObject,
                    assetId: '101',
                    position: [0, 0, 0],
                    rotation: [Math.PI / 2, 0, 0],
                    scale: [1.5, 1.5, 1.5],
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            visibilityThreshold: {
                                sceneTopToScreenBottomRatio: 0.5,
                                sceneBottomToScreenTopRatio: 0.5,
                            },
                            animationTrajectories: {
                                rotation: {
                                    trajectoryMetaData: {
                                        type: Trajectory.line3,
                                        startPoint: [Math.PI / 2, 0, 0],
                                        endPoint: [0, 0, 0],
                                        equiSpacedPoints: true,
                                    },
                                    speed: 0.00025,
                                },
                            },
                            springConfig: { mass: 4, tension: 280, friction: 90 },
                        },
                    ],
                },
            ],
        },
    ],
};
