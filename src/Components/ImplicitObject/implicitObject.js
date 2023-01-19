import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { loadImplicitData } from "../../Renderer/data_loader";
import { degToRad } from "three/src/math/MathUtils";
import { objectDefaults } from "../../Constants/defaults";
import { applyAnimations } from "../../Utils/Animations/animation";
import { applyEventDrivenActions, useEvents } from "../../Utils/Events/events";
import WebGL from "three/examples/jsm/capabilities/WebGL.js";
import { getPath } from "../../Renderer/data_loader";

if (WebGL.isWebGL2Available() === false) {
  viewSpace.appendChild(WebGL.getWebGL2ErrorMessage());
}

export function ImplicitObject({objectProps, sceneProps}) {
  const [loading, updateLoading] = useState(true);
  const ImpObjRef = useRef();
  const scrolledRotationValue = useRef(0);

  useEvents(objectProps, sceneProps, scrolledRotationValue);

  useFrame((state) => {
    if (!loading) {
      ImpObjRef.current.material.uniforms.CamPos.value.copy(
        state.camera.position
      );
      const time = state.clock.getElapsedTime();
      if (objectProps.animations)
        applyAnimations(objectProps.animations, time, ImpObjRef.current);
      if (objectProps.events)
        applyEventDrivenActions(
          objectProps,
          time,
          ImpObjRef.current,
          scrolledRotationValue
        );
    }
  });

  useEffect(() => {
    let dirUrl = getPath();
    loadImplicitData(dirUrl.dir).then((obj) => {
      ImpObjRef.current = obj;
      ImpObjRef.current.rotation.set(degToRad(-90), 0, degToRad(170));
      //ImpObjRef.current.scale.set(5, 5, 5);
      updateLoading(false);
    });
  }, []);

  const position =
    objectProps.position != undefined ? objectProps.position : objectDefaults.position;
  const scale = objectProps.scale != undefined ? objectProps.scale : objectDefaults.scale;

  const renderImplicit = ({ ...props }) => {
    return (
      <primitive
        object={ImpObjRef.current}
        position={position}
        scale={scale}
        {...objectProps}
      />
    );
  };

  return <>{loading ? null : renderImplicit({ ...objectProps })}</>;
}
