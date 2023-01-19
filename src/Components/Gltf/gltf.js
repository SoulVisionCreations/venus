import { Html } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { objectDefaults } from "../../Constants/defaults";
import { applyAnimations } from "../../Utils/Animations/animation";
import { applyEventDrivenActions, useEvents } from "../../Utils/Events/events";

export const GltfLoader = ({ url, objectProps, sceneProps }) => {
  const model = useLoader(GLTFLoader, url);
  const position =
    objectProps.position != undefined ? objectProps.position : objectDefaults.position;
  const scale = objectProps.scale != undefined ? objectProps.scale : objectDefaults.scale;
  const scrolledRotationValue = useRef(0);

  // useEvents(objectProps, sceneProps, scrolledRotationValue);

  // useFrame((state) => {
  //   if(model != undefined) {
  //     const time = state.clock.getElapsedTime();
  //     if (objectProps.animations)
  //       applyAnimations(objectProps.animations, time, model);
  //     if (objectProps.events)
  //       applyEventDrivenActions(
  //         objectProps,
  //         time,
  //         model,
  //         scrolledRotationValue
  //     );
  //   }
  // });

  return (
    <primitive
      object={model.scene}
      position={position}
      scale={scale}
      {...objectProps}
    >
      <Html
        // rotation={[Math.PI / 2, Math.PI / 4, 0]}
        position={[0.01, 0.01, 0]}
        scale={0.01}
        transform
        occlude
      >
        <div className="annotation">$ 1 🥲</div>
      </Html>
    </primitive>
  );
};
