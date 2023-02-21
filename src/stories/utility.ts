import { AssetTypes, ComponentTypes, implicitResolution, ObjectTypes } from '../types/enums';
import { CanvasNodeProps, ContainerNodeProps } from '../types/types';

export const configObjectTypeModifier = (config: ContainerNodeProps, objectType: ObjectTypes, assetId: symbol) => {
    const newConfig = { ...config };
    newConfig.children = [...newConfig.children];
    for (let i = 0; i < newConfig.children.length; i++) {
        if (newConfig.children[i].type == ComponentTypes.Container) {
            newConfig.children[i] = configObjectTypeModifier(newConfig.children[i] as ContainerNodeProps, objectType, assetId);
        } else {
            newConfig.children[i] = { ...newConfig.children[i] };
            if ('objects' in newConfig.children[i]) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const newObjects = [...(newConfig.children[i] as CanvasNodeProps).objects!];
                for (let j = 0; j < newObjects.length; j++) {
                    if (newObjects[j].type == ObjectTypes.GltfObject || newObjects[j].type == ObjectTypes.ImplicitObject) {
                        newObjects[j] = { ...newObjects[j] };
                        newObjects[j].type = objectType;
                        (newObjects[j] as any).assetId = assetId;
                    }
                }
                (newConfig.children[i] as CanvasNodeProps).objects = newObjects;
            }
        }
    }
    return newConfig;
};

export const configAssetModifier = (path: string, config: ContainerNodeProps, assetType: AssetTypes, objectType: ObjectTypes, assetId: symbol) => {
    let newConfig: ContainerNodeProps = { ...config, assets: [...config.assets] };
    newConfig.assets.push({ assetId: assetId, assetPath: path, assetType: assetType });
    newConfig = configObjectTypeModifier(newConfig, objectType, assetId);
    return newConfig;
};

export const implicitBaseUrl = 'https://d2vy8yj9b7o26m.cloudfront.net/RnD_Datasets/ObjCap_out/prod_dev/avataar/';

export const getImplicitUrl = (skuId: string, resolution: implicitResolution) => {
    const url = implicitBaseUrl + skuId + '/implicit/' + skuId + (resolution == implicitResolution.low ? '/base_low' : '/base_high');
    return url;
};

export const skuIdsWithName = [
    { skuId: 'sku_2023-01-14_20-02-25' },
    { skuId: 'sku_2022-12-07_14-17-28' },
    { skuId: 'sku_2022-10-31_13-04-44' },
    { skuId: 'sku_2022-10-31_13-28-56' },
    { skuId: 'sku_2022-11-02_13-04-30' },
    { skuId: 'sku_2022-11-02_19-20-58' },
    { skuId: 'sku_2022-11-03_13-18-46' },
    { skuId: 'sku_2022-11-03_14-17-25' },
    { skuId: 'sku_2022-11-03_16-03-29' },
    { skuId: 'sku_2022-11-03_18-31-37' },
    { skuId: 'sku_2022-11-04_12-24-43' },
    { skuId: 'sku_2022-11-04_13-14-22' },
    { skuId: 'sku_2022-11-07_16-02-43' },
    { skuId: 'sku_2022-11-07_15-54-41' },
    { skuId: 'sku_2022-11-14_07-00-23' },
    { skuId: 'sku_2022-11-16_14-10-04' },
];

export const skuIds = skuIdsWithName.map((item) => item.skuId);
