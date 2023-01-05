import { loadImplicitData } from "../../Renderer/data_loader";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { applyObjectControl } from "../../Utils/ObjectControls/objectControl";
import { degToRad } from "three/src/math/MathUtils";
import { objectDefaults } from "../../Constants/defaults";
import { applyAnimations } from "../../Utils/Animations/animation";
import { ObjectTypes } from "../../Configs/types";
import WebGL from "three/examples/jsm/capabilities/WebGL.js";

if (WebGL.isWebGL2Available() === false) {
  viewSpace.appendChild(WebGL.getWebGL2ErrorMessage());
}

export function getPath() {
  var urlParms = new URLSearchParams(window.location.search);
  // var s3Path = 'https://fashion-simulation.s3.amazonaws.com/RnD_Datasets/ObjCap_out/'
  var dir = urlParms.get("dir");
  var id = urlParms.get("id");
  // s3Path += dir;
  return {
    objpath: dir,
    dir: dir,
    id: id,
  };
}

export function ImplicitObject({ props }) {
  const [loading, updateLoading] = useState(true);
  const ImpObjRef = useRef();

  useFrame((state, delta) => {
    if (!loading) {
      ImpObjRef.current.material.uniforms.CamPos.value.copy(
        state.camera.position
      );
      const time = state.clock.getElapsedTime();
      if (props.animations)
        applyAnimations(props.animations, time, ImpObjRef.current);
    }
  });

  useEffect(() => {
    let dirUrl = getPath();
    loadImplicitData(dirUrl.dir).then((obj) => {
      ImpObjRef.current = obj;
      ImpObjRef.current.rotation.set(degToRad(-90), 0, degToRad(170));
      ImpObjRef.current.scale.set(5, 5, 5);
      updateLoading(false);
    });
  }, []);
  const position =
    props.position != undefined ? props.position : objectDefaults.position;
  const scale = props.scale != undefined ? props.scale : objectDefaults.scale;

  const renderWithControl = () => {
    const ObjProps = {
      position: position,
      scale: scale,
      type: ObjectTypes.ImplicitObject,
    };
    return applyObjectControl(props.control, ImpObjRef.current, ObjProps);
  };

  const renderWithoutControl = () => {
    return (
      <primitive object={ImpObjRef.current} position={position} scale={scale} />
    );
  };

  const renderImplicit = () => {
    return props.control ? renderWithControl() : renderWithoutControl();
  };

  return <>{loading ? null : renderImplicit()}</>;
}
