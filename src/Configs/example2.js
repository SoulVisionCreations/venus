import { stylingDefaults } from "../Constants/defaults";
import {
  ComponentTypes,
  CameraTypes,
  Alignment,
  ObjectTypes,
  ObjectControlTypes,
  LightTypes,
  SceneControlTypes,
  StandardGeometryTypes,
  MaterialTypes,
  HtmlTypes,
  eventDrivenActionTypes,
  AnimationTypes,
} from "./types";

export const config2 = {
  type: ComponentTypes.Container,
  className: "rootContainer",
  alignment: Alignment.Vertical,
  style: stylingDefaults.flexColumnContainer,
  children: [
    {
      type: ComponentTypes.Canvas,
      background: "pink",
      className: "canvas",
      style: stylingDefaults.fullWidthMediumHeightCanvas,
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
      sceneControl: {
        type: SceneControlTypes.Orbit,
      },
      objects: [
        {
          type: ObjectTypes.ImplicitObject,
          modelId: 101,
          control: {
            type: ObjectControlTypes.BouncyPresentation,
          },
          useInstancing: false,
          position: [0.5, 0.5, 0],
          // animations: [{type: AnimationTypes.Rotate}],
          scale: [0.2, 0.2, 0.2],
          htmls: [
            {
              type: HtmlTypes.priceTag,
              price: "$100",
              rotation: [Math.PI / 2, Math.PI / 4, 0],
              position: [-3, 0, 0],
              scale: 1,
              transform: true,
            },
          ],
        },
        {
          type: ObjectTypes.GltfObject,
          url: "./model.glb",
          scale: 10,
          htmls: [
            {
              type: HtmlTypes.priceTag,
              price: "$50",
              position: [0.01, 0.01, 0],
              transform: true,
            },
          ],
          animations: [
            {
              type: AnimationTypes.Float,
            },
          ],
        },
        {
          type: ObjectTypes.StandardObject,
          geometry: [{ type: StandardGeometryTypes.SphereGeometry }],
          material: [
            {
              type: MaterialTypes.MeshStandardMaterial,
              color: "green",
            },
          ],
        },
        {
          type: ObjectTypes.Text3D,
          font: "./Inter_Bold.json",
          text: "Chair",
          scale: 0.1,
          position: [0.3, 0.05, 0],
          control: {
            type: ObjectControlTypes.BouncyPresentation,
          },
        },
      ],
      texts: [
        {
          text: "Chair Description",
          fontSize: 0.05,
          color: "black",
          position: [0.5, 0, 0],
        },
      ],
    },
    {
      type: ComponentTypes.Canvas,
      background: "yellow",
      className: "canvas",
      style: stylingDefaults.fullWidthMediumHeightCanvas,
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
      sceneControl: {
        type: SceneControlTypes.Orbit,
      },
      objects: [
        {
          type: ObjectTypes.ImplicitObject,
          modelId: 101,
          control: {
            type: ObjectControlTypes.BouncyPresentation,
          },
          useInstancing: false,
          position: [-0.5, -0.5, 0],
        },
        {
          type: ObjectTypes.GltfObject,
          url: "./model.glb",
          scale: 10,
          htmls: [
            {
              type: HtmlTypes.priceTag,
              price: "$50",
              position: [0.01, 0.01, 0],
              transform: true,
            },
          ],
          animations: [
            {
              type: AnimationTypes.Float,
            },
          ],
        },
        {
          type: ObjectTypes.StandardObject,
          geometry: [{ type: StandardGeometryTypes.SphereGeometry }],
          material: [
            {
              type: MaterialTypes.MeshStandardMaterial,
              color: "green",
            },
          ],
        },
        {
          type: ObjectTypes.Text3D,
          font: "./Inter_Bold.json",
          text: "Chair",
          scale: 0.1,
          position: [0.3, 0.05, 0],
          control: {
            type: ObjectControlTypes.BouncyPresentation,
          },
        },
      ],
      texts: [
        {
          text: "Chair Description",
          fontSize: 0.05,
          color: "black",
          position: [0.5, 0, 0],
        },
      ],
    },
  ],
};
