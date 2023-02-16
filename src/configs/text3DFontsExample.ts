import { stylingDefaults } from '../constants/defaults';
import { Alignment, AnimationTrajectory, AnimationTypes, CameraTypes, ComponentTypes, ObjectTypes } from '../types/enums';
import { ContainerNodeProps } from '../types/types';
import { fonts } from '../utils/fonts';

export const text3DFontsExample: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    style: stylingDefaults.fullWidthFullHeightCanvas,
    children: [
        {
            type: ComponentTypes.Container,
            alignment: Alignment.Horizontal,
            style: { flexGrow: 1 },
            children: [
                {
                    type: ComponentTypes.Canvas,
                    className: 'canvas',
                    style: { flexGrow: 2 },
                    camera: {
                        type: CameraTypes.Perspective,
                        position: [0, 0, 3],
                    },
                    objects: [
                        {
                            type: ObjectTypes.Text3D,
                            text: 'Text 3D Fonts',
                            font: fonts.helvetiker,
                            position: [-1.7, -0.1, 0],
                            rotation: [0, 0, 0],
                            scale: [0.4, 0.4, 0.4],
                            color: '#a1b6d4',
                            animations: [
                                {
                                    type: AnimationTypes.intro,
                                    initialPause: 400,
                                    trajectory: AnimationTrajectory.manual,
                                    stateIncrements: [
                                        {
                                            rotation: [Math.PI * 2, 0, 0],
                                        },
                                    ],
                                    config: { mass: 4, friction: 17 },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: ComponentTypes.Canvas,
                    className: 'canvas',
                    style: { flexGrow: 1 },
                    camera: {
                        type: CameraTypes.Perspective,
                        position: [0, 0, 3],
                    },
                    objects: [
                        {
                            type: ObjectTypes.Text3D,
                            text: 'Gentilis',
                            font: fonts.gentilis,
                            position: [-0.9, -0.1, 0],
                            rotation: [0, 0, 0],
                            scale: [0.3, 0.3, 0.3],
                            color: '#a1b6d4',
                            animations: [
                                {
                                    type: AnimationTypes.intro,
                                    initialPause: 1200,
                                    trajectory: AnimationTrajectory.manual,
                                    stateIncrements: [
                                        {
                                            rotation: [Math.PI * 2, 0, 0],
                                        },
                                    ],
                                    config: { mass: 4, friction: 17 },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: ComponentTypes.Canvas,
                    className: 'canvas',
                    style: { flexGrow: 1 },
                    camera: {
                        type: CameraTypes.Perspective,
                        position: [0, 0, 3],
                    },
                    objects: [
                        {
                            type: ObjectTypes.Text3D,
                            text: 'Gentilis Bold',
                            font: fonts.gentilisBold,
                            position: [-1, -0.1, 0],
                            rotation: [0, 0, 0],
                            scale: [0.3, 0.3, 0.3],
                            animations: [
                                {
                                    type: AnimationTypes.intro,
                                    initialPause: 1600,
                                    trajectory: AnimationTrajectory.manual,
                                    stateIncrements: [
                                        {
                                            rotation: [Math.PI * 2, 0, 0],
                                        },
                                    ],
                                    config: { mass: 4, friction: 17 },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: ComponentTypes.Container,
            alignment: Alignment.Horizontal,
            style: { flexGrow: 1 },
            children: [
                {
                    type: ComponentTypes.Canvas,
                    className: 'borderdBox',
                    camera: {
                        type: CameraTypes.Perspective,
                        position: [0, 0, 3],
                    },
                    objects: [
                        {
                            type: ObjectTypes.Text3D,
                            text: 'Optimer',
                            font: fonts.optimer,
                            position: [-0.6, -0.1, 0],
                            rotation: [0, 0, 0],
                            scale: [0.3, 0.3, 0.3],
                            animations: [
                                {
                                    type: AnimationTypes.intro,
                                    initialPause: 2000,
                                    trajectory: AnimationTrajectory.manual,
                                    stateIncrements: [
                                        {
                                            rotation: [Math.PI * 2, 0, 0],
                                        },
                                    ],
                                    config: { mass: 4, friction: 17 },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: ComponentTypes.Canvas,
                    className: 'borderdBox',
                    camera: {
                        type: CameraTypes.Perspective,
                        position: [0, 0, 3],
                    },
                    objects: [
                        {
                            type: ObjectTypes.Text3D,
                            text: 'Optimer Bold',
                            font: fonts.optimerBold,
                            position: [-0.73, -0.1, 0],
                            rotation: [0, 0, 0],
                            scale: [0.3, 0.3, 0.3],
                            animations: [
                                {
                                    type: AnimationTypes.intro,
                                    initialPause: 2400,
                                    trajectory: AnimationTrajectory.manual,
                                    stateIncrements: [
                                        {
                                            rotation: [Math.PI * 2, 0, 0],
                                        },
                                    ],
                                    config: { mass: 4, friction: 17 },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: ComponentTypes.Canvas,
                    className: 'borderdBox',
                    camera: {
                        type: CameraTypes.Perspective,
                        position: [0, 0, 3],
                    },
                    objects: [
                        {
                            type: ObjectTypes.Text3D,
                            text: 'Droid Sans',
                            font: fonts.droidSans,
                            position: [-0.9, -0.1, 0],
                            rotation: [0, 0, 0],
                            scale: [0.3, 0.3, 0.3],
                            animations: [
                                {
                                    type: AnimationTypes.intro,
                                    initialPause: 2800,
                                    trajectory: AnimationTrajectory.manual,
                                    stateIncrements: [
                                        {
                                            rotation: [Math.PI * 2, 0, 0],
                                        },
                                    ],
                                    config: { mass: 4, friction: 17 },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: ComponentTypes.Canvas,
                    className: 'borderdBox',
                    camera: {
                        type: CameraTypes.Perspective,
                        position: [0, 0, 3],
                    },
                    objects: [
                        {
                            type: ObjectTypes.Text3D,
                            text: 'Droid Sans Bold',
                            font: fonts.droidSansBold,
                            position: [-1.16, -0.1, 0],
                            rotation: [0, 0, 0],
                            scale: [0.3, 0.3, 0.3],
                            animations: [
                                {
                                    type: AnimationTypes.intro,
                                    initialPause: 3200,
                                    trajectory: AnimationTrajectory.manual,
                                    stateIncrements: [
                                        {
                                            rotation: [Math.PI * 2, 0, 0],
                                        },
                                    ],
                                    config: { mass: 4, friction: 17 },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: ComponentTypes.Container,
            alignment: Alignment.Horizontal,
            style: { flexGrow: 1 },
            children: [
                {
                    type: ComponentTypes.Canvas,
                    className: 'borderdBox',
                    camera: {
                        type: CameraTypes.Perspective,
                        position: [0, 0, 3],
                    },
                    objects: [
                        {
                            type: ObjectTypes.Text3D,
                            text: 'Helvitker',
                            font: fonts.helvetiker,
                            position: [-0.75, -0.1, 0],
                            rotation: [0, 0, 0],
                            scale: [0.3, 0.3, 0.3],
                            animations: [
                                {
                                    type: AnimationTypes.intro,
                                    initialPause: 3600,
                                    trajectory: AnimationTrajectory.manual,
                                    stateIncrements: [
                                        {
                                            rotation: [Math.PI * 2, 0, 0],
                                        },
                                    ],
                                    config: { mass: 4, friction: 17 },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: ComponentTypes.Canvas,
                    className: 'borderdBox',
                    camera: {
                        type: CameraTypes.Perspective,
                        position: [0, 0, 3],
                    },
                    objects: [
                        {
                            type: ObjectTypes.Text3D,
                            text: 'Helvitker Bold',
                            font: fonts.helvetikerBold,
                            position: [-1.25, -0.1, 0],
                            rotation: [0, 0, 0],
                            scale: [0.3, 0.3, 0.3],
                            animations: [
                                {
                                    type: AnimationTypes.intro,
                                    initialPause: 4000,
                                    trajectory: AnimationTrajectory.manual,
                                    stateIncrements: [
                                        {
                                            rotation: [Math.PI * 2, 0, 0],
                                        },
                                    ],
                                    config: { mass: 4, friction: 17 },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: ComponentTypes.Canvas,
                    className: 'borderdBox',
                    camera: {
                        type: CameraTypes.Perspective,
                        position: [0, 0, 3],
                    },
                    objects: [
                        {
                            type: ObjectTypes.Text3D,
                            text: 'Droid Serif',
                            font: fonts.droidSerif,
                            position: [-1, -0.1, 0],
                            rotation: [0, 0, 0],
                            scale: [0.3, 0.3, 0.3],
                            animations: [
                                {
                                    type: AnimationTypes.intro,
                                    initialPause: 4400,
                                    trajectory: AnimationTrajectory.manual,
                                    stateIncrements: [
                                        {
                                            rotation: [Math.PI * 2, 0, 0],
                                        },
                                    ],
                                    config: { mass: 4, friction: 17 },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: ComponentTypes.Canvas,
                    className: 'borderdBox',
                    camera: {
                        type: CameraTypes.Perspective,
                        position: [0, 0, 3],
                    },
                    objects: [
                        {
                            type: ObjectTypes.Text3D,
                            text: 'Droid Serif Bold',
                            font: fonts.droidSerifBold,
                            position: [-1.57, -0.1, 0],
                            rotation: [0, 0, 0],
                            scale: [0.3, 0.3, 0.3],
                            animations: [
                                {
                                    type: AnimationTypes.intro,
                                    initialPause: 4800,
                                    trajectory: AnimationTrajectory.manual,
                                    stateIncrements: [
                                        {
                                            rotation: [Math.PI * 2, 0, 0],
                                        },
                                    ],
                                    config: { mass: 4, friction: 17 },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
