import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { loadImplicitData } from "../../Renderer/data_loader";
import { degToRad } from "three/src/math/MathUtils";
import { applyAnimations } from "../../Utils/Animations/animation";
import WebGL from "three/examples/jsm/capabilities/WebGL.js";
import { objectDefaults } from "../../Constants/defaults";

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

export function ImplicitObject({ ...props }) {
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
      ImpObjRef.current.rotation.set(degToRad(-90), 0, degToRad(-70));
      ImpObjRef.current.scale.set(5, 5, 5);
      updateLoading(false);
    });
  }, []);

  const position =
    props.position != undefined ? props.position : objectDefaults.position;
  const scale = props.scale != undefined ? props.scale : objectDefaults.scale;

  const renderImplicit = ({ ...props }) => {
    return (
      <primitive
        object={ImpObjRef.current}
        position={position}
        scale={scale}
        {...props}
      />
    );
  };

  return <>{loading ? null : renderImplicit({ ...props })}</>;
}
