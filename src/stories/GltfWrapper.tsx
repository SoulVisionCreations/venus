import { Story } from '@storybook/react';
import App from '../App';
import { AssetTypes, ObjectTypes } from '../types/enums';
import { ContainerNodeProps } from '../types/types';
import { configAssetModifier, skuGltfMap } from './utility';

const assetGltfMap = new Map<string, symbol>();

export const GltfWrapper: Story<{ skuId: string; storyConfig: ContainerNodeProps }> = ({ ...args }) => {
    let assetId;
    if (assetGltfMap.has(args.skuId)) assetId = assetGltfMap.get(args.skuId);
    else {
        assetId = Symbol();
        assetGltfMap.set(args.skuId, assetId);
    }
    const url = skuGltfMap.get(args.skuId) as string;
    const config = configAssetModifier(url, args.storyConfig, AssetTypes.Mesh, ObjectTypes.MeshObject, assetId as symbol);
    return <App config={config} />;
};

export const argTypes = {
    skuId: {
        control: 'radio',
        options: Array.from(skuGltfMap.keys()),
    },
};

export const defaultArgs = {
    skuId: 'chair',
};
