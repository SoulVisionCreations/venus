import { stylingDefaults } from "../Constants/defaults";
import {
  AnimationTypes,
  ComponentTypes,
  CameraTypes,
  Alignment,
  ObjectTypes,
  ObjectControlTypes,
  SceneControlTypes,
  Animation,
} from "./types";

export const animationExample = {
  type: ComponentTypes.Container,
  className: "rootContainer",
  isLeaf: false,
  alignment: Alignment.Vertical,
  children: [
    {
      type: ComponentTypes.Canvas,
      className: "canvas",
      style: stylingDefaults.fullWidthFullHeightCanvas,
      camera: {
        position: [0, 0, 3],
        type: CameraTypes.Perspective,
      },
      objects: [
        {
          type: ObjectTypes.ImplicitObject,
          modelId: 101,
          useInstancing: false,
          instanceCount: 2,
          autoGenerateInstance: false,
          instances: [
            {
                position: [-0.75, -0.5, 0],
                rotation: [-Math.PI/2.5, 0, -Math.PI/4],
                scale: [0.2, 0.2, 0.2],
                useSpringAnimations: true,
                animations: [
                    {
                        repeat: Animation.repeat.once,
                        initialPause: 300,
                        stateIncrements: [
                            {
                                rotation: [0, 0, 0],
                                position: [0.5,0,0],
                                scale: [0, 0, 0]
                            },
                            {
                              rotation: [0, 0, 0],
                              position: [0.4,0.3,0],
                              scale: [0, 0, 0]
                            },
                            {
                              rotation: [0, 0, 0],
                              position: [0.3,0.4,0],
                              scale: [0, 0, 0]
                            },
                            {
                              rotation: [0, 0, 0],
                              position: [0,0.5,0],
                              scale: [0, 0, 0]
                            },
                            {
                              rotation: [0, 0, 0],
                              position: [-0.3,0.4,0],
                              scale: [0, 0, 0]
                            },
                            {
                              rotation: [0, 0, 0],
                              position: [-0.4,0.3,0],
                              scale: [0, 0, 0]
                            },
                            {
                              rotation: [0, 0, 0],
                              position: [-0.5,0,0],
                              scale: [0, 0, 0]
                            },
                        ],
                        config: { duration: 5000 },
                    }
                ],
            },
          ],
        },
        {
            type: ObjectTypes.ImplicitObject,
            modelId: 101,
            useInstancing: false,
            instanceCount: 2,
            autoGenerateInstance: false,
            instances: [
              {
                position: [0.75, -0.5, 0],
                rotation: [-Math.PI/2.5, 0, -Math.PI/4],
                scale: [0.5, 0.5, 0.5],
                useSpringAnimations: true,
                animations: [{
                    repeat: Animation.repeat.interval,
                    initialPause: 0,
                    stateIncrements: [
                        {
                            rotation: [0, 0, Math.PI], 
                            position: [0,0,0], 
                            scale: [0,0,0]
                        },
                    ],
                    config: {mass: 4, friction: 20},
                    interval: 5000
                }],
              },
            ],
          },
          {
            type: ObjectTypes.ImplicitObject,
            modelId: 101,
            useInstancing: false,
            instanceCount: 2,
            autoGenerateInstance: false,
            instances: [
              {
                position: [-0.75, 0.75, 0],
                rotation: [-Math.PI/2.5, 0, -Math.PI/4],
                scale: [0.25, 0.25, 0.25],
                useSpringAnimations: true,
                animations: [
                    {
                        initialPause: 500,
                        repeat: Animation.repeat.once,
                        stateIncrements: [
                            {
                                rotation: [0, 0, 2*Math.PI],
                                position: [0,0,0],
                                scale: [0.25, 0.25, 0.25]
                            }
                        ],
                        config: {mass: 4, friction: 200},
                    },
                    {
                        initialPause: 3000,
                        repeat: Animation.repeat.interval,
                        stateIncrements: [
                            {
                                rotation: [0, 0, 2*Math.PI], 
                                position: [1.5,0,0], 
                                scale: [0,0,0]
                            },
                            {
                              rotation: [0, 0, 0], 
                              position: [0,0,0], 
                              scale: [0,0,0]
                            },
                            {
                                rotation: [0, 0, -2*Math.PI], 
                                position: [-1.5,0,0], 
                                scale: [0,0,0]
                            },
                        ],
                        interval: 4000,
                        config: {mass: 4, friction: 17, precision: 0.00001},
                }],
              },
            ],
          },
      ],
    },
    {
        type: ComponentTypes.Canvas,
        className: "canvas",
        style: stylingDefaults.fullWidthFullHeightCanvas,
        camera: {
          position: [0, 0, 3],
          type: CameraTypes.Perspective,
        },
    }
  ],
};
