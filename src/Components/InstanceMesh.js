import { invalidate, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { DynamicDrawUsage, Matrix4 } from "three";
import { getAnimatedTransformationMatrix } from "../Utils/Animations/animation";
import { getInitialialStateMatrix4 } from "../Utils/utility";

export default function InstanceMesh({geometry, material, gSceneParams, objectProps}) {
    const instanceMeshRef = useRef();
    const animatedInstances = useRef([]);
    const eventDependentInstances = useRef([]);
    const instances = objectProps.instances;

    useFrame((state) => {
      const time = state.clock.getElapsedTime();
      instanceMeshRef.current.material.uniforms.CamPos.value.copy(state.camera.position);
      animatedInstances.current.forEach(index => {
        let instance = instances[index];
        if(objectProps.autoGenerateInstance) {
        } else {
          const matrix = getAnimatedTransformationMatrix(time, instance);
          instanceMeshRef.current.setMatrixAt(index, matrix);
        }
      });
      let needsUpdate = animatedInstances.current.length > 0 || eventDependentInstances.current.length > 0;
      if(needsUpdate) {
        instanceMeshRef.current.instanceMatrix.needsUpdate = true;
        invalidate();
      }
    })

    useEffect(() => {
      instanceMeshRef.current.userData.SceneParams = gSceneParams;
      instanceMeshRef.current.material.uniforms.useInstancing.value = 1;
      if(objectProps.autoGenerateInstance) {
        let i = 0;
        for(let j=0; j<objectProps.instanceCount; j++){
          instances[i].position = [Math.random()*12-6, Math.random()*12-6, Math.random()];
          const matrix = getInitialialStateMatrix4(instances[i]);
          instanceMeshRef.current.setMatrixAt(j, matrix);
          animatedInstances.current.push(j);
        };
      } else {
        for(let i=0; i<objectProps.instanceCount; i++){
          const matrix = getInitialialStateMatrix4(instances[i]);
          instanceMeshRef.current.setMatrixAt(i, matrix);
            const hasAnimations = instances[i].animations &&  instances[i].animations.length > 0;
          if(hasAnimations) animatedInstances.current.push(i);
          const hasEvents = instances[i].events &&  instances[i].events.length > 0;
          if(hasEvents) eventDependentInstances.current.push(i);
        };
      }
      const dynamic = eventDependentInstances.current.length > 0 || animatedInstances.current.length > 0;
      if(dynamic) instanceMeshRef.current.instanceMatrix.setUsage(DynamicDrawUsage);
      instanceMeshRef.current.instanceMatrix.needsUpdate = true;
      invalidate();
    }, []);

    return (
      <instancedMesh ref={instanceMeshRef} args={[geometry, material, objectProps.instanceCount]}>
      </instancedMesh>
    )
  }