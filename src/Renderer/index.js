import React from "react";
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
  let dirUrl = getPath();
  let ImpObj = loadImplicitData(dirUrl.dir);
	ImpObj.name = "ImpObj";
  console.info('ImpObj', ImpObj);
  return (
    <primitive object={ImpObj} />
  );
}

export default Renderer;
