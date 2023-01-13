import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { loadImplicitData } from "../../../Renderer/data_loader";
import { degToRad } from "three/src/math/MathUtils";
import { objectDefaults } from "../../../Constants/defaults";
import { applyAnimations } from "../../../Utils/Animations/animation";
import { eventDrivenActionTypes } from "../../../Configs/types";
import {
  applyEventDrivenActions,
  useEvents,
} from "../../../Utils/Events/events";
import WebGL from "three/examples/jsm/capabilities/WebGL.js";
import { getPath } from "../../../Renderer/data_loader";
import { AvataarLoader } from "../../AvataarLoader/avataarloader";

if (WebGL.isWebGL2Available() === false) {
  viewSpace.appendChild(WebGL.getWebGL2ErrorMessage());
}

export function ImplicitObject({ ...props }) {
  const [loading, updateLoading] = useState(true);
  const ImpObjRef = useRef();
  const scrolledRotationValue = useRef(0);

  const position =
    props.position != undefined ? props.position : objectDefaults.position;
  const scale = props.scale != undefined ? props.scale : objectDefaults.scale;

  useEvents(props, scrolledRotationValue);

  useFrame((state) => {
    if (!loading) {
      ImpObjRef.current.material.uniforms.CamPos.value.copy(
        state.camera.position
      );
      const time = state.clock.getElapsedTime();
      if (props.animations)
        applyAnimations(props.animations, time, ImpObjRef.current);
      if (props.events)
        applyEventDrivenActions(
          props,
          time,
          ImpObjRef.current,
          scrolledRotationValue
        );
    }
  });

  useEffect(() => {
    if (props.completelyVisible) {
      let dirUrl = getPath();
      loadImplicitData(dirUrl.dir).then((obj) => {
        ImpObjRef.current = obj;
        ImpObjRef.current.rotation.set(degToRad(-90), 0, degToRad(-70));
        // ImpObjRef.current.scale.set(5, 5, 5);
        updateLoading(false);
      });
    }
  }, [props.completelyVisible]);

  const renderImplicit = ({ ...props }) => {
    return (
      <primitive
        object={ImpObjRef.current}
        position={position}
        scale={scale}
        {...props}
      >
        {props.children}
      </primitive>
    );
  };

  return <>{loading ? <AvataarLoader /> : renderImplicit({ ...props })}</>;
}
