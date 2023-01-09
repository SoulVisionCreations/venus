import "./style.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  AnimationTypes,
  ComponentTypes,
  CameraTypes,
  LightTypes,
  Alignment,
  ObjectControlTypes,
  ObjectTypes,
  TextTypes,
} from "./Configs/types";
import { stylingDefaults } from "./Constants/defaults";
import { SceneControlTypes } from "./Configs/types";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const config = {
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
          control: {
            type: ObjectControlTypes.BouncyPresentation,
          },
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
    // {
    //   type: ComponentTypes.Canvas,
    //   className: "canvas",
    //   style: stylingDefaults.fullWidthMediumHeightCanvas,
    //   camera: {
    //     position: [0, 0, 5],
    //     type: CameraTypes.Perspective,
    //     near: 1,
    //   },
    //   lights: [
    //     {
    //       type: LightTypes.Directional,
    //       intensity: 2,
    //     },
    //     {
    //       type: LightTypes.Ambient,
    //       intensity: 1,
    //     },
    //   ],
    //   implicitObjects: [
    //     {
    //       position: [0, 0, 0],
    //       animations: [
    //         { type: AnimationTypes.Rotate, rotationArray: [0, 0.1, 0] },
    //       ],
    //       scale: 4,
    //     },
    //   ],
    //   gltfs: [
    //     {
    //       url: "./model.glb",
    //       scale: 10,
    //     },
    //   ],
    //   sceneControl: {
    //     type: SceneControlTypes.Orbit,
    //   },
    // },
  ],
};
root.render(<App config={config} />);
