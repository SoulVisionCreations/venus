import { stylingDefaults } from '../../../../../constants/defaults';
import { Alignment, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, LightTypes, ObjectTypes, Trajectory } from '../../../../../types/enums';
import { ContainerNodeProps } from '../../../../../types/types';

export const RotationByMultipleLineTrajectoryConfig: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [{ assetId: '102', assetPath: 'data2', assetType: AssetTypes.Implicit }],
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
            assetIds: ['102'],
            objects: [
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '102',
                    position: [0, 0, 0],
                    rotation: [-Math.PI / 2, 0, Math.PI],
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
                                        type: Trajectory.multipleCurvePath,
                                        curves: [
                                            {
                                                type: Trajectory.line3,
                                                startPoint: [-Math.PI / 2, 0, Math.PI],
                                                endPoint: [0, 0, 0],
                                                closed: false,
                                            },
                                            {
                                                type: Trajectory.line3,
                                                startPoint: [0, 0, 0],
                                                endPoint: [0, Math.PI / 2, 0],
                                                closed: false,
                                            },
                                            {
                                                type: Trajectory.line3,
                                                startPoint: [0, Math.PI / 2, 0],
                                                endPoint: [0, Math.PI / 4, 0],
                                                closed: false,
                                            },
                                            {
                                                type: Trajectory.line3,
                                                startPoint: [0, Math.PI / 4, 0],
                                                endPoint: [Math.PI / 4, Math.PI / 4, 0],
                                                closed: false,
                                            },
                                        ],
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
