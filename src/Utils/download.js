import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from 'three/src/loaders/TextureLoader'; 
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader"
import { loadImplicitData } from "../Renderer/data_loader";
import { HalfFloatType } from "three";

let assetsMap = new Map();

export function getAssetbyId(id) {
  if(assetsMap.has(id)) return assetsMap.get(id);
  return 'downloading';
}

export async function downloadAssets(assets) {
  try {
    for (const [assetType, assetArray] of Object.entries(assets)) {
      for (let i = 0; i < assetArray.length; i++) {
        for (const [assetId, path] of Object.entries(assetArray[i])) {
          if (!assetsMap.has(assetId)) {
            if (assetType === "implicits") {
              const mesh = await loadImplicitData(path);
              assetsMap.set(assetId, {
                geometry: mesh.geometry,
                material: mesh.material,
                gSceneParams: mesh.gSceneParams,
              });
            } else if (assetType === "gltfs") {
                const gltfLoader = new GLTFLoader();
                const gltf = await gltfLoader.loadAsync(path) 
                assetsMap.set(assetId, gltf);
            } 
            else if(assetType === "hdri") {
                console.log(assetId, path);
                const rgbeLoader = new RGBELoader();
                rgbeLoader.setDataType(HalfFloatType);
                const hdri = await rgbeLoader.loadAsync(path)
                console.log(hdri);
                assetsMap.set(assetId, hdri);
            }
          }
        }
      }
    }
  } catch (err) {
    console.log("err", err);
  }
}
