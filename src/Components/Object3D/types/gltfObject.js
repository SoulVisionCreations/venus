import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { objectDefaults } from "../../../Constants/defaults";
import { applyAnimations } from "../../../Utils/Animations/animation";
import {
  applyEventDrivenActions,
  useEvents,
} from "../../../Utils/Events/events";
import { AvataarLoader } from "../../AvataarLoader/avataarloader";

export const GltfObject = ({ url, ...props }) => {
  const [loading, updateLoading] = useState(true);
  const model = useLoader(GLTFLoader, url);

  const scrolledRotationValue = useRef(0);

  const position =
    props.position != undefined ? props.position : objectDefaults.position;
  const scale = props.scale != undefined ? props.scale : objectDefaults.scale;

  useEvents(props, scrolledRotationValue);

  useFrame((state) => {
    if (model.scene && loading) {
      updateLoading(false);
    }
    if (!loading) {
      const time = state.clock.getElapsedTime();
      if (props.animations)
        applyAnimations(props.animations, time, model.scene);
      if (props.events)
        applyEventDrivenActions(
          props,
          time,
          model.scene,
          scrolledRotationValue
        );
    }
  });

  const renderGltf = ({ ...props }) => {
    return (
      <primitive
        object={model.scene}
        position={position}
        scale={scale}
        {...props}
      >
        {props.children}
      </primitive>
    );
  };

  return <>{loading ? <AvataarLoader /> : renderGltf({ ...props })}</>;
};
