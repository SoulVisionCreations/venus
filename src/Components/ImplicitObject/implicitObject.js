import { loadImplicitData } from "../../Renderer/data_loader";
import { useFrame } from "@react-three/fiber";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { getPath } from "../../Renderer";
import { applyObjectControl } from "../../Utils/ObjectControls/objectControl";
import { degToRad } from "three/src/math/MathUtils";
import { animationDefaults, objectDefaults } from "../../Constants/defaults";
import { applyAnimations } from "../../Utils/Animations/animation";
import { eventDrivenActionTypes, ObjectTypes } from "../../Configs/types";
import { applyEventDrivenActions, useEvents } from "../../Utils/Events/events";


export function ImplicitObject(props) {
    const [loading, updateLoading] = useState(true);
    const ImpObjRef = useRef();
    const scrolledRotationValue = useRef(0);

    useEvents(props, scrolledRotationValue);
    
    useFrame((state) => {
      if (!loading) {
        ImpObjRef.current.material.uniforms.CamPos.value.copy(state.camera.position);
        const time = state.clock.getElapsedTime();
        if(props.animations) applyAnimations(props.animations, time, ImpObjRef.current);
        if(props.events) applyEventDrivenActions(props, time, ImpObjRef.current, scrolledRotationValue);
      }
    });

    useEffect(() => {
      let dirUrl = getPath();
      loadImplicitData(dirUrl.dir).then((obj) => {
        ImpObjRef.current = obj;
        ImpObjRef.current.rotation.set(degToRad(-90), 0, degToRad(170));
        //ImpObjRef.current.scale.set(5, 5, 5);
        updateLoading(false);
      })
    }, []);

    const position = props.position != undefined ? props.position : objectDefaults.position;
    const scale = props.scale != undefined ? props.scale : objectDefaults.scale;

    const renderWithControl = () => {
      const ObjProps = {
        position: position,
        scale: scale,
        type: ObjectTypes.ImplicitObject
      }
      return applyObjectControl(props.control, ImpObjRef.current, ObjProps);
    }

    const renderWithoutControl = () => {
      return <primitive object={ImpObjRef.current} position={position} scale={scale} />;
    }

    const renderImplicit = () => {
      return props.control ? renderWithControl() : renderWithoutControl();
    }

    return (
      <>
        {loading ? null : renderImplicit()}
      </>
    );
  }