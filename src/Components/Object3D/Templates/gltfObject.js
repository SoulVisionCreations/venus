import { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { objectDefaults } from "../../../Constants/defaults";

export const GltfObject = ({ url, ...props }) => {
  const model = useLoader(GLTFLoader, url);
  const position =
    props.position != undefined ? props.position : objectDefaults.position;
  const scale = props.scale != undefined ? props.scale : objectDefaults.scale;
  return (
    <Suspense fallback={null}>
      <primitive
        object={model.scene}
        position={position}
        scale={scale}
        {...props}
      >
        {props.children}
      </primitive>
    </Suspense>
  );
};
