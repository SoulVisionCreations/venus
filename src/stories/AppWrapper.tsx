import { Story } from '@storybook/react';
import App from '../App';
import { AssetTypes, implicitResolution, ObjectTypes } from '../types/enums';
import { ContainerNodeProps } from '../types/types';
import { configAssetModifier, getEnvFileUrl, getImplicitUrl, skuMap } from './utility';

const assetMap = new Map<string, symbol>();

export const AppWrapper: Story<{ skuId: string; resolution: implicitResolution; storyConfig: ContainerNodeProps; envFiles: string | string[]; background: boolean }> = ({ ...args }) => {
    let url = '';
    let config;
    let assetId;
    if (assetMap.has(args.skuId)) assetId = assetMap.get(args.skuId);
    else {
        assetId = Symbol();
        assetMap.set(args.skuId, assetId);
    }
    const envFile = args.envFiles ? getEnvFileUrl(args.envFiles) : '';
    if (args.skuId.includes('glb')) {
        url = skuMap.get(args.skuId) as string;
        config = configAssetModifier(url, args.storyConfig, AssetTypes.Gltf, ObjectTypes.GltfObject, assetId as symbol, { files: envFile, background: args.background });
    } else {
        url = getImplicitUrl(skuMap.get(args.skuId) as string, args.resolution);
        config = configAssetModifier(url, args.storyConfig, AssetTypes.Implicit, ObjectTypes.ImplicitObject, assetId as symbol, { files: envFile, background: args.background });
    }
    return <App config={config} />;
};

export const argTypes = {
    resolution: {
        control: 'radio',
        options: [implicitResolution.high, implicitResolution.low],
    },
    skuId: {
        control: 'radio',
        options: Array.from(skuMap.keys()),
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
    skuId: 'flower',
    resolution: implicitResolution.high,
    envFiles: 'neutral.hdr',
    background: false,
};
