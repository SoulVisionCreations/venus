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
  TextTypes,
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
      style: stylingDefaults.fullWidthLargeHeightCanvas,
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
          scale: 1,
          position: [0.7, 0, 0],
          animations: [],
          control: {
            type: ObjectControlTypes.BouncyPresentation,
          },
          htmls: [
            {
              price: "$100",
            },
          ],
        },
        {
          type: ObjectTypes.GltfObject,
          url: "./model.glb",
          scale: 10,
        },
        {
          type: ObjectTypes.StandardObject,
          geometry: [{ geometryType: StandardGeometryTypes.SphereGeometry }],
          material: [
            {
              materialType: MaterialTypes.MeshStandardMaterial,
              color: "green",
            },
          ],
        },
      ],
      texts: [
        {
          type: TextTypes.Text2D,
          text: "Chair Description",
          fontSize: 0.05,
          color: "black",
          position: [0.5, 0, 0],
        },
        {
          type: TextTypes.Text3D,
          font: "./Inter_Bold.json",
          text: "Chair",
          scale: 0.1,
          color: "green",
          position: [0.3, 0.05, 0],
        },
      ],
    },
  ],
};
