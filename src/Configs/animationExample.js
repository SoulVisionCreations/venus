import { stylingDefaults } from '../Constants/defaults'
import {
  ComponentTypes,
  CameraTypes,
  Alignment,
  ObjectTypes,
  Animation,
} from './types'

export const animationExample = {
  type: ComponentTypes.Container,
  className: 'rootContainer',
  isLeaf: false,
  alignment: Alignment.Vertical,
  assets: {
    implicits: [
      {
        101: 'data',
      },
    ],
  },
  children: [
    {
      type: ComponentTypes.Canvas,
      className: 'canvas',
      style: stylingDefaults.fullWidthFullHeightCanvas,
      camera: {
        position: [0, 0, 3],
        type: CameraTypes.Perspective,
      },
      objects: [
        {
          type: ObjectTypes.ImplicitObject,
          assetId: '101',
          instanceId: 101,
          position: [0, 0, 0],
          rotation: [-Math.PI / 2.5, 0, Math.PI / 4],
          scale: [0.15, 0.15, 0.15],
          animations: [
            {
              initialPause: 100,
              type: Animation.type.intro,
              trajectory: Animation.trajectory.manual,
              stateIncrements: [
                {
                  rotation: [0, 0, 2 * Math.PI],
                  scale: [0.3, 0.3, 0.3],
                },
              ],
              config: { mass: 4, friction: 17 },
            },
            {
              initialPause: 0,
              type: Animation.type.chained,
              repeat: true,
              interval: 100,
              childAnimations: [
                {
                  stateIncrements: [
                    {
                      rotation: [0, 0, Math.PI],
                    },
                    {
                      rotation: [0, 0, -Math.PI],
                    },
                  ],
                  config: { mass: 4, friction: 17 },
                },
                {
                  stateIncrements: [
                    {
                      position: [0.7, 0, 0],
                    },
                    {
                      position: [0, 0.7, 0],
                    },
                  ],
                  config: { duration: 1000 },
                },
                {
                  stateIncrements: [
                    {
                      position: [-0.7, -0.7, 0],
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
      type: ComponentTypes.Canvas,
      className: 'canvas',
      style: stylingDefaults.fullWidthFullHeightCanvas,
      camera: {
        position: [0, 0, 3],
        type: CameraTypes.Perspective,
      },
      objects: [
        {
          type: ObjectTypes.ImplicitObject,
          assetId: '101',
          instanceId: 102,
          useInstancing: false,
          position: [-0.5, 0, 0],
          rotation: [-Math.PI / 2.5, 0, Math.PI / 4],
          scale: [0.2, 0.2, 0.2],
          animations: [
            {
              initialPause: 0,
              type: Animation.type.chained,
              repeat: true,
              interval: 100,
              childAnimations: [
                {
                  trajectory: Animation.trajectory.ellipse,
                  trajectoryMetaData: {
                    center: [0, 0, 0],
                    height: 0.5,
                    width: 1.5,
                    steps: 100,
                    rotate: [
                      {
                        axis: [1, 0, 0],
                        angle: -Math.PI / 4,
                      },
                    ],
                  },
                  config: { duration: 100 },
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
        position: [0, 0, 3],
        type: CameraTypes.Perspective,
      },
      objects: [
        {
          type: ObjectTypes.ImplicitObject,
          assetId: '101',
          instanceId: 103,
          position: [0.3, -0.4, 0],
          rotation: [-Math.PI / 2.5, 0, Math.PI / 4],
          scale: [0.4, 0.4, 0.4],
          animations: [
            {
              initialPause: 0,
              type: Animation.type.intro,
              trajectory: Animation.trajectory.curveDefinedByPoints,
              trajectoryMetaData: {
                points: [
                  [0.3, -0.4, 0],
                  [0.5, 0.6, -0.2],
                  [2.5, 1, -0.4],
                ],
                steps: 100,
              },
              config: { duration: 25 },
            },
          ],
        },
        {
          type: ObjectTypes.ImplicitObject,
          assetId: '101',
          instanceId: 104,
          position: [-0.3, -0.4, 0],
          rotation: [-Math.PI / 2.5, 0, -Math.PI / 4],
          scale: [0.4, 0.4, 0.4],
          animations: [
            {
              initialPause: 0,
              type: Animation.type.intro,
              trajectory: Animation.trajectory.curveDefinedByPoints,
              trajectoryMetaData: {
                points: [
                  [-0.3, -0.4, 0],
                  [-0.5, 0.6, -0.2],
                  [-2.5, 1, -0.4],
                ],
                steps: 100,
              },
              config: { duration: 25 },
            },
          ],
        },
      ],
    },
  ],
}
