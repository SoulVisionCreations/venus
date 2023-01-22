import React, { useEffect, useRef, useState } from "react";
import { invalidate, useFrame } from "@react-three/fiber";
import { getPath, loadImplicitData } from "../../../Renderer/data_loader";
import WebGL from "three/examples/jsm/capabilities/WebGL.js";
import { applyEventDrivenAnimations, useEvents } from "../../../Utils/Events/events";
import { animateMesh } from "../../../Utils/Animations/animation";
import { AvataarLoader } from "../../AvataarLoader/avataarloader";
import InstanceMesh from "../../InstanceMesh";
import { ObjectControls } from "../../../Utils/ObjectControls/objectControls";
import { renderHtml } from "../../Html/html";
import { getInitialialStateMatrix4 } from "../../../Utils/utility";
import { Mesh } from "../../mesh";

if (WebGL.isWebGL2Available() === false) {
  viewSpace.appendChild(WebGL.getWebGL2ErrorMessage());
}

export function ImplicitObject({objectProps, sceneProps}) {
  const [loading, updateLoading] = useState(true);
  const [objectLoadTriggered, setObjectLoadTriggered] = useState(false);
  const geometry = useRef();
  const material = useRef();
  const gSceneParams = useRef();

  useEffect(() => {
    if (sceneProps.isSceneVisible && !objectLoadTriggered) {
      setObjectLoadTriggered(true);
      let dirUrl = getPath();
      loadImplicitData(dirUrl.dir, objectProps.modelId).then((mesh) => {
         geometry.current = mesh.geometry;
         material.current = mesh.material;
         gSceneParams.current = mesh.gSceneParams;
        updateLoading(false);
      });
    }
  }, [sceneProps.isSceneVisible]);

  return (
      <>
        {loading ? 
        <AvataarLoader /> : 
        (objectProps.useInstancing ? 
          <InstanceMesh geometry={geometry.current} material={material.current} gSceneParams={gSceneParams.current} objectProps={objectProps}></InstanceMesh> :
          <Mesh geometry={geometry.current} material={material.current} gSceneParams={gSceneParams.current} objectProps={objectProps}></Mesh>
        )
        }
      </>
  );
}
