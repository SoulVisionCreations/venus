import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { getPath, loadImplicitData } from "../../../Renderer/data_loader";
import WebGL from "three/examples/jsm/capabilities/WebGL.js";
import { applyEventDrivenAnimations, useEvents } from "../../../Utils/Events/events";
import { applyAnimations } from "../../../Utils/Animations/animation";
import { objectDefaults } from "../../../Constants/defaults";
import { AvataarLoader } from "../../AvataarLoader/avataarloader";

if (WebGL.isWebGL2Available() === false) {
  viewSpace.appendChild(WebGL.getWebGL2ErrorMessage());
}

export function ImplicitObject({objectProps, sceneProps}) {
  const [loading, updateLoading] = useState(true);
  const [objectLoadTriggered, setObjectLoadTriggered] = useState(false);
  const implicitMeshRef = useRef();
  const scrolledRotationValue = useRef(0);
  const position = objectProps.position != undefined ? objectProps.position : objectDefaults.position;
  const scale = objectProps.scale != undefined ? objectProps.scale : objectDefaults.scale;

  useEvents(objectProps, sceneProps, scrolledRotationValue);

  useFrame((state) => {
    if (!loading) {
      implicitMeshRef.current.material.uniforms.CamPos.value.copy(state.camera.position);
      const time = state.clock.getElapsedTime();
      if (objectProps.animations) applyAnimations(objectProps.animations, time, implicitMeshRef.current);
      if (objectProps.events) applyEventDrivenAnimations(objectProps, time, implicitMeshRef.current, scrolledRotationValue);
    }
  });

  useEffect(() => {
    if (sceneProps.isSceneVisible && !objectLoadTriggered) {
      setObjectLoadTriggered(true);
      let dirUrl = getPath();
      loadImplicitData(dirUrl.dir, objectProps.modelId).then((mesh) => {
        implicitMeshRef.current = mesh;
        updateLoading(false);
      });
    }
  }, [sceneProps.isSceneVisible]);

  const renderImplicit = (objectProps) => {
    return (
      <primitive object={implicitMeshRef.current} position={position} scale={scale} {...objectProps} />
    );
  };

  return <>{loading ? <AvataarLoader /> : renderImplicit(objectProps)}</>;
}
