import {
  OrthographicCamera,
  PerspectiveCamera,
  CubeCamera,
} from "@react-three/drei";
import { CameraTypes } from "../../Configs/types.js";

export const getCamera = ({ type, ...props }) => {
  switch (type) {
    case CameraTypes.Perspective:
      return <PerspectiveCamera makeDefault {...props} />;
    case CameraTypes.Orthographic:
      return <OrthographicCamera makeDefault {...props} />;
    case CameraTypes.Cube:
      return <CubeCamera makeDefault {...props} />;
  }
};
