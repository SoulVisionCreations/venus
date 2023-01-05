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
