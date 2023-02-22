import { AssetTypes, ComponentTypes, implicitResolution, ObjectTypes } from '../types/enums';
import { CanvasNodeProps, ContainerNodeProps, EnvironmentProps } from '../types/types';

export const configObjectTypeModifier = (config: ContainerNodeProps, objectType: ObjectTypes, assetId: symbol, environment: EnvironmentProps) => {
    const newConfig = { ...config };
    newConfig.children = [...newConfig.children];
    for (let i = 0; i < newConfig.children.length; i++) {
        if (newConfig.children[i].type == ComponentTypes.Container) {
            newConfig.children[i] = configObjectTypeModifier(newConfig.children[i] as ContainerNodeProps, objectType, assetId, environment);
        } else {
            newConfig.children[i] = { ...newConfig.children[i] };
            if ('objects' in newConfig.children[i]) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const newObjects = [...(newConfig.children[i] as CanvasNodeProps).objects!];
                for (let j = 0; j < newObjects.length; j++) {
                    if (newObjects[j].type == ObjectTypes.GltfObject || newObjects[j].type == ObjectTypes.ImplicitObject) {
                        newObjects[j] = { ...newObjects[j] };
                        newObjects[j].type = objectType;
                        newObjects[j].rotation = [-Math.PI / 2.5, 0, 0];
                        (newObjects[j] as any).assetId = assetId;
                    }
                }
                (newConfig.children[i] as CanvasNodeProps).objects = newObjects;
            }
            (newConfig.children[i] as CanvasNodeProps).environment = { ...environment };
        }
    }
    return newConfig;
};

export const configAssetModifier = (path: string, config: ContainerNodeProps, assetType: AssetTypes, objectType: ObjectTypes, assetId: symbol, environment: EnvironmentProps) => {
    let newConfig: ContainerNodeProps = { ...config, assets: [...config.assets] };
    newConfig.assets.push({ assetId: assetId, assetPath: path, assetType: assetType });
    newConfig = configObjectTypeModifier(newConfig, objectType, assetId, environment);
    return newConfig;
};

export const implicitBaseUrl = 'https://d2vy8yj9b7o26m.cloudfront.net/RnD_Datasets/ObjCap_out/prod_dev/avataar/';

export const getImplicitUrl = (skuId: string, resolution: implicitResolution) => {
    const url = implicitBaseUrl + skuId + '/implicit/' + skuId + (resolution == implicitResolution.low ? '/base_low' : '/base_high');
    return url;
};

export const getEnvFileUrl = (files: string | string[]) => {
    const url = 'https://d1gw7r4f155zge.cloudfront.net/cubemap/' + files;
    return url;
};

export const skuMap = new Map<string, string>();
skuMap.set('shoe', 'sku_2022-12-07_14-17-28');
skuMap.set('flower', 'sku_2023-01-14_20-02-25');
skuMap.set('toy-tractor', 'sku_2022-10-31_13-04-44');
skuMap.set('toy-barbie', 'sku_2022-10-31_13-28-56');
skuMap.set('cap', 'sku_2022-11-02_13-04-30');
skuMap.set('couch-chair', 'sku_2022-11-02_19-20-58');
skuMap.set('bag', 'sku_2022-11-03_13-18-46');
skuMap.set('plant', 'sku_2022-11-03_14-17-25');
skuMap.set('handbag', 'sku_2022-11-03_16-03-29');
skuMap.set('recliner', 'sku_2022-11-03_18-31-37');
skuMap.set('sofa', 'sku_2022-11-04_12-24-43');
skuMap.set('couch', 'sku_2022-11-04_13-14-22');
skuMap.set('volleyball', 'sku_2022-11-07_16-02-43');
skuMap.set('football', 'sku_2022-11-07_15-54-41');
skuMap.set('food', 'sku_2022-11-14_07-00-23');
skuMap.set('chair', 'sku_2022-11-16_14-10-04');
skuMap.set('glb-chair', 'scene.glb');
