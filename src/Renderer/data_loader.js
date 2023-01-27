import * as THREE from "three";
Window.THREE = THREE;
import { rayMarchVertexShader } from "./shader/rayMarchVertexShader.js";
import { rayMarchFragmentShader } from "./shader/rayMarchFragmentShader.js";
let atlasIndexImage, gSceneParams, gNumTextures;
let modelMap = new Map();
/**
 * Loads PNG image from rgbaURL and decodes it to an Uint8Array.
 * @param {string} rgbaUrl The URL of the PNG image.
 * @return {!Promise<!Uint8Array>}
 */

// function updateLoadingProgress(gNumTextures, gLoadedRGBATextures) {
//   let loader_div = $(".progress-bar2 ");
//   const totalcount = gNumTextures > 0 ? parseInt(gNumTextures) : 100;
//   let count = parseInt(gLoadedRGBATextures);
//   loader_div.css("width", `${(count / totalcount) * 100}%`);
// }

async function loadPNG(rgbaUrl) {
  try {
    let response = await fetch(rgbaUrl, {
      method: "GET",
      mode: "cors",
      credentials: "omit",
    });
    // console.info('rgba url: ' + rgbaUrl);
    let buffer = await response.arrayBuffer();
    // console.info('rgba url: ', buffer);
    let data = new Uint8Array(buffer);
    let pngDecoder = new PNG(data);
    let pixels = pngDecoder.decodePixels();
    return pixels;
  } catch (e) {
    throw "File not found";
  }
}

const slice_depth = 4;
function digits(i, min) {
  const s = "" + i;
  if (s.length >= min) {
    return s;
  } else {
    return ("00000" + s).substr(-min);
  }
}

async function pngToVolumeDataAsync(url, num_slices, type) {
  let volume_width = gSceneParams["atlas_width"];
  let volume_height = gSceneParams["atlas_height"];
  let imgDim = volume_width * volume_height * slice_depth;

  let rgb_data = [];
  let alpha_data = [];

  let imageLoadPromise = [];
  let imgLoadedCount = 1;
  let atlasData;
  // try {
  //     atlasData = await loadPNG(url + '/atlas_indices_2.png');
  // } catch (e) {
  //     console.log(e)
  //     errorLogs("File not Found!")
  //     return
  // }

  for (let i = 0; i < num_slices; i++) {
    let dig = gSceneParams["zerofill"] ? digits(i, 3) : i.toString();
    let rgbaUrl = url + "/rgba" + "_" + dig + ".png";

    let rgbaPromise = loadPNG(rgbaUrl);

    rgbaPromise = rgbaPromise.then((data) => {
      imgLoadedCount++;
      // updateLoadingProgress(gNumTextures, imgLoadedCount);
      return data;
    });

    imageLoadPromise[i] = new Promise(function (resolve, reject) {
      Promise.all([rgbaPromise])
        .then((values, k) => {
          let data = values[0];

          let rgb_UA = new Uint8Array(imgDim * 4);
          let alpha_UA = new Uint8Array(imgDim * 1);

          for (let j = 0; j < volume_width * volume_height * slice_depth; j++) {
            rgb_UA[j * 4 + 0] = data[j * 4 + 0];
            rgb_UA[j * 4 + 1] = data[j * 4 + 1];
            rgb_UA[j * 4 + 2] = data[j * 4 + 2];
            rgb_UA[j * 4 + 3] = data[j * 4 + 3];
            alpha_UA[j] = data[j * 4 + 3];
          }

          rgb_data[i] = rgb_UA;
          alpha_data[i] = alpha_UA;
          resolve([rgb_data, alpha_data]);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  return new Promise(function (resolve, reject) {
    Promise.all(imageLoadPromise).then((values) => {
      resolve(values[0]);
    });
  });
}

async function loadJsonFiles(dirUrl) {
  const sceneParamsUrl = `${dirUrl}/scene_params.json`;
  // const editParamsUrl = `${dirUrl}/../edit_params.json`;
  const response = await fetch(sceneParamsUrl, {
    method: "GET",
    mode: "cors",
    credentials: "omit",
  });
  if (response.ok) {
    gSceneParams = await response.json();
    gSceneParams["dirUrl"] = dirUrl;
    gSceneParams["loadingTextures"] = false;
    gNumTextures = gSceneParams["num_slices"];
    gSceneParams["gridSize"] = gSceneParams["grid_width"];
    var atlas_dim = gSceneParams["grid_width"] / gSceneParams["block_size"] + 2;
    gSceneParams["grid_width"] =
      gSceneParams["grid_height"] =
      gSceneParams["grid_depth"] =
        gSceneParams["block_size"] * atlas_dim;
  } else {
    // errorLogs("File not found!");
  }

  try {
    atlasIndexImage = await loadPNG(`${dirUrl}/atlas_indices_2.png`);
  } catch (e) {
    // errorLogs("File not found!");
  }

  // const Editresponse = await fetch(editParamsUrl, {
  //   method: "GET",
  //   mode: "cors",
  //   credentials: "omit",
  // });
  // if (Editresponse.ok) {
  //   let edit_params = await Editresponse.json();
  //   gSceneParams["cropMin"] = edit_params[gSceneParams["gridSize"]]["cropMin"];
  //   gSceneParams["cropMax"] = edit_params[gSceneParams["gridSize"]]["cropMax"];

  //   // gSceneParams = { ...gSceneParams, ...edit_params }
  // } else {
  //   return;
  // }
}

async function loadSceneData(dirUrl) {
  gNumTextures = 0;

  let sceneParamsUrl = dirUrl + "/" + "scene_params.json";
  let sceneParamsPromise = fetch(sceneParamsUrl, {
    method: "GET",
    mode: "cors",
    credentials: "omit",
  }).then(async (response) => {
    let data = await response.json();
    return data;
  });
  sceneParamsPromise.catch((error) => {
    console.error(
      "Could not load scene params from: " +
        sceneParamsUrl +
        ", error: " +
        error
    );
    // errorLogs("Unable to find the data!");
    return;
  });

  let editParamsUrl = dirUrl + "/../" + "edit_params.json";
  let editParamsPromise = fetch(editParamsUrl, {
    method: "GET",
    mode: "cors",
    credentials: "omit",
  }).then(async (response) => {
    let data = await response.json();
    return data;
  });
  editParamsPromise.catch((error) => {
    console.error(
      "Could not load scene params from: " + editParamsUrl + ", error: " + error
    );
    // errorLogs('Unable to find the data!');
    return;
  });

  // Load the indirection grid.
  const imageLoader = new THREE.ImageLoader();
  imageLoader.crossOrigin = "anonymous";
  let atlasIndexUrl = dirUrl + "/" + "atlas_indices_2.png";
  const atlasIndexPromise = new Promise(function (resolve, reject) {
    imageLoader.load(
      atlasIndexUrl,
      (atlasIndexImage) => {
        resolve(atlasIndexImage);
      },
      undefined,
      () => reject(atlasIndexUrl)
    );
  });

  let initializedPromise = Promise.all([sceneParamsPromise, atlasIndexPromise]);
  initializedPromise.then((values) => {
    let parsed = values[0];
    atlasIndexImage = values[1];
    try {
      let editparsed = values[2];
    } catch (e) {
      throw "edit params are not found";
    }

    gSceneParams = parsed;
    gSceneParams["dirUrl"] = dirUrl;
    gSceneParams["loadingTextures"] = false;
    gNumTextures = gSceneParams["num_slices"];
    var atlas_dim = gSceneParams["grid_width"] / gSceneParams["block_size"] + 2;
    gSceneParams["grid_width"] =
      gSceneParams["grid_height"] =
      gSceneParams["grid_depth"] =
        gSceneParams["block_size"] * atlas_dim;
  });

  initializedPromise.catch(async (errors) => {
    console.log(errors);
    // errorLogs("File not found!");
  });

  return initializedPromise;
}

function initFromParameters() {
  //     let params = new URL(window.location.href).searchParams;
  //     const dirUrl = params.get('dir');
  const dirUrl = "./obj_360";
  // console.log(new URL("http://localhost:1234/Office_chair"))
  // const dirUrl = '../../black_metal_chair';
  // const dirUrl = new URL("./Office_chair");

  if (!dirUrl) {
    // let h1 = document.getElementById('loading_text');
    // h1.innerHTML = "dir is a required parameter.\n\n";

    console.error("dir is a required parameter.\n\n");
    return;
  }

  return dirUrl;
}

const CreateImplicitObj = (atlasIndexImage, rgb_data, alpha_data) => {
  const slice_depth = 4;
  // let dim = gSceneParams['atlas_width'] * gSceneParams['atlas_height'] * 4 * 4;
  let dimensions =
    gSceneParams["atlas_width"] *
    gSceneParams["atlas_width"] *
    slice_depth *
    gNumTextures;
  let imgDatalength =
    gSceneParams["atlas_width"] * gSceneParams["atlas_width"] * slice_depth;
  let rgbPixels = new Uint8Array(dimensions * 4);
  let alphaPixels = new Uint8Array(dimensions * 1);

  for (let j = 0; j < rgb_data.length; j++) {
    for (let i = 0; i < rgb_data[j].length; i++) {
      rgbPixels[imgDatalength * 4 * j + i] = rgb_data[j][i];
    }
    for (let i = 0; i < alpha_data[j].length; i++) {
      alphaPixels[imgDatalength * 1 * j + i] = alpha_data[j][i];
    }
  }

  let rgbVolumeTexture = new THREE.Data3DTexture(
    rgbPixels,
    gSceneParams["atlas_width"],
    gSceneParams["atlas_height"],
    gSceneParams["atlas_depth"]
  );
  rgbVolumeTexture.format = THREE.RGBAFormat;
  rgbVolumeTexture.generateMipmaps = true;
  rgbVolumeTexture.magFilter = rgbVolumeTexture.minFilter = THREE.LinearFilter;
  rgbVolumeTexture.wrapS =
    rgbVolumeTexture.wrapT =
    rgbVolumeTexture.wrapR =
      THREE.ClampToEdgeWrapping;
  rgbVolumeTexture.type = THREE.UnsignedByteType;
  rgbVolumeTexture.needsUpdate = true;

  let alphaVolumeTexture = new THREE.Data3DTexture(
    alphaPixels,
    gSceneParams["atlas_width"],
    gSceneParams["atlas_height"],
    gSceneParams["atlas_depth"]
  );
  alphaVolumeTexture.format = THREE.RedFormat;
  alphaVolumeTexture.generateMipmaps = true;
  alphaVolumeTexture.magFilter = THREE.LinearFilter;
  alphaVolumeTexture.minFilter = THREE.LinearMipmapNearestFilter;
  alphaVolumeTexture.wrapS =
    alphaVolumeTexture.wrapT =
    alphaVolumeTexture.wrapR =
      THREE.ClampToEdgeWrapping;
  alphaVolumeTexture.type = THREE.UnsignedByteType;
  alphaVolumeTexture.needsUpdate = true;

  let atlasIndexTexture = new THREE.Data3DTexture(
    atlasIndexImage,
    Math.ceil(gSceneParams["grid_width"] / gSceneParams["block_size"]),
    Math.ceil(gSceneParams["grid_height"] / gSceneParams["block_size"]),
    Math.ceil(gSceneParams["grid_depth"] / gSceneParams["block_size"])
  );

  atlasIndexTexture.format = THREE.RGBAFormat;
  atlasIndexTexture.generateMipmaps = false;
  atlasIndexTexture.magFilter = atlasIndexTexture.minFilter =
    THREE.NearestFilter;
  atlasIndexTexture.wrapS =
    atlasIndexTexture.wrapT =
    atlasIndexTexture.wrapR =
      THREE.ClampToEdgeWrapping;
  atlasIndexTexture.type = THREE.UnsignedByteType;
  atlasIndexTexture.needsUpdate = true;

  // Material
  let worldspace_R_opengl = new THREE.Matrix3();
  let M_dict = gSceneParams["worldspace_T_opengl"];
  worldspace_R_opengl["set"](
    M_dict[0][0],
    M_dict[0][1],
    M_dict[0][2],
    M_dict[1][0],
    M_dict[1][1],
    M_dict[1][2],
    M_dict[2][0],
    M_dict[2][1],
    M_dict[2][2]
  );

  let voxelSize = gSceneParams["voxel_size"],
    blockSize = gSceneParams["block_size"],
    gridSize = new THREE.Vector3(
      gSceneParams["grid_width"],
      gSceneParams["grid_height"],
      gSceneParams["grid_depth"]
    ),
    atlasSize = new THREE.Vector3(
      gSceneParams["atlas_width"],
      gSceneParams["atlas_height"],
      gSceneParams["atlas_depth"]
    ),
    minPosition = new THREE.Vector3(
      gSceneParams["min_x"],
      gSceneParams["min_y"],
      gSceneParams["min_z"]
    );

  var cropMin = gSceneParams["cropMin"]
    ? new THREE.Vector3().fromArray(gSceneParams["cropMin"])
    : new THREE.Vector3(-0.55, -0.55, -0.55);
  var cropMax = gSceneParams["cropMax"]
    ? new THREE.Vector3().fromArray(gSceneParams["cropMax"])
    : new THREE.Vector3(0.55, 0.55, 0.55);
  var sqrSelectedRegions = gSceneParams["sqrSelectedregions"]
    ? gSceneParams["sqrSelectedregions"]
    : [0];
  var noise = gSceneParams["noise"] ? gSceneParams["noise"] : 1;
  let options = {
    contrast: 1.046,
    gamma: 1.078,
  };
  // const geometry = new THREE.BoxGeometry(1, 1, 1);

  const geometry = new THREE.BoxGeometry(1,1,1);

  const material = new THREE.RawShaderMaterial({
    glslVersion: THREE.GLSL3,
    uniforms: {
      mapColor: { value: rgbVolumeTexture },
      mapAlpha: { value: alphaVolumeTexture },
      mapIndex: { value: atlasIndexTexture },
      nearPlane: { value: 0.33 },
      blockSize: { value: blockSize },
      voxelSize: { value: voxelSize },
      minPosition: { value: minPosition },
      CamPos: { value: new THREE.Vector3() },
      CropMin: { value: cropMin },
      CropMax: { value: cropMax },
      gridSize: { value: gridSize },
      atlasSize: { value: atlasSize },
      steps: { value: parseInt(gridSize.x / 2) },
      noise: { value: noise },
      contrast: { value: options.contrast },
      gamma: { value: options.gamma },
      selectedRegionLive: {
        value: [0, 0, 0, 0, 0, 0],
      },
      selectedRegions: {
        value: sqrSelectedRegions,
      },
      useInstancing: false,
    },
    vertexShader: rayMarchVertexShader,
    fragmentShader: rayMarchFragmentShader,
    side: THREE.DoubleSide,
    vertexColors: true,
    transparent: true,
  });

  return {geometry: geometry, material: material, gSceneParams: gSceneParams};
};

// export const errorLogs = (txt) => {
//   $("#viewspacecontainer").removeClass("hide");
//   $("#loader_div").addClass("hide");
//   $("#error").text(txt);
//   $("#error").removeClass("hide");
// };

function createMesh(meshProps) {
  const mesh = new THREE.Mesh(meshProps.geometry, meshProps.material);
  mesh.userData.SceneParams = gSceneParams;
  return mesh;
}

export async function loadImplicitData(dirUrl, id) {
  // $("#viewspacecontainer").removeClass("hide");
  // await loadSceneData(dirUrl)
  if (modelMap.has(id)) return modelMap.get(id);

  await loadJsonFiles(dirUrl);
  let rgb_data, alpha_data, feature_data;
  // [rgb_data, alpha_data] = await pngToVolumeData_onebyone(gSceneParams['dirUrl'], gNumTextures, "rgba");
  var data = await pngToVolumeDataAsync(
    gSceneParams["dirUrl"],
    gNumTextures,
    "rgba"
  );
  // $("#viewspacecontainer").addClass("hide");
  const meshProps = CreateImplicitObj(atlasIndexImage, data[0], data[1]);
  modelMap.set(id, meshProps);
  return meshProps;
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
