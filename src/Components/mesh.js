import { animated } from '@react-spring/three';
import { useSpringAnimation } from "../Utils/Animations/springAnimations";
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { ObjectControls } from "../Utils/ObjectControls/objectControls";
import { renderHtmls } from "./Object3D/object3D";

export function Mesh({geometry, material, gSceneParams, objectProps, sceneProps}) {
  const meshRef = useRef();
  const spring = useSpringAnimation(objectProps, sceneProps);
  const position = spring ? spring.position : objectProps.position;
  const rotaion = spring ? spring.rotation : objectProps.rotation;
  const scale = spring ? spring.scale : objectProps.scale;

  useFrame((state) => {
    if(!meshRef.current) return;
    meshRef.current.material.uniforms.CamPos.value.copy(state.camera.position);
  })

  useEffect(() => {
    if(!meshRef.current) return;
    meshRef.current.userData.SceneParams = gSceneParams.current;
  }, [meshRef.current]);

  return (
    <ObjectControls {...objectProps}>
        <animated.mesh ref={meshRef} geometry={geometry} material={material} rotation={rotaion} position={position} scale={scale}>
            {objectProps.htmls && renderHtmls(objectProps.htmls)}
        </animated.mesh>
    </ObjectControls>
  );
}
