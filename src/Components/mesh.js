import { animated } from '@react-spring/three';
import { useSpringAnimation } from "../Utils/Animations/springAnimations";
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { ObjectControls } from "../Utils/ObjectControls/objectControls";
import { renderHtmls } from "./Object3D/object3D";

export function Mesh({geometry, material, gSceneParams, objectProps, sceneProps}) {
  const meshRef = useRef();
  const instance = objectProps.instances[0];
  const spring = useSpringAnimation(instance, sceneProps);

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
        <animated.mesh ref={meshRef} geometry={geometry} material={material} rotation={spring.rotation} position={spring.position} scale={spring.scale}>
            {instance.htmls && renderHtmls(instance.htmls)}
        </animated.mesh>
    </ObjectControls>
  );
}
