import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { objectDefaults } from "../../../Constants/defaults";

export const GltfObject = ({ url, ...props }) => {
  const model = useLoader(GLTFLoader, url);
  const position =
    props.position != undefined ? props.position : objectDefaults.position;
  const scale = props.scale != undefined ? props.scale : objectDefaults.scale;
  return (
    <primitive
      object={model.scene}
      position={position}
      scale={scale}
      {...props}
    />
  );
};
