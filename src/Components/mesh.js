import { animated } from '@react-spring/three';
import { useSpringAnimation } from "../Utils/Animations/springAnimations";
import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { ObjectControls } from "../Utils/ObjectControls/objectControls";
import { renderHtmls } from "./Object3D/object3D";
import { useScrollAnimation } from '../Utils/Animations/scrollAnimation';

export function Mesh({geometry, material, gSceneParams, objectProps, sceneProps}) {
  const meshRef = useRef();
  const [spring, api] = useSpringAnimation(objectProps, sceneProps);
  useScrollAnimation(objectProps, sceneProps, api);

  useFrame((state) => {
    if(!meshRef.current) return;
    meshRef.current.material.uniforms.CamPos.value.copy(state.camera.position);
  });

  useEffect(() => {
    if(!meshRef.current) return;
    meshRef.current.userData.SceneParams = gSceneParams.current;
  }, [meshRef.current]);

  return (
    <ObjectControls {...objectProps}>
        <animated.mesh ref={meshRef} geometry={geometry} material={material} rotation={spring.rotation} position={spring.position} scale={spring.scale}>
            {objectProps.htmls && renderHtmls(objectProps.htmls)}
        </animated.mesh>
    </ObjectControls>
  );
}
