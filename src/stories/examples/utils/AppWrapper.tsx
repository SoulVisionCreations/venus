import { Story } from '@storybook/react';
import App from '../../../App';
import { AssetTypes, implicitResolution, ObjectTypes } from '../../../types/enums';
import { ContainerNodeProps } from '../../../types/types';
import { configAssetModifier, getImplicitUrl, skuImplicitMap } from './utility';

const assetImplicitMap = new Map<string, symbol>();

export const AppWrapper: Story<{ skuId: string; resolution: implicitResolution; storyConfig: ContainerNodeProps }> = ({ ...args }) => {
    let assetId;
    if (assetImplicitMap.has(args.skuId)) assetId = assetImplicitMap.get(args.skuId);
    else {
        assetId = Symbol();
        assetImplicitMap.set(args.skuId + args.resolution, assetId);
    }
    const url = getImplicitUrl(skuImplicitMap.get(args.skuId) as string, args.resolution);
    const config = configAssetModifier(url, args.storyConfig, AssetTypes.Implicit, ObjectTypes.ImplicitObject, assetId as symbol);
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
};

export const defaultArgs = {
    skuId: 'flower',
    resolution: implicitResolution.low,
};
