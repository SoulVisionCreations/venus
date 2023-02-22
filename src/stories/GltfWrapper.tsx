import { Story } from '@storybook/react';
import App from '../App';
import { AssetTypes, ObjectTypes } from '../types/enums';
import { ContainerNodeProps } from '../types/types';
import { configAssetModifier, getEnvFileUrl, skuGltfMap } from './utility';

const assetGltfMap = new Map<string, symbol>();

export const GltfWrapper: Story<{ skuId: string; storyConfig: ContainerNodeProps; envFiles: string | string[]; background: boolean }> = ({ ...args }) => {
    let assetId;
    if (assetGltfMap.has(args.skuId)) assetId = assetGltfMap.get(args.skuId);
    else {
        assetId = Symbol();
        assetGltfMap.set(args.skuId, assetId);
    }
    const envFile = args.envFiles ? getEnvFileUrl(args.envFiles) : '';
    const url = skuGltfMap.get(args.skuId) as string;
    const config = configAssetModifier(url, args.storyConfig, AssetTypes.Gltf, ObjectTypes.GltfObject, assetId as symbol, { files: envFile, background: args.background });
    return <App config={config} />;
};

export const argTypes = {
    skuId: {
        control: 'radio',
        options: Array.from(skuGltfMap.keys()),
    },
    envFiles: {
        control: 'radio',
        options: ['neutral.hdr', 'photo_studio_01_4k_jun.hdr', 'photo_studio_broadway_hall_1k.hdr', 'AVTR_HDRI_08.hdr', 'AVTR_HDRI_07.hdr', 'AVTR_HDRI_06.hdr'],
    },
    background: {
        control: 'boolean',
    },
};

export const defaultArgs = {
    skuId: 'chair',
    envFiles: 'neutral.hdr',
    background: false,
};
