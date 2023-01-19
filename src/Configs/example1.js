import { ImplicitObject } from "../Components/ImplicitObject/implicitObject";
import { stylingDefaults } from "../Constants/defaults";
import {
  AnimationTypes,
  ComponentTypes,
  CameraTypes,
  Alignment,
  ObjectTypes,
  SceneEffectsTypes,
  eventDrivenActionTypes,
  ObjectControlTypes,
  TextTypes,
  LightTypes,
  SceneControlTypes,
} from "./types";

export const config1 = {
  type: ComponentTypes.Container,
  className: "rootContainer",
  isLeaf: false,
  alignment: Alignment.Vertical,
  children: [
    {
      type: ComponentTypes.Container,
      alignment: Alignment.Horizontal,
      style: {height: '400px'},
      children: [
        {
          type: ComponentTypes.Canvas,
          className: "canvas",
          style: {flexGrow: 1, height: '400px'},
          camera: {
            position: [0, 0, 3],
            type: CameraTypes.Perspective,
          },
          objects: [
            {
              type: ObjectTypes.ImplicitObject,
              position: [0, 0, 0],
              control: {type: ObjectControlTypes.BouncyPresentation},
              animations: [{type: AnimationTypes.Rotate}],
              scale: 1.5,
            },
          ],
        },
        {
          type: ComponentTypes.Canvas,
          className: "canvas",
          style: {flexGrow: 1, height: '400px'},
          camera: {
            position: [0, 0, 3],
            type: CameraTypes.Perspective,
          },
          objects: [
            {
              type: ObjectTypes.ImplicitObject,
              position: [0, 0, 0],
              control: {type: ObjectControlTypes.BouncyPresentation},
              animations: [{type: AnimationTypes.Float}],
              scale: 1.5,
            },
          ],
        }
      ]
    },
    {
      type: ComponentTypes.Container,
      alignment: Alignment.Vertical,
      children: [
        {
          type: ComponentTypes.Canvas,
          className: "canvas",
          camera: {
            position: [0, 0, 3],
            type: CameraTypes.Perspective,
          },
          style: stylingDefaults.fullWidthMediumHeightCanvas,
          objects: [
            {
              type: ObjectTypes.ImplicitObject,
              position: [1, 0, 0],
              control: {type: ObjectControlTypes.BouncyPresentation},
              events: [{type: eventDrivenActionTypes.rotateByScrollContinously}],
              scale: 1.5,
            },
          ],
          texts: [
            {
              type: TextTypes.Text2D,
              text: "Chair Description",
              fontSize: 0.05,
              color: "black",
              position: [1.4, 0, 0],
            },
            {
              type: TextTypes.Text3D,
              font: "./Inter_Bold.json",
              text: "Chair",
              scale: 0.1,
              color: "green",
              position: [1.2, 0.05, 0],
            },
          ],
        },
        {
          type: ComponentTypes.Canvas,
          className: "canvas",
          camera: {
            position: [0, 0, 3],
            type: CameraTypes.Perspective,
          },
          style: stylingDefaults.fullWidthMediumHeightCanvas,
          objects: [
            {
              type: ObjectTypes.ImplicitObject,
              position: [1, 0, 0],
              control: {type: ObjectControlTypes.BouncyPresentation},
              events: [{type: eventDrivenActionTypes.rotateByScrollContinously}],
              scale: 2,
            },
          ],
          texts: [
            {
              type: TextTypes.Text2D,
              text: "Chair Description",
              fontSize: 0.05,
              color: "black",
              position: [1.4, 0, 0],
            },
            {
              type: TextTypes.Text3D,
              font: "./Inter_Bold.json",
              text: "Chair",
              scale: 0.1,
              color: "green",
              position: [1.2, 0.05, 0],
            },
          ],
        },
        {
          type: ComponentTypes.Canvas,
          className: "canvas",
          camera: {
            position: [0, 0, 3],
            type: CameraTypes.Perspective,
          },
          style: stylingDefaults.fullWidthLargeHeightCanvas,
          objects: [
            {
              type: ObjectTypes.ImplicitObject,
              position: [1, 0.2, 0],
              control: {type: ObjectControlTypes.BouncyPresentation},
              events: [{type: eventDrivenActionTypes.rotateByScrollContinously}],
              scale: 2.5,
            },
          ],
          texts: [
            {
              type: TextTypes.Text2D,
              text: "Chair Description",
              fontSize: 0.05,
              color: "black",
              position: [1.4, 0, 0],
            },
            {
              type: TextTypes.Text3D,
              font: "./Inter_Bold.json",
              text: "Chair",
              scale: 0.1,
              color: "green",
              position: [1.2, 0.05, 0],
            },
          ],
        }
      ]
    },
    {
      type: ComponentTypes.Canvas,
      className: "canvas",
      effects: SceneEffectsTypes.DisableScrollOnceOnCompletelyVisible,
      style: stylingDefaults.fullWidthFullHeightCanvas,
      camera: {
        position: [0, 0, 3],
        type: CameraTypes.Perspective,
      },
      objects: [
        {
          type: ObjectTypes.ImplicitObject,
          position: [1, 0, 0],
          events: [{type: eventDrivenActionTypes.rotateByScrollOnce, rotationArray: [0,0, Math.PI/180]}],
          control: {type: ObjectControlTypes.BouncyPresentation},
          scale: 1.5,
        },
      ],
      texts: [
        {
          type: TextTypes.Text2D,
          text: "Chair Description",
          fontSize: 0.05,
          color: "black",
          position: [0.8, 0, 0],
        },
        {
          type: TextTypes.Text3D,
          font: "./Inter_Bold.json",
          text: "Chair",
          scale: 0.1,
          color: "green",
          position: [0.6, 0.05, 0],
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
      objects: [
        {
          type: ObjectTypes.ImplicitObject,
          position: [1, 0, 0],
          animations: [{type: AnimationTypes.Float}],
          control: {type: ObjectControlTypes.BouncyPresentation},
          scale: 1.5,
        },
      ],
      texts: [
        {
          type: TextTypes.Text2D,
          text: "Chair Description",
          fontSize: 0.05,
          color: "black",
          position: [0.8, 0, 0],
        },
        {
          type: TextTypes.Text3D,
          font: "./Inter_Bold.json",
          text: "Chair",
          scale: 0.1,
          color: "green",
          position: [0.6, 0.05, 0],
        },
      ],
    },
    {
      type: ComponentTypes.Canvas,
      className: "canvas",
      style: {height: '400px', width: '400px', border: '10px solid black', borderRadius:'15px'},
      camera: {
        position: [0, 0, 1],
        type: CameraTypes.Perspective,
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
          type: ObjectTypes.GltfObject,
          url: "./model.glb",
          scale: 5,
          position: [0,0,0],
        },
      ],
      sceneControl: {
        type: SceneControlTypes.Orbit,
      },
    },
  ],
};
