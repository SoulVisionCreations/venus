import { stylingDefaults } from '../../constants/defaults';
import { Alignment, AnimationTrajectory, AnimationTypes, ComponentTypes, ObjectTypes } from '../../types/enums';
import { ContainerNodeProps } from '../../types/types';
import { fonts } from '../../utils/fonts';

export const text3DAnimationDemo: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    children: [
        {
            type: ComponentTypes.Canvas,
            className: 'canvas',
            style: stylingDefaults.fullWidthFullHeightCanvas,
            camera: {
                position: [0, 0, 3],
                far: 10,
            },
            objects: [
                {
                    type: ObjectTypes.Text3D,
                    text: 'Text 3D',
                    font: fonts.droidSerif,
                    position: [0, 0, -15],
                    rotation: [Math.PI / 2, 0, 0],
                    scale: [0.5, 0.5, 0.5],
                    animations: [
                        {
                            type: AnimationTypes.intro,
                            initialPause: 400,
                            trajectory: AnimationTrajectory.manual,
                            stateIncrements: [
                                {
                                    position: [0, 0, 10],
                                    rotation: [-Math.PI / 64, 0, 0],
                                },
                                {
                                    position: [0, 0, 5],
                                    rotation: [-Math.PI / 2 + Math.PI / 64, 0, 0],
                                },
                            ],
                            config: { duration: 1000 },
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
                position: [0, 0, 3],
                far: 30,
            },
            objects: [
                {
                    type: ObjectTypes.Text3D,
                    text: 'Text 3D',
                    font: fonts.droidSerif,
                    position: [0, 0, -35],
                    rotation: [Math.PI / 2 + Math.PI / 16, 0, 0],
                    scale: [0.5, 0.5, 0.5],
                    animations: [
                        {
                            type: AnimationTypes.scroll,
                            initialPause: 400,
                            trajectory: AnimationTrajectory.curveDefinedByPoints,
                            visibilityThreshold: {
                                top: 0.5,
                                bottom: 0,
                            },
                            trajectoryMetaData: {
                                points: [
                                    [0, 0, -35],
                                    [0, 0, -5],
                                    [0, 0, 0],
                                ],
                                rotationTrajectory: {
                                    axis: [1, 0, 0],
                                    frequency: (Math.PI / 2 + Math.PI / 16) / (2 * Math.PI),
                                },
                            },
                            config: { mass: 4, friction: 80 },
                        },
                    ],
                },
            ],
        },
    ],
};
