import { stylingDefaults } from '../constants/defaults';
import { Alignment, AnimationTrajectory, AnimationTypes, AssetTypes, CameraTypes, ComponentTypes, ObjectHtmlTypes, ObjectTypes } from '../types/enums';
import { ContainerNodeProps } from '../types/types';

export const splineConfig: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    assets: [{ assetId: '101', assetPath: 'data2', assetType: AssetTypes.Implicit }],
    children: [
        {
            type: ComponentTypes.Canvas,
            className: 'canvas',
            style: stylingDefaults.fullWidthFullHeightCanvas,
            assetIds: ['101'],
            camera: {
                type: CameraTypes.Perspective,
                position: [0, 0, 2],
            },
            objects: [
                {
                    type: ObjectTypes.ImplicitObject,
                    assetId: '101',
                    useInstancing: false,
                    position: [-10, 1, -10],
                    rotation: [Math.PI / 2, Math.PI, Math.PI / 2],
                    scale: [1.5, 1.5, 1.5],
                    objectHtmls: [
                        {
                            type: ObjectHtmlTypes.PriceTag,
                            price: '$ 100000',
                            rotation: [Math.PI / 2, (3 * Math.PI) / 4, 0],
                            position: [0.2, 0, 0.3],
                            scale: 1.5,
                        },
                    ],
                    animations: [
                        {
                            type: AnimationTypes.intro,
                            initialPause: 400,
                            trajectory: AnimationTrajectory.curveDefinedByPoints,
                            trajectoryMetaData: {
                                points: [
                                    [-10, 1, -10],
                                    [-5, 1.5, -15],
                                    [-7, -0.5, -5],
                                    [1, 0.5, 0],
                                    [0, 0, 0],
                                ],
                            },
                            config: { duration: 100 },
                        },
                    ],
                },
            ],
        },
    ],
};
