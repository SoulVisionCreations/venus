import { AnimationTypes, ComponentTypes, CameraTypes, Alignment } from './types';

const schema = {
    type: ComponentTypes.Container,
    className: "rootContainer",
    isLeaf: false,
    alignment: Alignment.Vertical,
    children: [
        {
            type: ComponentTypes.Canvas,
            props: {
                className: "fullWidthMediumHeight",
                camera: {
                    position: [0, 0, 3],
                    type: CameraTypes.Orthographic,
                },
                mesh: {
                    position: [-10, 0, 0],
                    animationType: AnimationTypes.RotateByScroll,
                    scale: 3
                },
                html: [
                    {
                        position: [4, 0, 0],
                        
                    }
                ]
            }
        },
        {
            type: ComponentTypes.Canvas,
            props: {
                className: "fullWidthMediumHeight",
                camera: {
                    position: [0, 0, 3],
                    type: CameraTypes.Orthographic
                },
                mesh: {
                    position: [-10, 0, 0],
                    animationType: AnimationTypes.Float,
                    scale: 3
                },
                html: {
                    position: [4, 0, 0]
                }
            }
        },
        {
            type: ComponentTypes.Canvas,
            props: {
                className: "fullWidthMediumHeight",
                camera: {
                    position: [0, 0, 3],
                    type: CameraTypes.Perspective
                },
                mesh: {
                    position: [-10, 0, 0],
                    animationType: AnimationTypes.RotateByScroll,
                    scale: 1
                },
                html: {
                    position: [4, 0, 0]
                }
            }
        },
        {
            type: ComponentTypes.Container,
            className: "rootContainer",
            isLeaf: false,
            alignment: Alignment.Horizontal,
            children: [
                {
                    type: ComponentTypes.Canvas,
                    props: {
                        className: "abcd",
                        camera: {
                            position: [0, 0, 3],
                            type: CameraTypes.Orthographic,
                            fov: 200
                        },
                        mesh: {
                            position: [0, 0, 0],
                            animationType: AnimationTypes.Float,
                            scale: 3
                        }
                    }
                },
                {
                    type: ComponentTypes.Canvas,
                    props: {
                        className: "abcd",
                        camera: {
                            position: [0, 0, 3],
                            type: CameraTypes.Orthographic,
                            fov: 200
                        },
                        mesh: {
                            position: [0, 0, 0],
                            animationType: AnimationTypes.Float,
                            scale: 3
                        }
                    }
                },
                {
                    type: ComponentTypes.Canvas,
                    props: {
                        className: "abcd",
                        camera: {
                            position: [0, 0, 3],
                            type: CameraTypes.Perspective,
                            fov: 200
                        },
                        mesh: {
                            position: [0, 0, 0],
                            animationType: AnimationTypes.Float,
                            scale: 4
                        }
                    }
                },
            ]   
        }
    ]   
};