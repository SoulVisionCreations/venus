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

export const scrollAnimationExample = {
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
      sceneId: 1,
      objects: [
        {
          type: ObjectTypes.Text3D,
          text: 'Scroll Down',
          font: "./Inter_Bold.json",
          position: [-0.2, 0, 0],
          rotation: [-0.3, 0, 0]
        }
      ]
    },
    {
      type: ComponentTypes.Container,
      className: "rootContainer",
      isLeaf: false,
      alignment: Alignment.Horizontal,
      children: [
        {
          type: ComponentTypes.Canvas,
          className: "canvas",
          style: {flexGrow: 1, height: '750px'},
          camera: {
            position: [0, 0, 3],
            type: CameraTypes.Perspective,
          },
          sceneId: 2,
          objects: [
            {
              type: ObjectTypes.ImplicitObject,
              modelId: 101,
              instanceId: 103,
              position: [0, 0, -50],
              rotation: [-Math.PI/2.5, 0, Math.PI/4],
              scale: [0.5, 0.5, 0.5],
              animations: [{
                type: Animation.type.scroll,
                visibilityThreshold: {
                  top: 0.3,
                  bottom: 0.3
                },
                trajectory: Animation.trajectory.curveDefinedByPoints,
                trajectoryMetaData: {
                  points: [[0,0,-50], [0, 0.8, -10], [0, 1, 0]],
                  speed: 0.0017,
                  rotationTrajectory: {
                    axis: [0, 0, 1],
                    frequency: 1
                  },
                  scaleTrajectory: {
                    scaleRatio: [0.5, 0.5, 0.5],
                  }
                },
              }],
            }
          ]
        },
        {
          type: ComponentTypes.Canvas,
          className: "canvas",
          style: {flexGrow: 1, height: '750px'},
          camera: {
            position: [0, 0, 3],
            type: CameraTypes.Perspective,
          },
          sceneId: 10,
          objects: [
            {
              type: ObjectTypes.ImplicitObject,
              modelId: 101,
              instanceId: 103,
              position: [0, 0, -50],
              rotation: [-Math.PI/2.5, 0, Math.PI/4],
              scale: [0.5, 0.5, 0.5],
              animations: [{
                type: Animation.type.scroll,
                visibilityThreshold: {
                  top: 0.3,
                  bottom: 0.3
                },
                trajectory: Animation.trajectory.curveDefinedByPoints,
                trajectoryMetaData: {
                  points: [[0,0,-50], [0, 0.8, -10], [0, 1, 0]],
                  speed: 0.0017,
                  rotationTrajectory: {
                    axis: [0, 0, 1],
                    frequency: 1
                  },
                  scaleTrajectory: {
                    scaleRatio: [0.5, 0.5, 0.5],
                  }
                },
              }],
            }
          ]
        }
      ]
    },
    {
      type: ComponentTypes.Canvas,
      className: "canvas",
      style: stylingDefaults.fullWidthFullHeightCanvas,
      camera: {
        position: [0, 0, 3],
        type: CameraTypes.Perspective,
      },
      sceneId: 3,
      objects: [
        {
          type: ObjectTypes.ImplicitObject,
          modelId: 101,
          instanceId: 103,
          position: [0.3, -0.4, 0],
          rotation: [-Math.PI/2.5, 0, Math.PI/4],
          scale: [0.4, 0.4, 0.4],
          animations: [{
            type: Animation.type.scroll,
            visibilityThreshold: {
              top: 0.6,
              bottom: -0.5
            },
            trajectory: Animation.trajectory.curveDefinedByPoints,
            trajectoryMetaData: {
              points: [[0.3,-0.4,0], [0.5, 1, -0.2], [3, 1, -0.4]],
              speed: 0.001
            },
            config: {duration: 25}
          }],
        },
        {
          type: ObjectTypes.ImplicitObject,
          modelId: 101,
          instanceId: 104,
          position: [-0.3, -0.4, 0],
          rotation: [-Math.PI/2.5, 0, -Math.PI/4],
          scale: [0.4, 0.4, 0.4],
          animations: [{
            type: Animation.type.scroll,
            visibilityThreshold: {
              top: 0.6,
              bottom: -0.5
            },
            trajectory: Animation.trajectory.curveDefinedByPoints,
            trajectoryMetaData: {
              points: [[-0.3,-0.4,0], [-0.5, 1, -0.2], [-3, 1, -0.4]],
              speed: 0.001,
            },
            config: {duration: 25}
          }],
        }
      ]
    },
    {
      type: ComponentTypes.Canvas,
      className: "canvas",
      style: stylingDefaults.fullWidthFullHeightCanvas,
      sceneId: 4,
      camera: {
        position: [0, 0, 3],
        type: CameraTypes.Perspective,
      }
    },
  ],
};
