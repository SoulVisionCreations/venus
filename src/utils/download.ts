import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AssetTypes } from '../types/enums';
import { loadImplicitData } from '../renderer/data_loader';
import { AssetProps } from '../types/types';
// import { getS3UrlFromRequest } from './requests'

const assetsMap: { [key: string]: any } = {};

export function getAssetbyId(id: string) {
    if (id in assetsMap) return assetsMap[id];
    return 'downloading';
}

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
                    case AssetTypes.Gltf: {
                        const gltfLoader = new GLTFLoader();
                        const gltf = await gltfLoader.loadAsync(assetPath);
                        assetsMap[assetId] = gltf;
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
