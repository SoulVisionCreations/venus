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
        position: [0, 0, 5],
        type: CameraTypes.Perspective,
      },
      implicitObjects: [
        {
          position: [0, 0, 0],
          animations: [],
          control: {
            type: ObjectControlTypes.BouncyPresentation,
          },
          scale: 5,
        },
      ],
      texts: [
        {
          text: "Lorem Ipsum",
          fontSize: 0.2,
          color: "black",
        },
      ],
      text3D: [
        {
          font: "./Inter_Bold.json",
          text: "Lorem Ipsum",
          color: "green",
        },
      ],
    },
    {
      type: ComponentTypes.Canvas,
      className: "canvas",
      style: stylingDefaults.fullWidthMediumHeightCanvas,
      camera: {
        position: [0, 0, 5],
        type: CameraTypes.Perspective,
      },
      lights: [
        {
          type: LightTypes.Directional,
          intensity: 2,
        },
        {
          type: LightTypes.Ambient,
          intensity: 1,
        },
      ],
      implicitObjects: [
        {
          position: [0, 0, 0],
          animations: [
            { type: AnimationTypes.Rotate, rotationArray: [0, 0.1, 0] },
          ],
          scale: 4,
        },
      ],
      gltfs: [
        {
          url: "./model.glb",
          scale: 10,
        },
      ],
      sceneControl: {
        type: SceneControlTypes.Orbit,
      },
    },
  ],
};
root.render(<App config={config} />);
