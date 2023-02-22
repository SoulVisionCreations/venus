import { Story } from '@storybook/react';
import App from '../App';
import { AssetTypes, implicitResolution, ObjectTypes } from '../types/enums';
import { ContainerNodeProps } from '../types/types';
import { configAssetModifier, getEnvFileUrl, getImplicitUrl, skuImplicitMap } from './utility';

const assetImplicitMap = new Map<string, symbol>();

export const AppWrapper: Story<{ skuId: string; resolution: implicitResolution; storyConfig: ContainerNodeProps; envFiles: string | string[]; background: boolean }> = ({ ...args }) => {
    let assetId;
    if (assetImplicitMap.has(args.skuId)) assetId = assetImplicitMap.get(args.skuId);
    else {
        assetId = Symbol();
        assetImplicitMap.set(args.skuId + args.resolution, assetId);
    }
    const envFile = args.envFiles ? getEnvFileUrl(args.envFiles) : '';
    const url = getImplicitUrl(skuImplicitMap.get(args.skuId) as string, args.resolution);
    const config = configAssetModifier(url, args.storyConfig, AssetTypes.Implicit, ObjectTypes.ImplicitObject, assetId as symbol, { files: envFile, background: args.background });
    return <App config={config} />;
};

export const argTypes = {
    resolution: {
        control: 'radio',
        options: [implicitResolution.high, implicitResolution.low],
    },
    skuId: {
        control: 'radio',
        options: Array.from(skuImplicitMap.keys()),
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
    resolution: implicitResolution.low,
    envFiles: 'neutral.hdr',
    background: false,
};
