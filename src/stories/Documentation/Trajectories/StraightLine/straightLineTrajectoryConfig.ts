import { stylingDefaults } from '../../../../constants/defaults';
import { Alignment, AnimationTypes, CameraTypes, ComponentTypes, LightTypes, MaterialTypes, ObjectTypes, StandardGeometryTypes, Trajectory } from '../../../../types/enums';
import { lineCurve3MetaData } from '../../../../types/trajectoryTypes';

export const getStraightLineTrajectoryConfig = ({ startPoint, endPoint }: lineCurve3MetaData) => {
    return {
        type: ComponentTypes.Container,
        alignment: Alignment.Vertical,
        children: [
            {
                type: ComponentTypes.Canvas,
                style: stylingDefaults.fullWidthFullHeightCanvas,
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
                objects: [
                    {
                        type: ObjectTypes.StandardObject,
                        geometry: { type: StandardGeometryTypes.SphereGeometry, radius: 0.2 },
                        material: { type: MaterialTypes.MeshStandardMaterial },
                        position: [0, 0.5, 0],
                        rotation: [0, 0, 0],
                        scale: [0.4, 0.4, 0.4],
                        animations: [
                            {
                                type: AnimationTypes.chained,
                                visibilityThreshold: {
                                    sceneTopToScreenBottomRatio: 0,
                                    sceneBottomToScreenTopRatio: 0,
                                },
                                initialPause: 0,
                                repeat: true,
                                interval: 0,
                                springConfig: { duration: 50 },
                                childAnimations: [
                                    {
                                        animationTrajectories: {
                                            position: {
                                                trajectoryMetaData: {
                                                    type: Trajectory.line3,
                                                    startPoint,
                                                    endPoint,
                                                },
                                            },
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    };
};
