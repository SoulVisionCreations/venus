import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import WebGL from "three/examples/jsm/capabilities/WebGL.js";
import { loadImplicitData } from "./data_loader.js";

if (WebGL.isWebGL2Available() === false) {
  viewSpace.appendChild(WebGL.getWebGL2ErrorMessage());
}

function getPath() {
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

function Renderer() {
  const [loading, updateLoading] = useState(true);
  const ImpObj = useRef();
  useEffect(() => {
    let dirUrl = getPath();
    loadImplicitData(dirUrl.dir).then(obj => {
      ImpObj.current = obj;
      console.info('ImpObj', ImpObj);
      updateLoading(false);
    });
  }, []);
  console.log(ImpObj);
  return (
    <>{loading ? null : <primitive object={ImpObj.current} position={[0,0,0]} />}</>
  );
}

export default Renderer;
