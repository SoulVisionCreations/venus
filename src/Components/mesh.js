import React, { useEffect, useRef, useState } from "react";
import { invalidate, useFrame } from "@react-three/fiber";
import { getInitialialStateMatrix4 } from "../Utils/utility";
import { animateMesh } from "../Utils/Animations/animation";
import { ObjectControls } from "../Utils/ObjectControls/objectControls";
import { renderHtmls } from "./Object3D/object3D";

export function Mesh({geometry, material, gSceneParams, objectProps}) {
  const meshRef = useRef();
  const instance = objectProps.instances[0];

  useFrame((state) => {
    if(!meshRef.current) return;
    meshRef.current.material.uniforms.CamPos.value.copy(state.camera.position);
    const time = state.clock.getElapsedTime();
    const hasAnimations = instance.animations && instance.animations.length > 0;
    if(hasAnimations) {
      animateMesh(time, instance, meshRef.current);
      invalidate();
    }
  })

  useEffect(() => {
    if(!meshRef.current) return;
    meshRef.current.userData.SceneParams = gSceneParams.current;
    const matrix = getInitialialStateMatrix4(instance);
    meshRef.current.applyMatrix4(matrix);
    meshRef.current.matrix.needsUpdate = true;
    invalidate();
  }, [meshRef.current]);

  return (
    <ObjectControls {...instance}>
        <mesh ref={meshRef} geometry={geometry} material={material}>
            {instance.htmls && renderHtmls(instance.htmls)}
        </mesh>
    </ObjectControls>
  );
}
