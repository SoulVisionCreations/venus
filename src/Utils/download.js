import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { loadImplicitData } from '../Renderer/data_loader'
// import { getS3UrlFromRequest } from './requests'

const assetsMap = {}

export function getAssetbyId(id) {
  if (id in assetsMap) return assetsMap[id]
  return 'downloading'
}

export async function downloadAssets(assets) {
  try {
    for (let i = 0; i < assets.length; i++) {
      const { assetId, assetPath, assetType } = assets[i]
      if (!assetsMap[assetId]) {
        if (assetType === 'implicit') {
          // const signedUrl = await getS3UrlFromRequest(
          //   `AVTR_TNT_AVATAAR/${path}/implicit/low/`
          // )
          const mesh = await loadImplicitData(assetPath)
          assetsMap[assetId] = {
            geometry: mesh.geometry,
            material: mesh.material,
            gSceneParams: mesh.gSceneParams,
          }
        } else if (assetType === 'gltf') {
          const gltfLoader = new GLTFLoader()
          const gltf = await gltfLoader.loadAsync(assetPath)
          assetsMap[assetId] = gltf
        } else if (assetType === 'image') {
          const resp = await fetch(assetPath)
          const imgblob = await resp.blob()
          assetsMap[assetId] = URL.createObjectURL(imgblob)
        } else if (assetType === 'font') {
          const resp = await fetch(assetPath)
          assetsMap[assetId] = await resp.json()
        }
      }
    }
  } catch (err) {
    console.log('err', err)
  }
}
