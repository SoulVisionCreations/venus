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
      type: ComponentTypes.Canvas,
      className: "canvas",
      effects: SceneEffectsTypes.DisableScrollOnceOnCompletelyVisible,
      style: stylingDefaults.fullWidthMediumHeightCanvas,
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
