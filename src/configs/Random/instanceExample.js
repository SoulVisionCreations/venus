import { stylingDefaults } from '../../constants/defaults';
import { AnimationTypes, ComponentTypes, CameraTypes, Alignment, ObjectTypes, SceneControlTypes } from '../../types/types';

export const instanceExample = {
    type: ComponentTypes.Container,
    className: 'rootContainer',
    isLeaf: false,
    alignment: Alignment.Vertical,
    assets: [{ assetId: '101', assetPath: 'data', assetType: AssetTypes.Implicit }],
    children: [
        {
            type: ComponentTypes.Canvas,
            className: 'canvas',
            style: stylingDefaults.fullWidthFullHeightCanvas,
            assetIds: ['101'],
            camera: {
                position: [0, 0, 3],
                type: CameraTypes.Perspective,
            },
            objects: [
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '101',
                    useInstancing: true,
                    instanceCount: 2,
                    autoGenerateInstance: false,
                    instances: [
                        {
                            position: [0.5, 0.5, 0],
                            animations: [{ type: AnimationTypes.Rotate, rotationArray: [1, 0, 0] }],
                        },
                        {
                            position: [-0.5, -0.5, 0],
                            animations: [{ type: AnimationTypes.Rotate }],
                        },
                    ],
                },
            ],
        },
        {
            type: ComponentTypes.Canvas,
            className: 'canvas',
            assetIds: ['101'],
            style: stylingDefaults.fullWidthFullHeightCanvas,
            camera: {
                position: [0, 0, 3],
                type: CameraTypes.Perspective,
            },
            objects: [
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '101',
                    useInstancing: true,
                    instanceCount: 100,
                    autoGenerateInstance: true,
                    instances: [
                        {
                            position: [0.5, 0.5, 0],
                            animations: [{ type: AnimationTypes.Rotate, rotationArray: [0, 0, 1] }],
                            scale: [0.2, 0.2, 0.2],
                        },
                    ],
                    objects: [
                        {
                            type: ObjectTypes.ImplicitObject,
                            assetId: '101',
                            useInstancing: true,
                            instanceCount: 2,
                            autoGenerateInstance: false,
                            instances: [
                                {
                                    position: [0.5, 0.5, 0],
                                    animations: [{ type: AnimationTypes.Rotate, rotationArray: [1, 0, 0] }],
                                },
                                {
                                    position: [-0.5, -0.5, 0],
                                    animations: [{ type: AnimationTypes.Rotate }],
                                },
                            ],
                        },
                    ],
                },
            ],
            sceneControl: { type: SceneControlTypes.Orbit },
        },
    ],
};
