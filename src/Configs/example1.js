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
          effects: SceneEffectsTypes.DisableScrollOnceOnCompletelyVisible,
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
              scale: 1,
            },
          ],
        },
        {
          type: ComponentTypes.Canvas,
          className: "canvas",
          effects: SceneEffectsTypes.DisableScrollOnceOnCompletelyVisible,
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
              scale: 1,
            },
          ],
        },
        {
          type: ComponentTypes.Canvas,
          className: "canvas",
          effects: SceneEffectsTypes.DisableScrollOnceOnCompletelyVisible,
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
              scale: 1,
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
          position: [0, 0, 0],
          events: [{type: eventDrivenActionTypes.rotateByScrollOnce, rotationArray: [0,0, Math.PI/180]}],
          control: {type: ObjectControlTypes.BouncyPresentation},
          scale: 1,
        },
      ],
    },
  ],
};
