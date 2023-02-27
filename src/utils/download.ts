import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { AssetTypes } from '../types/enums';
import { loadImplicitData } from '../renderer/data_loader';
import { AssetProps } from '../types/types';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
// import { getS3UrlFromRequest } from './requests'

const assetsMap: { [key: string | symbol]: any } = {};

export function getAssetbyId(id: string | symbol) {
    if (id in assetsMap) return assetsMap[id];
    return 'downloading';
}

const objLoader = new OBJLoader();
const mtlLoader = new MTLLoader();
const gltfLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('./draco/');
gltfLoader.setDRACOLoader(dracoLoader);

export async function downloadAssets(assets: AssetProps[]) {
    try {
        for (let i = 0; i < assets.length; i++) {
            const { assetId, assetPath, assetType } = assets[i];
            if (!assetsMap[assetId]) {
                switch (assetType) {
                    case AssetTypes.Implicit: {
                        // const signedUrl = await getS3UrlFromRequest(
                        //   `AVTR_TNT_AVATAAR/${path}/implicit/low/`
                        // )
                        const mesh = await loadImplicitData(assetPath);
                        assetsMap[assetId] = {
                            geometry: mesh.geometry,
                            material: mesh.material,
                            gSceneParams: mesh.gSceneParams,
                        };
                        break;
                    }
                    case AssetTypes.Mesh: {
                        if (assetPath.includes('glb')) {
                            const gltf = await gltfLoader.loadAsync(assetPath);
                            assetsMap[assetId] = gltf;
                        } else {
                            mtlLoader.load(`${assetPath}material_0.mtl`, (materials) => {
                                materials.preload();
                                objLoader.setMaterials(materials);
                                objLoader.load(`${assetPath}latest.obj`, (object) => {
                                    assetsMap[assetId] = object;
                                });
                            });
                        }
                        break;
                    }
                    case AssetTypes.Image: {
                        const imgres = await fetch(assetPath);
                        const imgblob = await imgres.blob();
                        const image = new Image();
                        image.src = URL.createObjectURL(imgblob);
                        image.onload = function () {
                            assetsMap[assetId] = { src: URL.createObjectURL(imgblob), aspectRatio: image.width / image.height };
                        };
                        image.remove();
                        break;
                    }
                    case AssetTypes.Font: {
                        const fontres = await fetch(assetPath);
                        assetsMap[assetId] = await fontres.json();
                        break;
                    }
                }
            }
        }
    } catch (err) {
        console.log('err', err);
    }
}
