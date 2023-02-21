import { Story } from '@storybook/react';
import App from '../App';
import { AssetTypes, implicitResolution, ObjectTypes } from '../types/enums';
import { ContainerNodeProps } from '../types/types';
import { configAssetModifier, getImplicitUrl, skuIds } from './utility';

export const AppWrapper: Story<{ skuId: string; resolution: implicitResolution; storyConfig: ContainerNodeProps }> = ({ ...args }) => {
    const url = getImplicitUrl(args.skuId, args.resolution);
    const assetId = Symbol();
    const config = configAssetModifier(url, args.storyConfig, AssetTypes.Implicit, ObjectTypes.ImplicitObject, assetId);
    return <App config={config} />;
};

export const argTypes = {
    resolution: {
        control: 'radio',
        options: [implicitResolution.high, implicitResolution.low],
    },
    skuId: {
        control: 'radio',
        options: skuIds,
    },
};

export const defaultArgs = {
    skuId: skuIds[0],
    resolution: implicitResolution.high,
};
