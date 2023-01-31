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
  ImageShapeTypes,
  TextTypes
} from "./types";

export const config2 = {
  type: ComponentTypes.Container,
  className: "rootContainer",
  alignment: Alignment.Vertical,
  style: stylingDefaults.flexColumnContainer,
  children: [
    {
      type: ComponentTypes.Canvas,
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
              type: HtmlTypes.PriceTag,
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
              type: HtmlTypes.PriceTag,
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
          scale: 0.2,
          position: [0.3, 0.05, 0],
          control: {
            type: ObjectControlTypes.BouncyPresentation,
          },
        },
      ],
      images: [
        { 
          url: './chair.png',
          position: [-0.5, 0, 0],
          scale: 1,
          transparent: true,
          zoom: 1,
          shape: ImageShapeTypes.Circle,
          opacity: 0.8,
        },
      ],
      texts: [
        {
          type: TextTypes.Paragraph,
          text: "Yellow velvet recliner",
          position: [0.7, 0, 0],
          scale: 1,
          fontSize: 0.07,
          color: "black",
          maxWidth: 1,
        },
        {
          type: TextTypes.List,
          title: "Features of Chair",
          list: [
            "Super Light",
            "Affordable and Durable"
          ],
          position: [0.7, -0.2, 0],
          scale: 0.1,
          numbered: false,
          style: { color: "gray", fontSize: "20px"},
        },
      ],
    },
  ],
};
