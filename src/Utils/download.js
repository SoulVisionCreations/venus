// import { HalfFloatType } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { loadImplicitData } from "../Renderer/data_loader";

const assetsMap = {};

export function getAssetbyId(id) {
  return assetsMap[id];
}

export async function downloadAssets(assets) {
  try {
    for (const [assetType, assetArray] of Object.entries(assets)) {
      for (let i = 0; i < assetArray.length; i++) {
        for (const [assetId, path] of Object.entries(assetArray[i])) {
          if (!assetsMap[assetId]) {
            if (assetType === "implicits") {
              const mesh = await loadImplicitData(path);
              assetsMap[assetId] = { geometry: mesh.geometry, material: mesh.material, gSceneParams: mesh.gSceneParams };
            } else if (assetType === "gltfs") {
                const gltfLoader = new GLTFLoader();
                const gltf = await gltfLoader.loadAsync(path) ;
                assetsMap[assetId] = gltf;
            } else if (assetType === "images") {
                const resp = await fetch(path);
                const imgblob = await resp.blob();
                assetsMap[assetId] = URL.createObjectURL(imgblob);
            } else if (assetType === "fonts") {
                const resp = await fetch(path);
                assetsMap[assetId] = await resp.json();;
            } 
            // else if(assetType === "hdri") {
            //     const rgbeLoader = new RGBELoader();
            //     rgbeLoader.setDataType(HalfFloatType);
            //     const hdri = await rgbeLoader.loadAsync(path);
            //     assetsMap[assetId] = hdri;
            // }
          }
        }
      }
    }
  } catch (err) {
    console.log("err", err);
  }
}
