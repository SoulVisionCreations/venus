import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const gltfLoader = ({ url, ...props }) => {
  const model = useLoader(GLTFLoader, url);
  return <primitive object={model.scene} {...props} />;
};
